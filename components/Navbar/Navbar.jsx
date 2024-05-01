'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileNav from "./MobileNav"
import { navbarLinks } from "@/lib/constants"
import { motion } from "framer-motion"


export default function Navbar() {

  const pathname = usePathname()
  return (
    <header>
      <div className="flex items-center justify-between cxl:px-[10rem] px-4 py-4">

        <Link href="/" className="font-semibold text-3xl">HireGo</Link>

        <div className="flex flex-1 items-center justify-between">
          <nav aria-label="Global" className="hidden lg:block md:ml-12">
            <ul className="flex items-center gap-6 text-md font-medium">

              {
                navbarLinks.map((item) => {
                  const isActive = (pathname.includes(item.url) && item.url.length > 1) || (pathname === item.url)
                  return <li key={item.label}>
                    <Link href={item.url} className={`${isActive ? 'text-red-500' : 'text-black'}
                    flex items-center justify-start gap-4 bg-transparent  hover:-translate-y-1 transform transition-all duration-300 ease-in-out rounded-lg
                    `}>
                      <p className={`${isActive ? 'base-bold' : 'base-medium'}`}>{item.label}</p>
                    </Link>
                  </li>
                })
              }

            </ul>
          </nav>


          <div className="flex items-center gap-4 max-lg:mx-auto max-xs:hidden">
            <Link href="#">
              <motion.button aria-label="Login" whileTap={{ scale: 0.9}}
              className="rounded-3xl px-7 py-2 border border-border-gray font-medium text-black">
                Login
              </motion.button>
            </Link>

            <Link href="#">
              <motion.button aria-label="Login" whileTap={{ scale: 0.9}}
              className="rounded-3xl px-7 py-2 border border-black bg-black text-white font-medium">
                Request a demo
              </motion.button>
            </Link>
          </div>

          <MobileNav />
        </div>

      </div>
    </header>
  )
}