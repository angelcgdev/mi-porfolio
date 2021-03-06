import data from "../../../../yourData";

export default function getProyectBySlug(req, res) {
    const { slug } = req.query;
    const proyect = data.projects.find(even);
    const even = (element) => element.slug === slug;
    if(proyect){
      return res.status(200).json({ ...proyect })
    }
    return res.status(500).json({ error: 'can´t find this proyect' })
  }
  