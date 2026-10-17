const QUESTIONS = [
  {
    "subject": "Physics",
    "q": "A particle moves in a circle of radius r with constant speed v. Its centripetal acceleration is:",
    "options": [
      "v/r",
      "v²/r",
      "vr",
      "r/v²"
    ],
    "answer": 1,
    "explain": "Centripetal acceleration a = v²/r."
  },
  {
    "subject": "Physics",
    "q": "The dimensional formula of Planck's constant h is:",
    "options": [
      "[MLT⁻¹]",
      "[ML²T⁻¹]",
      "[ML²T⁻²]",
      "Dimensionless"
    ],
    "answer": 1,
    "explain": "From E = hν, h has dimensions energy × time = [ML²T⁻¹]."
  },
  {
    "subject": "Physics",
    "q": "Two resistors of 6 Ω and 3 Ω are connected in parallel. Their equivalent resistance is:",
    "options": [
      "9 Ω",
      "3 Ω",
      "2 Ω",
      "1.5 Ω"
    ],
    "answer": 2,
    "explain": "1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω."
  },
  {
    "subject": "Physics",
    "q": "A convex lens has focal length +20 cm. Its power is:",
    "options": [
      "+2 D",
      "−2 D",
      "+5 D",
      "−5 D"
    ],
    "answer": 2,
    "explain": "P = 1/f (in metres) = 1/0.20 = +5 D."
  },
  {
    "subject": "Physics",
    "q": "In simple harmonic motion, acceleration is:",
    "options": [
      "Constant",
      "In the same direction as displacement",
      "Proportional to displacement and opposite in direction",
      "Independent of displacement"
    ],
    "answer": 2,
    "explain": "For SHM, a = −ω²x."
  },
  {
    "subject": "Chemistry",
    "q": "What is the pH of 1.0 × 10⁻³ M HCl at 25°C, assuming complete ionization?",
    "options": [
      "1",
      "2",
      "3",
      "11"
    ],
    "answer": 2,
    "explain": "[H⁺] = 10⁻³ M, so pH = 3."
  },
  {
    "subject": "Chemistry",
    "q": "Which element has the highest first ionization energy among these?",
    "options": [
      "Na",
      "Mg",
      "Al",
      "Si"
    ],
    "answer": 3,
    "explain": "Among these Period 3 elements, Si has the highest first ionization energy."
  },
  {
    "subject": "Chemistry",
    "q": "The hybridization of carbon in CO₂ is:",
    "options": [
      "sp",
      "sp²",
      "sp³",
      "dsp²"
    ],
    "answer": 0,
    "explain": "CO₂ is linear with two electron domains around carbon: sp hybridization."
  },
  {
    "subject": "Chemistry",
    "q": "Which reagent is commonly used to distinguish an aldehyde from an ordinary ketone?",
    "options": [
      "Tollens' reagent",
      "NaCl solution",
      "Dilute HCl",
      "Ethanol"
    ],
    "answer": 0,
    "explain": "Tollens' reagent typically gives a silver mirror with aldehydes."
  },
  {
    "subject": "Chemistry",
    "q": "For a given reaction, the equilibrium constant changes when:",
    "options": [
      "A catalyst is added",
      "Pressure changes at constant temperature",
      "Concentration changes",
      "Temperature changes"
    ],
    "answer": 3,
    "explain": "The equilibrium constant depends on temperature."
  },
  {
    "subject": "Mathematics",
    "q": "If f(x) = x² − 4x + 3, then f′(2) is:",
    "options": [
      "−2",
      "0",
      "2",
      "4"
    ],
    "answer": 1,
    "explain": "f′(x) = 2x − 4; hence f′(2) = 0."
  },
  {
    "subject": "Mathematics",
    "q": "The value of ∫₀¹ 2x dx is:",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "answer": 1,
    "explain": "The antiderivative is x²; x² from 0 to 1 equals 1."
  },
  {
    "subject": "Mathematics",
    "q": "The roots of x² − 5x + 6 = 0 are:",
    "options": [
      "1 and 6",
      "−2 and −3",
      "2 and 3",
      "−1 and −6"
    ],
    "answer": 2,
    "explain": "Factorization: (x − 2)(x − 3) = 0."
  },
  {
    "subject": "Mathematics",
    "q": "If sin θ = 3/5 and θ is acute, cos θ equals:",
    "options": [
      "2/5",
      "3/4",
      "4/5",
      "5/4"
    ],
    "answer": 2,
    "explain": "cos θ = √(1 − sin²θ) = 4/5."
  },
  {
    "subject": "Mathematics",
    "q": "The determinant of [[2, 1], [3, 4]] is:",
    "options": [
      "5",
      "8",
      "11",
      "−5"
    ],
    "answer": 0,
    "explain": "Determinant = 2×4 − 1×3 = 5."
  },
  {
    "subject": "English",
    "q": "Choose the correct sentence.",
    "options": [
      "Neither of the boys are present.",
      "Neither of the boys is present.",
      "Neither of the boys were present.",
      "Neither boys is present."
    ],
    "answer": 1,
    "explain": "In standard formal usage, 'neither' is singular here and takes 'is'."
  },
  {
    "subject": "English",
    "q": "Choose the synonym of “meticulous”.",
    "options": [
      "Careless",
      "Hasty",
      "Very careful and precise",
      "Uncertain"
    ],
    "answer": 2,
    "explain": "Meticulous means very careful and precise."
  },
  {
    "subject": "English",
    "q": "Complete the sentence: If I _____ enough time, I would learn another language.",
    "options": [
      "have",
      "had",
      "will have",
      "am having"
    ],
    "answer": 1,
    "explain": "Second conditional: If + past simple, would + base verb."
  },
  {
    "subject": "English",
    "q": "Choose the correct passive form: “They are building a new bridge.”",
    "options": [
      "A new bridge built by them.",
      "A new bridge is being built by them.",
      "A new bridge was being built by them.",
      "A new bridge has built by them."
    ],
    "answer": 1,
    "explain": "Present continuous passive: is/are being + past participle."
  },
  {
    "subject": "English",
    "q": "Identify the figure of speech: “The wind whispered through the trees.”",
    "options": [
      "Simile",
      "Hyperbole",
      "Personification",
      "Oxymoron"
    ],
    "answer": 2,
    "explain": "Personification gives the wind the human action of whispering."
  }
];
