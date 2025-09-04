import Image from "next/image"
import { Mail, Phone, Github, FileDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4 font-poppins animate-title">
            Mansi Patel
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-inter animate-slide-in">
            IT Student | UI/UX Designer | Frontend Developer
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Passionate about creating intuitive and engaging digital experiences that blend creativity with functionality.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="gap-2 hover-lift animate-fade-in">
              <Mail className="w-4 h-4" />
              mansipatel7055@gmail.com
            </Button>
            <Button variant="outline" className="gap-2 hover-lift animate-fade-in" asChild>
              <a href="https://github.com/01Maya" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
          <Button className="btn-gradient hover-lift animate-fade-in" asChild>
            <a 
              href="https://drive.google.com/file/d/1TfybJoRodyyRhl_MTW7c2tuA8vE2Hs9Q/view?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
          <div className="mt-12 relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-200 shadow-lg group animate-scale-in">
            <Image
  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/r%20p-XNCnkyodZj2LkO36UIgEjhktTCn8ql.png"
  alt="Mansi Patel"
  width={192}
  height={192}
  priority
  className="object-cover group-hover:scale-110 transition-transform duration-300"
/>
          </div>
        </div>
      </div>
    </section>
  )
}

