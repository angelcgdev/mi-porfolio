import React from "react";
import Image from "next/image";
import { SectionTitle } from "../../components/Section/SectionTitle";
import { LeftSide } from "../../components/Section/SectionDescription";
import { loadProyect } from "../../../lib/load-proyect";
import { SectionTools } from "../../components/Section/SectionTools";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = await loadProyect(params.slug);
  if (!project) {
    notFound();
  }
  return {
    title: project.title,
  };
}

async function getProject(params: string) {
  const project = await loadProyect(params);
  return project;
}
export default async function Page({ params }: Props) {
  let project = await getProject(params.slug);
  if (!project) {
    notFound();
  }

  return (
    <>
      <section>
        <div className="flex flex-col gap-4 !p-0">
          <Image
            src={project!.imageSrc}
            className="!relative aspect-video object-cover"
            alt="project cover"
            fill={true}
          />
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
