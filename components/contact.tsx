"use client"

import { socialLinks } from "@/data/social-links"

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 border-t border-terminal-green/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-terminal-green font-mono text-sm">$ ping sharafat</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Let's Connect</h2>
            <div className="h-1 w-20 bg-terminal-green/50" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-lg border border-terminal-green/20 bg-card hover:bg-accent-cyan/5 hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-terminal-green/10 text-terminal-green group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-colors">
                  <link.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold group-hover:text-accent-cyan transition-colors">{link.name}</p>
                  <p className="text-sm text-muted-foreground font-mono truncate">{link.handle}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-terminal-green/10 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              $ exit
              <br />
              <span className="text-terminal-green">© 2025 Md Sharafat Karim. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
