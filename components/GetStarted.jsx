import Image from "next/image"
import styles from "@/sass/GetStarted.module.scss"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";
import Message from "./Message";



export default function GetStarted() {
        
    return (
        <div className="flex flex-col gap-5 px-[8rem] py-[8rem] max-md:px-[1.5rem] max-md:py-[4rem] rounded-b-[4rem]
        justify-between items-center max-lg:flex-col max-lg:gap-14">
            <h1 className="font-semibold text-5xl leading-tight max-md:text-4xl max-sm:text-3xl text-center">
                Get started with HireGo<br />
                in three easy steps.
            </h1>

            <div className="flex gap-4 w-full max-w-[1542px] max-cxl:flex-col max-cxl:justify-center">

                <div className="bg-veryLightPurple rounded-3xl cxl:w-[50%] flex justify-center items-center overflow-hidden relative">
                    <div className={`relative ${styles.hexagone} after:bg-lightPurple w-fit`}>
                        <Image src="/assets/images/get-started.png" width={400} height={400} alt="person using pc"/>
                        <Message direction="right" otherClasses={"bg-green text-white rounded-bl-none top-[15%] -left-9 max-md:left-2"}>
                            Easy of integration
                        </Message>
                        <Message direction="left" otherClasses={"bg-yellow rounded-br-none bottom-[15%] -right-9 max-md:right-2 "}>
                            Easy of integration
                        </Message>
                    </div>
                </div>

                <div className="flex flex-col gap-2 cxl:w-[50%]">
                    <div className="bg-lightWhite flex gap-4  rounded-3xl px-10 max-cxl:px-6 max-md:p-6 py-8">
                        <span className="bg-purple flex justify-center items-center w-[40px] h-[40px] rounded-full text-white text-lg font-semibold">
                            1
                        </span>
                        <div className="flex flex-col items-start gap-y-4 max-w-[500px] w-fit">
                            <h2 className="text-2xl max-md:text-xl font-semibold">Book a call</h2>
                            <p className="text-lightGunmetalGray">
                                Book a call with our global workforce consultants. We&apos;ll set you up with a free account ready to suit your team&apos;s needs.
                            </p>
                        </div>
                    </div>
                    <div className="bg-lightWhite flex gap-4  rounded-3xl px-10 max-cxl:px-6 max-md:p-6 py-8 ">
                        <span className="bg-purple flex justify-center items-center w-[40px] h-[40px] rounded-full text-white text-lg font-semibold">
                            2
                        </span>
                        <div className="flex flex-col items-start gap-y-4 max-w-[500px] w-fit">
                            <h2 className="text-2xl max-md:text-xl font-semibold">Add your people</h2>
                            <p className="text-lightGunmetalGray">
                                From new hires to your existing workforce, onboard effortlessly with our self-serve platform.
                            </p>
                        </div>
                    </div>
                    <div className="bg-lightWhite flex gap-4  rounded-3xl px-10 max-cxl:px-6 max-md:p-6 py-8 ">
                        <span className="bg-purple flex justify-center items-center w-[40px] h-[40px] rounded-full text-white text-lg font-semibold">
                            3
                        </span>
                        <div className="flex flex-col items-start gap-y-4 max-w-[500px] w-fit">
                            <h2 className="text-2xl max-md:text-xl font-semibold">Dedicated onboarding</h2>
                            <p className="text-lightGunmetalGray">
                                From navigating local laws to support for your team members, our dedicated team will help you get set up seamlessly.
                            </p>
                            <Link href={"#"}>
                                <button aria-label="Start Now" className="bg-white border border-borderGray px-8 py-3 rounded-3xl font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Start Now
                                <FaArrowRight aria-hidden="true"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            
            </div>
            



        </div>
    )
}