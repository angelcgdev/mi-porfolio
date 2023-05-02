import React from "react";
import styles from "./MenuButton.module.scss";
interface Props {
  onClick: () => void;
  open: boolean;
}
export const MenuButton = ({ onClick, open }: Props) => {
  return (
    <button role="menu" onClick={onClick} aria-label="menu bar button">
      <div
        id="toogle"
        className={`${styles["toogle"]} ${open ? styles["active"] : ""}`}
      ></div>
    </button>
  );
};
