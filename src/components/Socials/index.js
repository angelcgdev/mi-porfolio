import React from "react";
import Button from "../Button";

import yourData from "../../../yourData";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap gap-2`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
