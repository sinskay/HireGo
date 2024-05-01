import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa6";



export default function BottomFooter() {


    return (
        <div className="flex justify-between text-base max-cxl:flex-col max-cxl:items-center max-cxl:gap-8">
           <p className="flex items-center gap-2 text-borderGray">
               <FaRegCopyright />
               Copyright 2024. All Rights Reserved.
           </p>
           <ul className="flex items-center gap-8 text-borderGray max-cxl:flex-col max-cxl:gap-5">
               <li>
                    <Link href={"#"}>
                        Privacy Policy
                    </Link>
               </li>
               <li>
                    <Link href={"#"}>
                        Terms of Service
                    </Link>
               </li>
               <li>
                    <Link href={"#"}>
                        Cookie policy
                    </Link>
               </li>
               <li>
                    <Link href={"#"}>
                        Cookie Settings
                    </Link>
               </li>
           </ul>
        </div>
    )
}