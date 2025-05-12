import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { SuggestButton } from "@/components/suggest-button"
import { Github } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Pronouns.site",
    default: "Pronouns.site",
  },
  description: "Informational resource for understanding and using different pronoun sets",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                  pronouns.site
                </Link>
                <nav className="flex items-center gap-6">
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link href="/pronouns" className="hover:text-primary transition-colors">
                    Pronouns
                  </Link>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About
                  </Link>
                  <ModeToggle />
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} pronouns.site</p>
                  <SuggestButton />
                </div>
                <div className="flex items-center gap-2">
                  <a href="https://github.com/NobleSkye/pronouns.site" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-4 w-4" />
                    Made with ❤️ by NobleSkye
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
