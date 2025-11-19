"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LanguageToggle, useTranslation } from "@/components/LanguageToggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isAboutPage = pathname === "/about"
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (isAboutPage) {
      window.location.href = `/#${id}`
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-16 h-16 md:w-28 md:h-28 flex items-center justify-center">
              <Image
                src="/bee-adventure-tours-logo.png"
                alt="Bee Adventure Tours - Chiang Mai"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("tours")}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              {t("tours")}
            </button>
            <Link href="/about" className="text-white hover:text-primary transition-colors font-medium">
              {t("about")}
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              {t("whyChoose")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              {t("contact")}
            </button>
          </nav>

          {/* Desktop Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageToggle />
            <Button
              variant="outline"
              size="sm"
              className={`flex items-center space-x-2 bg-transparent transition-colors ${
                isScrolled ? "text-foreground border-border" : "text-white border-white/30 hover:border-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+66838087798</span>
            </Button>
            <Button
              size="sm"
              className="flex items-center space-x-2 bg-primary hover:bg-primary/90"
              onClick={() => window.open("mailto:beeadventuretours@gmail.com", "_self")}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("tours")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {t("tours")}
              </button>
              <Link
                href="/about"
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {t("whyChoose")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {t("contact")}
              </button>
              <div className="pt-2">
                <LanguageToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
