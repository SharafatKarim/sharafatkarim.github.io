"use client"

import { GraduationCap } from "lucide-react"
import { educationList } from "@/data/education-list"

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-32 border-t border-terminal-green/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-terminal-green font-mono text-sm">$ ls -education</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">My Academic Journey</h2>
            <div className="h-1 w-20 bg-terminal-green/50" />
          </div>

          <div className="space-y-6">
            {educationList.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-terminal-green/20 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-terminal-green border-2 border-background" />
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-accent-cyan mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-pretty">{edu.degree}</h3>
                      <p className="text-terminal-green font-mono text-sm mt-1">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground mt-2">{edu.status}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-8">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
