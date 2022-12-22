import "../../styles/globals.scss";
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from "../components";
import { useRef } from "react";
import { WebContext } from "../context/web-context";
import { ThemeProvider } from "next-themes";


export const ContextStore = (props) => {
  const navRef = useRef();
  const mainRef = useRef();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const value = { navRef, mainRef, aboutRef, portfolioRef, contactRef};
  return <WebContext.Provider value={value}>{props.children}</WebContext.Provider>;
};

const App = ({ Component, pageProps }) => {

  return (
    <ThemeProvider attribute="class">
      <ContextStore>
          <div className="gradient-circle"></div>
          <Header
          />
            <Component {...pageProps} />
          <Footer/>
          <div className="gradient-circle-button"></div>
      </ContextStore>
    </ThemeProvider>
  );
};

export default App;
