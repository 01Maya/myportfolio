import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { CurvedShowcaseCarousel } from "@/components/CurvedShowcaseCarousel"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <Hero />
      <CurvedShowcaseCarousel />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  )
}

