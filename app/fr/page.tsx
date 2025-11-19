import { Header } from "@/components/header"
import FloatingButtons from "@/components/floating-buttons"

import HeroFr from "@/components/fr/hero"
import ToursFr from "@/components/fr/tours"
import AboutFr from "@/components/fr/about"
import ContactFr from "@/components/fr/contact"

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
