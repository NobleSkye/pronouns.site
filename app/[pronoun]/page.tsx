import { getPronounSetBySlug, getAllPronounSlugs } from "@/lib/pronouns"
import { notFound } from "next/navigation"
import { FloatingCard } from "@/components/floating-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

type Props = {
  params: {
    pronoun: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pronounSet = await getPronounSetBySlug(params.pronoun)

  if (!pronounSet) {
    return {
      title: "Pronoun not found",
    }
  }

  return {
    title: pronounSet.title,
    description: pronounSet.description,
    openGraph: {
      title: pronounSet.title,
      description: pronounSet.description,
    },
    twitter: {
      card: "summary",
      title: pronounSet.title,
      description: pronounSet.description,
    },
  }
}

export async function generateStaticParams() {
  const slugs = await getAllPronounSlugs()
  return slugs.map((slug) => ({ pronoun: slug }))
}

export default function PronounPage({ params }: Props) {
  const pronounSet = getPronounSetBySlug(params.pronoun)

  if (!pronounSet) {
    notFound()
  }

  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      <div className="container py-12">
        <FloatingCard className="max-w-3xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/pronouns">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all pronouns
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-4">{pronounSet.title}</h1>
          <p className="text-lg mb-6">{pronounSet.description}</p>
          <div className="grid gap-4">
            {pronounSet.examples.map((example, i) => (
              <p key={i} className="text-muted-foreground">{example}</p>
            ))}
          </div>
        </FloatingCard>
      </div>
    </div>
  )
}
