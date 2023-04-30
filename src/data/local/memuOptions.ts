import { typeSection } from "../../models/section.model";

interface Path {
  href: typeSection;
  name: string;
}

export const menuOptions: Path[] = [
  { href: "#about", name: "About" },
  { href: "#experience", name: "Experience" },
  { href: "#portfolio", name: "Portfolio" },
  { href: "#contact", name: "Contact" },
];
