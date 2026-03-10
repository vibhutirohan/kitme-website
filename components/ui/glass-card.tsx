"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function GlassCard({
  children,
  className,
  delay = 0,
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass rounded-3xl p-10 md:p-12 transition-all duration-300",
        hover && "hover:shadow-xl hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
