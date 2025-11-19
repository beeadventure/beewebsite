"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-14 h-14 p-0 md:w-auto md:h-auto md:px-4 md:py-3 md:rounded-lg"
        onClick={() => window.open("mailto:beeadventuretours@gmail.com", "_self")}
      >
        <Mail className="w-6 h-6 md:w-5 md:h-5" />
        <span className="hidden md:inline md:ml-2">Email</span>
      </Button>

      {/* Call Button */}
      <Button
        size="lg"
        variant="outline"
        className="bg-background hover:bg-muted shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-14 h-14 p-0 md:w-auto md:h-auto md:px-4 md:py-3 md:rounded-lg border-2"
        onClick={() => window.open("tel:+66838087798", "_self")}
      >
        <Phone className="w-6 h-6 md:w-5 md:h-5" />
        <span className="hidden md:inline md:ml-2">Call</span>
      </Button>
    </div>
  )
}
