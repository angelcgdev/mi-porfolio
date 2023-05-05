import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Not Found Project",
  description: "not found page",
};
export default function NotFound() {
  return (
    <section className="flex h-[80vh] ">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center">404 - Page Not Found</h1>
        <Link
          className="button primary"
          href="/"
          role="button"
          target="_parent"
        >
          go to home
        </Link>
      </div>
    </section>
  );
}
