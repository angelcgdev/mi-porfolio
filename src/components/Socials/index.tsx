import React from "react";
import yourData from "../../data/local/yourData";
import Link from "next/link";

interface Props {
  className: string;
}

const Socials = ({ className }: Props) => {
  return (
    <div className={`${className} flex flex-wrap gap-2`}>
      {yourData.socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className="button"
          role="button"
          target="button"
        >
          {social.title}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
