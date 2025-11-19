"use client"

import Header from "@/components/header"
import FloatingButtons from "@/components/floating-buttons"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingButtons />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              About Our Community
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover the rich history and vibrant culture of Thung Luang Village,
              home to over 300 years of Karen heritage in the heart of Chiang Mai's mountains.
            </p>
          </div>
        </div>
      </section>

      {/* Community History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Community History</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Thung Luang Village is located approximately 21 kilometers west of Mae Win Subdistrict.
                    It is nestled between the tributaries of the river and surrounded by orchards and farms.
                  </p>
                  <p>
                    The community's primary practice is rice farming. Rotational cultivation ended due to forestry regulations,
                    leaving rice and new agricultural practices supported by the Royal Project.
                  </p>
                  <p>
                    The village sits at 500–900 meters above sea level, surrounded by mountain ranges like
                    Doi Ka Cho, Doi Loe Po Ho, Doi Mon Ya, and others.
                  </p>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/karen-elder-teaching-youth-weaving.jpg"
                  alt="Karen elder teaching traditional weaving to young girl"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/karen-rice-harvest-community.jpg"
                  alt="Karen community harvesting rice together in traditional way"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Heritage</h2>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Ethnic Community</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Karen community has lived here for over 300 years. Their culture
                      reflects harmony between people and nature.
                    </p>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Natural Surroundings</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ten streams run throughout the village, including Huai Mae Tien and Huai Pong Dueat,
                      providing year-round water sources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occupations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Traditional Occupations</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Most villagers are farmers practicing sustainable agriculture, primarily rice and orchard farming.
                  </p>
                  <p>
                    Livestock, including cattle and buffalo, are kept as secondary income sources.
                  </p>
                  <p>
                    Land ownership varies from extended families with 20–30 rai to nuclear families with 5–19 rai.
                  </p>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/karen-farmers-rice-fields-chiang-mai.jpg"
                  alt="Traditional Farming"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Handicrafts Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Traditional Handicrafts</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Weaving is a cherished tradition practiced by skilled Karen women, especially the elders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Karen Weaving</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Weaving is often done in free time and pieces are saved for festivals or special events.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Karen fabrics often use a traditional tie-dye technique called "mat mi."
                </p>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/karen-woman-hand-weaving-traditional.jpg"
                  alt="Karen woman weaving"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/karen-traditional-clothing-colorful.jpg"
                  alt="Traditional Clothing"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Traditional Attire</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Men wear traditional clothing during festivals, including the signature red hand-woven shirt.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sarongs differ between married and unmarried men — a key cultural symbol.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Women’s sarongs include intricate beadwork and patterns passed down through generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Transmission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Preserving Our Heritage</h2>
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Knowledge is passed through family traditions and community-level rituals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Royal Project in 1987 transformed traditional farming into more sustainable agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Experience Our Culture</h2>
            <p className="text-lg mb-8 opacity-90">
              Join us in exploring Karen culture while supporting the preservation of our traditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors"
              >
                View Our Tours
              </a>
              <a
                href="https://wa.me/66838087798"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
