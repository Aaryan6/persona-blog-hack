"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BlogIdPage({ id }: { id: string }) {
  const post = blogPosts.find((post) => post.id === Number(id)) || blogPosts[0];

  // Format the content with proper paragraphs
  const formattedContent = post.content
    .split("\n\n")
    .map((paragraph, index) => (
      <p key={index} className="mb-6">
        {paragraph}
      </p>
    ));

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);
  return (
    <main className="min-h-screen bg-[#f8f8f6]">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <Link href="/blog">
          <Button
            variant="ghost"
            className="mb-8 pl-0 hover:pl-2 transition-all flex items-center gap-2 text-[#5b6084]"
          >
            <ArrowLeft size={18} />
            Back to all posts
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Post header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#f0f0f0] hover:bg-[#e6e6e6] text-[#5b6084] border-none">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-[#5b6084]">
                <Calendar size={14} className="mr-1" />
                {post.date}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#2d3047] mb-6">
              {post.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image
                    src="/profile-image.png"
                    alt="Aaryan Patel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-[#2d3047]">Aaryan Patel</div>
                  <div className="flex items-center text-xs text-[#5b6084]">
                    <Calendar size={12} className="mr-1" />
                    {post.date}
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#d9d9d9] hover:border-[#2d3047] hover:bg-white text-[#2d3047] gap-2"
              >
                <Share2 size={14} />
                Share
              </Button>
            </div>
          </div>

          {/* Featured image */}
          <div className="aspect-[16/9] relative rounded-3xl overflow-hidden mb-10">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Post content */}
          <div className="prose prose-lg max-w-none prose-headings:text-[#2d3047] prose-headings:font-medium prose-p:text-[#5b6084] prose-li:text-[#5b6084] mb-12">
            {formattedContent}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags &&
              post.tags.map((tag, index) => (
                <Link key={index} href={`/blog?tag=${tag}`}>
                  <Badge
                    variant="outline"
                    className="rounded-full border-[#d9d9d9] hover:border-[#2d3047] hover:bg-white text-[#5b6084]"
                  >
                    #{tag}
                  </Badge>
                </Link>
              ))}
          </div>

          {/* Author bio */}
          <div className="bg-white rounded-3xl p-6 border border-[#e6e6e6] mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden">
                <Image
                  src="/profile-image.png"
                  alt="Aaryan Patel"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#2d3047] mb-1">
                  Written by Aaryan Patel
                </h3>
                <p className="text-[#5b6084]">
                  Designer and photographer sharing thoughts on creativity,
                  design, and finding beauty in everyday moments.
                </p>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2d3047] mb-6">
                You might also like
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-[#e6e6e6] hover:shadow-md transition-all duration-300">
                      <div className="aspect-[16/9] relative">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <Badge className="bg-[#f0f0f0] hover:bg-[#e6e6e6] text-[#5b6084] border-none mb-2">
                          {relatedPost.category}
                        </Badge>
                        <h4 className="font-medium text-[#2d3047] group-hover:text-[#5b6084] transition-colors">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#e6e6e6] text-center">
            <h3 className="text-xl font-medium text-[#2d3047] mb-3">
              Enjoyed this article?
            </h3>
            <p className="text-[#5b6084] mb-6">
              Subscribe to my newsletter to get notified about new posts and
              insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-full border border-[#e6e6e6] focus:outline-none focus:border-[#2d3047]"
              />
              <Button className="rounded-full bg-[#2d3047] hover:bg-[#1a1c2e] text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

const blogPosts = [
  {
    id: 1,
    title: "Finding Beauty in Everyday Moments",
    excerpt:
      "How slowing down and observing the world around us can lead to unexpected moments of joy and inspiration in our daily lives.",
    category: "Lifestyle",
    date: "March 25, 2024",
    readTime: "5 min read",
    image: "/images/sunset-path.jpeg",
    tags: ["mindfulness", "beauty", "observation"],
    content:
      "In the relentless rush of modern life, it's easy to overlook the small wonders that surround us. We navigate our days on autopilot, ticking off tasks, rushing from one appointment to the next, our minds often preoccupied with the future or ruminating on the past. But what happens when we consciously choose to slow down, even for just a few minutes each day? What beauty might we uncover in the mundane?\n\nFinding beauty in everyday moments isn't about seeking out grand spectacles; it's about shifting our perception. It's noticing the way sunlight streams through the window, illuminating dust motes dancing in the air. It's savoring the warmth of a morning cup of coffee, the intricate patterns of frost on a winter pane, or the vibrant green of a weed pushing through cracked pavement. It's hearing the distant laughter of children playing or the rhythmic hum of the city.\n\nThis practice requires mindfulness – a gentle awareness of the present moment without judgment. Start small. During your commute, put away your phone and look out the window. Observe the architecture, the people, the interplay of light and shadow. While walking, pay attention to the textures underfoot, the scent of rain on asphalt, the shapes of the clouds. While preparing a meal, notice the colors and shapes of the vegetables, the sizzle in the pan, the aroma filling the kitchen.\n\nThese moments, seemingly insignificant on their own, accumulate. They weave a richer tapestry of experience, grounding us in the present and fostering a sense of gratitude. Observing the world with intention can transform routine into ritual, and the ordinary into something quite extraordinary. It's a reminder that beauty isn't just confined to galleries or exotic destinations; it's here, now, waiting to be noticed.",
  },
  {
    id: 2,
    title: "Kyoto Mornings: A Photographic Journey",
    excerpt:
      "Exploring the serene temples and quiet streets of Kyoto at dawn, capturing the tranquil beauty before the city awakens.",
    category: "Travel",
    date: "March 18, 2024",
    readTime: "8 min read",
    image: "/images/kyoto-neighborhood.jpeg",
    tags: ["travel", "photography", "japan"],
    content:
      "There's a unique magic to Kyoto in the early morning, a stillness that feels almost sacred. Before the tour buses arrive and the streets fill with bustling crowds, the ancient capital reveals a different, more intimate face. Setting out with my camera as dawn breaks is a pilgrimage of sorts, a quest to capture the soul of the city in its quietest moments.\n\nThe air is crisp, carrying the faint scent of incense from nearby temples. The first rays of sun paint the sky in soft pastels, casting a warm, ethereal glow on the wooden facades of traditional machiya houses. In Arashiyama, the bamboo grove stands silent and majestic, the tall stalks filtering the nascent light, creating patterns of shadow and luminescence on the path. It feels like stepping into another world, hushed and reverent.\n\nFurther east, the iconic Fushimi Inari Shrine is almost deserted. Walking beneath the thousands of vibrant red torii gates, normally a vibrant river of people, becomes a meditative experience. The only sounds are the chirping of birds and the crunch of gravel underfoot. Each gate, bathed in the soft morning light, feels like a portal, framing views of the surrounding forest and the awakening city below.\n\nEven in Gion, the historic geisha district, the early hours offer a different perspective. The lanterns are off, the teahouses quiet. The cobblestone streets, often teeming with visitors, are empty, allowing one to appreciate the elegant architecture and imagine the stories held within these walls. It's in these stolen moments, between night and day, that Kyoto's enduring beauty truly resonates. It requires an early start, but the reward – witnessing the city stir gently from its slumber, bathed in golden light – is an experience photographer and traveler alike should cherish.",
  },
  {
    id: 3,
    title: "The Principles of Wabi-Sabi in Modern Design",
    excerpt:
      "Understanding the Japanese aesthetic of finding beauty in imperfection and its application in contemporary interiors and products.",
    category: "Design",
    date: "March 11, 2024",
    readTime: "6 min read",
    image: "/images/japanese-room.jpeg",
    tags: ["design", "wabi-sabi", "interiors"],
    content:
      "In a world often obsessed with flawless finishes and mass-produced perfection, the Japanese aesthetic of Wabi-Sabi offers a refreshing counterpoint. Rooted in Zen Buddhism, Wabi-Sabi is the appreciation of beauty that is imperfect, impermanent, and incomplete. It's a worldview centered on accepting transience and embracing the natural cycle of growth, decay, and change.\n\nHow does this translate into modern design? It's about moving away from the sterile and the overly polished towards authenticity and character. In interiors, Wabi-Sabi might manifest as handcrafted ceramics with slight irregularities, a weathered wooden table showing the marks of time, or textiles made from natural, perhaps unevenly dyed fibers. It values materials that age gracefully – wood that develops a patina, metal that oxidizes, plaster that subtly cracks.\n\nThe color palette is typically muted and drawn from nature: earthy browns, soft grays, subtle greens, and deep indigos. Simplicity is key, focusing on uncluttered spaces that allow each object to breathe and be appreciated for its inherent qualities. It's not about shabby chic or contrived rusticity, but rather an intentional celebration of materials in their most natural and unpretentious state.\n\nBeyond interiors, Wabi-Sabi principles can influence product design, encouraging the use of sustainable materials and processes that acknowledge imperfection. It fosters an appreciation for items that tell a story, that bear the marks of their making or their use. In a consumer culture often driven by the new and the disposable, Wabi-Sabi invites us to find value and beauty in the enduring, the authentic, and the perfectly imperfect. It encourages a deeper connection with the objects we live with, seeing them not just as functional items, but as carriers of time, nature, and quiet beauty.",
  },
  {
    id: 4,
    title: "Chasing Light: The Golden Hour Project",
    excerpt:
      "A collection of photographs taken during the magical golden hours, exploring how light transforms ordinary scenes.",
    category: "Lifestyle",
    date: "March 04, 2024",
    readTime: "4 min read",
    image: "/images/sunset-path.jpeg",
    tags: ["photography", "light", "observation"],
    content:
      "Photographers often speak reverently of the 'golden hour' – that fleeting period shortly after sunrise and before sunset when the daylight is softer, warmer, and more diffuse than at other times of the day. The low angle of the sun creates long, dramatic shadows and bathes landscapes, cityscapes, and portraits in a flattering, almost magical glow. This project was born from a fascination with this transformative light.\n\nFor several months, I made a point of being out with my camera during these precious windows of time. The goal wasn't necessarily to find spectacular subjects, but rather to observe how this specific quality of light could elevate the ordinary. A simple street corner, a quiet park bench, the silhouette of a tree against the sky – all take on a different character during the golden hour.\n\nThe low-angle light emphasizes textures, making cobblestones gleam and brick walls radiate warmth. Shadows stretch long and deep, adding depth and mystery to the composition. Colors become richer, more saturated – skies ignite in hues of orange, pink, and gold. Backlighting subjects can create stunning rim lighting or dramatic silhouettes, isolating form and shape.\n\nWhat became clear through this project is that light is not just illumination; it's an active element in the photograph, capable of evoking mood, defining form, and transforming perception. Chasing the golden hour became a practice in patience and observation, a reminder that sometimes the most beautiful moments are ephemeral. It taught me to see familiar places with new eyes, appreciating the daily spectacle the sun performs, free of charge, twice a day.",
  },
  {
    id: 5,
    title: "The Art of the Urban Sketch: Capturing City Life",
    excerpt:
      "Rediscovering the charm of cities through quick sketches and observations, finding stories hidden in plain sight.",
    category: "Lifestyle",
    date: "February 26, 2024",
    readTime: "7 min read",
    image: "/images/japanese-street.jpeg",
    tags: ["sketching", "urban", "creativity"],
    content:
      "In an age dominated by digital snapshots, the simple act of sitting down with a sketchbook and pen to capture a scene feels almost rebellious. Urban sketching, the practice of drawing on location, offers a powerful way to connect with our surroundings, forcing us to observe more deeply and engage with the environment in a way that a quick photo often bypasses.\n\nIt's not about creating masterpieces; it's about the process. Finding a spot on a busy street corner, a quiet park, or inside a bustling cafe, you begin to notice details you'd otherwise miss: the intricate ironwork on a balcony, the way people interact in a public square, the unique character of a building's facade, the play of light on different surfaces. Sketching requires you to translate this three-dimensional world onto a two-dimensional page, making choices about what to include, what to emphasize, and what to leave out.\n\nEach sketch becomes a visual diary, capturing not just the look of a place, but the feeling of being there – the sounds, the smells, the energy. Looking back at a sketchbook years later evokes memories far more vivid than scrolling through a camera roll. There's the memory of the cold wind whipping around you as you sketched that cathedral, the taste of the coffee you sipped while drawing that market scene, the brief conversation with a curious passerby.\n\nGetting started is simple: a basic sketchbook and a pen or pencil are all you need. Don't worry about perfection. Focus on observation, capturing the essence of the scene. Let your lines be loose, embrace mistakes. Urban sketching is a meditation, a way to slow down, see the beauty in the everyday urban landscape, and document the world one drawing at a time. It transforms passive sightseeing into active engagement, revealing the hidden stories and unique charm of the cities we inhabit or visit.",
  },
  {
    id: 6,
    title: "Lost in Lisbon: Textures and Tiles",
    excerpt:
      "A visual diary focusing on the intricate tilework (azulejos) and diverse textures found throughout Lisbon's historic neighborhoods.",
    category: "Travel",
    date: "February 19, 2024",
    readTime: "9 min read",
    image: "/images/lisbon-street.jpeg",
    tags: ["travel", "architecture", "portugal"],
    content:
      "Lisbon is a city that engages all the senses, but visually, it's a feast of texture and color, most famously embodied in its ubiquitous azulejos – the painted tin-glazed ceramic tiles that adorn facades, churches, palaces, and even simple homes. Wandering through neighborhoods like Alfama, Bairro Alto, and Mouraria becomes a treasure hunt, discovering intricate patterns and vibrant scenes depicted on these ceramic canvases.\n\nThe azulejos range from simple, geometric patterns in blues and whites to elaborate, multi-colored narrative panels depicting historical events, religious scenes, or floral motifs. They are not just decoration; they are part of the city's identity, reflecting centuries of history, art, and craftsmanship. Photographing them becomes an obsession – capturing the way sunlight reflects off their glazed surfaces, the contrast between a pristine tiled wall and a crumbling adjacent facade, the sheer variety of designs encountered around every corner.\n\nBut Lisbon's textural richness extends beyond its tiles. There's the rough, weathered stone of ancient castle walls, the smooth, worn marble of church floors, the uneven cobblestones (calçada portuguesa) arranged in intricate black and white patterns underfoot. There's the peeling paint on brightly colored doors, the gritty texture of rendered walls, the smooth, cool metal of tram tracks gleaming in the sun. Even the laundry hanging from balconies adds a layer of soft, fluttering texture to the urban fabric.\n\nThis visual diary attempts to capture that tactile quality. It focuses on close-ups, isolating patterns and surfaces, exploring the interplay of light and shadow on different materials. From the glossy sheen of azulejos to the ruggedness of ancient stone, Lisbon offers a constant source of inspiration for anyone attuned to the beauty found in surface details. It's a city best explored on foot, allowing yourself to get lost in its labyrinthine streets, constantly surprised by the textural richness that defines its unique character.",
  },
  {
    id: 7,
    title: "Minimalism Isn't Just White Walls: Finding Your Style",
    excerpt:
      "Exploring different facets of minimalist design beyond the stereotypes, focusing on intentionality and personal expression.",
    category: "Design",
    date: "February 12, 2024",
    readTime: "5 min read",
    image: "/images/cozy-living-room.jpeg",
    tags: ["design", "minimalism", "interiors"],
    content:
      "When people hear 'minimalism,' they often picture stark white rooms, devoid of personality, perhaps furnished with a single, uncomfortable-looking chair. While that's one interpretation, true minimalism in design is far richer and more nuanced. At its core, minimalism isn't about deprivation; it's about intentionality. It's about consciously choosing what to include in your space and life, focusing on items that are functional, beautiful, or hold significant personal meaning, and eliminating the rest – the clutter, the excess, the distractions.\n\nMinimalism doesn't have to be cold or impersonal. A minimalist space can be warm, inviting, and deeply reflective of its inhabitants. It can embrace color, texture, and carefully curated objects. The key is mindful curation. Instead of filling shelves with meaningless trinkets, a minimalist approach might feature one or two treasured art pieces or handcrafted objects. Instead of overwhelming patterns, it might use texture – a plush rug, a chunky knit throw, natural wood grain – to add warmth and visual interest.\n\nThe focus shifts from quantity to quality. Investing in well-made, durable furniture and objects that you truly love is more aligned with minimalist principles than constantly acquiring cheap, disposable items. It's about creating breathing room, both literally and figuratively. An uncluttered space can lead to an uncluttered mind, promoting calm and focus.\n\nFinding your own minimalist style involves introspection. What objects truly add value to your life? What colours and textures make you feel calm and happy? What level of 'stuff' feels right for you? It might be Scandinavian-inspired, with its light woods and cozy textiles ('hygge'). It could be Japanese-influenced, emphasizing natural materials and tranquility (Wabi-Sabi). Or it could be a unique blend that reflects your personal history and aesthetic preferences. Ultimately, minimalism is a tool, not a rigid set of rules. It's about designing your environment with purpose, creating a space that supports your well-being and allows the beauty of simplicity to shine through.",
  },
  {
    id: 8,
    title: "Morning Coffee Rituals: A Moment of Calm",
    excerpt:
      "The simple act of preparing and savoring a morning coffee as a mindful practice and a source of quiet joy.",
    category: "Everyday Beauty",
    date: "February 05, 2024",
    readTime: "3 min read",
    image: "/images/morning-coffee.jpeg",
    tags: ["mindfulness", "rituals", "everyday"],
    content:
      "For many, the morning coffee is a necessity – a jolt of caffeine to kickstart a busy day. But what if we transformed this daily habit into a mindful ritual, a dedicated moment of calm before the demands of the day begin?\n\nThe process itself can be meditative. The measuring of the beans, the whir of the grinder releasing that rich aroma, the slow pour of hot water over the grounds, watching the dark liquid drip patiently into the mug. Each step, performed with awareness, can become a small anchor in the present moment.\n\nThen comes the act of savoring. Instead of gulping it down while checking emails or rushing out the door, take a few minutes. Find a comfortable spot, perhaps near a window. Hold the warm mug in your hands, feel its heat. Inhale the steam, noticing the complex notes of the coffee's aroma. Take the first sip slowly, paying attention to the taste, the temperature, the sensation in your mouth.\n\nThis simple ritual, lasting perhaps only five or ten minutes, can set a different tone for the entire day. It's a conscious choice to pause, to appreciate a simple pleasure, to connect with your senses. It's a reminder that moments of peace and beauty don't require grand gestures; they can be found in the most ordinary routines, if only we take the time to notice. The morning coffee, elevated from mere habit to mindful ritual, becomes a small, accessible pocket of everyday beauty.",
  },
];
