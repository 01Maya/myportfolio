"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, User, Briefcase, Code2, GraduationCap, Mail, Menu} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Nav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        threshold: 0.5,
        rootMargin: "-80px 0px 0px 0px"
      }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", icon: Home },
    { name: "About", icon: User },
    { name: "Projects", icon: Code2 },
    { name: "Skills", icon: Briefcase },
    { name: "Experience", icon: GraduationCap },
  ]

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {navItems.map(({ name, icon: Icon }) => (
        <Link
          key={name}
          href={`#${name.toLowerCase()}`}
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById(name.toLowerCase());
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
            if (onClick) onClick();
          }}
          className={`${
            activeSection === name.toLowerCase()
              ? "text-purple-600 font-semibold"
              : "text-gray-600"
          } hover:text-purple-600 transition-colors flex items-center gap-2 group`}
        >
          <Icon className="w-4 h-4" />
          <span className="relative">
            {name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </span>
        </Link>
      ))}
    </>
  )

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="#home" 
            className="text-xl font-bold text-purple-600 hover:text-purple-700 transition-colors font-poppins"
          >
            MP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] flex flex-col" onCloseAutoFocus={(e) => e.preventDefault()}>
              <div className="flex-1 flex flex-col space-y-6 pt-6">
                <NavLinks onClick={() => setIsOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

