import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: Heart,
    title: "Local Passion",
    description: "Born and raised in Chiang Mai, we share our home with genuine love and authentic stories.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate experiences with maximum 12 people ensure personal attention and meaningful connections.",
  },
  {
    icon: Award,
    title: "Expert Guides",
    description: "Licensed local guides with deep cultural knowledge and 10+ years of experience.",
  },
  {
    icon: MapPin,
    title: "Hidden Gems",
    description: "Discover secret spots and local favorites that most tourists never see.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Your Local Friends in <span className="text-primary">Chiang Mai</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              As a family-run business, we've been sharing the magic of Northern Thailand with travelers from around the
              world for over a decade. We bring a good heart to every adventure we create.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              We believe in responsible tourism that benefits local communities, protects our natural environment, and
              creates unforgettable memories. Every tour supports local families, ethical animal sanctuaries, and
              sustainable practices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Link href="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl relative">
              <Image
                src="/happy-tour-guides-and-tourists-with-elephant-in-ch.jpg"
                alt="Bee Adventure Tours guides and happy tourists together with elephant"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
