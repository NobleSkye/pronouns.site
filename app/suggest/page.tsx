import type { Metadata } from "next"
import { SuggestionsContent } from "@/components/suggestions-content"

export const metadata: Metadata = {
  title: "Suggestions & Feedback",
  description: "Help us improve pronouns.site by sharing your suggestions and feedback",
}

export default function SuggestPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-bg"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 gradient-bg"></div>
      </div>

      <div className="container py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          Suggestions & Feedback
        </h1>

        <SuggestionsContent />
      </div>
    </div>
  )
}
