"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeaturePillProps {
  icon: React.ElementType | string
  title: React.ReactNode
  description?: React.ReactNode
  index?: number
  className?: string
  variant?: "light" | "dark"
  href?: string
}

export function FeaturePill({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
  variant = "dark",
  href,
}: FeaturePillProps) {
  const isLight = variant === "light"

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 110; // Account for sticky header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const Component = href ? motion.a : motion.div

  return (
    <Component
      href={href}
      onClick={href ? handleClick as any : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        backgroundColor: !isLight ? "rgba(233, 233, 233, 0.32)" : "rgba(255, 255, 255, 1)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.5,
        delay: 1.4 + index * 0.1,
        backgroundColor: { duration: 0.2 },
        scale: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className={cn(
        "group relative px-4 md:px-5 py-3 md:py-6 flex items-center justify-start transition-all duration-300 cursor-pointer shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#D49AAA] focus:ring-offset-2",
        isLight
          ? "bg-white border border-gray-100 rounded-[40px] min-h-[100px]"
          : "hover:opacity-100 shadow-xl w-full max-w-[340px] h-[84px] md:h-[110px] rounded-[24px] md:rounded-full border-[0.5px] md:border-[1px] border-white/15 md:border-[rgba(255,255,255,0.24)] bg-[rgba(233,233,233,0.24)] backdrop-blur-[25px]",
        className
      )}
      style={isLight ? { borderRadius: '40px' } : undefined}
    >
      {!isLight && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-[24px] md:rounded-full" style={{ zIndex: 0 }}>
          <defs>
            <filter id={`filter_noise_${index}`} x="-50%" y="-50%" width="200%" height="200%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feTurbulence type="fractalNoise" baseFrequency="5 5" stitchTiles="stitch" numOctaves="3" result="noise" seed="5164" />
              <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
              </feComponentTransfer>
              <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
              <feFlood floodColor="rgba(0, 0, 0, 0.13)" result="color1Flood" />
              <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
              <feMerge>
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="transparent" filter={`url(#filter_noise_${index})`} />
        </svg>
      )}
      <div className="relative z-10 flex items-center gap-4 md:gap-5 w-full">
        {/* Icon */}
        <div className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {typeof Icon === "string" ? (
            <img src={Icon} alt="" className="w-7 h-7 md:w-11 md:h-11 object-contain drop-shadow-sm" />
          ) : (
            <Icon
              className={cn(
                "w-7 h-7 md:w-11 md:h-11",
                isLight ? "text-primary" : "text-white"
              )}
            />
          )}
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-1 pr-1">
          <p
            className={cn(
              "text-[15px] md:text-[16px] leading-[1.4] md:leading-[1.3]",
              isLight ? "text-foreground" : "text-white"
            )}
            style={{
              fontFamily: 'var(--font-outfit), Outfit, sans-serif',
              fontWeight: 400,
              textWrap: 'balance'
            } as any}
          >
            {title}{description && <> {description}</>}
          </p>
        </div>
      </div>
    </Component>
  )
}
