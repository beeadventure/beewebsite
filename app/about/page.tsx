"use client"

import { Header } from "@/components/header"
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
              Discover the rich history and vibrant culture of Thung Luang Village, home to over 300 years of Karen
              heritage in the heart of Chiang Mai's mountains.
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
                    Thung Luang Village is located approximately 21 kilometers west of Mae Win Subdistrict
                    Administrative Organization. It is nestled between the tributaries of the river. Villagers are
                    clustered together, surrounded by orchards, and farms are cultivated in the river basin.
                  </p>
                  <p>
                    Thung Luang Village's primary practice is rice farming, followed by rotational cultivation. Forestry
                    officials later tightened regulations, leading to the discontinuation of rotational cultivation,
                    leaving only rice farming and the new agricultural practices promoted by the Royal Project.
                  </p>
                  <p>
                    Ban Thung Luang is located at Village No. 2, Mae Win Subdistrict, Mae Wang District, Chiang Mai
                    Province. The general condition is surrounded by complex mountains such as Doi Ka Cho, Doi Loe Po
                    Ho, Doi Mon Ya, Doi Lo Lu, Doi Pho Do U Cho, Doi That, etc. The village is situated on the mountain
                    ridge and foothills, approximately 500-900 meters above sea level.
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
                      This community has a history of over 300 years of Karen inhabitance. Their culture and rituals
                      reflect a close relationship between humans and nature.
                    </p>
                  </div>
                  <div className="bg-background rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Natural Surroundings</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      There are 10 streams surrounding the village, such as Huai Mae Tien, Huai Pong Dueat, Huai Sai,
                      and Huai Loe Po Ho, flowing through the village with water flowing all year round.
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
                    Most villagers in Thung Luang are primarily farmers. The community practices sustainable agriculture
                    with a focus on rice farming and orchards.
                  </p>
                  <p>
                    Raising livestock, such as cattle and buffalo, is a secondary occupation. Some families also keep
                    pigs, chickens, and rarely, elephants, numbering only one or two.
                  </p>
                  <p>
                    Land ownership can be divided into two main groups: extended families with 20-30 rai of land, and
                    nuclear families with 5-19 rai (including rice and orchards).
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
                Art, particularly weaving, is a prominent skill in the community. Many women in the village are skilled
                weavers, especially the elderly, who regularly weave under their houses in their free time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Karen Weaving</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Karen weaving remains a supplementary activity, in addition to farming. Those who still spend time
                  weaving save their products for important festivals in the district or at tourist attractions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Karen woven fabrics employ a tie-dyeing technique, known as "mat mi." This technique has been passed
                  down from the mothers of current weavers, preserving generations of traditional knowledge.
                </p>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/karen-woman-hand-weaving-traditional.jpg"
                  alt="Karen woman in traditional dress hand-weaving intricate textiles"
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
