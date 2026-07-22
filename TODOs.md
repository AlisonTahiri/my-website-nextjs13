# 📝 Website TODOs & Future Improvements

Kjo është përmbledhja e çështjeve dhe ideve që kemi për të zhvilluar në të ardhmen për ta bërë websitin akoma më funksional dhe profesional.

---

## 🤖 1. AI Chatbot Overhaul (Rikthimi i Chatbot-it)
Chatbot-i aktual rule-based u fsheh sepse dukej i thjeshtë. Për ta bërë me të vërtetë inteligjent dhe të dobishëm:
- [ ] **LLM Integration:** Të përdorim **Vercel AI SDK** lidhur me një model si GPT-4o-mini apo Claude 3.5 Sonnet.
- [ ] **System Prompt Context:** AI duhet të ketë një dokument të qartë me të gjithë historikun tënd të punës (CV e plotë, detajet e projekteve, stili i komunikimit, madje dhe mënyra si i zgjidh problemet) që t'u përgjigjet vizitorëve sikur të ishe ti.
- [ ] **Cost & Safety Controls:**
  - Vendosja e limiteve të përdorimit (Rate-limiting) për IP-të e vizitorëve që të shmanget abuzimi me koston e API-t.
  - Fshehja e API keys në server (Next.js Server Actions).
  - Përcaktimi i kufijve të bisedës që bot-i të mos flasë për tema jashtë punës tënde.

---

## 💼 2. Përmirësimi i Përmbajtjes & Eksperiencës
- [ ] **Touch Support Details:** Të shtojmë më shumë detaje rreth asaj që bën si Senior Accountant që tregon aftësitë e tua në menaxhim procesesh apo zgjidhje problemesh.
- [ ] **Wolf Technologies Projects:** Të listojmë saktë projektet ku ke kontribuar (p.sh. detajet e Sistemit të Menaxhimit të Brendshëm).
- [ ] **Deutschy & CoinRitual:**
  - Lidhja e linkut aktiv të Deutschy (`https://perkthyesi.vercel.app/`).
  - Shtimi i CoinRitual si projekt i dytë aktiv, pasi tregon aftësitë e tua me teknologji moderne si Supabase, PowerSync dhe SQLite (PWA offline-first).

---

## 🌐 3. i18n & Lokaliteti (Gjermanishtja)
- [ ] **DE Proofreading:** Të bëjmë një kontroll të shpejtë të përkthimeve në gjermanisht për t'u siguruar që tingëllojnë plotësisht profesionale për rekrutuesit në Gjermani.
- [ ] **Language Selection Persistence:** Ruajtja e gjuhës së zgjedhur në `localStorage` apo URL query, që nëse një vizitor e ndryshon në gjermanisht, të qëndrojë e tillë gjatë gjithë lundrimit.

---

## 🎨 4. UX & Performanca vizuale
- [ ] **Image Placeholders:** Vendosja e placeholder-ave me `blurDataURL` për imazhet e projekteve që të mos ketë "lëkundje" të layout-it kur ngarkohet faqja.
- [ ] **Smooth Scrolling Polyfill:** Të sigurohemi që lëvizja scroll-smooth funksionon pa probleme edhe në shfletuesit më të vjetër të Apple (Safari).
- [ ] **Contact Form Validation:** Integrimi i `react-hook-form` ose `zod` në backend për të bërë verifikim më të fortë të email-it përpara se të dërgohet te Resend.

---

## 📈 5. SEO & Analytics
- [ ] **GTM & Analytics:** Konfigurimi i Google Tag Manager (GTM_ID) për të parë statistikat e vizitorëve (sa veta e shtypin butonin LinkedIn apo formën e kontaktit).
- [ ] **OpenGraph Custom Image:** Krijimi i një imazhi të personalizuar për rrjetet sociale (kur dikush ndan linkun tënd në LinkedIn/Twitter, të shfaqet një kartë e bukur vizuale me logon tënde).
