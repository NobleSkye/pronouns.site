import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { FloatingCard } from "@/components/floating-card"

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-bg"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-bg"></div>
      </div>

      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-12 text-center">
        <FloatingCard className="max-w-3xl mx-auto bg-card/60 backdrop-blur-sm border-primary/20">
          <h1 className="text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            pronouns.site
          </h1>
          <p className="text-2xl mb-8 flex items-center justify-center gap-2">
            Pronouns information site made with <Heart className="h-6 w-6 text-red-500 fill-red-500" /> by NobleSkye.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link href="/pronouns">Explore Pronouns</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </FloatingCard>
      </div>
    </div>
  )
}
