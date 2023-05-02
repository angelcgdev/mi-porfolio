import React from "react";
import { Project } from "../../../models/project.model";

export const SectionTools = ({ tools }: { tools: Project["tools"] }) => {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tools.map((tool) => (
        <div
          key={tool}
          className="cursor-pointer rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-900"
        >
          {tool}
        </div>
      ))}
    </div>
  );
};
