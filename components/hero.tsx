"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { TAGLINES } from "@/data/taglines"

export function Hero() {
  const [text, setText] = useState("")
  const textRef = useRef("")
  const taglineIndexRef = useRef(0)
  const isDeletingRef = useRef(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const currentTagline = TAGLINES[taglineIndexRef.current]
      const currentText = textRef.current
      const isDeleting = isDeletingRef.current

      const isLineComplete = currentText === currentTagline
      const shouldErase = isDeleting && currentText.length === 0

      let nextDelay = isDeleting ? 30 : 60
      let nextText = currentText

      if (isLineComplete && !isDeleting) {
        isDeletingRef.current = true
        nextDelay = 1200
      } else if (shouldErase) {
        isDeletingRef.current = false
        taglineIndexRef.current = (taglineIndexRef.current + 1) % TAGLINES.length
        nextDelay = 200
      } else {
        nextText = currentTagline.slice(0, currentText.length + (isDeleting ? -1 : 1))
      }

      textRef.current = nextText
      setText(nextText)
      timer = setTimeout(tick, nextDelay)
    }

    timer = setTimeout(tick, 0)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <p className="text-terminal-green font-mono text-sm sm:text-base">$ whoami</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="text-foreground">Md. Sharafat Karim</span>
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-muted-foreground">
              Computer Science & Engineering student at <span className="text-terminal-green">PSTU</span>
            </p>
            <div className="font-mono text-base sm:text-lg text-accent-cyan">
              <span className="text-terminal-green">{">"}</span> {text}
              <span
                className={cn("inline-block w-2 h-5 bg-accent-cyan ml-1", showCursor ? "opacity-100" : "opacity-0")}
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="h-px w-12 bg-terminal-green/30" />
            <span className="text-xs font-mono text-muted-foreground">Developer • Linux Enthusiast</span>
            <div className="h-px w-12 bg-terminal-green/30" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-terminal-green/50" />
      </div>
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
