'use client'

import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import styles from "@/sass/HelpTeams.module.scss";
import { helpTeamsContent } from "@/lib/constants.js";
import { useState } from "react";
import { motion } from "framer-motion";






export default function HelpTeams(){

    const [activeSlide, setActiveSlide] = useState(0);
    const [slideDirection, setSlideDirection] = useState("");

    const handleSlide = (type) => {
        if(type === "inc"){
            setSlideDirection("inc");
            if(activeSlide === helpTeamsContent.length - 1){
                setActiveSlide(0);
            } else {
                setActiveSlide(activeSlide + 1);
            }
        
        } else if(type === "dec"){
            setSlideDirection("dec");
            if(activeSlide === 0){
                setActiveSlide(helpTeamsContent.length - 1);
            } else {
                setActiveSlide(activeSlide - 1);
            }
        }
    }

    return (
        <div className="bg-gunmetalGray px-[10rem] py-[8rem] max-md:px-[1.5rem] max-md:py-[4rem] flex flex-col items-center">
            <h1 className="text-white font-semibold text-5xl leading-tight max-md:text-4xl max-sm:text-3xl text-center mb-10">
                We help teams grow faster <br />
                across borders.
            </h1>


            <div className={`overflow-hidden w-full max-w-[1300px] h-[550px] max-cxl:min-h-[800px] rounded-3xl flex justify-between items-center ${styles.contentSection}`}>
                
                <div className="bg-lightBlue w-1/2 max-cxl:w-full h-full flex flex-col gap-5 cxl:px-16 px-9 py-5 justify-center cxl:rounded-tl-3xl cxl:rounded-bl-3xl max-cxl:rounded-bl-3xl max-cxl:rounded-br-3xl relative">
                    <Image src="/assets/logos/helpLogo.png" alt="Help" width={55} height={55} className="absolute top-[15%] max-cxl:top-[5%]"/>
                    <motion.h2 
                        key={helpTeamsContent[activeSlide].quote}
                        initial={{ opacity: 0, x: slideDirection === "inc" ? 70 : -70 }}
                        animate={{ opacity: 1, x: 0}}
                        exit={{ opacity: 0, x: slideDirection === "inc" ? -70 : 70}}
                        transition={{ duration: 0.5 }}
                        className="font-semibold text-2xl leading-snug max-w-[400px]"
                    >
                        <FaQuoteLeft className="inline pr-2" />
                        {helpTeamsContent[activeSlide].quote}
                        <FaQuoteRight className="inline pl-2" />
                    </motion.h2>
                    <motion.p
                        key={helpTeamsContent[activeSlide].author}
                        initial={{ opacity: 0, x: slideDirection === "inc" ? 100 : -100 }}
                        animate={{ opacity: 1, x: 0}}
                        exit={{ opacity: 0, x: slideDirection === "inc" ? -100 : 100}}
                        transition={{ duration: 0.5 }}
                        className="text-lg"
                    >
                        {helpTeamsContent[activeSlide].author}
                    </motion.p>

                    <Link href={"#"}>
                        <button aria-label="Learn more" className="bg-white border border-borderGray px-8 py-3 rounded-3xl font-medium flex items-center gap-2 hover:gap-3 transition-all absolute bottom-[15%] max-cxl:bottom-[5%]">
                        Learn more
                        <FaArrowRight aria-hidden="true" />
                        </button>
                    </Link>

                </div>

                <div className="bg-white w-1/2 overflow-hidden max-cxl:w-full h-full flex justify-center items-center cxl:px-16 px-9 py-5 max-cxl:py-16 max-md:py-0 cxl:rounded-tr-3xl cxl:rounded-br-3xl max-cxl:rounded-tl-3xl max-cxl:rounded-tr-3xl">
                        <motion.div 
                            key={helpTeamsContent[activeSlide].image}
                            initial={{ opacity: 0, x: slideDirection === "inc" ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0}}
                            exit={{ opacity: 0, x: slideDirection === "inc" ? -100 : 100}}
                            transition={{ duration: 0.5 }}
                        className="relative after:content-[''] after:absolute after:left-[50%] after:top-[50%] after:w-[calc(100%+0px)] after:h-[calc(100%+50px)] after:skew-y-2 after:bg-lightBlue after:-translate-x-[55%] after:-translate-y-[50%] after:z-[0]">
                            <Image src={helpTeamsContent[activeSlide].image} alt="team working" width={500} height={500} className="z-30 relative" />
                        </motion.div>

                </div>

            </div>

            <div className="mt-10 flex justify-center items-center gap-3">
                <button aria-label="Previous Slide" onClick={() => handleSlide("dec")}>
                    <FaChevronLeft className="bg-lightGunmetalGray text-borderGray rounded-full p-1.5 w-7 h-7" />
                </button>
                <div className="flex justify-center items-center gap-1">
                    {
                       helpTeamsContent.map((_, i) => (
                        <GoDotFill key={i} className={`${activeSlide === i ? "text-white" : "text-lightGunmetalGray"} `} />    
                       )) 
                    }
                </div>
                <button aria-label="Next Slide" onClick={() => handleSlide("inc")}>
                    <FaChevronRight className="bg-lightGunmetalGray text-borderGray rounded-full p-1.5 w-7 h-7" />
                </button>

            </div>


        </div>
    )
}