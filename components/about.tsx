"use client"

import { skills } from "@/data/skills"

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 border-t border-terminal-green/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-terminal-green font-mono text-sm">$ cat about.md</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">About Me</h2>
            <div className="h-1 w-20 bg-terminal-green/50" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group p-6 rounded-lg border border-terminal-green/20 bg-card hover:bg-accent-cyan/5 hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-terminal-green/10 text-terminal-green group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-colors">
                    <skill.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-lg">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
