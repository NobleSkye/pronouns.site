export type PronounSet = {
  slug: string
  title: string
  subject: string
  object: string
  possessiveAdj: string
  possessivePro: string
  reflexive: string
  description: string
  examples: string[]
}

export const pronounSets: PronounSet[] = [
  // Special types first
  {
    slug: "my-name",
    title: "Name Pronouns",
    subject: "Name",
    object: "Name",
    possessiveAdj: "Name's",
    possessivePro: "Name's",
    reflexive: "Name",
    description:
      "A pronoun set indicating that you should use the person's actual name instead of traditional pronouns.",
    examples: [
      "Steve went to the meeting on time.",
      "I handed the package to Skylar.",
      "The award was Alex's to accept.",
      "Ciara completed the project.",
    ],
  },
  {
    slug: "ask-for",
    title: "Ask For Pronouns",
    subject: "Ask",
    object: "For",
    possessiveAdj: "Your",
    possessivePro: "Yours",
    reflexive: "Yourself",
    description:
      "An indication that you should ask for a person’s pronouns rather than assuming them.",
    examples: [
      "Before referring to someone, ask for their pronouns.",
      "Instead of assuming, ask for the pronouns they prefer.",
      "Their pronouns may vary, so it’s best to ask.",
      "Always ask for pronouns if you’re unsure.",
      "Hello there! I’m [insert name], and I use [insert pronouns]. What about you?",
    ],
  },
  {
    slug: "any",
    title: "Any Pronouns",
    subject: "Any",
    object: "All",
    possessiveAdj: "Any",
    possessivePro: "All",
    reflexive: "Anyself",
    description:
      "A placeholder indicating that a person is comfortable with any pronouns being used to refer to them. Replace with the pronouns of your choice in context.",
    examples: [
      "You can use He, She, They, or any other pronouns for this person.",
      "They’re comfortable with all pronouns, so you can switch between them.",
      "Any pronouns work for them, so use whichever feels natural to you.",
      "They don't have a preference for specific pronouns.",
    ],
  },

  // Base pronouns
  {
    slug: "she-her",
    title: "She/Her Pronouns",
    subject: "She",
    object: "Her",
    possessiveAdj: "Her",
    possessivePro: "Hers",
    reflexive: "Herself",
    description: 
      "Traditional feminine pronouns commonly used by women and feminine-identifying individuals. These pronouns express a feminine gender identity.",
    examples: [
      "She is working on the project today. (Subject form)",
      "I gave the book to Her. (Object form)",
      "Her work was excellent. (Possessive adjective)",
      "The decision was Hers to make. (Possessive pronoun)",
      "She completed the task Herself. (Reflexive)",
    ],
  },
  {
    slug: "he-him",
    title: "He/Him Pronouns",
    subject: "He",
    object: "Him",
    possessiveAdj: "His",
    possessivePro: "His",
    reflexive: "Himself",
    description:
      "Traditional masculine pronouns commonly used by men and masculine-identifying individuals. These pronouns express a masculine gender identity.",
    examples: [
      "He is attending the meeting.",
      "I sent the email to Him.",
      "His presentation was informative.",
      "He prepared the report Himself.",
    ],
  },
  {
    slug: "they-them",
    title: "They/Them Pronouns",
    subject: "They",
    object: "Them",
    possessiveAdj: "Their",
    possessivePro: "Theirs",
    reflexive: "Themselves",
    description: 
      "Gender-neutral singular pronouns with historical usage in English. Commonly used by non-binary individuals and those who prefer gender-neutral language.",
    examples: [
      "They are leading the project meeting today.",
      "I sent the document to Them for review.",
      "Their presentation was excellent.",
      "They completed the work Themselves.",
    ],
  },

  // Mixed binary combinations (in pairs)
  {
    slug: "she-they",
    title: "She/They Pronouns",
    subject: "She/They",
    object: "Her/Them",
    possessiveAdj: "Her/Their",
    possessivePro: "Hers/Theirs",
    reflexive: "Herself/Themselves",
    description:
      "Mixed pronouns using both feminine and gender-neutral forms. Either set can be used interchangeably or alternated based on preference. Common among non-binary feminine people and demigirls.",
    examples: [
      "She is at work today. They are in a meeting. (Sequential usage)",
      "You can give it to Her or Them. (Alternative usage)",
      "Her/Their project was successful. (Possessive forms)",
      "She finished it Herself, while They did it Themselves. (Reflexive forms)",
    ],
  },
  {
    slug: "they-she",
    title: "They/She Pronouns",
    subject: "They/She",
    object: "Them/Her",
    possessiveAdj: "Their/Her",
    possessivePro: "Theirs/Hers",
    reflexive: "Themselves/Herself",
    description:
      "Mixed pronouns that combine gender-neutral and feminine forms, often used by demigirls or non-binary feminine people.",
    examples: [
      "They are going to the park, and She is excited.",
      "I gave Them the book, and She loved it.",
      "The choice is Theirs to make, and She agrees.",
      "They finished it Themselves, while She helped.",
    ],
  },

  // Standard neopronouns
  {
    slug: "xe-xem",
    title: "Xe/Xem Pronouns",
    subject: "Xe",
    object: "Xem",
    possessiveAdj: "Xyr",
    possessivePro: "Xyrs",
    reflexive: "Xemself",
    description:
      "A widely-used set of neopronouns providing a specific gender-neutral alternative. Created to serve as singular gender-neutral pronouns distinct from 'they'.",
    examples: [
      "Xe is presenting at the conference. (Subject form)",
      "I sent the report to Xem. (Object form)",
      "Xyr research was groundbreaking. (Possessive adjective)",
      "The discovery was Xyrs. (Possessive pronoun)",
      "Xe completed the project Xemself. (Reflexive)",
    ],
  },
]

export function getAllPronounSlugs() {
  return pronounSets.map((set) => set.slug)
}

export function getPronounSetBySlug(slug: string): PronounSet | undefined {
  return pronounSets.find((set) => set.slug === slug)
}
