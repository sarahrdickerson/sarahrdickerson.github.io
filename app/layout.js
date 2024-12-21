import NavBar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
// import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sarah Dickerson",
  description: "My personal CV and portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        {/* <Navbar /> */}
        <NavBar />
        <main className="flex min-h-screen w-full flex-col items-center justify-center z-30">
          {children}
        </main>
      </body>
    </html>
  );
}
