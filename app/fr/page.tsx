import Header from "@/components/header.tsx"
import FloatingButtons from "@/components/floating-buttons.tsx"

import HeroFr from "@/components/fr/hero-fr"
import ToursFr from "@/components/fr/tours-fr"
import AboutFr from "@/components/fr/about-fr"
import ContactFr from "@/components/fr/contact-fr"

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
