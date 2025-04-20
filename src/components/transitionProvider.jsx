"use client"
import Navbar from "./navbar"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function TransitionProvider({ children }) {
   const pathName = usePathname()

   return (
      <AnimatePresence mode="wait">
         <div key={pathName} className="w-screen h-screens bg-gradient-to-b from-blue-100 to-red-100">
            <motion.div className="w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
               animate={{ height: "0vh" }}
               exit={{ height: "140vh" }}
               transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div className="fixed m-auto top-0 left-0 bottom-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
               initial={{ opacity: 1 }}
               animate={{ opacity: 0 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
            >
               {/* {pathName === "/" ? "HOME" : pathName.toUpperCase().substring(1)} */}
               {pathName.toUpperCase().substring(1)}
            </motion.div>
            <motion.div className="w-screen h-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
               initial={{ height: "140vh" }}
               animate={{ height: "0vh", transition: { delay: 0.5 } }}
            />
            <Navbar />
            <main className="h-[calc(100vh-6rem)]">
               {children}
            </main>
         </div>
      </AnimatePresence >
   )
}
