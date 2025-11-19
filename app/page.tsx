import Header from "@/components/Header"
import HeroFr from "@/components/fr/Hero"
import ToursFr from "@/components/fr/Tours"
import AboutFr from "@/components/fr/About"
import ContactFr from "@/components/fr/Contact"
import FloatingButtons from "@/components/FloatingButtons"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Tours />
      <About />
      <Contact />
      <FloatingButtons />
    </main>
  )
}
