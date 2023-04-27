import React from "react";
import Image from "next/legacy/image";
import { SectionTitle } from "../../components/Section/SectionTitle";
import { LeftSide } from "../../components/Section/SectionDescription";
import { loadProyect } from "../../lib/load-proyect";
import Head from "next/head";
import data, { projects } from "../../../yourData";
import { SectionTools } from "../../components/Section/SectionTools";
import { Project } from "../../models/project.model";

interface Props {
  proyect: Project;
}
export default function Proyect(props: Props) {
  let proyect = props.proyect;
  proyect = {
    title: proyect?.title ?? "Project Title",
    description: proyect?.description ?? "Description",
    tools: proyect?.tools ?? [],
    longDescription: proyect?.longDescription ?? "Long Description",
    imageSrc:
      proyect?.imageSrc ??
      "https://images.unsplash.com/photo-1622929611233-bd6d58cbd4dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    slug: proyect?.slug ?? "slug",
  };

  return (
    <>
      <Head>
        <title>{proyect.title} | AngelCgDev</title>
        <meta name="description" content={proyect.description} />
      </Head>
      <section>
        <div className="flex flex-col gap-4" style={{ padding: 0 }}>
          <div className="image-container">
            <Image src={proyect.imageSrc} alt="project cover" layout="fill" />
          </div>
          <div className="px-5">
            <SectionTitle>{proyect.title}</SectionTitle>
            <SectionTools tools={proyect.tools} />
            <LeftSide type="full">{proyect.longDescription}</LeftSide>
          </div>
        </div>
      </section>
    </>
  );
}
export async function getStaticProps({
  params,
}: {
  params: { [key: string]: any };
}) {
  const { slug } = params;
  const proyect = await loadProyect(slug);
  return {
    props: {
      proyect,
    },
  };
}

export async function getStaticPaths() {
  const paths = projects.map((values) => {
    const slug = values.slug;
    return { params: { slug } };
  });
  return {
    paths,
    fallback: true,
  };
}
