"use client"

import { useState } from "react"
import { ExternalLink, FolderGit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projectsByYear = {
  "2025": [
    {
      name: "Python Notebook",
      description:
        "A documentation of my experiments, learning, and insights as I explore Python, Numerical Methods, AI and Data Science",
      url: "https://github.com/SharafatKarim/python-notebook",
    },
    {
      name: "PSTU Diary",
      description:
        "A cross-platform application designed to help students and faculty members of PSTU efficiently access resources and contact information",
      url: "https://github.com/SharafatKarim/pstu-diary",
    },
    {
      name: "URL Shortener",
      description: "A professional, minimal, and privacy-focused URL shortener built with Next.js and Firebase",
      url: "https://github.com/SharafatKarim/url-shortner",
    },
    {
      name: "Paste",
      description: "A minimal, distraction-free, and feature-rich pastebin clone with Next.js and Firebase",
      url: "https://github.com/SharafatKarim/paste",
    },
    {
      name: "RDT Visualizer",
      description: "A Python implementation of Reliable Data Transfer protocols with visualization",
      url: "https://github.com/SharafatKarim/RDT-Visualizer",
    },
    {
      name: "Anonymous Local Chatroom",
      description: "Anonymous local server based chatroom, built with Python, socket and Tkinter",
      url: "https://github.com/SharafatKarim/anonymous-local-chatroom",
    },
    {
      name: "SQL Judge",
      description: "An SQL learning platform with Blogs and Cheatsheet support",
      url: "https://github.com/SharafatKarim/SQL-Judge",
    },
  ],
  "2024": [
    {
      name: "DSA Notes",
      description: "Notes about Data Structure and Algorithms",
      url: "https://github.com/SharafatKarim/dsa",
    },
    {
      name: "Metro API",
      description: "A lightweight, user-friendly backend for handling user balances with FastAPI",
      url: "https://github.com/SharafatKarim/metro-api",
    },
    {
      name: "GraphCraft",
      description: "Graph Visualization & Analysis Tool",
      url: "https://github.com/SharafatKarim/GraphCraft",
    },
    {
      name: "FrequencyCraft",
      description: "Generate frequency distributions and corresponding graphs based on input data",
      url: "https://github.com/SharafatKarim/FrequencyCraft",
    },
    {
      name: "Smart Grid Guard Meter",
      description: "A smart prepaid meter with IoT",
      url: "https://github.com/SharafatKarim/Smart-Grid-Guard-Meter",
    },
    {
      name: "PSTU CSE CGPA Calculator",
      description: "Calculates CGPA specifically for PSTU CSE students",
      url: "https://github.com/SharafatKarim/PSTU-CSE-CGPA-calculator",
    },
  ],
  "2023": [
    {
      name: "WebsiteAsApp",
      description: "Turn your websites into a native Android app within a few minutes",
      url: "https://github.com/SharafatKarim/WebsiteAsApp",
    },
    {
      name: "ArchMate",
      description: "Arch Linux configuration tool",
      url: "https://github.com/SharafatKarim/archmate",
    },
    {
      name: "AnonymousForwardingBot",
      description: "A Telegram bot which forwards messages to a specific group for ensuring privacy",
      url: "https://github.com/SharafatKarim/AnonymousForwardingBot",
    },
    {
      name: "ANSI C Balagurusamy Exercise",
      description: "Solutions for 'Programming in ANSI C' by E. Balagurusamy",
      url: "https://github.com/SharafatKarim/ansi-c-balagurusamy-exercise",
    },
  ],
  "2022": [
    {
      name: "Neofetch Customizer",
      description: "Bash script for customizing Neofetch",
      url: "https://github.com/SharafatKarim/neofetch-customization",
    },
    {
      name: "Chaotic AUR Installer",
      description: "Script for installing Chaotic AUR",
      url: "https://github.com/SharafatKarim/chaotic-AUR-installer",
    },
    {
      name: "Qogir Dotfiles",
      description: "Theme for KDE Plasma",
      url: "https://github.com/SharafatKarim/qogir-dotfiles-2022",
    },
  ],
}

export function Projects() {
  const [selectedYear, setSelectedYear] = useState("2025")
  const years = Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a))

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
            {projectsByYear[selectedYear as keyof typeof projectsByYear]?.map((project) => (
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
