"use client"

import { useState } from "react"
import { ExternalLink, FolderGit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { projectsList } from "@/data/projects-list"

export function Projects() {
  const [selectedYear, setSelectedYear] = useState("2025")
  const years = Object.keys(projectsList).sort((a, b) => Number(b) - Number(a))

  return (
    <section id="projects" className="py-20 sm:py-32 border-t border-terminal-green/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-terminal-green font-mono text-sm">$ cat projects.json</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Projects</h2>
            <div className="h-1 w-20 bg-terminal-green/50" />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(year)}
                className={cn(
                  "font-mono",
                  selectedYear === year
                    ? "bg-terminal-green text-background hover:bg-terminal-green/90"
                    : "border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10",
                )}
              >
                {year}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {projectsList[selectedYear as keyof typeof projectsList]?.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-lg border border-terminal-green/20 bg-card hover:bg-accent-cyan/5 hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <FolderGit2 className="w-5 h-5 text-terminal-green group-hover:text-accent-cyan transition-colors mt-1 shrink-0" />
                    <div className="space-y-2 flex-1 min-w-0">
                      <h3 className="font-semibold text-lg group-hover:text-accent-cyan transition-colors text-pretty">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent-cyan transition-colors shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
