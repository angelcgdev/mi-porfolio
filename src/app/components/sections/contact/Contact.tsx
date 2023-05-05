import data from "../../../../data/local/yourData";
import { AsyncButton } from "../../AsynButton/AsyncButton";
import { InputGroup } from "../../InputGroup";
import { SectionTitle } from "../../Section/SectionTitle";
import { SectionWrapper } from "../../Section/SectionWrapper";
import Socials from "../../Socials";
import { useContact } from "./hooks/useContact";
import { CommonProps } from "../Welcome";

export const ContactSection = ({ dictionary }: CommonProps) => {
  const { formik, isSending, sended } = useContact();
  return (
    <SectionWrapper id="#contact">
      <SectionTitle>{dictionary.contact.title}</SectionTitle>
      <p className="description py-5 text-body">
        {dictionary.contact.description}
      </p>
      <div className="grid grid-cols-1 gap-4 md:mt-5 md:grid-cols-2">
        <form
          className="flex flex-col gap-4"
          onSubmit={formik.handleSubmit}
          noValidate={true}
        >
          <InputGroup
            type="text"
            label="Name:"
            error={formik.errors.name}
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <InputGroup
            type="text"
            label="Subject:"
            error={formik.errors.subjet}
            id="subjet"
            onChange={formik.handleChange}
            value={formik.values.subjet}
          />
          <InputGroup
            type="email"
            label="Email:"
            id="email"
            error={formik.errors.email}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <InputGroup
            label="Message:"
            id="message"
            imputClass="resize-none"
            error={formik.errors.message}
            onChange={formik.handleChange}
            value={formik.values.message}
            isTextArea
            autoComplete="off"
          />
          <AsyncButton
            className="button primary w-min"
            disabled={sended}
            type="submit"
            isLoading={isSending}
          >
            Send
          </AsyncButton>
        </form>
        <div className="grid grid-cols-1 place-content-center gap-4">
          <Socials className="md:justify-center" />
        </div>
      </div>
    </SectionWrapper>
  );
};
