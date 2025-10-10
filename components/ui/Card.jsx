'use client'

import React from 'react'
import { motion, useTransform } from "framer-motion";


export const Card = ({i, progress, range, targetScale, children}) => {
  return (
    <div
    className='flex justify-center items-center h-[100vh] sticky top-0'>
        <motion.div
        className='relative'
        >
            {children}
        </motion.div>
    </div>
  )
}
