"use client"

import { BookOpen, FileText, Code2, Link2, Send } from "lucide-react"
import { ExternalLink } from "lucide-react"

const tools = [
  {
    category: "Blogs",
    icon: BookOpen,
    items: [
      { name: "Main Blog", url: "https://sharafat.pages.dev/" },
      { name: "Dev.to", url: "https://dev.to/sharafat/" },
      { name: "Hashnode", url: "https://sharafat.hashnode.dev/" },
    ],
  },
  {
    category: "Short Writings",
    icon: FileText,
    items: [
      { name: "Notes", url: "https://sharafat.is-a.dev/notes/" },
      { name: "Logs", url: "https://sharafat.is-a.dev/logs/" },
      { name: "Stash", url: "https://sharafat.is-a.dev/stash/" },
    ],
  },
  {
    category: "Documentation",
    icon: Code2,
    items: [
      { name: "GitBook", url: "https://sharafat.gitbook.io/" },
      { name: "DSA", url: "https://sharafat.is-a.dev/dsa/" },
      { name: "Python", url: "https://python.sharafat.xyz/" },
    ],
  },
  {
    category: "Utilities",
    icon: Link2,
    items: [
      { name: "Code Paste", url: "https://paste.sharafat.xyz/" },
      { name: "URL Shortener", url: "https://url.sharafat.xyz/" },
    ],
  },
  {
    category: "Telegram",
    icon: Send,
    items: [
      { name: "@SharafatsNotes", url: "https://t.me/SharafatsNotes" },
      { name: "@LinuxBangladesh", url: "https://t.me/LinuxBangladesh" },
    ],
  },
]

export function LiveTools() {
  return (
    <section id="tools" className="py-20 sm:py-32 border-t border-terminal-green/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-terminal-green font-mono text-sm">$ echo $TOOLS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Live Tools</h2>
            <div className="h-1 w-20 bg-terminal-green/50" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
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
                        className="group flex items-center justify-between text-sm text-muted-foreground hover:text-accent-cyan transition-colors"
                      >
                        <span>{item.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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
