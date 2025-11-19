import Header from "@/app/components/header"
import HeroFr from "@/app/components/fr/hero"
import ToursFr from "@/app/components/fr/tours"
import AboutFr from "@/app/components/fr/about"
import ContactFr from "@/app/components/fr/contact"
import FloatingButtons from "@/app/components/floating-buttons"

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
