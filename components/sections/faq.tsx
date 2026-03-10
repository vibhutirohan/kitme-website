"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "@/components/ui/section-header"

// ============================================================================
// DATA - Edit these to customize the FAQ section
// ============================================================================

const FAQS = [
  {
    question: "What is Kitme?",
    answer:
      "Kitme is a digital closet app that transforms your email receipts into an organized wardrobe experience. It helps you track your purchases, create outfits, and discover personalized fashion recommendations.",
  },
  {
    question: "How does Kitme work?",
    answer:
      "Simply connect your email, and our patented technology automatically scans your purchase receipts to build your digital closet. From there, you can organize items, create outfits, share with friends, and receive daily personalized recommendations.",
  },
  {
    question: "What if I don't have an eBay account?",
    answer:
      "No worries! Kitme works with purchases from any retailer. We scan receipts from major fashion brands, department stores, and online shops. You don't need an eBay account to use Kitme.",
  },
  {
    question: "Can I use the app without a Gmail account?",
    answer:
      "Currently, Kitme integrates best with Gmail for automatic receipt scanning. However, we're working on expanding support to other email providers. You can also manually add items to your closet.",
  },
  {
    question: "Do you store my Gmail data?",
    answer:
      "We take your privacy seriously. Kitme only scans for shopping receipts and doesn't store your email content. All data is encrypted, and we follow strict privacy protocols to protect your information.",
  },
  {
    question: "What if I encounter a problem using the app?",
    answer:
      "Our support team is here to help! You can reach us through the Contact section below, or email us directly at support@kitme.com. We typically respond within 24 hours.",
  },
] as const

const SECTION_CONTENT = {
  eyebrow: "Questions & Answers",
  title: "FAQs",
  description:
    "Answers to common questions to help you understand the process and how it works.",
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function FAQSection() {
  return (
    <section id="faq" className="w-full bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24">

          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="font-sans text-[48px] md:text-[64px] font-bold text-black mb-6 leading-tight tracking-tight">
              FAQs
            </h2>
            <p className="text-black/80 text-[16px] md:text-[18px] leading-[1.6] font-medium max-w-[320px]">
              {SECTION_CONTENT.description}
            </p>
          </div>

          {/* Right Column: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full mt-4 md:mt-0"
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border-b border-gray-200/60 first:border-t-0"
                >
                  <AccordionTrigger className="text-left font-medium text-black hover:no-underline py-6 text-[16px] md:text-[18px] [&>svg]:opacity-60">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#555555] pb-6 leading-relaxed text-[15px] md:text-[16px] font-medium max-w-3xl">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
