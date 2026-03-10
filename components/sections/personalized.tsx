"use client"

import { motion } from "framer-motion"
import { Archive, User, Zap, LucideIcon } from "lucide-react"

// ============================================================================
// DATA - Edit these to customize the personalized section
// ============================================================================

const CARDS: { icon: LucideIcon; title: React.ReactNode; description: string }[] = [
  {
    icon: Archive,
    title: <>Outfit<br />Creator</>,
    description:
      "Tell us what you're dressing for and we'll pull together outfits straight from your own closet. Whether it's a wedding, a meeting, or a first date, just ask and we'll handle the rest",
  },
  {
    icon: User,
    title: <>Talk to a<br />stylist</>,
    description:
      "A direct line to professional styling expertise and consulations",
  },
  {
    icon: Zap,
    title: <>Get Daily-<br />Drops</>,
    description:
      "A marketplace of fresh pieces in your size, curated to your taste, updated every day.",
  },
]

// ============================================================================
// COMPONENTS
// ============================================================================

interface PersonalizedCardProps {
  icon: LucideIcon
  title: React.ReactNode
  description: string
  index: number
}

function PersonalizedCard({
  icon: Icon,
  title,
  description,
  index,
}: PersonalizedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-[2rem] bg-[#F8F8F8] p-8 flex flex-col justify-end min-h-[340px]"
    >
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#EBD1D8] flex items-center justify-center">
        <Icon className="h-5 w-5 text-black" strokeWidth={2.5} />
      </div>

      <div className="mt-16">
        <h3 className="font-sans text-[32px] md:text-[36px] leading-[1.1] font-medium text-black mb-4">
          {title}
        </h3>
        <p className="text-black text-[14px] leading-relaxed pr-4">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function PersonalizedSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-sans text-[32px] md:text-[40px] font-bold text-black tracking-tight">
            Get personalized experience!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {CARDS.map((card, index) => (
            <PersonalizedCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
