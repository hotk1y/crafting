"use client"
import Link from "next/link"
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion"
import { links, socials } from "@/lib/db";
import { topVariants, centerVariants, bottomVariants, listVariants, listItemVariants } from "@/lib/motion"

export default function Navbar() {
   const [open, setOpen] = useState(false)
   return (
      <header className="h-24">
         <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl z-50">
            <nav className="hidden md:flex gap-4 w-1/3">
               {links.map((link) => (
                  <NavLink link={link} key={link.title} />
               ))}
            </nav>
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
               <Link href={"/"} className="bg-black text-sm rounded-md p-1 font-semibold flex items-center justify-center">
                  <span className="text-white mr-1">cloud</span>
                  <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">trend</span>
               </Link>
            </div>
            <div className="hidden md:flex md:justify-end gap-4 w-1/3">
               {socials.map((social) => (
                  <Link key={social.alt} href={social.url}>
                     <Image src={social.img} alt={social.alt} width={24} height={24} />
                  </Link>
               ))}
            </div>
            <div className="md:hidden">
               <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen((prev) => !prev)}>
                  <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                  <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
                  <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
               </button>
               {open && (
                  <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                     {links.map((link) => (
                        <motion.div variants={listItemVariants} key={link.title}>
                           <Link href={link.url}>{link.title}</Link>
                        </motion.div>
                     ))}
                  </motion.div>
               )}
            </div>
         </div>
      </header>
   )
}
