import "../../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { Poppins } from "next/font/google";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Providers } from "./components/Providers";
import styles from "./layout.module.scss";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
