import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "./ProjectCard.module.scss";

interface Props {
  img: string;
  name: string;
  description: string;
  slug: string;
}

const ProjectCard = ({ img, name, description, slug }: Props) => {
  return (
    <Link
      key={name}
      href={"/project/" + slug}
      role="link"
      aria-label={`Project ${name}`}
    >
      <article role="article" className={styles.wrapper}>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            alt="project cover"
            className="bg-slate-100 object-cover transition-all duration-300 dark:bg-slate-900"
            src={img}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium  md:text-xl xl:text-2xl">
            {name ? name : "Project Name"}
          </h3>
          <p className="text-body text-slate-600 dark:text-slate-300">
            {description ? description : "Description"}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
