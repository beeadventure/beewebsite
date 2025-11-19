"use client"

import { useState } from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, MapPin } from "lucide-react"
import BookingFormDialog from "@/components/booking-form-dialog"

export default function ToursFr() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTour, setSelectedTour] = useState<string>("")

  const handleBookNow = (tourTitle: string) => {
    setSelectedTour(tourTitle)
    setIsDialogOpen(true)
  }

  const tours = [
    {
      title: "2 Jours / 1 Nuit Trekking + Séjour chez l'habitant",
      images: [
        "/2646_0.jpg",
        "/blue-temple-chiang-mai.jpg",
        "/rice-harvesting-locals.jpg",
        "/2653_0.jpg",
        "/2641_0.jpg",
        "/2636_0.jpg",
      ],
      pickup: "7h30 - 8h00",
      return: "16h00 - 17h30 (le lendemain)",
      price: "฿3,600 / personne",
      childPrice: "",
      pricingNote: "4 à 8 personnes",
      smallGroupNote:
        "1 – 3 pax n'hésitez pas à me contacter pour faire la meilleure offre pour vous",
      includes: [
        "Sanctuaire d'éléphants : Profitez du bain et de nourrir les éléphants",
        "Temple : Visite de Wat Phra Sri Somdej",
        "Trekking environ 1 heure + déjeuner",
        "Activités agricoles saisonnières avec les habitants",
        "Dîner + nuit chez l'habitant",
        "Activité nocturne",
        "Petit-déjeuner + activités locales",
        "Cascade Mae Sapok",
        "Rafting en bambou Mae Win",
      ],
      included:
        "Déjeuner, Dîner & Petit-déjeuner · Guide touristique · Transport · Frais d'entrée · Assurance",
    },

    {
      title: "Trekking d'une Journée Complète",
      images: [
        "/village-women-tea-gathering.jpg",
        "/blue-temple-ornate-entrance.jpg",
        "/trekking-group-elephant-jungle.jpg",
        "/artisan-basket-weaving.jpg",
        "/tourist-elephant-hug.jpg",
        "/traditional-loom-weaving-lesson.jpg",
      ],
      pickup: "7h30 - 8h00",
      return: "16h00 - 17h30",
      price: "฿2,600 / personne",
      childPrice: "",
      pricingNote: "4 à 8 personnes",
      smallGroupNote:
        "1 – 3 pax n'hésitez pas à me contacter pour faire la meilleure offre pour vous",
      includes: [
        "Sanctuaire d'éléphants",
        "Temple Wat Phra Sri Somdej",
        "Village Karen Ban Thung Lung",
        "Cascade Mae Sapok",
        "Rafting en bambou Mae Win",
      ],
      included:
        "Déjeuner · Guide touristique · Transport · Frais d'entrée · Assurance",
    },

    {
      title: "Visite Complète de la Cascade Collante",
      images: [
        "/sticky-tour-group-selfie-guides.jpg",
        "/sticky-waterfall-couple-limestone.jpg",
        "/sticky-waterfall-tourists-climbing-up.jpg",
        "/sticky-waterfall-jungle-path-entrance.jpg",
        "/sticky-waterfall-group-with-guide.jpg",
        "/trekking-group-elephant-jungle.jpg",
      ],
      pickup: "5h30 - 5h40",
      return: "17h00",
      price: "฿2,800 / personne",
      childPrice: "",
      pricingNote: "4 à 8 personnes",
      smallGroupNote:
        "1 – 3 pax n'hésitez pas à me contacter pour faire la meilleure offre pour vous",
      includes: [
        "Lever de soleil au Doi Suthep",
        "Wat Pha Lat",
        "Lac Huay Tueng Thao",
        "Déjeuner + eau",
        "Cascade Collante",
        "Temple Ban Den",
      ],
      included: "Prise en charge et retour à votre hébergement",
    },
  ]

  return (
    <section id="tours" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nos Circuits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez parmi nos circuits soigneusement conçus pour une expérience inoubliable
          </p>
        </div>

        {/* TOUR CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* IMAGES GRID */}
              <div className={`grid ${tour.images.length === 6 ? "grid-cols-3" : "grid-cols-2"} gap-1 p-1`}>
                {tour.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="relative h-32">
                    <Image
                      src={img}
                      alt={`${tour.title} image ${imgIndex + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ))}
              </div>

              {/* CONTENT */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{tour.title}</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Prise en charge: {tour.pickup} | Retour: {tour.return}</span>
                  </div>

                  <div className="flex items-start text-sm">
                    <Users className="w-4 h-4 mr-2 mt-1 text-primary" />
                    <div>
                      <div className="font-semibold">
                        {tour.pricingNote} / {tour.price}
                      </div>
                      {tour.smallGroupNote && (
                        <div className="text-xs text-muted-foreground italic mt-1">
                          ** {tour.smallGroupNote}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* INCLUDES LIST */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Votre Circuit Comprend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {tour.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* INCLUDED */}
                <div className="mb-4 p-3 bg-muted rounded-lg text-sm">
                  <MapPin className="w-4 h-4 inline mr-1 text-primary" />
                  <strong>Inclus:</strong> {tour.included}
                </div>

                <Button className="w-full" onClick={() => handleBookNow(tour.title)}>
                  Réserver Maintenant
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Guide anglais / français disponible — frais supplémentaires: ฿3,000 / jour
          </p>
        </div>
      </div>

      <BookingFormDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        tourTitle={selectedTour}
      />
    </section>
  )
}
