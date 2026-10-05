const STAGE_3 = {
  id: "stage3-work-tools",
  title: "3-bosqich",
  criterion: "Mehnat vositalari",
  description: "O‘quvchining ish jarayonida qaysi vositalar bilan ishlashga moyilligini aniqlang.",
  evidence: "Qo‘l mehnati, mexanizatsiyalashgan, avtomatlashtirilgan yoki funksional vositalar.",
  questions: [
    {
      id: "s3q1",
      text: "Qanday usulda ishlashni yoqtirasiz?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Kompyuter va dastur orqali. Sichqoncha, klaviatura bilan ishlash menga qulay.", signals: ["automated"] },
        madina: { evidenceRelevance: 5, text: "Qalam, planshet yoki telefonda chizib ishlashni yoqtiraman. Qo‘l bilan seziladi.", signals: ["manual"] },
        javohir: { evidenceRelevance: 5, text: "Excel, kalkulyator, jadval — hisoblash dasturlari bilan ishlash yoqadi.", signals: ["automated"] },
        sevinch: { evidenceRelevance: 5, text: "Oddiy asboblar: qaychi, ko‘zatoki, qo‘lqop. Murakkab texnika shart emas.", signals: ["manual"] },
        diyor: { evidenceRelevance: 5, text: "Kalit, otvyortka, bolg‘a — qo‘l asbobi va mexanizm bilan ishlashni yoqtiraman.", signals: ["mechanized"] },
        zuhra: { evidenceRelevance: 5, text: "Telefon, mikrofon, taqdimot — odamlar bilan bog‘lanadigan vositalar menga mos.", signals: ["functional"] }
      }
    },
    {
      id: "s3q2",
      text: "Qo‘l bilan ishlash yoqadimi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 4, text: "Uzoq qo‘l mehnati charchatadi. Kompyuter qulayroq, lekin kerak bo‘lsa qilaman.", signals: ["automated"] },
        madina: { evidenceRelevance: 5, text: "Ha, ayniqsa chizish, yopishtirish, bezash — qo‘l bilan qilsam, natija o‘zimniki bo‘ladi.", signals: ["manual"] },
        javohir: { evidenceRelevance: 3, text: "Yozish, chizish kerak bo‘lsa qilaman. Lekin ko‘p qo‘l mehnati yoqmaydi.", signals: ["functional"] },
        sevinch: { evidenceRelevance: 5, text: "Ha, gul ekish, ovqat tayyorlash, parvarish — qo‘l bilan ishlash tinchlantiradi.", signals: ["manual"] },
        diyor: { evidenceRelevance: 5, text: "Juda yoqadi. Qo‘lim bilan tuzatsam yoki yig‘sam, tushunarliroq bo‘ladi.", signals: ["manual", "mechanized"] },
        zuhra: { evidenceRelevance: 3, text: "Yozish, taqdimot tayyorlash bo‘lsa yaxshi. Og‘ir qo‘l ishi emas.", signals: ["functional"] }
      }
    },
    {
      id: "s3q3",
      text: "Texnika bilan ishlash yoqadimi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Ha, kompyuter, telefon, noutbuk — kundalik hayotim shu. Texnikasiz qiyin.", signals: ["automated"] },
        madina: { evidenceRelevance: 3, text: "Dizayn dasturlari yordam beradi, lekin asosiy g‘oya o‘zimdan chiqadi.", signals: ["functional"] },
        javohir: { evidenceRelevance: 5, text: "Ha, hisoblash dasturlari vaqtni tejaydi. Qo‘lda uzoq hisoblash zerikarli.", signals: ["automated"] },
        sevinch: { evidenceRelevance: 3, text: "Kerak bo‘lsa ishlataman, lekin texnikaga qaram bo‘lishni yoqtirmayman.", signals: ["functional"] },
        diyor: { evidenceRelevance: 5, text: "Ha, dvigatel, nasos, elektr asbob — texnika bilan ishlash qiziq.", signals: ["mechanized"] },
        zuhra: { evidenceRelevance: 4, text: "Zoom, telefon, proyektor — odamlar bilan bog‘lanish uchun texnika kerak.", signals: ["automated", "functional"] }
      }
    },
    {
      id: "s3q4",
      text: "Qanday usulda ishlashni eshitgansiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Onlayn ishlash, uydan dasturlash haqida ko‘p eshitaman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Canva, Photoshop deb eshitaman, lekin chuqur o‘rganmaganman.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Ofisda kompyuter oldida ishlash haqida gapiriladi.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Dalada, laboratoriyada ishlash haqida eshitganman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Avtoservis, ustaxona haqida qo‘shnilar gapiradi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Maktabda doska, proyektor bilan dars o‘tish haqida bilaman.", signals: [] }
      }
    },
    {
      id: "s3q5",
      text: "Qo‘l bilan ishlash haqida nima deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Ba’zan kerak, lekin kelajakda kamayadi deb o‘ylayman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Ijodiy bo‘lsa, qadrli. Oddiy og‘ir ish bo‘lsa, yoqmaydi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Zarurat bo‘lsa qilinadi. Asosiy ish boshqa.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Foydali deb o‘ylayman, tabiatga yaqinlashtiradi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Yaxshi narsa. Qo‘l ishini hurmat qilaman.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Oddiy ish deb o‘ylayman, lekin kerak joyda qilinadi.", signals: [] }
      }
    },
    {
      id: "s3q6",
      text: "Texnika bilan ishlash sizga qanday tuyuladi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Oddiy va qulay. Bolaligimdan o‘rganganman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Qiziq, lekin ba’zan murakkab interfeys charchatadi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Foydali, vaqtni tejaydi.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Yordam beradi, lekin hamma narsani texnikaga topshirish kerak emas.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Kerakli. Texnikasiz ko‘p ish qilinmaydi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Zamonaviy. Hamma ishlatadi.", signals: [] }
      }
    },
    {
      id: "s3q7",
      text: "Qanday vosita haqida bilasiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Kompyuter, telefon, naushnik — shularni bilaman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Qalam, bo‘yoq, planshet.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Kalkulyator, jadvallar.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Bog‘ asboblari, oddiy oshxona anjomlari.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Kalit to‘plami, bolg‘a, otvyortka.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Telefon, karnay, doska.", signals: [] }
      }
    },
    {
      id: "s3q8",
      text: "Nima bilan ishlashni xohlaysiz deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Hali aniq emas. Qulay narsa bo‘lsa, ishlayman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Qiziqarli vosita bilan — yangi bo‘lsa ham sinab ko‘raman.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Tushunarli va aniq vosita bo‘lsa, yaxshi.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Zararsiz, oddiy vosita bo‘lsa, ma’qul.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ishlaydigan, mustahkam asbob bo‘lsa, bas.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlar bilan bog‘laydigan vosita bo‘lsa, yoqadi.", signals: [] }
      }
    }
  ]
};
