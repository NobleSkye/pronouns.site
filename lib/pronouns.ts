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
  {
    slug: "she-her",
    title: "She/Her pronouns",
    subject: "She",
    object: "Her",
    possessiveAdj: "Her",
    possessivePro: "Hers",
    reflexive: "Herself",
    description: "Feminine pronouns commonly used by women and feminine-identifying people.",
    examples: [
      "She went to the store to buy groceries.",
      "I gave her the book she wanted for her birthday.",
      "The decision was hers to make.",
      "She made the cake herself.",
    ],
  },
  {
    slug: "he-him",
    title: "He/Him pronouns",
    subject: "He",
    object: "Him",
    possessiveAdj: "His",
    possessivePro: "His",
    reflexive: "Himself",
    description: "Masculine pronouns commonly used by men and masculine-identifying people.",
    examples: [
      "He went to the gym after work.",
      "I sent him the email with the information.",
      "The car is his, not mine.",
      "He fixed the computer himself.",
    ],
  },
  {
    slug: "they-them",
    title: "They/Them pronouns",
    subject: "They",
    object: "Them",
    possessiveAdj: "Their",
    possessivePro: "Theirs",
    reflexive: "Themselves",
    description: "Gender-neutral pronouns that can be used by anyone, especially common for non-binary people.",
    examples: [
      "They are coming over for dinner tonight.",
      "I gave them the documents they needed.",
      "The decision is theirs to make.",
      "They completed the project by themselves.",
    ],
  },
  {
    slug: "xe-xem",
    title: "Xe/Xem pronouns",
    subject: "Xe",
    object: "Xem",
    possessiveAdj: "Xyr",
    possessivePro: "Xyrs",
    reflexive: "Xemself",
    description: "Neopronouns that provide a specifically gender-neutral option outside of the singular they.",
    examples: [
      "Xe went to the concert last night.",
      "I talked to xem about the project.",
      "The book is xyr favorite.",
      "Xe completed the assignment xemself.",
    ],
  },
  {
    slug: "she-him",
    title: "She/Him pronouns",
    subject: "She/He",
    object: "Her/Him",
    possessiveAdj: "Her/His",
    possessivePro: "Hers/His",
    reflexive: "Herself/Himself",
    description:
      "Mixed pronouns that combine feminine and masculine forms, often used by genderfluid or bigender people.",
    examples: [
      "She went to the store, and he bought some groceries.",
      "I gave her the book, and he really enjoyed it.",
      "The decision was hers to make, and his opinion mattered too.",
      "She completed the project herself, and he was proud of himself.",
    ],
  },
  {
    slug: "they-her",
    title: "They/Her pronouns",
    subject: "They/She",
    object: "Them/Her",
    possessiveAdj: "Their/Her",
    possessivePro: "Theirs/Hers",
    reflexive: "Themselves/Herself",
    description:
      "Mixed pronouns that combine gender-neutral and feminine forms, often used by demigirls or non-binary feminine people.",
    examples: [
      "They went to the park, and she enjoyed the sunshine.",
      "I gave them a gift, and she loved it.",
      "The book is theirs to keep, and hers to enjoy.",
      "They finished the project themselves, and she was proud of herself.",
    ],
  },
  {
    slug: "any-all",
    title: "Any/All pronouns",
    subject: "Any",
    object: "All",
    possessiveAdj: "Any",
    possessivePro: "All",
    reflexive: "Anyself",
    description: "An indication that a person is comfortable with any pronouns being used to refer to them.",
    examples: [
      "You can use he, she, they, or any other pronouns for this person.",
      "They're comfortable with all pronouns, so you can switch between them.",
      "Any pronouns work for them, so use whichever feels natural to you.",
      "They don't have a preference for specific pronouns.",
    ],
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
  },
  {
    slug: "ze-hir",
    title: "Ze/Hir pronouns",
    subject: "Ze",
    object: "Hir",
    possessiveAdj: "Hir",
    possessivePro: "Hirs",
    reflexive: "Hirself",
    description: "Gender-neutral neopronouns that offer an alternative to binary pronouns and the singular they.",
    examples: [
      "Ze went to the library to study.",
      "I met hir at the conference yesterday.",
      "The research paper is hir project.",
      "Ze completed the assignment hirself.",
    ],
  },
  {
    slug: "ze-zir",
    title: "Ze/Zir pronouns",
    subject: "Ze",
    object: "Zir",
    possessiveAdj: "Zir",
    possessivePro: "Zirs",
    reflexive: "Zirself",
    description: "A variant of ze/hir neopronouns that provide a gender-neutral alternative to traditional pronouns.",
    examples: [
      "Ze is coming to the party tonight.",
      "I sent zir the invitation via email.",
      "The decision is zir to make.",
      "Ze prepared zirself for the presentation.",
    ],
  },
  {
    slug: "fae-faer",
    title: "Fae/Faer pronouns",
    subject: "Fae",
    object: "Faer",
    possessiveAdj: "Faer",
    possessivePro: "Faers",
    reflexive: "Faerself",
    description:
      "Neopronouns often associated with a connection to nature or fae/fairy folklore, used by some non-binary individuals.",
    examples: [
      "Fae went for a walk in the forest.",
      "I gave faer the book about mythology.",
      "The garden is faer favorite place to relax.",
      "Fae made the costume faerself.",
    ],
  },
  {
    slug: "ey-em",
    title: "Ey/Em pronouns",
    subject: "Ey",
    object: "Em",
    possessiveAdj: "Eir",
    possessivePro: "Eirs",
    reflexive: "Emself",
    description: "Gender-neutral neopronouns derived from 'they/them' by dropping the 'th'.",
    examples: [
      "Ey is studying linguistics at university.",
      "I talked to em about the project yesterday.",
      "The research is eir main focus this semester.",
      "Ey completed the assignment emself.",
    ],
  },
  {
    slug: "ne-nem",
    title: "Ne/Nem pronouns",
    subject: "Ne",
    object: "Nem",
    possessiveAdj: "Nir",
    possessivePro: "Nirs",
    reflexive: "Nemself",
    description: "Neopronouns that provide a gender-neutral alternative to traditional binary pronouns.",
    examples: [
      "Ne is going to the concert tonight.",
      "I invited nem to join our study group.",
      "The book is nir favorite.",
      "Ne finished the project nemself.",
    ],
  },
  {
    slug: "ve-ver",
    title: "Ve/Ver pronouns",
    subject: "Ve",
    object: "Ver",
    possessiveAdj: "Vis",
    possessivePro: "Vers",
    reflexive: "Verself",
    description: "Gender-neutral neopronouns that offer an alternative to traditional binary pronouns.",
    examples: [
      "Ve is presenting at the conference tomorrow.",
      "I met ver at the community center.",
      "The artwork is vis creation.",
      "Ve prepared the presentation verself.",
    ],
  },
  {
    slug: "it-its",
    title: "It/Its pronouns",
    subject: "It",
    object: "It",
    possessiveAdj: "Its",
    possessivePro: "Its",
    reflexive: "Itself",
    description:
      "Pronouns reclaimed by some individuals, particularly in certain non-binary, neurodivergent, or otherkin communities.",
    examples: [
      "It is going to the park later.",
      "I gave it the book it wanted to read.",
      "The choice is its to make.",
      "It completed the project itself.",
    ],
  },
]

export function getAllPronounSlugs() {
  return pronounSets.map((set) => set.slug)
}

export function getPronounSetBySlug(slug: string): PronounSet | undefined {
  return pronounSets.find((set) => set.slug === slug)
}
