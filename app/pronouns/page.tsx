import { pronounSets } from "@/lib/pronouns"
import { PronounCard } from "@/components/pronoun-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pronouns Index",
  description: "Explore our comprehensive collection of pronoun guides and resources",
}

export default function PronounsPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-bg"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 gradient-bg"></div>
      </div>

      <div className="container py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          Pronoun Index
        </h1>

        <p className="text-lg mb-8 max-w-3xl">
          Explore our comprehensive collection of pronoun guides. Each guide provides detailed information about how to
          use and understand different pronoun sets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pronounSets.map((set, index) => (
            <PronounCard key={set.slug} pronounSet={set} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
