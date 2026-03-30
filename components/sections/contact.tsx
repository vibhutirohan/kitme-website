"use client"

import { motion } from "framer-motion"

// ============================================================================
// COMPONENTS
// ============================================================================

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#FCFCFD] py-4 md:py-14 px-6 md:px-12 lg:px-24 overflow-hidden flex justify-center items-center scroll-mt-28">
      <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

        {/* Left Column: Text */}
        <div className="flex flex-col items-start w-full lg:w-[50%] shrink-0">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-black mb-4 text-2xl sm:text-3xl md:text-[30px]"
            style={{
              fontFamily: 'var(--font-outfit), Outfit, sans-serif',
              fontWeight: 500,
              lineHeight: '1.2'
            }}
          >
            Let&apos;s Connect!
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-black max-w-[700px] text-2xl sm:text-4xl md:text-[42px]"
            style={{
              fontFamily: 'var(--font-outfit), Outfit, sans-serif',
              fontWeight: 500,
              lineHeight: '1.3'
            }}
          >
            Have questions or feedback? Reach out to our team—we’d love to hear from you!
          </motion.h2>
        </div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[45%] flex justify-center lg:justify-end shrink-0"
        >
          <form className="w-full max-w-[480px] flex flex-col items-start gap-4">

            {/* Full Name */}
            <div className="flex flex-col items-start gap-[6px] self-stretch">
              <label htmlFor="name" className="text-[#344054] text-[14px] font-medium" style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}>
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="flex py-2.5 px-3.5 items-center gap-2 self-stretch rounded-lg border border-[#D0D5DD] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] placeholder:text-[#667085] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#F1BFCE] transition-all"
                style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col items-start gap-[6px] self-stretch">
              <label htmlFor="email" className="text-[#344054] text-[14px] font-medium" style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="flex py-2.5 px-3.5 items-center gap-2 self-stretch rounded-lg border border-[#D0D5DD] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] placeholder:text-[#667085] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#F1BFCE] transition-all"
                style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col items-start gap-[6px] self-stretch">
              <label htmlFor="message" className="text-[#344054] text-[14px] font-medium" style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}>
                Message
              </label>
              <textarea
                id="message"
                placeholder="Leave us a message..."
                className="flex py-3 px-3.5 items-start gap-2 self-stretch h-[160px] rounded-lg border border-[#D0D5DD] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] placeholder:text-[#667085] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#F1BFCE] transition-all resize-none"
                style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex justify-center items-center gap-2 self-stretch rounded-[100px] bg-[#F1BFCE] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] mt-2 hover:bg-[#EAAABF] transition-colors"
              style={{
                padding: '12px 20px',
                color: '#000',
                fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
              }}
            >
              Submit
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  )
}
