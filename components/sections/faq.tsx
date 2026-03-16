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
      "Our app aggregates your purchase history through the Gmail API and helps you list them on platforms like eBay with just a few taps.",
  },

  {
    question: "Can I use the app without a Gmail account?",
    answer:
      "At the moment, you have to have Gmail to use Kitme.  However, we’re exploring support for other email providers and will have that ready soon.",
  },
  {
    question: "Do you store my Gmail data?",
    answer:
      "No, we only access the purchase data needed to optimize your listings and create your digital closet. This data is securely processed and not stored on our servers.",
  },
  {
    question: "What if I encounter a problem using the app?",
    answer:
      "We’re here to help! You can reach our support team through the app or email us at support@trykitme.com."
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
    <section id="faq" className="w-full bg-[#FAFAFA] pt-24 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden flex justify-center">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 w-full">

          {/* Left Column Text */}
          <div className="flex flex-col items-start w-full lg:w-[35%] shrink-0 pt-0 lg:pt-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-black mb-6 text-4xl sm:text-[52px]"
              style={{
                fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                fontWeight: 700,
                lineHeight: '1.2'
              }}
            >
              FAQs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#333] max-w-[340px]"
              style={{
                fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              {SECTION_CONTENT.description}
            </motion.p>
          </div>

          {/* Right Column: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[60%] shrink-0"
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-transparent border-b border-gray-200/80 first:border-t-0"
                >
                  <AccordionTrigger
                    className="text-left font-medium text-black hover:no-underline py-6 md:py-8"
                    style={{
                      fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                      fontSize: '18px',
                      fontWeight: 500,
                    }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-[#555] pb-8 leading-relaxed max-w-2xl"
                    style={{
                      fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                    }}
                  >
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
