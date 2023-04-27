import data from "../../yourData";

export async function loadProyect(slug: string) {
  // Call an external API endpoint to get posts
  const even = (element: typeof data.projects[0]) => element.slug === slug;
  const proyect = data.projects.find(even);

  return proyect;
}
