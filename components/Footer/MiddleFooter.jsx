import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";





export default function MiddleFooter() {


    return (
        <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:gap-y-4">
            
            <h1 className="font-semibold text-3xl tracking-wider">
                HireGo
            </h1>

            <ul className="flex items-center gap-x-6 text-xl">
                <li className="bg-lightGunmetalGray p-2 rounded-full">
                    <Link href={"#"}>
                        <FaXTwitter/>
                    </Link>
                </li>
                <li className="bg-lightGunmetalGray p-2 rounded-full">
                    <Link href={"#"}>
                        <FaLinkedinIn />
                    </Link>
                </li>
                <li className="bg-lightGunmetalGray p-2 rounded-full">
                    <Link href={"#"}>
                        <FaFacebookF />
                    </Link>
                </li>
                <li className="bg-lightGunmetalGray p-2 rounded-full">
                    <Link href={"#"}>
                        <FaInstagram />
                    </Link>
                </li>
            </ul>


        </div>
    )
}