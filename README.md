# TΛΠΖiM — MCQ Practice Website

একটি সহজ, responsive MCQ practice website। এটি HTML, CSS এবং JavaScript দিয়ে তৈরি; কোনো framework, backend, database বা API দরকার নেই।

## ফাইলগুলো
- `index.html` — ওয়েবসাইটের কাঠামো
- `style.css` — ডিজাইন ও responsive layout
- `script.js` — প্রশ্ন, টাইমার, উত্তর যাচাই এবং ফলাফল

## নিজের কম্পিউটারে চালানো
1. ZIP ফাইলটি extract/unzip করো।
2. `index.html` ফাইলে ডাবল-ক্লিক করো।
3. ব্রাউজারে ওয়েবসাইটটি খুলবে।

## নিজের প্রশ্ন যোগ বা পরিবর্তন
`script.js` ফাইলের শুরুতে `questions` array আছে। প্রতিটি প্রশ্নের কাঠামো:

```js
{
  q: "প্রশ্ন এখানে?",
  options: ["অপশন A", "অপশন B", "অপশন C", "অপশন D"],
  answer: 1,
  explanation: "উত্তরের ছোট ব্যাখ্যা।"
}
```

`answer` হলো সঠিক অপশনের শূন্য থেকে শুরু হওয়া index: A = 0, B = 1, C = 2, D = 3।

## GitHub Pages-এ বিনা খরচে প্রকাশ
1. GitHub-এ লগইন করে নতুন repository তৈরি করো, যেমন `mcq-learning-site`।
2. এই ফোল্ডারের তিনটি মূল ফাইল (`index.html`, `style.css`, `script.js`) repository-তে upload করো।
3. repository-র **Settings → Pages**-এ যাও।
4. **Build and deployment** অংশে **Deploy from a branch** বেছে নাও।
5. Branch হিসেবে `main` এবং folder হিসেবে `/(root)` বেছে **Save** করো।
6. কিছুক্ষণ পর Pages-এর একই জায়গায় তোমার website link দেখা যাবে।

## গুরুত্বপূর্ণ সীমাবদ্ধতা
এটি প্রথম demo/practice version। উত্তর ও প্রশ্ন browser-এর JavaScript ফাইলে দেখা যায়, তাই গোপন/উচ্চ-নিরাপত্তার পরীক্ষা নেওয়ার জন্য নয়। এতে account, admin panel, server-side result storage বা central leaderboard নেই। GitHub Pages-এ এই static website বিনা hosting fee-তে প্রকাশ করা যায়।
