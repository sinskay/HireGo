import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";



export default function DoItCard({ title, description, btnText, btnLink, image, bgColor, otherClassName }) {

  return (
    <Card className={`${bgColor} h-full border-none rounded-3xl p-4 flex flex-col justify-between gap-2 ${otherClassName}`}>
      <CardHeader className="flex flex-col gap-2">
        <CardTitle className={`max-w-[500px] tracking-wide ${bgColor === "bg-lightBlue" ? "" : "text-white"} font-semibold text-4xl max-lg:text-3xl max-md:text-2xl`}>
          {title}
        </CardTitle>
        <CardDescription className={`${bgColor === "bg-lightBlue" ? "text-black" : "text-white opacity-50"} text-md max-w-[500px]`}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={btnLink}>
          <button aria-label={btnText} className="bg-white px-6 py-3 rounded-3xl font-medium flex items-center gap-2 hover:gap-3 transition-all max-sm:text-base">
            {btnText}
            <FaArrowRight aria-hidden="true" />
          </button>
        </Link>
      </CardContent>
      {
        image && (
          <CardFooter className="relative w-full h-full">
            <Image src={image} alt={title} className="!relative" fill priority={false} />
          </CardFooter>
        )
      }
    </Card>
  )
}