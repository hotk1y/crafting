"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function NavLink({ link }) {
   const pathName = usePathname()
   return (
      <Link className={clsx("rounded p-1 hover:bg-slate-700 hover:text-white duration-300", pathName === link.url && "bg-black text-white")} href={link.url}>{link.title}</Link>
   )
}
