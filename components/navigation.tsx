"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { id: "hero", label: "~" },
    { id: "about", label: "whoami" },
    { id: "education", label: "ls -education" },
    { id: "projects", label: "cat projects" },
    { id: "tools", label: "echo tools" },
    { id: "contact", label: "ping me" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-terminal-green/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-terminal-green hover:text-accent-cyan transition-colors"
          >
            <Terminal className="w-5 h-5" />
            <span className="font-mono text-sm hidden sm:inline">sharafat.xyz</span>
          </button>

          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-mono transition-colors rounded",
                  activeSection === item.id
                    ? "text-accent-cyan bg-accent-cyan/10"
                    : "text-muted-foreground hover:text-terminal-green",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
