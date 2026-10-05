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
        azizbek: { evidenceRelevance: 5, text: "Kompyuter va dasturlar orqali.", signals: ["automated"] },
        madina: { evidenceRelevance: 5, text: "Qo‘l va ijodiy vositalar bilan.", signals: ["manual"] },
        javohir: { evidenceRelevance: 5, text: "Hisoblash dasturlari bilan.", signals: ["automated"] },
        sevinch: { evidenceRelevance: 5, text: "Oddiy asboblar bilan.", signals: ["manual"] },
        diyor: { evidenceRelevance: 5, text: "Asbob va mexanizmlar bilan.", signals: ["mechanized"] },
        zuhra: { evidenceRelevance: 5, text: "Aloqa va kompyuter vositalari bilan.", signals: ["functional"] }
      }
    },
    {
      id: "s3q2",
      text: "Qo‘l bilan ishlash yoqadimi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 4, text: "Kamroq, texnika qulayroq.", signals: ["automated"] },
        madina: { evidenceRelevance: 5, text: "Ha, ijodiy ishda yoqadi.", signals: ["manual"] },
        javohir: { evidenceRelevance: 3, text: "Kerak bo‘lsa bajaraman.", signals: ["functional"] },
        sevinch: { evidenceRelevance: 5, text: "Ha, amaliy ishda yoqadi.", signals: ["manual"] },
        diyor: { evidenceRelevance: 5, text: "Ha, juda yoqadi.", signals: ["manual", "mechanized"] },
        zuhra: { evidenceRelevance: 3, text: "Ko‘p bo‘lmasa yaxshi.", signals: ["functional"] }
      }
    },
    {
      id: "s3q3",
      text: "Texnika bilan ishlash yoqadimi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Ha, kompyuter va qurilmalar bilan.", signals: ["automated"] },
        madina: { evidenceRelevance: 3, text: "Yordamchi vosita sifatida.", signals: ["functional"] },
        javohir: { evidenceRelevance: 5, text: "Ha, hisoblash dasturlari bilan.", signals: ["automated"] },
        sevinch: { evidenceRelevance: 3, text: "Kerak bo‘lsa ishlataman.", signals: ["functional"] },
        diyor: { evidenceRelevance: 5, text: "Ha, mexanizmlar bilan.", signals: ["mechanized"] },
        zuhra: { evidenceRelevance: 4, text: "Ha, aloqa vositalari bilan.", signals: ["automated", "functional"] }
      }
    },
    {
      id: "s3q4",
      text: "Qanday usulda ishlashni eshitgansiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Dasturlash haqida eshitganman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Dizayn dasturlari haqida.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Excel haqida eshitganman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Oddiy asboblar haqida.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ustaxona asboblari haqida.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Kompyuter haqida eshitganman.", signals: [] }
      }
    },
    {
      id: "s3q5",
      text: "Qo‘l bilan ishlash haqida nima deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Ba’zan kerak bo‘ladi.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Ijodiy bo‘lsa yaxshi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Zarurat bo‘lsa qilaman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Foydali deb o‘ylayman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Yaxshi narsa.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Oddiy ish deb o‘ylayman.", signals: [] }
      }
    },
    {
      id: "s3q6",
      text: "Texnika bilan ishlash sizga qanday tuyuladi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Qulay.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Qiziq.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Foydali.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Yordam beradi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Kerakli.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Zamonaviy.", signals: [] }
      }
    },
    {
      id: "s3q7",
      text: "Qanday vosita haqida bilasiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Kompyuter.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Qalam va planshet.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Kalkulyator.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Oddiy asboblar.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Kalit va bolt.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Telefon.", signals: [] }
      }
    },
    {
      id: "s3q8",
      text: "Nima bilan ishlashni xohlaysiz deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Hali aniq emas.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Qiziqarli vosita bilan.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Qulay vosita bilan.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Foydali vosita bilan.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ishlaydigan asbob bilan.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlarga yaqin vosita bilan.", signals: [] }
      }
    }
  ]
};
