"use client";
import { useContext, useState } from "react";
import { form } from "../models/form.model";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { formErrors } from "../models/formError.model";

const initialValues: form = {
  name: "",
  email: "",
  subjet: "",
  message: "",
};

const validate = (values: form) => {
  const errors: formErrors = {};
  const { name, subjet, email, message } = values;
  if (!name.trim()) {
    errors.name = "Please add your name";
  }
  if (!subjet.trim()) {
    errors.subjet = "Subject is required";
  }

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }

  if (!message.trim()) {
    errors.message = "Message is required";
  }
  return errors;
};

export function useContact() {
  const [sended, setSended] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (values: form) => {
    setIsSending(true);
    try {
      const request = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const statusCode = request.status;
      if (statusCode === 200) {
        formik.resetForm();
        setSended(true);
        toast.success("Message sented!");
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      setIsSending(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return { formik, isSending, sended };
}
