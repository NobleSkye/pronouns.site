import { FloatingCard } from "@/components/floating-card"
import type { Metadata } from "next"
import Giscus from "@giscus/react"

export const metadata: Metadata = {
  title: "Suggestions & Feedback",
  description: "Help us improve pronouns.site by sharing your suggestions and feedback",
}

export default function SuggestPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 gradient-bg"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 gradient-bg"></div>
      </div>

      <div className="container py-6 px-2 sm:px-4 md:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          Suggestions & Feedback
        </h1>

        <div className="max-w-4xl">
          <FloatingCard className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Help Us Improve</h2>
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
              mapping="pathname"
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
      </div>
    </div>
  )
}
