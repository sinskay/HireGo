'use client'

import { IoMenuOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetFooter
} from "@/components/ui/sheet"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/lib/constants"
import { motion } from "framer-motion"




const navbarItemVariants = {
  initial: {
    x: "50px",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.45, 0, 0.55, 1]
    }
  },
  enter: (index) => ({
    x: "0px",
    opacity: 1,
    transition: {
      delay: 0.08 * index,
      duration: 0.5,
      ease: [0.45, 0, 0.55, 1]
    }
  }),
  exit: {
    x: "50px",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.45, 0, 0.55, 1]
    }
  }
}


const NavContent = () => {

  const pathname = usePathname()

  return (
    <section className="flex flex-col gap-4 pt-0">
      {
        navbarLinks.map((item, index) => {
          const isActive = (pathname.includes(item.url) && item.url.length > 1) || (pathname === item.url)
          return <SheetClose asChild key={index}>
            <Link href={item.url} className={`${isActive ? 'text-purple' : 'text-black'}
            flex items-center justify-start gap-4 p-4 font-medium text-lg hover:ml-2.5 transition-all	 ease-out duration-300 
            `}>
              <motion.p className={` ${isActive ? 'base-bold' : 'base-medium'}`}
                variants={navbarItemVariants}
                initial="initial"
                exit="exit"
                animate="enter"
                custom={index}
              >
                {item.label}
              </motion.p>
            </Link>
          </SheetClose>
        })
      }
    </section>
  )
}


export default function MobileNav() {

  return (
    <div className="block lg:hidden ml-auto mt-1.5">
      <Sheet>
        <SheetTrigger aria-label="Menu">
          <IoMenuOutline fontSize={"2.5rem"} width={"46px"} height={"46px"} />
        </SheetTrigger>
        <SheetContent className="pt-24">

          <NavContent />

          <SheetFooter className="absolute bottom-5 flex flex-col gap-5 w-[75%] xs:hidden">
            <SheetClose asChild>
              <Link
                className="rounded-3xl px-7 py-2 border border-black bg-black text-white font-medium"
                href="#"
              >
                Request a demo
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="rounded-3xl px-7 py-2 border border-borderGray font-medium text-black"
                href="#"
              >
                Login
              </Link>

            </SheetClose>
          </SheetFooter>
        </SheetContent>

      </Sheet>
    </div>
  )
}