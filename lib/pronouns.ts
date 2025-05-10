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
  // Names first
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

  // She/* combinations
  {
    slug: "she-her",
    title: "She/Her Pronouns",
    subject: "She",
    object: "Her",
    possessiveAdj: "Her",
    possessivePro: "Hers",
    reflexive: "Herself",
    description:
      "Feminine pronouns commonly used by women and feminine-identifying people.",
    examples: [
      "She went to the store to buy groceries.",
      "I gave Her the book She wanted for Her birthday.",
      "The decision was Hers to make.",
      "She made the cake Herself.",
    ],
  },
  {
    slug: "she-they",
    title: "She/They Pronouns",
    subject: "She/They",
    object: "Her/Them",
    possessiveAdj: "Her/Their",
    possessivePro: "Hers/Theirs",
    reflexive: "Herself/Themselves",
    description:
      "Mixed pronouns that combine feminine and gender-neutral forms, often used by non-binary or gender-fluid people.",
    examples: [
      "She went to the meeting, and They supported her ideas.",
      "I shared the news with Her and Them.",
      "The decision was Her call, and They agreed with it.",
      "She managed the project Herself, with Them by her side.",
    ],
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
      "Mixed pronouns that combine feminine and masculine forms, often used by genderfluid or bigender people.",
    examples: [
      "She went to the store, and He bought some groceries.",
      "I gave Her the book, and He really enjoyed it.",
      "The decision was Hers to make, and His opinion mattered too.",
      "She completed the project Herself, and He was proud of Himself.",
    ],
  },

  // He/* combinations
  {
    slug: "he-him",
    title: "He/Him Pronouns",
    subject: "He",
    object: "Him",
    possessiveAdj: "His",
    possessivePro: "His",
    reflexive: "Himself",
    description:
      "Masculine pronouns commonly used by men and masculine-identifying people.",
    examples: [
      "He went to the gym after work.",
      "I sent Him the email with the information.",
      "The car is His, not mine.",
      "He fixed the computer Himself.",
    ],
  },
  {
    slug: "he-they",
    title: "He/They Pronouns",
    subject: "He/They",
    object: "Him/Them",
    possessiveAdj: "His/Their",
    possessivePro: "His/Theirs",
    reflexive: "Himself/Themselves",
    description:
      "Mixed pronouns that combine masculine and gender-neutral forms, often used by non-binary masculine or gender-fluid people.",
    examples: [
      "He delivered the report, and They reviewed it.",
      "I called Him and Them for assistance with the task.",
      "The decision was His, and They supported it wholeheartedly.",
      "He prepared the presentation Himself, with Them helping out.",
    ],
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
      "Mixed pronouns that combine masculine and feminine forms, used by some genderfluid or bigender people.",
    examples: [
      "He went to the store, and She bought groceries.",
      "I gave Him the book, and She really enjoyed it.",
      "The decision was His to make, and Hers to consider.",
      "He completed the project Himself, and She reviewed it Herself.",
    ],
  },

  // They/* combinations
  {
    slug: "they-them",
    title: "They/Them Pronouns",
    subject: "They",
    object: "Them",
    possessiveAdj: "Their",
    possessivePro: "Theirs",
    reflexive: "Themselves",
    description:
      "Gender-neutral pronouns that can be used by anyone, especially common for non-binary people.",
    examples: [
      "They are coming over for dinner tonight.",
      "I gave Them the documents They needed.",
      "The decision is Theirs to make.",
      "They completed the project Themselves.",
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
  {
    slug: "they-he",
    title: "They/He Pronouns",
    subject: "They/He",
    object: "Them/Him",
    possessiveAdj: "Their/His",
    possessivePro: "Theirs/His",
    reflexive: "Themselves/Himself",
    description:
      "Mixed pronouns that combine gender-neutral and masculine forms, often used by demiboys or non-binary masculine people.",
    examples: [
      "They are at work, and He is busy.",
      "I sent Them the email, and He responded quickly.",
      "The project is Theirs to lead, and He is ready.",
      "They did it Themselves, and He contributed His part.",
    ],
  },

  // Neopronouns
  {
    slug: "xe-xem",
    title: "Xe/Xem Pronouns",
    subject: "Xe",
    object: "Xem",
    possessiveAdj: "Xyr",
    possessivePro: "Xyrs",
    reflexive: "Xemself",
    description:
      "Neopronouns that provide a specifically gender-neutral option outside of the singular They.",
    examples: [
      "Xe went to the concert last night.",
      "I talked to Xem about the project.",
      "The book is Xyr favorite.",
      "Xe completed the assignment Xemself.",
    ],
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
      "Gender-neutral neopronouns that offer an alternative to binary pronouns and the singular They.",
    examples: [
      "Ze went to the library to study.",
      "I met Hir at the conference yesterday.",
      "The research paper is Hir project.",
      "Ze completed the assignment Hirself.",
    ],
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
      "A variant of Ze/Hir neopronouns that provide a gender-neutral alternative to traditional pronouns.",
    examples: [
      "Ze is coming to the party tonight.",
      "I sent Zir the invitation via email.",
      "The decision is Zir to make.",
      "Ze prepared Zirself for the presentation.",
    ],
  },
  {
    slug: "ey-em",
    title: "Ey/Em Pronouns",
    subject: "Ey",
    object: "Em",
    possessiveAdj: "Eir",
    possessivePro: "Eirs",
    reflexive: "Emself",
    description:
      "Gender-neutral neopronouns derived from 'They/Them' by dropping the 'th'.",
    examples: [
      "Ey is studying linguistics at university.",
      "I talked to Em about the project yesterday.",
      "The research is Eir main focus this semester.",
      "Ey completed the assignment Emself.",
    ],
  },
  {
    slug: "ve-ver",
    title: "Ve/Ver Pronouns",
    subject: "Ve",
    object: "Ver",
    possessiveAdj: "Vis",
    possessivePro: "Vers",
    reflexive: "Verself",
    description:
      "Gender-neutral neopronouns that offer an alternative to traditional binary pronouns.",
    examples: [
      "Ve is presenting at the conference tomorrow.",
      "I met Ver at the community center.",
      "The artwork is Vis creation.",
      "Ve prepared the presentation Verself.",
    ],
  },
  {
    slug: "ne-nem",
    title: "Ne/Nem Pronouns",
    subject: "Ne",
    object: "Nem",
    possessiveAdj: "Nir",
    possessivePro: "Nirs",
    reflexive: "Nemself",
    description:
      "Neopronouns that provide a gender-neutral alternative to traditional binary pronouns.",
    examples: [
      "Ne is going to the concert tonight.",
      "I invited Nem to join our study group.",
      "The book is Nir favorite.",
      "Ne finished the project Nemself.",
    ],
  },
  {
    slug: "fae-faer",
    title: "Fae/Faer Pronouns",
    subject: "Fae",
    object: "Faer",
    possessiveAdj: "Faer",
    possessivePro: "Faers",
    reflexive: "Faerself",
    description:
      "Neopronouns often associated with a connection to nature or fae/fairy folklore, used by some non-binary individuals.",
    examples: [
      "Fae went for a walk in the forest.",
      "I gave Faer the book about mythology.",
      "The garden is Faer favorite place to relax.",
      "Fae made the costume Faerself.",
    ],
  },
  {
    slug: "it-its",
    title: "It/Its Pronouns",
    subject: "It",
    object: "It",
    possessiveAdj: "Its",
    possessivePro: "Its",
    reflexive: "Itself",
    description:
      "Pronouns reclaimed by some individuals, particularly in certain non-binary, neurodivergent, or otherkin communities.",
    examples: [
      "It is going to the park later.",
      "I gave It the book It wanted to read.",
      "The choice is Its to make.",
      "It completed the project Itself.",
    ],
  },
  {
    slug: "ae-aer",
    title: "Ae/Aer Pronouns",
    subject: "Ae",
    object: "Aer",
    possessiveAdj: "Aer",
    possessivePro: "Aers",
    reflexive: "Aerself",
    description:
      "Neopronouns that provide a gender-neutral alternative, growing in popularity in online communities.",
    examples: [
      "Ae is attending the conference.",
      "I met Aer at the community center.",
      "The research paper is Aer work.",
      "Ae presented the findings Aerself.",
    ],
  },
  {
    slug: "per-per",
    title: "Per/Per Pronouns",
    subject: "Per",
    object: "Per",
    possessiveAdj: "Per",
    possessivePro: "Pers",
    reflexive: "Perself",
    description:
      "Gender-neutral pronouns derived from 'person', used in some academic and professional settings.",
    examples: [
      "Per is working on the research project.",
      "I sent the document to Per yesterday.",
      "The findings were Per own discovery.",
      "Per completed the analysis Perself.",
    ],
  },

  // Special cases last
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
]

export function getAllPronounSlugs() {
  return pronounSets.map((set) => set.slug)
}

export function getPronounSetBySlug(slug: string): PronounSet | undefined {
  return pronounSets.find((set) => set.slug === slug)
}
