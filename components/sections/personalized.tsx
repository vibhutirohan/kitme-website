"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"


const CARDS: {
  iconSrc: string
  title: ReactNode
  description: string
  titleMaxWidth: string
  descriptionMaxWidth: string
}[] = [
    {
      iconSrc: "/cabinet-02.svg",
      title: (
        <>
          Auto Outfit
          <br />
          Creation
        </>
      ),
      description:
        "Tell us what you're dressing for and we'll pull together outfits straight from your own closet. Whether it's a wedding, a meeting, or a first date, just ask and we'll handle the rest",
      titleMaxWidth: "467px",
      descriptionMaxWidth: "467px",
    },
    {
      iconSrc: "/user-story.svg",
      title: (
        <>
          Real Stylists
          <br />
          On Call
        </>
      ),
      description:
        "A direct line to professional styling expertise and consultations. Our stylist are here to help whenever you have questions.",
      titleMaxWidth: "420px",
      descriptionMaxWidth: "430px",
    },
    {
      iconSrc: "/Vector.svg",
      title: (
        <>
          Daily Recs For
          <br />
          You
        </>
      ),
      description:
        "Our one-of-a-kind marketplace is curated just for you. Your taste, guaranteed in-stock, in your size, updated every day from Revolve, SSENSE, and Mytheresa.",
      titleMaxWidth: "470px",
      descriptionMaxWidth: "450px",
    },
  ]


interface PersonalizedCardProps {
  iconSrc: string
  title: ReactNode
  description: string
  titleMaxWidth: string
  descriptionMaxWidth: string
  index: number
}

function PersonalizedCard({
  iconSrc,
  title,
  description,
  titleMaxWidth,
  descriptionMaxWidth,
  index,
}: PersonalizedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-[32px] bg-[#F8F8F8] px-8 py-8 md:px-10 md:py-10 flex flex-col justify-start min-h-[340px] md:min-h-[380px]"
    >
      <div
        className="absolute top-8 right-8 flex h-[76px] w-[74px] items-center justify-center bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/Ellipse 271.svg')" }}
      >
        <img
          src={iconSrc}
          alt="Icon"
          className="h-7 w-7 object-contain"
          style={{ filter: "brightness(0) saturate(100%)" }}
        />
      </div>

      <div className="mt-20 flex w-full flex-col items-start text-left">
        <h3
          className="mb-4 text-left text-3xl md:text-4xl lg:text-[44px]"
          style={{
            maxWidth: titleMaxWidth,
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
            color: "#000",
          }}
        >
          {title}
        </h3>

        <p
          className="text-left"
          style={{
            maxWidth: descriptionMaxWidth,
            color: "#000",
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "30px",
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  )
}


export function PersonalizedSection() {
  return (
    <section id="solution" className="w-full bg-white py-10 md:py-16 px-6 md:px-12 scroll-mt-28">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="text-center mb-6 md:mb-10 flex justify-center w-full">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
            style={{
              width: "80%",
              maxWidth: "1000px",
              color: "#000",
              textAlign: "center",
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1",
            }}
          >
            A new, personalized experience!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1350px] mx-auto w-full">
          {CARDS.map((card, index) => (
            <PersonalizedCard
              key={index}
              iconSrc={card.iconSrc}
              title={card.title}
              description={card.description}
              titleMaxWidth={card.titleMaxWidth}
              descriptionMaxWidth={card.descriptionMaxWidth}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}