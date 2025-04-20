"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import { home } from "@/lib/db";

export default function Home() {
   return (
      <motion.section className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
         <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className="h-1/2 lg:h-full lg:w-1/2 relative">
               <Image src={"/hero.png"} alt="My Image" fill className="object-contain" />
            </div>
            <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
               <h1 className="text-4xl md:text-6xl font-bold">{home.title}</h1>
               <p className="md:text-xl">{home.text}</p>
               <div className="w-full flex gap-4">
                  <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">{home.btn1}</button>
                  <button className="p-4 rounded-lg ring-1 ring-black">{home.btn2}</button>
               </div>
            </div>
         </div>
      </motion.section>
   );
}
