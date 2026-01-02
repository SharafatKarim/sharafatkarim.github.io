"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY
            const scrollable = document.documentElement.scrollHeight - window.innerHeight
            const ratio = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0
            setProgress(ratio * 100)
        }

        updateProgress()
        window.addEventListener("scroll", updateProgress, { passive: true })
        window.addEventListener("resize", updateProgress)

        return () => {
            window.removeEventListener("scroll", updateProgress)
            window.removeEventListener("resize", updateProgress)
        }
    }, [])

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
            <div className="mx-auto h-0.5 w-full max-w-full overflow-hidden bg-transparent backdrop-blur">
                <div
                    className="h-full bg-terminal-green transition-[width]"
                    style={{ width: `${progress}%` }}
                    aria-hidden
                />
            </div>
        </div>
    )
}
