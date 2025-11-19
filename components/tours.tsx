"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { BookingFormDialog } from "@/components/booking-form-dialog"

const tours = [
  {
    id: 1,
    title: "2 Days / 1 Night Trekking + Homestay",
    pickup: "7:30 – 8:00 AM",
    return: "4:00 – 5:30 PM (next day)",
    adultPrice: "฿3,600",
    childPrice: "",
    pricingNote: "4 to 8 people",
    smallGroupNote: "1 – 3 pax please feel free to contact me to make the best deal for you",
    image: "/trekking-elephants-homestay-rafting-waterfall-chia.jpg",
    galleryImages: [
      "/2646_0.jpg",
      "/blue-temple-chiang-mai.jpg",
      "/rice-harvesting-locals.jpg",
      "/2653_0.jpg",
      "/2641_0.jpg",
      "/2636_0.jpg",
    ],
    itinerary: [
      "Elephants sanctuary: Enjoy bathing & feeding the elephants",
      "Temple: Visiting Wat Phra Sri Somdej",
      "Trekking about 1 hour (lunchtime) · Enjoy seasonal agricultural activities with the Hilltribe people",
      "Arrive homestay · cooking dinner · relax time",
      "Night-time activity",
      "8:00–8:40 AM: Wake up · Have breakfast",
      "Have fun with students",
      "Waterfall Mae Sapok & cool off",
      "Mae Win bamboo rafting",
      "Pick up & drop off at your place",
    ],
    includes: "Lunch, Dinner & Breakfast · Tour guide · Transportation · Entrance fees · Insurance",
  },
  {
    id: 2,
    title: "Full Day Trekking",
    pickup: "7:30 – 8:00 AM",
    return: "4:00 – 5:30 PM",
    adultPrice: "฿2,600",
    childPrice: "",
    pricingNote: "4 to 8 people",
    smallGroupNote: "1 – 3 pax please feel free to contact me to make the best deal for you",
    image: "/elephants-temple-karen-village-bamboo-rafting-wate.jpg",
    galleryImages: [
      "/village-women-tea-gathering.jpg",
      "/blue-temple-ornate-entrance.jpg",
      "/trekking-group-elephant-jungle.jpg",
      "/artisan-basket-weaving.jpg",
      "/tourist-elephant-hug.jpg",
      "/traditional-loom-weaving-lesson.jpg",
    ],
    itinerary: [
      "Elephants sanctuary: Enjoy bathing & feeding the elephants",
      "Temple: Visiting Wat Phra Sri Somdej",
      "Karen Village: Ban Thung Lung Village",
      "Waterfall Mae Sapok & cool off",
      "Mae Win bamboo rafting",
      "Pick up & drop off at your place",
    ],
    includes: "Lunch · Tour guide · Transportation · Entrance fees · Insurance",
  },
  {
    id: 3,
    title: "Full Day Sticky Waterfall Tour",
    pickup: "5:30 – 5:40 AM",
    return: "5:00 PM",
    adultPrice: "฿2,800",
    childPrice: "",
    pricingNote: "4 to 8 people",
    smallGroupNote: "1 – 3 pax please feel free to contact me to make the best deal for you",
    image: "/sticky-waterfall-couple-climbing-limestone-chiang-.jpg",
    galleryImages: [
      "/sticky-tour-group-selfie-guides.jpg",
      "/sticky-waterfall-couple-limestone.jpg",
      "/sticky-waterfall-tourists-climbing-up.jpg",
      "/sticky-waterfall-jungle-path-entrance.jpg",
      "/sticky-waterfall-group-with-guide.jpg",
      "/trekking-group-elephant-jungle.jpg",
    ],
    itinerary: [
      "Watch sunrise at Doi Suthep",
      "Wat pha lat",
      "Enjoy beautiful scenery at Huay Tueng Thao lake",
      "Lunch + water",
      "Enjoy Sticky waterfall & Refresh yourself",
      "Ban Den Temple",
    ],
    includes: "Pick up & drop off at your place",
  },
]

export function Tours() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTour, setSelectedTour] = useState<string>("")

  const handleBookNow = (tourTitle: string) => {
    setSelectedTour(tourTitle)
    setIsDialogOpen(true)
  }

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">Our Tours</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Experience authentic Chiang Mai with our carefully crafted adventures, led by passionate local guides.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-100"
              style={{ borderRadius: "0.75rem" }}
            >
              {tour.galleryImages ? (
                <div className={`grid ${tour.galleryImages.length === 6 ? "grid-cols-3" : "grid-cols-2"} gap-1`}>
                  {tour.galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden relative">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${tour.title} - Photo ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">{tour.title}</CardTitle>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Pickup: {tour.pickup}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">Return: {tour.return}</div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                  <div className="flex flex-col">
                    <div>
                      <div className="text-lg font-bold" style={{ color: "oklch(0.45 0.15 160)" }}>
                        {tour.pricingNote} / {tour.adultPrice}
                      </div>
                      {tour.childPrice && (
                        <div className="text-sm text-gray-600">Child (≤7 yrs) – {tour.childPrice} / person</div>
                      )}
                    </div>
                    {tour.smallGroupNote && (
                      <div className="mt-2 text-xs text-gray-600 italic">** {tour.smallGroupNote}</div>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Your tour includes:</h4>
                  <ul className="space-y-1">
                    {tour.itinerary.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <ArrowRight
                          className="w-3 h-3 mt-1 mr-2 flex-shrink-0"
                          style={{ color: "oklch(0.45 0.15 160)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Included:</span> {tour.includes}
                  </p>
                </div>

                <Button
                  className="w-full text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "oklch(0.45 0.15 160)" }}
                  onClick={() => handleBookNow(tour.title)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center space-y-1">
          <p className="text-sm text-gray-500">2 people 5000 thb per person</p>
          <p className="text-sm text-gray-500">3 people 4000 thb per person</p>
          <p className="text-sm text-gray-500">4 people + 3500 thb per person</p>
          <p className="text-sm text-gray-500">English / French guide available — additional fee: ฿3,000 / day</p>
        </div>
      </div>
      <BookingFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} tourTitle={selectedTour} />
    </section>
  )
}
