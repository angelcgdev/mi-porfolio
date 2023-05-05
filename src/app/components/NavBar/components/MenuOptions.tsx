import { menuOptions } from "../../../../data/local/memuOptions";
import { LinkButton } from "../../LinkButton";
import styles from "../NavBar.module.scss";
export const MenuOptions = ({
  className,
  id,
  afterNavigate,
}: {
  className?: string;
  id?: string;
  afterNavigate?: () => void;
}) => {
<<<<<<< HEAD
  const [dl, ...respt] = menuOptions;
  return (
    <ul id={id} className={`${styles["list-menu"]} ${className}`}>
      {respt.map(({ name, href }, i) => (
        <li key={`opt-${id ?? ""}-${i}`}>
=======
  const [_, ...menu] = menuOptions;
  return (
    <ul id={id} className={`${styles["list-menu"]} ${className}`}>
      {menu.map(({ name, href }, i) => (
        <li key={`opt-${id ?? ""}-${i}`} className="px-1">
>>>>>>> b4ec0c146c3b1a4070a9fda728e23cafdddae6a5
          <LinkButton
            href={href}
            className={`${styles["list-menu-item"]}`}
            afterNavigate={afterNavigate}
          >
            {name}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
};
