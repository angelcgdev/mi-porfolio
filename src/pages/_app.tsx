import "../../styles/globals.scss";
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from "../components";
import { PortfolioProvider } from "../context/web-context";
import { ThemeProvider } from "next-themes";
import { Poppins } from '@next/font/google'

const poppins = Poppins({ 
  weight: ['400', "600", '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const App = ({ Component, pageProps }) => {

  return (
    <main className={poppins.className}>
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
    </main>
  );
};

export default App;
