import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Not Found Page",
  description: "not found page",
};
export default function NotFound() {
  return (
    <section className="flex h-screen  flex-col items-center justify-center">
      <h1>404 - Page Not Found</h1>
      {/* <Link  href="/">Go back home</Link> */}
      <Link href="/" role="button" target="button">
        test
      </Link>
    </section>
  );
}
