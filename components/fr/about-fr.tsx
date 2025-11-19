"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutFr() {
  const features = [
    {
      icon: Heart,
      title: "Tourisme Éthique",
      description:
        "Nous privilégions le bien-être des animaux et des communautés locales dans toutes nos activités",
    },
    {
      icon: Users,
      title: "Guides Locaux Experts",
      description:
        "Nos guides sont des habitants de Chiang Mai qui partagent leur culture et leurs connaissances",
    },
    {
      icon: Award,
      title: "Expériences Authentiques",
      description:
        "Découvrez la vraie Thaïlande du Nord avec des activités et des lieux hors des sentiers battus",
    },
    {
      icon: Leaf,
      title: "Respectueux de l'Environnement",
      description:
        "Nous nous engageons à préserver la beauté naturelle de Chiang Mai pour les générations futures",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi Nous Choisir
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous ne sommes pas seulement une agence de voyages — nous sommes votre famille à Chiang Mai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Vos Amis Locaux à Chiang Mai
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bee Adventure Tours est né de notre amour pour Chiang Mai et notre désir de partager sa beauté avec le
                monde. Notre équipe de guides locaux apporte des années d'expérience et une véritable passion pour
                montrer aux visiteurs les joyaux cachés du nord de la Thaïlande.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous croyons au tourisme responsable qui profite à la fois à nos invités et aux communautés locales.
                Chaque circuit est conçu pour créer des souvenirs durables tout en respectant la nature et la culture.
              </p>

              <Link href="/about">
                <Button size="lg">En Savoir Plus Sur Nous</Button>
              </Link>
            </div>

            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/happy-tour-guides-and-tourists-with-elephant-in-ch.jpg"
                alt="Notre équipe de guides locaux"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
