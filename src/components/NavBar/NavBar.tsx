/* eslint-disable react/display-name */
import { MutableRefObject, ReactNode, forwardRef } from "react";
import styles from "./NavBar.module.scss";
import { useNavBar } from "./Hooks/useNavBar";

interface Props {
  goHome: () => void;
  mobileMenu: ReactNode;
  rightOptions: ReactNode;
  isOpen?: boolean;
  className?: string;
  hideRightOpt: boolean;
  onScroll?: Function;
}

export const NavBar = forwardRef<HTMLElement, Props>(
  (
    {
      goHome,
      mobileMenu,
      rightOptions,
      isOpen = false,
      className,
      hideRightOpt,
      onScroll,
    },
    ref
  ) => {
    const { isOnTop } = useNavBar({ isOpen, onScroll });

    return (
      <nav
        className={`bg-white dark:bg-black ${
          isOnTop || isOpen ? "dark:shadow-slate-900" : "shadow-transparent"
        } ${styles.nav} ${!!className ? className : ""}`}
        ref={ref}
      >
        <div className="flex h-10 items-center justify-between">
          <h1 className="cursor-pointer select-none font-bold" onClick={goHome}>
            LuisCaroDev
          </h1>
          <div>{rightOptions}</div>
        </div>
        <div
          id="mobile-menu"
          className={`${
            hideRightOpt ? "hidden" : ""
          } overflow-hidden transition-all duration-300 ${
            !isOpen ? "max-h-0" : "max-h-96"
          }`}
        >
          {mobileMenu}
        </div>
      </nav>
    );
  }
);
