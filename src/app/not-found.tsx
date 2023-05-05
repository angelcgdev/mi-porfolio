import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Not Found",
  description: "not found page",
};
export default function NotFound() {
  return (
    <section className="flex h-screen">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>404 - Page Not Found</h1>
        <Link href="/" role="button" target="button">
          go home
        </Link>
      </div>
    </section>
  );
}
