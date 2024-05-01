'use client'

import { motion } from 'framer-motion'


export default function Message({ otherClasses="", children, direction="", transition=""}) {

    return (
        <motion.p 
          initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
          transition={transition}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`rounded-xl max-md:text-sm text-center py-2 px-2 font-medium
          absolute select-none ${otherClasses}`}
        >
          {children}
        </motion.p>
    )
}