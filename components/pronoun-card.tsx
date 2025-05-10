import Link from "next/link"
import type { PronounSet } from "@/lib/pronouns"
import { FloatingCard } from "@/components/floating-card"
import { ArrowRight } from "lucide-react"

interface PronounCardProps {
  pronounSet: PronounSet
  index: number
}

export function PronounCard({ pronounSet, index }: PronounCardProps) {
  return (
    <FloatingCard className="h-full flex flex-col justify-between transition-colors hover:border-primary" delay={index}>
      <div>
        <h3 className="text-xl font-semibold mb-2">{pronounSet.title}</h3>
        <p className="text-muted-foreground mb-4">{pronounSet.description}</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-muted/50 p-2 rounded">
            <span className="text-xs text-muted-foreground">Subject</span>
            <p className="font-medium">{pronounSet.subject}</p>
          </div>
          <div className="bg-muted/50 p-2 rounded">
            <span className="text-xs text-muted-foreground">Object</span>
            <p className="font-medium">{pronounSet.object}</p>
          </div>
        </div>
      </div>
      <Link href={`/${pronounSet.slug}`} className="inline-flex items-center text-primary hover:underline mt-2">
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </FloatingCard>
  )
}
