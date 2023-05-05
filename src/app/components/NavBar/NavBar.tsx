"use client";
import styles from "./NavBar.module.scss";
import { useNavBar } from "./Hooks/useNavBar";
import Link from "next/link";
import { MenuOptions } from "./components/MenuOptions";
import { MobileMainOptions } from "./components/MobileMainOptions";

export const NAVBARHEIGHT = 64;

interface Props {
  className?: string;
}

export const NavBar = ({ className }: Props) => {
  const { menu, setMenu, goBack, goTop, isHome } = useNavBar();

  return (
    <nav id="nav" className={` ${styles.nav} ${className ?? ""}`}>
      <div className="flex h-10 items-center justify-between">
        {isHome ? (
          <button onClick={goTop} className="!scale-100 !bg-transparent p-0">
            <h1 className="cursor-pointer select-none font-bold">
              LuisCaroDev
            </h1>
          </button>
        ) : (
          <Link href="/#" onClick={goBack}>
            <h1 className="cursor-pointer select-none font-bold">
              LuisCaroDev
            </h1>
          </Link>
        )}
        {isHome ? (
          <ul className="flex flex-row gap-2">
            <li>
              <MenuOptions id="menu" className="!hidden md:!flex" />
            </li>
            <li>
              <MobileMainOptions open={menu} onChange={() => setMenu(!menu)} />
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
};
