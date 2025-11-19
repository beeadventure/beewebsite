import Header from "@/components/header.tsx"
import FloatingButtons from "@/components/floating-buttons.tsx"

import HeroFr from "@/components/fr/hero-fr.tsx"
import ToursFr from "@/components/fr/tours-fr.tsx"
import AboutFr from "@/components/fr/about-fr.tsx"
import ContactFr from "@/components/fr/contact-fr.tsx"

export default function HomeFr() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroFr />
      <ToursFr />
      <AboutFr />
      <ContactFr />
      <FloatingButtons />
    </main>
  )
}
