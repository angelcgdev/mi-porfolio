import React from "react";
import yourData from "../../../yourData";
import { LinkButton } from "../LinkButton";

interface Props{
  className: string;
}

const Socials = ({ className }:Props) => {
  return (
    <div className={`${className} flex flex-wrap gap-2`}>
      {yourData.socials.map((social, index) => (
        <a key={index} href={social.link} role="button" target="button">
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
