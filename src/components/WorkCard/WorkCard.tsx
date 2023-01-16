import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

interface Props{
  img: string,
  name: string,
  description: string,
  slug: string
}

const WorkCard = ({ img, name, description, slug }:Props) => {
  return (
    <Link key={name} href={ '/proyect/'+slug } role="alert" legacyBehavior>
      <div
        className="overflow-hidden cursor-pointer select-none rounded-lg transition-all ease-out duration-300 hover:scale-95 active:scale-95 border-slate-100 dark:border-gray-800 shadow-sm" style={{borderWidth:1}} >
        <div
          className="overflow-hidden w-full relative aspect-video"
          >
          <Image
            alt="project cover"
            className="object-cover transition-all duration-300 bg-slate-100 dark:bg-slate-900"
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