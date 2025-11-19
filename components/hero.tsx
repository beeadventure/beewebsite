"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const scrollToTours = () => {
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/beautiful-chiang-mai-temple-with-golden-pagoda-sur.jpg"
          alt="Beautiful Chiang Mai temple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-white">
          Discover the Magic of <span className="text-white">Chiang Mai</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-balance leading-relaxed max-w-3xl mx-auto text-white">
          Join us for authentic adventures with local expert guides. Experience elephants, waterfalls, ancient temples,
          and the true spirit of Northern Thailand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToTours}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold flex items-center space-x-2"
          >
            <span>Book Your Adventure</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg font-semibold bg-transparent"
            >
              About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
