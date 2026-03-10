"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-20 md:mb-28",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.2em] text-primary/80 mb-6 font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
