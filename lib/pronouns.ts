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
    {
    slug: "random",
    title: "random Pronouns",
    subject: "random",
    object: "random",
    possessiveAdj: "random's",
    possessivePro: "random's",
    reflexive: "random",
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
      "Traditional feminine pronouns commonly used by women and feminine-identifying individuals. These pronouns express a feminine gender identity.",
    examples: [
      "She is working on the project today.",
      "I gave the book to Her.",
      "Her work was excellent.",
      "She completed the task Herself.",
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
      "Mixed pronouns combining feminine and gender-neutral forms. The person is comfortable with both sets used interchangeably or in alternation. Common among non-binary feminine people, demigirls, or gender-fluid individuals.",
    examples: [
      "She is at the meeting. They are taking notes. (Both forms in sequence)",
      "You can give it to Her or Them. (Alternative usage)",
      "The project is Hers and Theirs to share. (Shared possession)",
      "She can do it Herself, or They can handle it Themselves. (Either form)",
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
      "Mixed pronouns indicating the person uses both she and him pronouns interchangeably or in specific contexts. Common in genderfluid, bigender, or gender non-conforming communities. Either pronoun set can be used individually or alternated based on preference.",
    examples: [
      "She went to the store today, he bought some groceries. (Using both in sequence)",
      "Her project was excellent, I talked to him about it. (Alternating usage)",
      "The book is hers to read first, then his to review. (Possessive forms)",
      "She can do it herself, or he can handle it himself. (Reflexive forms)",
    ],
  },
  {
    slug: "she-xe",
    title: "She/Xe Pronouns",
    subject: "She/Xe",
    object: "Her/Xem",
    possessiveAdj: "Her/Xyr",
    possessivePro: "Hers/Xyrs",
    reflexive: "Herself/Xemself",
    description:
      "Mixed pronouns that combine feminine and neopronoun forms, used by some gender-nonconforming or nonbinary feminine people.",
    examples: [
      "She went to the park, and Xe enjoyed the weather.",
      "I gave Her the report, and Xem reviewed it.",
      "The decision was Hers to make, and Xyr opinion mattered.",
      "She finished it Herself, while Xe helped Xemself.",
    ],
  },
  {
    slug: "she-ze",
    title: "She/Ze Pronouns",
    subject: "She/Ze",
    object: "Her/Zir",
    possessiveAdj: "Her/Zir",
    possessivePro: "Hers/Zirs",
    reflexive: "Herself/Zirself",
    description:
      "Mixed pronouns that combine feminine and neopronoun forms, offering flexibility in gender expression.",
    examples: [
      "She went to work, and Ze had a productive day.",
      "I sent Her the email, and Zir responded quickly.",
      "The project was Hers to manage, and Zir contributions were valuable.",
      "She completed it Herself, while Ze did Zirself proud.",
    ],
  },
  {
    slug: "she-it",
    title: "She/It Pronouns",
    subject: "She/It",
    object: "Her/It",
    possessiveAdj: "Her/Its",
    possessivePro: "Hers/Its",
    reflexive: "Herself/Itself",
    description:
      "Mixed pronouns that combine feminine and neutral object pronouns, sometimes used by neurodivergent or otherkin individuals.",
    examples: [
      "She went to the meeting, and It took notes.",
      "I gave Her the documents, and It reviewed them.",
      "The choice was Hers to make, and Its perspective was unique.",
      "She did the work Herself, while It handled Its part.",
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
      "Traditional masculine pronouns commonly used by men and masculine-identifying individuals. These pronouns express a masculine gender identity.",
    examples: [
      "He is attending the meeting.",
      "I sent the email to Him.",
      "His presentation was informative.",
      "He prepared the report Himself.",
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
      "He went to class, and They took good notes.",
      "I gave Him the book, and They enjoyed it.",
      "The project was His to lead, and Their input was valuable.",
      "He did it Himself, while They helped Themselves.",
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
  {
    slug: "he-xe",
    title: "He/Xe Pronouns",
    subject: "He/Xe",
    object: "Him/Xem",
    possessiveAdj: "His/Xyr",
    possessivePro: "His/Xyrs",
    reflexive: "Himself/Xemself",
    description:
      "Mixed pronouns that combine masculine and neopronoun forms, used by some gender-nonconforming or nonbinary masculine people.",
    examples: [
      "He went to the park, and Xe enjoyed the weather.",
      "I gave Him the report, and Xem reviewed it.",
      "The decision was His to make, and Xyr opinion mattered.",
      "He finished it Himself, while Xe helped Xemself.",
    ],
  },
  {
    slug: "he-ze",
    title: "He/Ze Pronouns",
    subject: "He/Ze",
    object: "Him/Zir",
    possessiveAdj: "His/Zir",
    possessivePro: "His/Zirs",
    reflexive: "Himself/Zirself",
    description:
      "Mixed pronouns that combine masculine and neopronoun forms, offering flexibility in gender expression.",
    examples: [
      "He went to work, and Ze had a productive day.",
      "I sent Him the email, and Zir responded quickly.",
      "The project was His to manage, and Zir contributions were valuable.",
      "He completed it Himself, while Ze did Zirself proud.",
    ],
  },
  {
    slug: "he-it",
    title: "He/It Pronouns",
    subject: "He/It",
    object: "Him/It",
    possessiveAdj: "His/Its",
    possessivePro: "His/Its",
    reflexive: "Himself/Itself",
    description:
      "Mixed pronouns that combine masculine and neutral object pronouns, sometimes used by neurodivergent or otherkin individuals.",
    examples: [
      "He went to the meeting, and It took notes.",
      "I gave Him the documents, and It reviewed them.",
      "The choice was His to make, and Its perspective was unique.",
      "He did the work Himself, while It handled Its part.",
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
      "Gender-neutral singular pronouns used by many non-binary individuals, as well as those who prefer not to use gendered pronouns. These pronouns have a long history of singular usage in English.",
    examples: [
      "They are leading the team meeting.",
      "I spoke with Them about the project.",
      "Their ideas were innovative.",
      "They completed the work Themselves.",
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
  {
    slug: "they-xe",
    title: "They/Xe Pronouns",
    subject: "They/Xe",
    object: "Them/Xem",
    possessiveAdj: "Their/Xyr",
    possessivePro: "Theirs/Xyrs",
    reflexive: "Themselves/Xemself",
    description:
      "Mixed pronouns that combine gender-neutral and neopronoun forms, used by some nonbinary individuals.",
    examples: [
      "They went to the park, and Xe enjoyed the weather.",
      "I met Them at the store, and Xem at the cafe.",
      "The project was Theirs to lead, and Xyr to support.",
      "They did it Themselves, while Xe handled it Xemself.",
    ],
  },
  {
    slug: "they-ze",
    title: "They/Ze Pronouns",
    subject: "They/Ze",
    object: "Them/Zir",
    possessiveAdj: "Their/Zir",
    possessivePro: "Theirs/Zirs",
    reflexive: "Themselves/Zirself",
    description:
      "Mixed pronouns that combine gender-neutral and neopronoun forms, offering multiple options for gender expression.",
    examples: [
      "They went to class, and Ze took notes.",
      "I saw Them at lunch, and Zir at dinner.",
      "The book was Theirs to read, and Zir to review.",
      "They finished Themselves, while Ze worked Zirself.",
    ],
  },
  {
    slug: "they-it",
    title: "They/It Pronouns",
    subject: "They/It",
    object: "Them/It",
    possessiveAdj: "Their/Its",
    possessivePro: "Theirs/Its",
    reflexive: "Themselves/Itself",
    description:
      "Mixed pronouns that combine gender-neutral and neutral object pronouns, used by some nonbinary, neurodivergent, or otherkin individuals.",
    examples: [
      "They went to the park, and It enjoyed the weather.",
      "I gave Them the report, and It reviewed it.",
      "The choice was Theirs to make, and Its to consider.",
      "They did the work Themselves, while It handled Its part.",
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
      "A widely-used set of neopronouns that provide a specifically gender-neutral alternative. Created to fill the need for singular gender-neutral pronouns distinct from 'they'.",
    examples: [
      "Xe is working on the project.",
      "I sent the documents to Xem.",
      "The research is Xyr responsibility.",
      "Xe completed the work Xemself.",
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
