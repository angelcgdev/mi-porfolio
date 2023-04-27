import { useContext } from "react";
import { WebContext } from "../../context/web-context";
import { NavBar } from "../NavBar/NavBar";
import { LinkButton } from "../LinkButton/index";
import { DarkBtn } from "../DarkButton/DarkButton";
import { useHeader } from "./hooks/useHeader";
import { typeSection } from "../../models/section.model";
import { menuOptions } from "../../datSource/memuOptions";
const Header = () => {
  const { navRef, aboutRef, experienceRef, portfolioRef, contactRef } =
    useContext(WebContext);
  const { handleMenuMobile, isOpen, closeMenu, goBack, goTop, hideRightOpt } =
    useHeader();

  const getRefByHref = (href: typeSection) => {
    switch (href) {
      case "#about":
        return aboutRef;
      case "#experience":
        return experienceRef;
      case "#portfolio":
        return portfolioRef;
      case "#contact":
        return contactRef;
    }
  };

  return (
    <NavBar
      ref={navRef}
      goHome={!hideRightOpt ? goTop : goBack}
      hideRightOpt={hideRightOpt}
      onScroll={closeMenu}
      rightOptions={
        <ul className="flex gap-2">
          {menuOptions.map(({ name, href }, i) => (
            <li
              key={`opt-${i}`}
              className={`${
                hideRightOpt ? "md:hidden" : "md:flex"
              } hidden justify-center`}
            >
              <LinkButton href={href}>{name}</LinkButton>
            </li>
          ))}
          <li className="flex justify-center">
            <DarkBtn />
          </li>
          <li
            className={`${
              hideRightOpt ? "hidden" : "flex"
            } justify-center md:hidden`}
          >
            <button
              role="menu"
              onClick={handleMenuMobile}
              aria-label="menu bar button"
            >
              <div id="toogle" className={isOpen ? "active" : ""}></div>
            </button>
          </li>
        </ul>
      }
      mobileMenu={
        <ul className={`flex flex-col gap-2 p-5 md:hidden`}>
          {menuOptions.map(({ href, name }, i) => (
            <li key={`mobile-opt-${i}`}>
              <LinkButton
                className="flex justify-center active:scale-100 hover:scale-100"
                href={href}
                afterNavigate={handleMenuMobile}
              >
                {name}
              </LinkButton>
            </li>
          ))}
        </ul>
      }
      isOpen={isOpen}
    />
  );
};

export default Header;
