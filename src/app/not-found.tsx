import React from "react";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <title>Not Found Page | AngelCgDev</title>
      <meta name="description" content="not found page" />
      <section className="flex h-screen  flex-col items-center justify-center">
        <h1>404 - Page Not Found</h1>
        {/* <Link  href="/">Go back home</Link> */}
        <Link href="/" role="button" target="button">
          test
        </Link>
      </section>
    </>
  );
}
