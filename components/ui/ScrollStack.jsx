"use client"

import React, { useRef } from 'react'
import { useScroll } from "framer-motion";
import { Card } from './Card';

export const ScrollStack = ({ children}) => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", 'end end']
    })

    const childArray = React.Children.toArray(children)
  return (
    <main ref={container} className='flex-1 mb-[100vh]'>
        {childArray.map((   child, i) => (
            <Card
            key={i}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.15, 1]}
            targetScale={1 - (childArray.length - i) * 0.05}
            >
                {child}
            </Card>
        ))}
    </main>
  )
}
