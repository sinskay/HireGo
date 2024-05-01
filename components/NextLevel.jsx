'use client'

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IoCheckmarkOutline } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion'

import styles from "@/sass/NextLevel.module.scss";
import Message from "./Message";


const messages = [
  { direction: "left", otherClasses: "bg-purple text-white rounded-br-none top-[15%] right-5 max-md:-right-2 z-50",text: "Finish Pay Run"},
  { direction: "right", otherClasses: "bg-blue flex items-center gap-1 text-white rounded-bl-none top-[60%] left-5 max-md:left-5 z-50",text: "Accepted shifts",
  children: <IoCheckmarkOutline className="bg-green rounded-lg font-bold"/>},
];

export default function NextLevel() {


  return (
    <div className="bg-lightWhite px-[10rem] py-[8rem] max-md:px-[1.5rem] max-md:py-[4rem] flex flex-col justify-center items-center">
      <h1 className="font-semibold text-5xl leading-tight max-md:text-4xl max-sm:text-3xl text-center">
        Take your business<br />
        to the next level.
      </h1>

      <div className={`mt-16 flex items-center gap-8 ${styles.firstSection}`}>
        <div className="flex flex-col gap-6">
          <h2 className="text-orange font-semibold text-4xl max-lg:text-3xl max-sm:text-2xl">
            Culture and performance.<br />
            It&apos;s up and up.
          </h2>
          <p className="font-medium text-lightGunmetalGray max-w-[500px]">
            Develop feedback loops, set KPIs and design custom performance reviews.
            Quickly build a positive performance culture for
            your business — where everyone is aiming for the same goals.
          </p>
          <Link href={"#"}>
            <button aria-label="Performance Management" className="bg-white border border-borderGray px-6 py-3 rounded-3xl font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Performance Management
              <FaArrowRight aria-hidden="true" />
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-3xl flex justify-between items-center p-10 py-14 gap-5">

          <motion.div 
            initial={{ opacity: 0, x: 10, y: 10}}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0, y: 0}}
            viewport={{once: true}}
            className="relative after:content-[''] after:w-full after:h-full after:absolute after:top-5 after:-left-2
            after:bg-lightBlue z-10 after:z-[-1] after:skew-y-3	"
          >
            <Image src="/assets/images/next-level-1.jpg" alt="man work" width={"250"} height={"250"} className="translate-y-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10, y: -10}}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0, y: 0}}
            viewport={{once: true}}
            className="relative after:content-[''] after:w-full after:h-full after:absolute after:bottom-5 after:-right-2
          after:bg-lightBlue z-10 after:z-[-1] after:skew-y-3	">
            <Image src="/assets/images/next-level-2.jpg" alt="woman work" width={"250"} height={"250"} className="-translate-y-8" />
          </motion.div>

        </div>
      </div>


      <div className={`mt-12 flex items-center gap-10 ${styles.lastSection}`}>
        <div className="bg-veryLightPurple pt-5 pb-8 px-8 rounded-2xl relative after:content-[''] after:absolute after:w-[75%] after:h-[75%] after:left-6 after:top-3 after:bg-lightPurple after:z-[0] after:rounded-[4rem]">
          <Image 
            src="/assets/images/next-level-3.jpg"
            alt="man work"
            width={330}
            height={400}
            className="rounded-[5rem] h-[330px] object-cover relative z-30"
            />
          {
            messages.map((message, index) => (
              <AnimatePresence key={index}>
                <Message direction={message.direction} otherClasses={message.otherClasses}
                transition={{ duration: 0.5, delay: index * 0.5 }}>
                  {message.children && message.children}
                  {message.text}
                </Message>
              </AnimatePresence>
            ))
          }

        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-purple font-semibold text-4xl max-lg:text-3xl max-sm:text-2xl">
            It&apos;s payroll software.<br />
            Just faster.
          </h2>
          <p className="font-medium text-lightGunmetalGray max-w-[500px]">
            Save your time, pay your people with automated payroll. Enjoy the benefits
            of Real Time Information (RTI) and take care of workforce
            planning - all in one simple place.
          </p>
          <Link href={"#"}>
            <button aria-label="Payroll Features" className="bg-white border border-borderGray px-6 py-3 rounded-3xl font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Payroll Features
              <FaArrowRight aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}