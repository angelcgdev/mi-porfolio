/* eslint-disable react/display-name */
import { forwardRef } from "react";
import styles from "./NavBar.module.scss";
import { useNavBar } from "./Hooks/useNavBar";
import { DarkBtn } from "../DarkButton/DarkButton";
import { menuOptions } from "../../data/local/memuOptions";
import { LinkButton } from "../LinkButton";

interface Props {
  goHome: () => void;
  isHome: boolean;
  className?: string;
}

const MobileMainOptions = ({
  open,
  onChange,
}: {
  open: boolean;
  onChange: () => void;
}) => {
  return (
    <ul className="flex flex-row gap-2">
      <li>
        <DarkBtn />
      </li>
      <li className="md:hidden">
        <button role="menu" onClick={onChange} aria-label="menu bar button">
          <div id="toogle" className={open ? "active" : ""}></div>
        </button>
      </li>
    </ul>
  );
};

const MenuOptions = ({
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
export const NAVBARHEIGHT = 64;
export const NavBar = forwardRef<HTMLElement, Props>(
  ({ goHome, className, isHome }, ref) => {
    const { menu, setMenu } = useNavBar();

    return (
      <nav
        className={`bg-white dark:bg-black ${styles.nav} ${className ?? ""}`}
        ref={ref}
      >
        <div className="flex h-10 items-center justify-between">
          <h1 className="cursor-pointer select-none font-bold" onClick={goHome}>
            LuisCaroDev
          </h1>
          {isHome ? (
            <ul className="flex flex-row gap-2">
              <li>
                <MenuOptions id="menu" className="!hidden md:!flex" />
              </li>
              <li>
                <MobileMainOptions
                  open={menu}
                  onChange={() => setMenu(!menu)}
                />
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
        {isHome ? (
          <MenuOptions
            id="mobile-menu"
            className={`transition-all duration-300 md:!hidden ${
              menu ? styles["open"] : ""
            }`}
            afterNavigate={() => setMenu(false)}
          />
        ) : (
          <></>
        )}
      </nav>
    );
  }
);
