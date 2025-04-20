"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion"
import { useRef } from "react";
import { PiSignatureThin } from "react-icons/pi";
import { PiMouseSimpleThin } from "react-icons/pi";

const skills = [
   { value: "JavaScript" },
   { value: "TypeScript" },
   { value: "Next JS" },
   { value: "SCSS" },
   { value: "Tailwind CSS" },
   { value: "MongoDB" },
   { value: "Webpack" },
   { value: "Framer Motion" },
   { value: "Node JS" },
]

export default function AboutPage() {
   const containerRef = useRef()
   const { scrollYProgress } = useScroll({ container: containerRef })
   const skillRef = useRef()
   const experienceRef = useRef()
   // const isSkillRefInView = useInView(skillRef, { once: true })
   const isSkillRefInView = useInView(skillRef, { margin: "-100px" })
   // const isSkillRefInView = useInView(skillRef, { once: true })
   const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" })

   return (
      <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
         <div className="h-full overflow-auto lg:flex" ref={containerRef}>
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
               <div className="flex flex-col gap-12 justify-center">
                  <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                  <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perspiciatis doloremque est culpa. Ullam, rerum eligendi quam fuga minus ex reiciendis nobis praesentium optio necessitatibus deserunt doloribus odit at officia.</p>
                  <span className="italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                  <div className="self-end">
                     <PiSignatureThin size={64} />
                  </div>
                  <motion.div initial={{ opacity: 0.2, y: 0 }} animate={{ opacity: 1, y: "10px" }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="">
                     <PiMouseSimpleThin size={50} />
                  </motion.div>
               </div>
               <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                  <motion.h1 initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">SKILLS</motion.h1>
                  <motion.div initial={{ x: "-100vw" }} animate={isSkillRefInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className="flex gap-4 flex-wrap">
                     {skills.map((skill, index) => (
                        <div key={index} className="rounded p-2 text-sm cursor-pointer bg-black text-white 
                     hover:bg-white hover:text-black duration-300">{skill.value}</div>
                     ))}
                  </motion.div>
                  <motion.div initial={{ opacity: 0.2, y: 0 }} animate={{ opacity: 1, y: "10px" }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="">
                     <PiMouseSimpleThin size={50} />
                  </motion.div>
               </div>
               <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                  <motion.h1 initial={{ x: "-400px" }} animate={isExperienceRefInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">EXPERIENCE</motion.h1>
                  <motion.div initial={{ x: "-100vw" }} animate={isExperienceRefInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className="list">
                     <div className="flex justify-between h-48">
                        <div className="w-1/3">
                           <h2 className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</h2>
                           <p className="p-3 text-sm italic">My current employment. Way better than the position before!</p>
                           <p className="p-3 text-red-400 text-sm font-semibold">2024 - Present</p>
                           <p className="p-1 rounded bg-white text-sm font-semibold w-fit">Company</p>
                        </div>
                        <div className="w-1/6">
                           <div className="w-1 h-full bg-gray-600 rounded relative">
                              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                           </div>
                        </div>
                        <div className="w-1/3">
                           <h2 className="">Senior JavaScript Engineer</h2>
                           <p>My current employment. Way better than the position before!</p>
                           <p>2024 - Present</p>
                           <p>Company</p>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
            <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
               <Brain scrollYProgress={scrollYProgress} />
            </div>
         </div>
      </motion.div>
   )
}
