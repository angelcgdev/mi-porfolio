import { useContext } from "react";
import { WebContext } from "../../context/web-context";
import { NavBar } from "../NavBar/NavBar";
import { LinkButton } from "../LinkButton/index";
import { DarkBtn } from "../DarkButton/DarkButton";
import { useHeader } from "./hooks/useHeader";
const Header = () => {
  
  const {navRef, aboutRef, experienceRef, portfolioRef, contactRef} = useContext(WebContext);
  const {
    handleMenuMobile,
    isOpen,
    closeMenu,
    goBack,
    goTop,
    hideRightOpt
  } = useHeader();

  const options = [
    {
      id: 1,
      href: "#about",
      name: "About",
      ref: aboutRef
    },
    {
      id: 2,
      href: "#experience",
      name: "Experience",
      ref: experienceRef
    },
    {
      id: 3,
      href: "#portfolio",
      name: "Portfolio",
      ref: portfolioRef
    },
    {
      id: 4,
      href: "#contact",
      name: "Contact",
      ref: contactRef
    },
  ]

  return (
    <NavBar
      navRef={navRef}
      goHome={!hideRightOpt?goTop:goBack}
      hideRightOpt={hideRightOpt}
      onScroll={closeMenu}
      rightOptions={
          <ul className="flex gap-2">
            {
              options.map(({id, name, ref, href})=>(
                <li key={`opt-${id}`} className={`${hideRightOpt?'md:hidden':'md:flex'} hidden justify-center`}>
                  <LinkButton elementRef={ref} href={href}>{name}</LinkButton>
                </li>
              ))
            }
            <li className="flex justify-center">
              <DarkBtn/>
            </li>
            <li className={`${hideRightOpt?'hidden':'flex'} md:hidden justify-center`}>
              <button role="menu" onClick={handleMenuMobile} aria-label="menu bar button">
                <div id="toogle" className={isOpen?"active":""}></div>
              </button>
            </li>
          </ul>
      }
      mobileMenu={
        <ul className={`flex flex-col gap-2 md:hidden p-5`}>
          {
            options.map(({id, href, name, ref})=>(
              <li key={`mobile-opt-${id}`}>
                <LinkButton
                  className="flex justify-center hover:scale-100 active:scale-100"
                  elementRef={ref}
                  href={href}
                  afterNavigate={handleMenuMobile}
                  >
                    {name}
                </LinkButton>
              </li>
            ))
          }
        </ul>
      }
      isOpen={isOpen}
    />
  );
};

export default Header;
