import Link from "next/link"
import { pronounSets } from "@/lib/pronouns"
import { FloatingCard } from "@/components/floating-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about pronouns.site and explore our educational resources on different pronoun sets",
}

export default function AboutPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 gradient-bg"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 gradient-bg"></div>
      </div>

      <div className="container py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          About pronouns.site
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FloatingCard className="bg-card/60 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              pronouns.site is an educational resource designed to help people understand and correctly use different
              pronoun sets.
            </p>
            <p className="text-lg">
              Understanding and respecting someone's pronouns is an important part of recognizing their identity. This
              site provides clear explanations and examples to help you use pronouns correctly.
            </p>
          </FloatingCard>

          <FloatingCard className="bg-card/60 backdrop-blur-sm" delay={1}>
            <h2 className="text-2xl font-semibold mb-4">Why Pronouns Matter</h2>
            <p className="text-lg mb-4">
              Using someone's correct pronouns is a simple way to show respect for their identity. It acknowledges their
              personhood and creates a more inclusive environment.
            </p>
            <p className="text-lg">
              Pronouns are not just a preference—they're an integral part of someone's identity. Using the wrong
              pronouns can cause distress and discomfort.
            </p>
          </FloatingCard>
        </div>

        <h2 className="text-2xl font-bold mb-6">Available Pronoun Guides</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pronounSets.map((set, index) => (
            <FloatingCard key={set.slug} className="h-full" delay={index}>
              <h3 className="text-lg font-semibold mb-2">
                <Link href={`/${set.slug}`} className="hover:text-primary transition-colors">
                  {set.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">{set.description}</p>
            </FloatingCard>
          ))}
        </div>

        <FloatingCard className="bg-card/60 backdrop-blur-sm" delay={8}>
          <h2 className="text-2xl font-semibold mb-4">How to Use This Site</h2>
          <p className="text-lg mb-4">
            Browse through our collection of pronoun guides to learn about different pronoun sets. Each guide includes
            explanations, examples, and usage information.
          </p>
          <p className="text-lg">
            If you're looking for a specific pronoun set, you can find it on our{" "}
            <Link href="/pronouns" className="text-primary hover:underline">
              Pronouns
            </Link>{" "}
            page.
          </p>
        </FloatingCard>
      </div>
    </div>
  )
}
