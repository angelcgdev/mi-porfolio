import { useContext } from "react";
import { WebContext } from "../../context/web-context";
import { NavBar } from "../NavBar/NavBar";
import { LinkButton } from "../LinkButton/index";
import { DarkBtn } from "../DarkButton/DarkButton";
import { useHeader } from "./hooks/useHeader";
const Header = () => {
  
  const {navRef, aboutRef, portfolioRef, contactRef} = useContext(WebContext);
  const {
    handleMenuMobile,
    isOpen,
    closeMenu,
    goBack,
    goTop,
    hideRightOpt
  } = useHeader();

  return (
    <NavBar
      navRef={navRef}
      goHome={!hideRightOpt?goTop:goBack}
      hideRightOpt={hideRightOpt}
      onScroll={closeMenu}
      rightOptions={
          <ul className="flex gap-2">
            <li className={`${hideRightOpt?'md:hidden':'md:flex'} hidden justify-center`}>
              <LinkButton elementRef={aboutRef} href="#about">About</LinkButton>
            </li>
            <li className={`${hideRightOpt?'md:hidden':'md:flex'} hidden justify-center`}>
              <LinkButton elementRef={portfolioRef} href="#portfolio">Portfolio</LinkButton>
            </li>
            <li className={`${hideRightOpt?'md:hidden':'md:flex'} hidden justify-center`}>
              <LinkButton elementRef={contactRef} href="#contact" >Contact</LinkButton>
            </li>
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
        <ul className={`flex flex-col gap-2 sm:hidden p-5`}>
          <li>
            <LinkButton
              className="flex justify-center hover:scale-100 active:scale-100"
              elementRef={aboutRef}
              href="#about"
              afterNavigate={handleMenuMobile}
              >
                About
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="flex justify-center hover:scale-100 active:scale-100"
              elementRef={portfolioRef}
              href="#portfolio"
              afterNavigate={handleMenuMobile}
            >
              Portfolio
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="flex justify-center hover:scale-100 active:scale-100"
              elementRef={contactRef}
              href="#contact"
              afterNavigate={handleMenuMobile}
            >
              Contact
            </LinkButton>
          </li>
        </ul>
      }
      isOpen={isOpen}
    />
  );
};

export default Header;
