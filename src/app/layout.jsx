import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "My Portfolio",
   description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={clsx(inter.className, "")}>
            <TransitionProvider >
               {children}
            </TransitionProvider>
         </body>
      </html>
   );
}
