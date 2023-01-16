import "../../styles/globals.scss";
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from "../components";
import { PortfolioProvider } from "../context/web-context";
import { ThemeProvider } from "next-themes";


const App = ({ Component, pageProps }) => {

  return (
    <ThemeProvider attribute="class">
      <PortfolioProvider>
          <div className="gradient-circle"></div>
          <Header
          />
            <Component {...pageProps} />
          <Footer/>
          <div className="gradient-circle-button"></div>
      </PortfolioProvider>
    </ThemeProvider>
  );
};

export default App;
