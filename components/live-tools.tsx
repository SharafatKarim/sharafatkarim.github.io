"use client"

import { ExternalLink, Wrench } from "lucide-react"
import { toolsList } from "@/data/tools-list"

export function LiveTools() {
  return (
    <section id="tools" className="py-20 sm:py-32 border-t border-terminal-green/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative">
          <Wrench
            aria-hidden="true"
            className="hidden lg:block absolute right-0 top-6 w-32 h-32 text-terminal-green/10 pointer-events-none"
          />
          <div className="space-y-4 mb-12">
            <p className="text-terminal-green font-mono text-sm">$ echo $TOOLS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Live Tools</h2>
            <div className="h-1 w-20 bg-terminal-green/50" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsList.map((tool) => (
              <div key={tool.category} className="p-6 rounded-lg border border-terminal-green/20 bg-card space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-terminal-green/10 text-terminal-green">
                    <tool.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{tool.category}</h3>
                </div>
                <ul className="space-y-2">
                  {tool.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between text-sm text-muted-foreground hover:text-accent-cyan max-sm:text-accent-cyan transition-colors"
                      >
                        <span>{item.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
