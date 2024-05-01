

import DoItCard from './cards/do-it/Card'
import { Separator } from "@/components/ui/separator"

export default function HireGoSection() {

  return (
    <div className="bg-gunmetalGray px-[10rem] py-[8rem] max-md:px-[1.5rem] max-md:py-[4rem] rounded-[4rem] relative
    after:content-[''] after:absolute after:bg-lightWhite after:w-full after:h-[100px] after:bottom-0 after:left-0 after:-z-10">
      <h1 className="font-semibold text-5xl leading-tight text-white text-center max-md:text-4xl max-sm:text-3xl mb-10">
        You can do it all.<br />
        With HireGO.
      </h1>

      <div className="max-w-[1300px] mx-auto flex justify-center gap-6 lg:min-h-[700px] max-lg:flex-col max-lg:items-center">
        <div>
          <DoItCard
            title={"Hire international talent"}
            description={"Instead of setting up your own entities, experience the speed of HireGO’s automated global hiring. Create compliant employment agreements and set up payroll and benefits—in a matter of clicks."}
            btnText={"Hire international talent"}
            image={"/assets/images/do-it.png"}
            bgColor={"bg-lightGunmetalGray"}
            btnLink={"#"}
            height={"h-full"}
          />
        </div>
        <div className="flex flex-col justify-center gap-6 lg:min-h-[700px]">
          <DoItCard
            title={"Hire contractors"}
            description={"Generate, edit, and sign compliant contracts in minutes and access management tools to streamline paperwork, onboarding, and payments."}
            btnText={"Hire contractors"}
            bgColor={"bg-darkGreen"}
            btnLink={"#"}
          />
          <DoItCard
            title={"Convert contractors to employees"}
            description={"Assess global worker misclassification risks and compliantly convert contractors to full-timers, all under one platform."}
            btnText={"Convert contractors"}
            bgColor={"bg-lightBlue"}
            btnLink={"#"}
          />

        </div>
      </div>

      <Separator className='max-w-[1300px] mx-auto my-20 opacity-30' />

      <div className='py-2 px-10 max-md:px-2 text-white flex justify-between items-center flex-wrap max-w-[1200px] mx-auto max-md:gap-5'>
        <div className='flex flex-col gap-4 max-md:gap-2 max-w-[350px]'>
          <h2 className='text-lightBlue text-7xl font-semibold max-md:text-5xl'>5,000+</h2>
          <p className='opacity-80'>Loved by 5,000+ Team Members</p>
        </div>
        <div className='flex flex-col gap-4 max-md:gap-2 max-w-[350px]'>
          <h2 className='text-lightBlue text-7xl font-semibold max-md:text-5xl'>25,000+</h2>
          <p className='opacity-80'>Trusted by 25,000+ customers</p>
        </div>
        <div className='flex flex-col gap-4 max-md:gap-2 max-w-[350px]'>
          <h2 className='text-lightBlue text-7xl font-semibold max-md:text-5xl'>48 hrs</h2>
          <p className='opacity-80'>Onboard talent in as little as 48 hours</p>
        </div>
      </div>
    </div>
  )
}
