import TopFooter from "./TopFooter";
import MiddleFooter from "./MiddleFooter";
import BottomFooter from "./BottomFooter";
import { Separator } from "@/components/ui/separator"

export default function Footer() {


    return (
        <footer className="bg-lightDark text-white px-[8rem] py-[8rem] max-md:px-[1.5rem] max-md:py-[4rem] 
        flex flex-col gap-y-8 max-md:gap-y-4
        ">
            
            <TopFooter />
            <Separator className="my-20 max-md:my-10 opacity-40"/>
            <MiddleFooter />
            <Separator className="my-20 max-md:my-10 opacity-40"/>
            <BottomFooter />

        </footer>
    )
}