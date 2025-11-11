"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const projects = [
  { title: "Amplify", img: "/amplify sma.jpeg", link: "https://amplify-socialmediamarketing.vercel.app/" },
  { title: "Paw-Care", img: "/paw care.jpeg", link: "https://paww-care.vercel.app/" },
  { title: "Fitness", img: "/fitness.jpeg", link: "https://fitness-o1.vercel.app/" },
  { title: "Coffeo", img: "/coffeo.jpeg", link: "https://coffeo-brew.vercel.app/" },
  { title: "Olea Skin care", img: "/Olea Skin Care.jpeg", link: "https://olea-skincare-landing-page.vercel.app/" },
  { title: "Isabella Hair Studio", img: "/hairstudio.jpeg", link: "https://bella-hair-studio.vercel.app/" },
  { title: "Profile", img: "/profile.png", link: "https://profile01-minimal.vercel.app/" },
  { title: "Real Estate", img: "/RealEstate.jpeg", link: "https://real-e-state-sigma.vercel.app/" },
  { title: "Luxe Nails Studio", img: "/nails.jpeg", link: "https://nail-studio-smoky.vercel.app/" },
  { title: "Wedding Planner", img: "/Wedding planner.jpeg", link: "https://moments-wedding-planner.vercel.app/" },
  { title: "Cryptovault", img: "/crypto.jpeg", link: "https://crypto-vault-o1.vercel.app/" },
]

export function CurvedShowcaseCarousel() {
  const autoplay = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(projects.length)

  // ✅ Properly typed Embla carousel effect
  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    const onSelect = () => setCurrent(api.selectedScrollSnap())

    api.on("select", onSelect)
    onSelect()

    // ✅ Clean up correctly typed
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // ✅ Fade-in on reveal
  const ref = React.useRef<HTMLElement | null>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.15 })

    if (ref.current) obs.observe(ref.current)
    return () => {
      obs.disconnect()
    }
  }, [])

  return (
    <section
      ref={ref}
      className={cn(
        "w-full py-20 bg-purple-20 dark:bg-neutral-950 overflow-hidden transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <h2 className="text-center text-3xl section-title animate-title">
        Featured Work
      </h2>

      <div className="max-w-6xl mx-auto relative">
        <Carousel
          setApi={setApi}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          opts={{ loop: true }}
          className="cursor-grab active:cursor-grabbing"
        >
          <CarouselContent className="flex gap-12 px-6">
            {projects.map((item, i) => {
              const isActive = i === current

              return (
                <CarouselItem
                  key={i}
                  className="basis-[85%] sm:basis-2/3 lg:basis-1/2 flex justify-center"
                >
                  <a href={item.link} target="_blank" className="block w-full group">
                    <Card
                      style={{
                        transform: `scale(${isActive ? 1.1 : 0.85})`,
                        opacity: isActive ? 1 : 0.55,
                        transition: "transform .7s cubic-bezier(.19,1,.22,1), opacity .4s"
                      }}
                      className={cn(
                        "overflow-hidden rounded-2xl backdrop-blur-xl",
                        "bg-white/40 dark:bg-white/10",
                        "border border-white/50 dark:border-white/20",
                        "shadow-[0_12px_40px_-10px_rgba(109,40,217,0.15)]",
                        "hover:shadow-[0_18px_50px_-10px_rgba(109,40,217,0.3)]",
                        "transition-all duration-700"
                      )}
                    >
                      <CardContent className="p-3">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                          {/* ✅ Optimized Next.js <Image /> */}
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover rounded-2xl 
                              transition-all duration-\[1500ms\]
                              ease-\[cubic-bezier(.19,1,.22,1)\]
                              group-hover:scale-\[1.18\]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={i < 2}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>

                        <div className="pt-4 text-center">
                          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 tracking-tight">
                            {item.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex scale-90" />
          <CarouselNext className="hidden md:flex scale-90" />
        </Carousel>

        {/* ✅ Carousel Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-all",
                i === current
                  ? "w-6 bg-purple-600 dark:bg-purple-400"
                  : "bg-purple-300 dark:bg-purple-700 hover:bg-purple-400 dark:hover:bg-purple-600"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
