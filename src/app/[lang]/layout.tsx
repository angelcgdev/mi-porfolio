import "./styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { Poppins } from "next/font/google";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";
import { Providers } from "../components/Providers";
import styles from "./layout.module.scss";
import { i18n } from "../../i18n-config";
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const metadata = {
  title: {
    absolute: "Luis Caro",
    template: "%s | Luis Caro",
  },
  description: "my personal web site built by Next.js",
  keywords: [
    "ui",
    "frontend",
    "developer",
    "react",
    "flutter",
    "nextjs",
    "javascript",
    "typescript",
    "programmer",
    "luis caro",
  ],
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${poppins.className} relative`}>
        <Providers>
          <div className={styles["gradient-circle"]}></div>
          <NavBar />
          <main>{children}</main>
          <Footer />
          <div className={styles["gradient-circle-button"]}></div>
        </Providers>
      </body>
    </html>
  );
}
