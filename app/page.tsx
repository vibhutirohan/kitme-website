import {
  Navbar,
  Hero,
  Features,
  PersonalizedSection,
  DailyDropsSection,
  CommunitySection,
  ForRetailersSection,
  FAQSection,
  ContactSection,
  Footer,
} from "@/components/sections"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full relative bg-white">
      <div id="top" className="absolute top-0 left-0" />
      <Navbar />
      <Hero />
      <Features />
      <PersonalizedSection />
      <DailyDropsSection />
      <CommunitySection />
      <ForRetailersSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}