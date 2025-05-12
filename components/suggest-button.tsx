"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SuggestButton() {
  const pathname = usePathname()
  const isPronounPage = pathname.match(/^\/[^\/]+$/) && pathname !== '/about' && pathname !== '/suggest' && pathname !== '/pronouns'

  return (
    <>
      <Link href="/suggest" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        Suggestions
      </Link>
      {isPronounPage && (
        <Link 
          href={`/suggest?page=${pathname.slice(1)}`} 
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Suggest Edit
        </Link>
      )}
    </>
  )
}
