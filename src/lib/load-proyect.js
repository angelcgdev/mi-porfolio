import data from "../../yourData";

export async function loadProyect(slug) {
    // Call an external API endpoint to get posts
    const even = (element) => element.slug === slug;
    const proyect = data.projects.find(even);
  
    return proyect
  }