'use client'

import { trustedCompanies } from '@/lib/constants'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

export default function TrustedCompanies() {


  return (
    <div
      className="flex flex-col justify-center items-center px-[10rem] py-[8rem] max-md:px-[1.5rem] max-md:py-[4rem]">
      <h1 className="font-semibold text-5xl max-md:text-4xl max-sm:text-3xl leading-tight text-gray-400 max-w-[900px] text-center">
        Trusted by <span className="text-black">25,000+</span> companies from startups to enterprise
      </h1>

      <div className="grid grid-cols-5 gap-8 my-16 items-center">
        {trustedCompanies.map((company, index) => (
          <AnimatePresence key={company.name}>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 ,delay: index * 0.1 }}
              whileInView={{ opacity: 1 }}
              viewport={{once: true}}
            >
              <Image
                key={company.name}
                src={company.logo}
                alt={company.name}
                width={80}
                height={50}
              />
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  )
}