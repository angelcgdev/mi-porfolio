import { NextApiRequest, NextApiResponse } from "next";
import { projects } from "../../../../yourData";
import { Project } from "../../../models/project.model";

export default function getProyectBySlug(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { slug } = req.query;
  const even = (element: Project) => element.slug === slug;
  const proyect: Project | undefined = projects.find(even);
  if (!!proyect) {
    return res.status(200).json({ ...proyect });
  }
  return res.status(500).json({ error: "can´t find this proyect" });
}
