"use client";
import { ToastContainer } from "react-toastify";
import { Locale } from "../../i18n-config";
import {
  About,
  ContactSection,
  Experience,
  PortfolioSection,
  Welcome,
} from "../components/sections";
import { getDictionary } from "../get-dictionary";
export interface InternationlizationProps {
  params: { lang: Locale };
}
export default async function Page({
  params: { lang },
}: InternationlizationProps) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        closeOnClick={false}
      />
      <Welcome dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Experience dictionary={dictionary} />
      <PortfolioSection dictionary={dictionary} />
      <ContactSection dictionary={dictionary} />
    </>
  );
}
