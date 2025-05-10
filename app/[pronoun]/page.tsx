import { getPronounSetBySlug, getAllPronounSlugs } from "@/lib/pronouns"
import { notFound } from "next/navigation"
import { FloatingCard } from "@/components/floating-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
// Removed unused import of PageProps from 'next/types'

type Props = {
  params: {
    pronoun: string
  }
}

// Fix: Ensure params is not undefined
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pronounSet = await getPronounSetBySlug(params.pronoun);
export async function generateMetadata({ params }: { params: { pronoun: string } }): Promise<Metadata> {
  const pronounSet = getPronounSetBySlug(params.pronoun)

  if (!pronounSet) {
    return {
      title: "Pronoun not found",
    };
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
  };
}

export async function generateStaticParams() {
  const slugs = await getAllPronounSlugs();
  return slugs.map((slug) => ({ pronoun: slug }));
}

// Fix: Add a default value for params
export default async function PronounPage({ params }: Props) {
  const pronounSet = await getPronounSetBySlug(params.pronoun);

  if (!pronounSet) {
    notFound();
  }

  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 gradient-bg"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 gradient-bg"></div>
      </div>

      <div className="container py-6 px-2 sm:px-4 md:py-12">
        <Button asChild variant="ghost" className="mb-4 sm:mb-6 pl-0">
          <Link href="/pronouns" className="flex items-center gap-2 text-base sm:text-lg">
            <ArrowLeft className="h-4 w-4" />
            Back to all pronouns
          </Link>
        </Button>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 text-balance">
          {pronounSet.title}
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <FloatingCard>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">About these pronouns</h2>
              <p className="text-base sm:text-lg">{pronounSet.description}</p>
            </FloatingCard>

            <FloatingCard delay={1}>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Using these pronouns in sentences</h2>
              <div className="space-y-2 sm:space-y-3 text-base sm:text-lg">
                {pronounSet.examples.map((example, index) => (
                  <p key={index} className="p-2 sm:p-3 bg-muted/30 rounded-md">
                    {example}
                  </p>
                ))}
              </div>
            </FloatingCard>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <FloatingCard delay={2}>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Pronoun forms</h2>

              <div className="space-y-3 sm:space-y-4">
                <div className="p-2 sm:p-3 bg-muted/30 rounded-md">
                  <span className="text-xs sm:text-sm text-muted-foreground block">Subject pronoun</span>
                  <span className="text-base sm:text-lg font-medium">{pronounSet.subject}</span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Example: <span className="italic">{pronounSet.subject}</span> went to the store.
                  </p>
                </div>

                <div className="p-2 sm:p-3 bg-muted/30 rounded-md">
                  <span className="text-xs sm:text-sm text-muted-foreground block">Object pronoun</span>
                  <span className="text-base sm:text-lg font-medium">{pronounSet.object}</span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Example: I gave <span className="italic">{pronounSet.object}</span> a gift.
                  </p>
                </div>

                <div className="p-2 sm:p-3 bg-muted/30 rounded-md">
                  <span className="text-xs sm:text-sm text-muted-foreground block">Possessive adjective</span>
                  <span className="text-base sm:text-lg font-medium">{pronounSet.possessiveAdj}</span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Example: That is <span className="italic">{pronounSet.possessiveAdj}</span> book.
                  </p>
                </div>

                <div className="p-2 sm:p-3 bg-muted/30 rounded-md">
                  <span className="text-xs sm:text-sm text-muted-foreground block">Possessive pronoun</span>
                  <span className="text-base sm:text-lg font-medium">{pronounSet.possessivePro}</span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Example: The book is <span className="italic">{pronounSet.possessivePro}</span>.
                  </p>
                </div>

                <div className="p-2 sm:p-3 bg-muted/30 rounded-md">
                  <span className="text-xs sm:text-sm text-muted-foreground block">Reflexive pronoun</span>
                  <span className="text-base sm:text-lg font-medium">{pronounSet.reflexive}</span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Example: {pronounSet.subject} did it by <span className="italic">{pronounSet.reflexive}</span>.
                  </p>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </div>
  );
}
