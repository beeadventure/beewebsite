import Header from "@/components/Header"
import FloatingButtons from "@/components/FloatingButtons"
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About Our Community</h1>
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
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Traditional Attire</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Men of Thung Luang village generally dress like lowland or city dwellers. However, on important
                  festivals, they wear traditional tribal attire, including a red handwoven shirt and black khaki pants.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Karen men distinguish between married and unmarried men by wearing a sarong. A patterned sarong called
                  "taetua kee" is for married men, while a red sarong called "taet a dok ngo" is for unmarried men.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Women's sarongs are adorned with patterns and beads, stitched into the woven fabric, showcasing
                  intricate craftsmanship passed down through generations.
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
                Traditional knowledge transmission and organizational arrangements can be divided into two levels: the
                family and kinship level and the community level.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Knowledge transmission at the family and kinship level involves daily life and family rituals. Community
                knowledge transmission involves various rituals and community-level production activities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In Thung Luang Village, the Royal Project initiated a new agricultural plan in 1987, which resulted in
                the evolution of traditional farming practices, balancing heritage with sustainable modern agriculture.
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
              Join us for an authentic journey through Karen heritage, where every tour supports our community and helps
              preserve our traditions for future generations.
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
