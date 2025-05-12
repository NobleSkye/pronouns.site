"use client"

import { FloatingCard } from "@/components/floating-card"
import Giscus from "@giscus/react"

export function SuggestionsContent() {
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
  const pageParam = searchParams.get('page')

  return (
    <div className="max-w-4xl">
      <FloatingCard className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          {pageParam ? `Suggest Changes for "${pageParam}" Pronouns` : "Help Us Improve"}
        </h2>
        <p className="text-base sm:text-lg mb-4">
          We value your input! Use the comments section below to:
        </p>
        <ul className="list-disc list-inside text-base sm:text-lg space-y-2 mb-4">
          <li>Suggest new pronoun sets to add</li>
          <li>Report inaccuracies in existing pronoun descriptions</li>
          <li>Share ideas for new features</li>
          <li>Give general feedback about the site</li>
        </ul>
        <p className="text-base sm:text-lg text-muted-foreground">
          Your feedback helps make pronouns.site more accurate, inclusive, and useful for everyone.
        </p>
      </FloatingCard>

      <FloatingCard>
        <Giscus
          id="comments"
          repo="nobleskye/pronouns.site"
          repoId="R_kgDOOnfGEA"
          category="Announcements"
          categoryId="DIC_kwDOOnfGEM4CqCTW"
          mapping="url"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="dark_high_contrast"
          lang="en"
          loading="lazy"
        />
      </FloatingCard>
    </div>
  )
}
