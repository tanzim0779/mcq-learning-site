const GENERAL_QUESTIONS = [
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

const HM_QUESTIONS = [
  {
    "subject": "Higher Mathematics",
    "q": " (2x + 1/(6x))^10 এর বিস্তৃতিতে x বর্জিত পদটি কততম?",
    "options": [
      "৫ম",
      "১০ম",
      "৬ষ্ঠ",
      "১১তম"
    ],
    "answer": 2,
    "explain": "সাধারণ পদে x-এর ঘাত 10−2r; x বর্জিত হলে r=5, তাই পদটি r+1=6তম।",
    "sourceQuestion": 1
  },
  {
    "subject": "Higher Mathematics",
    "q": "2, 3, 4, 7 সংখ্যাগুলোর গড় ব্যবধান কত?",
    "options": [
      "0",
      "2/3",
      "3/2",
      "4"
    ],
    "answer": 2,
    "explain": "গড় 4। পরম বিচ্যুতির গড় = (2+1+0+3)/4 = 3/2।",
    "sourceQuestion": 2
  },
  {
    "subject": "Higher Mathematics",
    "q": "30 থেকে 40 পর্যন্ত পূর্ণসংখ্যা থেকে দৈবভাবে একটি নিলে সেটি মৌলিক হওয়ার সম্ভাবনা কত?",
    "options": [
      "2/11",
      "1/5",
      "3/11",
      "3/10"
    ],
    "answer": 0,
    "explain": "30 থেকে 40-সহ মোট 11টি সংখ্যা; মৌলিক সংখ্যা 31 ও 37। সম্ভাবনা 2/11।",
    "sourceQuestion": 3
  },
  {
    "subject": "Higher Mathematics",
    "q": "2, 4 ও 6-এর ভেদাঙ্ক (variance) কোনটি?",
    "options": [
      "8/3",
      "8",
      "136",
      "136/3"
    ],
    "answer": 0,
    "explain": "গড় 4; ভেদাঙ্ক = [(2−4)²+(4−4)²+(6−4)²]/3 = 8/3।",
    "sourceQuestion": 4
  },
  {
    "subject": "Higher Mathematics",
    "q": "30, 35, 32, 45, 60 উপাত্তের পরিসর কত?",
    "options": [
      "3",
      "5",
      "15",
      "30"
    ],
    "answer": 3,
    "explain": "পরিসর = সর্বোচ্চ মান − সর্বনিম্ন মান = 60−30 = 30।",
    "sourceQuestion": 5
  },
  {
    "subject": "Higher Mathematics",
    "q": "ⁿC₁-এর মান কোনটি?",
    "options": [
      "n−1",
      "n",
      "n+1",
      "1"
    ],
    "answer": 1,
    "explain": "ⁿC₁ = n।",
    "sourceQuestion": 6
  },
  {
    "subject": "Higher Mathematics",
    "q": "7 বাহুবিশিষ্ট বহুভুজের কর্ণের সংখ্যা কত?",
    "options": [
      "14",
      "21",
      "35",
      "42"
    ],
    "answer": 0,
    "explain": "কর্ণের সংখ্যা n(n−3)/2 = 7×4/2 = 14।",
    "sourceQuestion": 7
  },
  {
    "subject": "Higher Mathematics",
    "q": "sec(x/4)-এর মৌলিক পর্যায় কত?",
    "options": [
      "π/2",
      "2π",
      "4π",
      "8π"
    ],
    "answer": 3,
    "explain": "sec(kx)-এর পর্যায় 2π/|k|; এখানে k=1/4, তাই পর্যায় 8π।",
    "sourceQuestion": 8
  },
  {
    "subject": "Higher Mathematics",
    "q": "A ও B স্বাধীন ঘটনা এবং P(A)=3/4, P(B)=1/3 হলে P(A∩B) কত?",
    "options": [
      "1/12",
      "1/4",
      "1/3",
      "3/4"
    ],
    "answer": 1,
    "explain": "স্বাধীন ঘটনার জন্য P(A∩B)=P(A)P(B)=3/4×1/3=1/4।",
    "sourceQuestion": 9
  },
  {
    "subject": "Higher Mathematics",
    "q": "‘algebra’ শব্দটির স্বরবর্ণগুলো একত্রে রেখে কতভাবে বিন্যাস করা যায়?",
    "options": [
      "2520",
      "720",
      "360",
      "120"
    ],
    "answer": 2,
    "explain": "স্বরবর্ণ a,e,a একত্রে একটি ব্লক; ব্লকের ভিতরে 3!/2! উপায়, এবং 5টি বস্তু 5! উপায়ে সাজে। মোট 360।",
    "sourceQuestion": 10
  },
  {
    "subject": "Higher Mathematics",
    "q": "12, 14, 16, 15 ও 18 নম্বরগুলোর পরিমিত ব্যবধান (standard deviation) কত?",
    "options": [
      "2",
      "4",
      "2√5",
      "√(8/5)"
    ],
    "answer": 0,
    "explain": "গড় 15; বর্গ বিচ্যুতির যোগ 20। জনসমষ্টির পরিমিত ব্যবধান √(20/5)=2।",
    "sourceQuestion": 11
  },
  {
    "subject": "Higher Mathematics",
    "q": "16 বাহুবিশিষ্ট বহুভুজের কর্ণের সংখ্যা কত?",
    "options": [
      "240",
      "224",
      "120",
      "104"
    ],
    "answer": 3,
    "explain": "n(n−3)/2 = 16×13/2 = 104।",
    "sourceQuestion": 12
  },
  {
    "subject": "Higher Mathematics",
    "q": "3×n! / [4!(n−1)!] = 4 হলে n-এর মান কত?",
    "options": [
      "16/3",
      "32/3",
      "16",
      "32"
    ],
    "answer": 3,
    "explain": "n!/(n−1)!=n; তাই 3n/24=4, অর্থাৎ n=32।",
    "sourceQuestion": 13
  },
  {
    "subject": "Higher Mathematics",
    "q": "sin 2x-এর পর্যায় কত?",
    "options": [
      "π/2",
      "π",
      "2π",
      "4π"
    ],
    "answer": 1,
    "explain": "sin(kx)-এর পর্যায় 2π/|k|; k=2 হলে পর্যায় π।",
    "sourceQuestion": 14
  },
  {
    "subject": "Higher Mathematics",
    "q": "6 বাহুবিশিষ্ট বহুভুজের কর্ণের সংখ্যা কত?",
    "options": [
      "2",
      "6",
      "9",
      "12"
    ],
    "answer": 2,
    "explain": "6×(6−3)/2 = 9।",
    "sourceQuestion": 15
  },
  {
    "subject": "Higher Mathematics",
    "q": "BANANA শব্দটির সব বর্ণ ব্যবহার করে কতটি ভিন্ন বিন্যাস করা যায়?",
    "options": [
      "720",
      "120",
      "60",
      "6"
    ],
    "answer": 2,
    "explain": "6টি বর্ণে A তিনবার ও N দুবার: 6!/(3!2!)=60।",
    "sourceQuestion": 16
  },
  {
    "subject": "Higher Mathematics",
    "q": "∠AOB=30° এবং OB=12 একক হলে বৃত্তকলার ক্ষেত্রফল কত?",
    "options": [
      "π",
      "2π",
      "12π",
      "24π"
    ],
    "answer": 2,
    "explain": "বৃত্তকলার ক্ষেত্রফল = (30/360)π(12²)=12π।",
    "sourceQuestion": 17
  },
  {
    "subject": "Higher Mathematics",
    "q": "10 বাহুবিশিষ্ট বহুভুজের কর্ণের সংখ্যা কত?",
    "options": [
      "35",
      "45",
      "80",
      "90"
    ],
    "answer": 0,
    "explain": "10×(10−3)/2 = 35।",
    "sourceQuestion": 18
  },
  {
    "subject": "Higher Mathematics",
    "q": "8টি ভিন্ন রঙের পতাকা থেকে 5টি নিয়ে ভিন্ন সিগন্যাল গঠনের উপায় কত?",
    "options": [
      "⁸P₅",
      "5!",
      "8!",
      "⁸C₅"
    ],
    "answer": 0,
    "explain": "ক্রম গুরুত্বপূর্ণ, তাই বিন্যাস 8P5।",
    "sourceQuestion": 19
  },
  {
    "subject": "Higher Mathematics",
    "q": "‘DIFFERENT’ শব্দে স্বরবর্ণগুলোর অবস্থান অপরিবর্তিত রেখে বর্ণগুলো কতভাবে সাজানো যায়?",
    "options": [
      "720",
      "719",
      "360",
      "359"
    ],
    "answer": 2,
    "explain": "স্বরবর্ণের অবস্থান স্থির রাখলে ব্যঞ্জনবর্ণ D,F,F,R,N,T ছয়টি স্থানে সাজবে; F দুবার, তাই 6!/2!=360।",
    "sourceQuestion": 20
  },
  {
    "subject": "Higher Mathematics",
    "q": "¹²C₀-এর মান কত?",
    "options": [
      "0",
      "1",
      "12",
      "144"
    ],
    "answer": 1,
    "explain": "যেকোনো n-এর জন্য nC0=1।",
    "sourceQuestion": 21
  },
  {
    "subject": "Higher Mathematics",
    "q": "tan x-এর রেঞ্জ কোনটি?",
    "options": [
      "(−1,1)",
      "[−1,1]",
      "(−∞,∞)",
      "[−∞,∞]"
    ],
    "answer": 2,
    "explain": "tan x-এর রেঞ্জ সব বাস্তব সংখ্যা (−∞,∞)।",
    "sourceQuestion": 22
  },
  {
    "subject": "Higher Mathematics",
    "q": "6 জন বালক 4 আসনের বেঞ্চে কতভাবে বসতে পারে?",
    "options": [
      "6!",
      "4!",
      "⁶C₄",
      "⁶P₄"
    ],
    "answer": 3,
    "explain": "চারটি আসনে ছয়জনের মধ্যে চারজনকে ক্রমসহ বসানো: 6P4।",
    "sourceQuestion": 23
  },
  {
    "subject": "Higher Mathematics",
    "q": "25 জন শ্রমিকের বেতনের পরিমিত ব্যবধান 16 হলে ভেদাঙ্ক কত?",
    "options": [
      "4",
      "5",
      "256",
      "625"
    ],
    "answer": 2,
    "explain": "ভেদাঙ্ক = (পরিমিত ব্যবধান)² = 16² = 256।",
    "sourceQuestion": 24
  },
  {
    "subject": "Higher Mathematics",
    "q": "(x − 1/x)^8 বিস্তৃতিতে মধ্যপদটির মান কত?",
    "options": [
      "−70",
      "−56",
      "56",
      "70"
    ],
    "answer": 3,
    "explain": "9টি পদ আছে, তাই 5ম পদ মধ্যপদ; এতে ধ্রুবক পদ C(8,4)(−1)^4=70।",
    "sourceQuestion": 25
  },
  {
    "subject": "Higher Mathematics",
    "q": "বিস্তার পরিমাপে অনপেক্ষ (Absolute) পরিমাপ কোনটি?",
    "options": [
      "বিভেদাঙ্ক",
      "চতুর্থক ব্যবধান",
      "পরিসরাঙ্ক",
      "গড় ব্যবধানাঙ্ক"
    ],
    "answer": null,
    "explain": "যাচাই প্রয়োজন: PDF-এ চতুর্থক ব্যবধান ও পরিসরাঙ্ক—দুটিই absolute measure হিসেবে গ্রহণযোগ্য হতে পারে। প্রশ্নটিতে একাধিক সঠিক বিকল্প থাকার সম্ভাবনা আছে; তাই নম্বর গণনায় এই প্রশ্নটি ধরা হবে না।",
    "sourceQuestion": 26,
    "needsReview": true
  },
  {
    "subject": "Higher Mathematics",
    "q": "(x² + 2 + 1/x²)^8-এর বিস্তৃতিতে মধ্যপদটি কোনটি?",
    "options": [
      "চতুর্থ",
      "পঞ্চম",
      "অষ্টম",
      "নবম"
    ],
    "answer": 3,
    "explain": "প্রদত্ত রাশি (x+1/x)^16-এর সমান; এতে 17টি পদ, তাই মধ্যপদ 9ম।",
    "sourceQuestion": 27
  },
  {
    "subject": "Higher Mathematics",
    "q": "cos(x/3 + π/4)-এর পর্যায় কোনটি?",
    "options": [
      "6π",
      "3π",
      "π/3",
      "π/6"
    ],
    "answer": 0,
    "explain": "cos(kx+c)-এর পর্যায় 2π/|k|; k=1/3, তাই 6π।",
    "sourceQuestion": 28
  },
  {
    "subject": "Higher Mathematics",
    "q": "SESIP শব্দটির সব বর্ণ ব্যবহার করে কতটি ভিন্ন বিন্যাস পাওয়া যায়?",
    "options": [
      "24",
      "60",
      "120",
      "240"
    ],
    "answer": 1,
    "explain": "S দুবার আছে; মোট 5!/2!=60।",
    "sourceQuestion": 29
  },
  {
    "subject": "Higher Mathematics",
    "q": "sin 3x-এর পর্যায় কত?",
    "options": [
      "2π/3",
      "3π",
      "π/3",
      "2π"
    ],
    "answer": 0,
    "explain": "sin(3x)-এর পর্যায় 2π/3।",
    "sourceQuestion": 30
  },
  {
    "subject": "Higher Mathematics",
    "q": "0, 1, 2 অঙ্কগুলোর প্রত্যেকটি একবার ব্যবহার করে কতটি অর্থপূর্ণ তিন অঙ্কের সংখ্যা গঠন করা যায়?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 2,
    "explain": "প্রথম অঙ্ক 0 হতে পারে না; প্রথম স্থানে 1 বা 2 (2 উপায়), বাকি দুই অঙ্ক 2! উপায়ে: মোট 4।",
    "sourceQuestion": 31
  },
  {
    "subject": "Higher Mathematics",
    "q": "8টা 30 মিনিটে ঘড়ির কাঁটার মধ্যবর্তী ক্ষুদ্র কোণ কত?",
    "options": [
      "60°",
      "75°",
      "90°",
      "105°"
    ],
    "answer": 1,
    "explain": "মিনিটের কাঁটা 180° এবং ঘণ্টার কাঁটা 255° অবস্থানে; পার্থক্য 75°।",
    "sourceQuestion": 32
  },
  {
    "subject": "Higher Mathematics",
    "q": "KOMILLA শব্দটির অক্ষরগুলো কতভাবে সাজানো যায়?",
    "options": [
      "5250",
      "5040",
      "2520",
      "2502"
    ],
    "answer": 2,
    "explain": "7টি অক্ষরে L দুবার; বিন্যাস 7!/2!=2520।",
    "sourceQuestion": 33
  },
  {
    "subject": "Higher Mathematics",
    "q": "0! এর মান কত?",
    "options": [
      "−∞",
      "0",
      "1",
      "∞"
    ],
    "answer": 2,
    "explain": "সংজ্ঞা অনুযায়ী 0!=1।",
    "sourceQuestion": 34
  },
  {
    "subject": "Higher Mathematics",
    "q": "ⁿC₁₀ = ⁿC₆ হলে n কত?",
    "options": [
      "4",
      "6",
      "10",
      "16"
    ],
    "answer": 3,
    "explain": "nCᵣ=nCₛ হলে r=s অথবা r+s=n; এখানে n=10+6=16।",
    "sourceQuestion": 35
  },
  {
    "subject": "Higher Mathematics",
    "q": "একটি পরিবারের তিন বালকের বয়স 3, 4, 5 বছর হলে বয়সের পরিমিত ব্যবধান কত?",
    "options": [
      "√(2/3)",
      "2/3",
      "√(3/2)",
      "3/2"
    ],
    "answer": 0,
    "explain": "গড় 4; বর্গ বিচ্যুতির গড় 2/3, তাই পরিমিত ব্যবধান √(2/3)।",
    "sourceQuestion": 36
  },
  {
    "subject": "Higher Mathematics",
    "q": "10, 11 ও 12 তথ্যের গড় ব্যবধানাঙ্ক কত?",
    "options": [
      "0.67%",
      "4.6%",
      "6.06%",
      "6.67%"
    ],
    "answer": 2,
    "explain": "গড় 11; গড় পরম বিচ্যুতি 2/3। গড় ব্যবধানাঙ্ক=(2/3)/11×100≈6.06%।",
    "sourceQuestion": 37
  },
  {
    "subject": "Higher Mathematics",
    "q": "(1−2x)^5-এর বিস্তৃতিতে x³-এর সহগ কত?",
    "options": [
      "−80",
      "−10",
      "10",
      "80"
    ],
    "answer": 0,
    "explain": "x³-এর সহগ = ⁵C₃(−2)³=10×(−8)=−80।",
    "sourceQuestion": 38
  },
  {
    "subject": "Higher Mathematics",
    "q": "(1+x)^8 বিস্তৃতিতে 4র্থ ও 5ম পদ সমান হলে x কত?",
    "options": [
      "4/5",
      "5/4",
      "3/4",
      "4/3"
    ],
    "answer": 0,
    "explain": "4র্থ পদ 56x³ এবং 5ম পদ 70x⁴; সমান হলে x=56/70=4/5।",
    "sourceQuestion": 39
  },
  {
    "subject": "Higher Mathematics",
    "q": "5, 7, 9, 11 সংখ্যাগুলোর পরিমিত ব্যবধান কত?",
    "options": [
      "√5",
      "√8",
      "5",
      "8"
    ],
    "answer": 0,
    "explain": "গড় 8; বর্গ বিচ্যুতির গড় 5, তাই পরিমিত ব্যবধান √5।",
    "sourceQuestion": 40
  },
  {
    "subject": "Higher Mathematics",
    "q": "(3−x²)^7-এর বিস্তৃতিতে 4র্থ পদ কোনটি?",
    "options": [
      "−2835x⁶",
      "−35x⁶",
      "35x⁶",
      "2835x⁶"
    ],
    "answer": 0,
    "explain": "4র্থ পদে x²-এর ঘাত 3: ⁷C₃·3⁴·(−x²)³=−2835x⁶।",
    "sourceQuestion": 41
  },
  {
    "subject": "Higher Mathematics",
    "q": "(y+1)^(2n) বিস্তৃতিতে y^(n+1)-এর সহগ কোনটি?",
    "options": [
      "²ⁿCₙ₊₁",
      "²ⁿCₙ",
      "²ⁿCₙ₋₁",
      "²ⁿ⁺¹Cₙ"
    ],
    "answer": 0,
    "explain": "y^(n+1)-এর সহগ = 2nC(n+1)।",
    "sourceQuestion": 42
  },
  {
    "subject": "Higher Mathematics",
    "q": "(2a+x)^5-এর বিস্তৃতিতে x⁴-এর সহগ 40 হলে a কত?",
    "options": [
      "1",
      "√2",
      "2",
      "4"
    ],
    "answer": 3,
    "explain": "x⁴-এর সহগ = ⁵C₄(2a)=10a; 10a=40, তাই a=4।",
    "sourceQuestion": 43
  },
  {
    "subject": "Higher Mathematics",
    "q": "ⁿC₅ = ⁿC₇ হলে n-এর মান কত?",
    "options": [
      "2",
      "7",
      "12",
      "35"
    ],
    "answer": 2,
    "explain": "nCᵣ=nCₛ-এর সমমিতি অনুযায়ী n=5+7=12।",
    "sourceQuestion": 44
  },
  {
    "subject": "Higher Mathematics",
    "q": "‘AMERICA’ শব্দটির সব অক্ষর দিয়ে কতটি ভিন্ন বিন্যাস করা যায়?",
    "options": [
      "2519",
      "2520",
      "5039",
      "5040"
    ],
    "answer": 1,
    "explain": "7টি অক্ষরে A দুবার; 7!/2!=2520।",
    "sourceQuestion": 45
  },
  {
    "subject": "Higher Mathematics",
    "q": "tan(3x/2)-এর মৌলিক পর্যায় কত?",
    "options": [
      "π/3",
      "2π/3",
      "π",
      "3π/2"
    ],
    "answer": 1,
    "explain": "tan(kx)-এর পর্যায় π/|k|; k=3/2, তাই 2π/3।",
    "sourceQuestion": 46
  },
  {
    "subject": "Higher Mathematics",
    "q": "tan 2x-এর পর্যায় কোনটি?",
    "options": [
      "π/2",
      "3π/2",
      "π",
      "2π"
    ],
    "answer": 0,
    "explain": "tan(2x)-এর পর্যায় π/2।",
    "sourceQuestion": 47
  },
  {
    "subject": "Higher Mathematics",
    "q": "(x+1/x)^33 বিস্তৃতিতে কোন পদগুলো মধ্যপদ?",
    "options": [
      "16তম",
      "17তম",
      "16তম ও 17তম",
      "17তম ও 18তম"
    ],
    "answer": 3,
    "explain": "33 ঘাতের বিস্তৃতিতে 34টি পদ থাকে; দুটি মধ্যপদ 17তম ও 18তম।",
    "sourceQuestion": 48
  },
  {
    "subject": "Higher Mathematics",
    "q": "6 জন শিক্ষার্থীকে সমান সংখ্যক শিক্ষার্থী নিয়ে দুটি দলে কতভাবে ভাগ করা যায়?",
    "options": [
      "10",
      "20",
      "60",
      "120"
    ],
    "answer": 0,
    "explain": "3 জন করে দুটি অবিভক্ত দলে ভাগ: 6!/(3!3!2!)=10।",
    "sourceQuestion": 49
  },
  {
    "subject": "Higher Mathematics",
    "q": "ABSCISSA শব্দটির অক্ষরগুলো কতভাবে পুনর্বিন্যাস করা যায়?",
    "options": [
      "719",
      "3359",
      "3360",
      "20159"
    ],
    "answer": 2,
    "explain": "8টি অক্ষরে A দুবার ও S তিনবার; 8!/(2!3!)=3360।",
    "sourceQuestion": 50
  }
];
