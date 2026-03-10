import {
  Navbar,
  Hero,
  Features,
  PersonalizedSection,
  DailyDropsSection,
  CommunitySection,
  RetailersSection,
  FAQSection,
  ContactSection,
  Footer,
} from "@/components/sections"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <PersonalizedSection />
      <DailyDropsSection />
      <CommunitySection />
      <RetailersSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
