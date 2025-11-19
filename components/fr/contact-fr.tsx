"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactFr() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contactez-Nous</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à commencer votre aventure ? Contactez-nous dès aujourd'hui !
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Phone */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <a
                href="tel:+66838087798"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +66838087798
              </a>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:beeadventuretours@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                beeadventuretours@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Facebook */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Facebook</h3>
              <a
                href="https://facebook.com/share/17N61hf9G3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Bee Tours
              </a>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Emplacement</h3>
              <p className="text-muted-foreground text-sm">
                Ban Thung Lung Mae Win<br />
                Mae Wang — Chiang Mai 50360
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700"
            onClick={() => window.open("https://wa.me/66838087798", "_blank")}
          >
            Envoyez-nous un Message sur WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
