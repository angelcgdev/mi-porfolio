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
  return (
    <ul id={id} className={`${styles["list-menu"]} ${className}`}>
      {menuOptions.map(({ name, href }, i) => (
        <li key={`opt-${id ?? ""}-${i}`}>
          <LinkButton
            href={href}
            className={`${styles["list-menu-item"]} `}
            afterNavigate={afterNavigate}
          >
            {name}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
};
