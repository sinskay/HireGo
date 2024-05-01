import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";



export default function TopFooter() {

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-center font-semibold text-5xl leading-tight max-md:text-4xl max-sm:text-3xl">
                Work easy.<br />
                Grow further with HireGo.
            </h1>
            <Link href={"#"}>
                <button aria-label="Request a demo" className="mt-12 text-black bg-white border border-borderGray px-6 py-3 rounded-3xl font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Request a demo
                    <IoIosArrowForward aria-hidden="true" />
                </button>
            </Link>
        </div>
    )
}