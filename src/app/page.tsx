"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import {
  About,
  ContactSection,
  Experience,
  PortfolioSection,
  Welcome,
} from "./components/sections";

export default function Page() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        closeOnClick={false}
      />
      <Welcome />
      <About />
      <Experience />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
