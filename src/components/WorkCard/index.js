import React from "react";
import Image from 'next/image'
import Link from "next/link";

const WorkCard = ({ img, name, description, slug }) => {
  return (
    <Link key={name} href={ '/proyect/'+slug }>
      <div
        className="overflow-hidden cursor-pointer rounded-lg p-2 first:ml-0">
        <div
          className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 w-full relative aspect-video"
          >
          <Image  
            alt="project cover"
            className=" object-cover"
            src={img}
            objectFit="cover" 
            layout="fill"
          />
        </div>
        <h1 className="mt-5 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="text-xl text-slate-600">
          {description ? description : "Description"}
        </h2>
      </div>
    </Link>
  );
};

export default WorkCard;
