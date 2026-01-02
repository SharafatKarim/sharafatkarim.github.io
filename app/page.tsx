"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { LiveTools } from "@/components/live-tools"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Projects />
        <LiveTools />
        <Contact />
      </main>
    </div>
  )
}
