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
  source?: string
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
    source: "https://www.pronouns.page/guide/name-pronouns"
  },
  {
    slug: "ask-me",
    title: "Ask Me About My Pronouns",
    subject: "Ask",
    object: "Me",
    possessiveAdj: "My",
    possessivePro: "Mine",
    reflexive: "Myself",
    description: "An indication that a person prefers you ask them about their pronouns rather than assuming.",
    examples: [
      "This person prefers that you ask them which pronouns they use.",
      "Instead of assuming, take a moment to ask about their pronouns.",
      "Their pronouns may change depending on context, so it's best to ask.",
      "They appreciate when people check in about pronoun preferences.",
    ],
    source: "https://en.wikipedia.org/wiki/Preferred_gender_pronoun"
  },
  {
    slug: "any-all",
    title: "Any/All Pronouns",
    subject: "Any",
    object: "All",
    possessiveAdj: "Any",
    possessivePro: "All",
    reflexive: "Anyself",
    description: 
      "A placeholder indicating that a person is comfortable with any pronouns being used to refer to them. Replace with the pronouns of your choice in context.",
    examples: [
      "You can use He, She, They, or any other pronouns for this person.",
      "They're comfortable with all pronouns, so you can switch between them.",
      "Any pronouns work for them, so use whichever feels natural to you.",
      "They don't have a preference for specific pronouns.",
    ],
    source: "https://en.wikipedia.org/wiki/Gender_neutrality_in_languages_with_gendered_third-person_pronouns#Pronouns_and_alternatives"
  },

  // Base and combined pronouns
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
    source: "https://en.wikipedia.org/wiki/Pronoun#Personal_pronouns"
  },
  {
    slug: "she-him",
    title: "She/Him Pronouns",
    subject: "She/He",
    object: "Her/Him",
    possessiveAdj: "Her/His",
    possessivePro: "Hers/His",
    reflexive: "Herself/Himself",
    description:
      "Mixed pronouns using both feminine and masculine forms. Either set can be used interchangeably or alternated based on context, reflecting a blend of feminine and masculine identities.",
    examples: [
      "She is working on the project today. He is in a meeting.",
      "You can give it to Her or Him.",
      "Her/His project was successful.",
      "She finished it Herself, while He did it Himself.",
    ],
    source: "https://en.wikipedia.org/wiki/Pronoun#Gender-specific_and_gender-neutral_pronouns"
  },
  {
    slug: "she-them",
    title: "She/They Pronouns",
    subject: "She/They",
    object: "Her/Them",
    possessiveAdj: "Her/Their",
    possessivePro: "Hers/Theirs",
    reflexive: "Herself/Themselves",
    description:
      "A combination of feminine and gender-neutral pronouns. Can be used interchangeably or alternated, often expressing both feminine and non-binary aspects of identity.",
    examples: [
      "She is at the meeting, and They are taking notes.",
      "You can give it to Her or Them.",
      "Her/Their presentation was excellent.",
      "She finished the project Herself, while They reviewed it Themselves.",
    ],
    source: "https://en.wikipedia.org/wiki/Non-binary_gender#Pronouns_and_titles"
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
    source: "https://en.wikipedia.org/wiki/Pronoun#Personal_pronouns"
  },
  {
    slug: "he-her",
    title: "He/Her Pronouns",
    subject: "He/She",
    object: "Him/Her",
    possessiveAdj: "His/Her",
    possessivePro: "His/Hers",
    reflexive: "Himself/Herself",
    description:
      "Mixed pronouns combining masculine and feminine forms. Can be used interchangeably or alternated, expressing both masculine and feminine aspects of identity.",
    examples: [
      "He is working today, and She will be here tomorrow.",
      "You can send it to Him or Her.",
      "His/Her project turned out great.",
      "He did it Himself, while She helped Herself.",
    ],
    source: "https://en.wikipedia.org/wiki/Pronoun#Gender-specific_and_gender-neutral_pronouns"
  },
  {
    slug: "he-them",
    title: "He/They Pronouns",
    subject: "He/They",
    object: "Him/Them",
    possessiveAdj: "His/Their",
    possessivePro: "His/Theirs",
    reflexive: "Himself/Themselves",
    description:
      "A combination of masculine and gender-neutral pronouns. Can be used interchangeably or alternated, often expressing both masculine and non-binary aspects of identity.",
    examples: [
      "He is leading the project, and They are coordinating the team.",
      "You can assign it to Him or Them.",
      "His/Their work was outstanding.",
      "He completed it Himself, while They organized it Themselves.",
    ],
    source: "https://en.wikipedia.org/wiki/Non-binary_gender#Pronouns_and_titles"
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
    source: "https://en.wikipedia.org/wiki/Singular_they"
  },
  {
    slug: "they-her",
    title: "They/Her Pronouns",
    subject: "They/She",
    object: "Them/Her",
    possessiveAdj: "Their/Her",
    possessivePro: "Theirs/Hers",
    reflexive: "Themselves/Herself",
    description:
      "A combination of gender-neutral and feminine pronouns. Can be used interchangeably or alternated, expressing both non-binary and feminine aspects of identity.",
    examples: [
      "They are at work, and She will be joining later.",
      "You can give it to Them or Her.",
      "Their/Her project was innovative.",
      "They did it Themselves, while She reviewed it Herself.",
    ],
    source: "https://en.wikipedia.org/wiki/Non-binary_gender#Pronouns_and_titles"
  },
  {
    slug: "they-him",
    title: "They/Him Pronouns",
    subject: "They/He",
    object: "Them/Him",
    possessiveAdj: "Their/His",
    possessivePro: "Theirs/His",
    reflexive: "Themselves/Himself",
    description:
      "A combination of gender-neutral and masculine pronouns. Can be used interchangeably or alternated, expressing both non-binary and masculine aspects of identity.",
    examples: [
      "They are in the meeting, and He is presenting.",
      "You can send it to Them or Him.",
      "Their/His research was groundbreaking.",
      "They finished it Themselves, while He reviewed it Himself.",
    ],
    source: "https://en.wikipedia.org/wiki/Non-binary_gender#Pronouns_and_titles"
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
    source: "https://en.wikipedia.org/wiki/Gender_neutrality_in_languages_with_gendered_third-person_pronouns#Pronouns_and_alternatives"
  },
  {
    slug: "ze-hir",
    title: "Ze/Hir Pronouns",
    subject: "Ze",
    object: "Hir",
    possessiveAdj: "Hir",
    possessivePro: "Hirs",
    reflexive: "Hirself",
    description: 
      "Gender-neutral neopronouns that offer an alternative to binary pronouns and the singular they.",
    examples: [
      "Ze went to the library to study.",
      "I met Hir at the conference yesterday.",
      "The research paper is Hir project.",
      "Ze completed the assignment Hirself.",
    ],
    source: "https://en.wikipedia.org/wiki/Gender_neutrality_in_languages_with_gendered_third-person_pronouns#Table_of_standard_and_non-standard_third-person_singular_pronouns"
  },
  {
    slug: "ze-zir",
    title: "Ze/Zir Pronouns",
    subject: "Ze",
    object: "Zir",
    possessiveAdj: "Zir",
    possessivePro: "Zirs",
    reflexive: "Zirself",
    description: 
      "A variant of ze/hir neopronouns that provide a gender-neutral alternative to traditional pronouns.",
    examples: [
      "Ze is working on the project. (Subject form)",
      "I gave the book to Zir. (Object form)",
      "Zir work was excellent. (Possessive adjective)",
      "The decision was Zirs to make. (Possessive pronoun)",
      "Ze completed the task Zirself. (Reflexive)",
    ],
    source: "https://en.wikipedia.org/wiki/Gender_neutrality_in_languages_with_gendered_third-person_pronouns#Pronouns_and_alternatives"
  },
]

export function getAllPronounSlugs() {
  return pronounSets.map((set) => set.slug)
}

export function getPronounSetBySlug(slug: string): PronounSet | undefined {
  return pronounSets.find((set) => set.slug === slug)
}
