import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Tours } from "@/components/tours"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { FloatingButtons } from "@/components/floating-buttons"

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
