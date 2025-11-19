"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()
  const isFrench = pathname?.startsWith("/fr")

  const toggleLanguage = () => {
    if (isFrench) {
      // Switch to English - remove /fr prefix
      const newPath = pathname?.replace(/^\/fr/, "") || "/"
      router.push(newPath === "" ? "/" : newPath)
    } else {
      // Switch to French - add /fr prefix
      router.push(`/fr${pathname}`)
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-white hover:text-primary hover:bg-white/10"
      aria-label={`Switch to ${isFrench ? "English" : "French"}`}
    >
      <span className="text-xl" role="img" aria-label={isFrench ? "English flag" : "French flag"}>
        {isFrench ? "🇬🇧" : "🇫🇷"}
      </span>
    </Button>
  )
}

// Deprecated - keeping for backward compatibility but not used in route-based approach
export function useTranslation() {
  const pathname = usePathname()
  const isFrench = pathname?.startsWith("/fr")

  const t = (key: string): string => {
    return key
  }

  return { t, currentLang: isFrench ? "fr" : "en" }
}
