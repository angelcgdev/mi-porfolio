import "../../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Header } from "../components";
import { PortfolioProvider } from "../context/web-context";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

interface AppProps {
  Component: () => JSX.Element;
}

const App = ({ Component }: AppProps) => {
  return (
    <main className={poppins.className}>
      <ThemeProvider attribute="class">
        <PortfolioProvider>
          <div className="gradient-circle"></div>
          <Header />
          <Component />
          <Footer />
          <div className="gradient-circle-button"></div>
        </PortfolioProvider>
      </ThemeProvider>
    </main>
  );
};

export default App;
