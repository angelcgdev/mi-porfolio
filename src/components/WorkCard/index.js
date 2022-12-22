import React from "react";
import Image from 'next/image'
import Link from "next/link";

const WorkCard = ({ img, name, description, slug }) => {
  return (
    <Link key={name} href={ '/proyect/'+slug }>
      <div
        className="overflow-hidden cursor-pointer select-none rounded-lg first:ml-0 transition-all ease-out duration-300 hover:scale-95 active:scale-95 border-gray-200 dark:border-gray-800" style={{borderWidth:1}} >
        <div
          className="overflow-hidden w-full relative aspect-video"
          >
          <Image
            alt="project cover"
            className="object-cover"
            src={img}
            objectFit="cover" 
            layout="fill"
          />
        </div>
        <div className="p-4">
          <h1
            className="text-2xl font-medium"
          >
            {name ? name : "Project Name"}
          </h1>
          <h2 className="text-lg text-slate-600 dark:text-slate-300">
            {description ? description : "Description"}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
