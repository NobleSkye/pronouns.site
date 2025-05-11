"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  offset?: number
}

export function FloatingCard({ children, className, delay = 0, offset = 10 }: FloatingCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className={cn("rounded-lg border bg-card p-6 text-card-foreground shadow-lg", className)}
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: delay * 0.1,
          duration: 0.5,
          ease: "easeOut",
        },
      }}
      whileHover={{
        y: -offset,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}
