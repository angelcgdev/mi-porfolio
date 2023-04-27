import React, { useContext } from "react";
import data from "../../yourData";
import { Socials } from "../components";
import { WebContext } from "../context/web-context";
import { NextSection } from "../components/LinkButton/NextSection";
import Link from "next/link";

export function Welcome() {
  const { mainRef } = useContext(WebContext);
  return (
    <section
      ref={mainRef}
      id="#main"
      className=" flex h-[calc(100dvh-64px)] max-h-[800px] min-h-[500px] flex-col items-center gap-4 pt-24"
    >
      <div className="relative flex h-full flex-col justify-center gap-4">
        <div className="my-auto flex flex-col gap-1">
          <h1 className="text-4xl font-bold uppercase text-primary md:text-6xl">
            {data.name}
          </h1>
          <h2 className="description text-body">{data.role}</h2>
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-primary"
              fill="currentColor"
              height="800px"
              width="800px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 297 297"
            >
              <path
                d="M148.5,0C85.646,0,34.511,51.136,34.511,113.989c0,25.11,8.008,48.926,23.157,68.873
              c13.604,17.914,32.512,31.588,53.658,38.904l27.464,68.659c1.589,3.971,5.434,6.574,9.71,6.574c4.276,0,8.121-2.603,9.71-6.574
              l27.464-68.659c21.146-7.316,40.054-20.99,53.658-38.904c15.149-19.947,23.157-43.763,23.157-68.873
              C262.489,51.136,211.354,0,148.5,0z M148.5,72.682c22.777,0,41.308,18.53,41.308,41.308c0,22.777-18.53,41.309-41.308,41.309
              c-22.777,0-41.308-18.531-41.308-41.309C107.192,91.212,125.723,72.682,148.5,72.682z"
              />
            </svg>
            <h2 className="description text-body">{data.location}</h2>
          </div>
          <Socials className="mt-2" />
          <Link
            href="/resume"
            role="button"
            aria-label="go to my resume"
            className="button primary w-min"
          >
            Resume
          </Link>
        </div>
        <NextSection
          className="sticky bottom-0 z-[5] mt-auto self-center"
          href="#about"
        />
      </div>
    </section>
  );
}
