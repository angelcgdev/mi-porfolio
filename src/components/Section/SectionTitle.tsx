import React, { ReactNode } from "react";

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-bold select-none text-2xl sm:text-3xl md:text-4xl">
      {children}
    </h2>
  );
};
