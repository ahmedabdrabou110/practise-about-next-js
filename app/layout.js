import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white w-full flex justify-center p-3 text-black">
          <Link style={{ margin: "10px" }} href="/">
            Home{" "}
          </Link>
          <Link style={{ margin: "10px" }} href="/articles">
            Articles{" "}
          </Link>
          <Link style={{ margin: "10px" }} href="/posts">
            Posts{" "}
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
