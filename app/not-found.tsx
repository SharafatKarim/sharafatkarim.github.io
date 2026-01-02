import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { LiveTools } from "@/components/live-tools"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Compass } from "lucide-react"
import { Contact } from "@/components/contact"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main className="relative pt-24 pb-24">
                <section id="hero" className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto rounded-2xl border border-terminal-green/20 bg-card/70 backdrop-blur-sm p-8 sm:p-12 shadow-xl space-y-6">
                        <p className="text-terminal-green font-mono text-xs sm:text-sm">$ cd /404</p>
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl font-bold text-balance">404: Page not found</h1>
                            <p className="text-muted-foreground text-base sm:text-lg">
                                The route you tried to reach is missing. Let&apos;s guide you back to the portfolio or explore some of the tools
                                below.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button asChild size="lg" className="gap-2">
                                <Link href="/">
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to home
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="gap-2">
                                <Link href="#tools">
                                    <Compass className="w-4 h-4" />
                                    Jump to live tools
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <div className="mt-16">
                    <LiveTools />
                    <Contact />
                </div>
            </main>
        </div>
    )
}
