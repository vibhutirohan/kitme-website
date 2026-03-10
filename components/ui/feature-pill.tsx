"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeaturePillProps {
  icon: React.ElementType | string
  title: string
  description: string
  index?: number
  className?: string
  variant?: "light" | "dark"
}

export function FeaturePill({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
  variant = "dark",
}: FeaturePillProps) {
  const isLight = variant === "light"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
      className={cn(
        "group rounded-[24px] px-6 py-8 min-h-[130px] flex items-center transition-all duration-300 cursor-pointer shadow-lg",
        isLight
          ? "bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1"
          : "bg-[#4a4443]/90 border border-white/10 hover:bg-[#574f4e] hover:shadow-2xl hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-center gap-5 w-full">
        {/* Icon */}
        <div className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {typeof Icon === "string" ? (
            <img src={Icon} alt="" className="w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow-sm" />
          ) : (
            <Icon
              className={cn(
                "w-10 h-10 md:w-11 md:h-11",
                isLight ? "text-primary" : "text-white"
              )}
            />
          )}
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1 flex-1">
          <h3
            className={cn(
              "font-semibold text-[16px] md:text-[17px] leading-tight",
              isLight ? "text-foreground" : "text-white"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-[13px] md:text-[14px] leading-snug",
              isLight ? "text-muted-foreground" : "text-[#A3A3A3]"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
