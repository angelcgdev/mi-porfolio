import { useContext } from "react";
import { WebContext } from "../../context/web-context";
import { NavBar } from "../NavBar/NavBar";
import { useHeader } from "./hooks/useHeader";
const Header = () => {
  const { navRef } = useContext(WebContext);
  const { goBack, goTop, isHome } = useHeader();
  return (
    <NavBar ref={navRef} goHome={isHome ? goTop : goBack} isHome={isHome} />
  );
};

export default Header;
