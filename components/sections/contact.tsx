"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { SectionHeader } from "@/components/ui/section-header"

// ============================================================================
// DATA - Edit these to customize the contact section
// ============================================================================

const SECTION_CONTENT = {
  eyebrow: "",
  title: "Let's Connect",
  description:
    "Have questions or feedback? Reach out to our team — we'd love to hear from you!",
}

const FORM_FIELDS = {
  name: {
    label: "Full Name",
    placeholder: "Enter your full name",
  },
  email: {
    label: "Email",
    placeholder: "Enter your email address",
  },
  message: {
    label: "Message",
    placeholder: "Write your message here...",
  },
  submit: "Submit",
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#F9F9F9] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">

          {/* Left Column: Text */}
          <div className="flex flex-col pt-10">
            <h3 className="font-sans text-[26px] md:text-[32px] font-bold text-black mb-6 tracking-tight">
              Let&apos;s Connect!
            </h3>
            <h2 className="font-sans text-[36px] md:text-[44px] lg:text-[52px] font-bold text-black mb-6 leading-[1.2] tracking-tight max-w-[500px]">
              Have questions or feedback? Reach out to our team—we&apos;d love to hear from you!
            </h2>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex justify-center lg:justify-end"
          >
            <form className="w-full max-w-lg space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[13px] font-semibold text-[#555555] block">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#D19AA7] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[13px] font-semibold text-[#555555] block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#D19AA7] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[13px] font-semibold text-[#555555] block">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave us a message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#D19AA7] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-[#E5C9D3] text-black font-medium tracking-wide py-3.5 hover:bg-[#D19AA7] transition-colors mt-2"
              >
                Submit
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
