import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FloatingCard } from "@/components/floating-card"

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 gradient-bg"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 gradient-bg"></div>
      </div>

      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-12 text-center">
        <FloatingCard className="max-w-md mx-auto bg-card/60 backdrop-blur-sm">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Pronoun Not Found</h1>
          <p className="text-xl mb-8">Sorry, we couldn't find the pronoun page you're looking for.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pronouns">View All Pronouns</Link>
            </Button>
          </div>
        </FloatingCard>
      </div>
    </div>
  )
}
