'use client'

import Image from "next/image";
import Link from "next/link";

import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Message from "./Message";
import { motion } from "framer-motion"


const messages = [
  { direction: "left", otherClasses: "bg-yellow rounded-br-none top-[5%] -right-9 max-md:-right-2", text: "Expand your team and hire globally" },
  { direction: "right", otherClasses: "bg-green text-white rounded-bl-none top-[25%] max-md:top-[30%] -left-9 max-md:-left-2", text: "Immigration support" },
  { direction: "left", otherClasses: "bg-purple text-white rounded-br-none top-[50%] -right-10 max-md:-right-2", text: "Set your team up" },
  { direction: "right", otherClasses: "bg-blue text-white rounded-bl-none bottom-[5%] -left-10 max-md:-left-2", text: "Pay anyone, anywhere in minutes" },
];

export default function Hero() {
  return (
    <div className=" bg-lightBlue px-[10rem] py-[8rem] max-md:px-[1.5rem] max-md:py-[4rem] min-h-[calc(90vh-88px)] rounded-b-[4rem]
    flex justify-between items-center max-lg:flex-col max-lg:gap-14"
    >

      <motion.div className="flex flex-col gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-semibold text-5xl leading-tight max-md:text-4xl max-sm:text-3xl">
          HireGO is your <br />
          all-in-one <br />
          Global People Platform
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaRegCheckCircle className="text-green text-xl" />
            <p className="max-sm:text-base">
              G3&apos;s Leader in global employment platforms
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCheckCircle className="text-green text-xl" />
            <p className="max-sm:text-base">
              90% customer satisfaction rate
            </p>
          </div>
        </div>
    
        <Link href={"#"}>
          <button aria-label="Request a demo" className="bg-black border border-black text-white px-6 py-3 rounded-3xl font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Request a demo
            <IoIosArrowForward aria-hidden="true" />
          </button>
        </Link>

      </motion.div>

      <motion.div className="relative px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/assets/images/hero.jpg"
          width={592}
          height={408}
          alt="Hero Image"
          className="rounded-br-[3rem] rounded-tl-[3rem]"
          priority
        />

        {
          messages.map((message, index) => (
            <Message key={index} direction={message.direction} otherClasses={message.otherClasses} transition={{ duration: 0.5, delay: index * 0.5 }}>
              {message.text}
            </Message>
          ))
        }

      </motion.div>

    </div>
  )
}