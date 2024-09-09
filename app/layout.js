import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/section/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LTIDF",
  description: "Larger Than I Development Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>

      </body>
    </html>
  );
}
