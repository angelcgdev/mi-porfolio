import React from "react";
import Image from "next/image";
import { SectionTitle } from "../../../components/Section/SectionTitle";
import { LeftSide } from "../../../components/Section/SectionDescription";
import { loadProyect } from "../../../../lib/load-proyect";
import { SectionTools } from "../../../components/Section/SectionTools";
import { notFound } from "next/navigation";
import type en from "../../../../dictionaries/en.json";

interface Props {
  params: { slug: string; lang: typeof en };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = await loadProyect(params.slug);
  if (!project) {
    return;
  }
  return {
    title: project.title,
  };
}

async function getProject(params: Props["params"]) {
  const project = await loadProyect(params.slug);
  return project;
}
export default async function Page({ params }: Props) {
  console.log({ params });
  let project = await getProject(params);
  if (!project) {
    notFound();
    // return <h1>{JSON.stringify(project)}</h1>;
  }

  return (
    <>
      <section>
        <div className="flex flex-col gap-4 !p-0">
          <figure className="relative aspect-video">
            <Image
              src={project!.imageSrc}
              className="  object-cover"
              alt="project cover"
              fill={true}
            />
          </figure>
          <div className="px-5">
            <SectionTitle>{project!.title}</SectionTitle>
            <SectionTools tools={project!.tools} />
            <LeftSide type="full">
              <p className="text-body">{project!.longDescription}</p>
            </LeftSide>
          </div>
        </div>
      </section>
    </>
  );
}
