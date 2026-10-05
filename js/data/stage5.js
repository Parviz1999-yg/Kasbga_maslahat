const STAGE_5 = {
  id: "stage5-summary",
  title: "5-bosqich",
  criterion: "Umumlashtirish",
  description: "Yig‘ilgan dalillar asosida o‘quvchining yo‘nalishini tasdiqlang.",
  evidence: "An’anaviy va zamonaviy kasblar, umumiy moyillik.",
  questions: [
    {
      id: "s5q1",
      text: "O‘zingizni qayerga yaqin his qilasiz?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Texnika va kompyuter yo‘nalishiga.", signals: ["technology"] },
        madina: { evidenceRelevance: 5, text: "Ijod va dizayn yo‘nalishiga.", signals: ["artistic"] },
        javohir: { evidenceRelevance: 5, text: "Hisob-kitob va tahlil yo‘nalishiga.", signals: ["signs"] },
        sevinch: { evidenceRelevance: 5, text: "Tabiat va salomatlik yo‘nalishiga.", signals: ["nature"] },
        diyor: { evidenceRelevance: 5, text: "Mexanika va amaliy texnika yo‘nalishiga.", signals: ["technology"] },
        zuhra: { evidenceRelevance: 5, text: "Odamlar bilan ishlash yo‘nalishiga.", signals: ["people"] }
      }
    },
    {
      id: "s5q2",
      text: "Qanday ish sizga mos?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Dastur yoki texnik muammo yechish.", signals: ["technology", "automated"] },
        madina: { evidenceRelevance: 5, text: "Dizayn yaratish va bezash.", signals: ["artistic", "manual"] },
        javohir: { evidenceRelevance: 5, text: "Ma’lumot tahlil qilish.", signals: ["signs", "gnostic"] },
        sevinch: { evidenceRelevance: 5, text: "Tabiat yoki odamga foyda berish.", signals: ["nature", "people"] },
        diyor: { evidenceRelevance: 5, text: "Qurilma tuzatish va sozlash.", signals: ["technology", "mechanized"] },
        zuhra: { evidenceRelevance: 5, text: "O‘qitish yoki maslahat berish.", signals: ["people", "functional"] }
      }
    },
    {
      id: "s5q3",
      text: "An’anaviy yoki yangi kasbmi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 4, text: "Yangi — IT va raqamli kasblar.", signals: ["modern", "technology"] },
        madina: { evidenceRelevance: 4, text: "Ikkisi ham — dizayn zamonaviy ham.", signals: ["modern", "artistic"] },
        javohir: { evidenceRelevance: 4, text: "Yangi — data va tahlil.", signals: ["modern", "signs"] },
        sevinch: { evidenceRelevance: 4, text: "An’anaviy ham, ekologik yangi kasblar ham.", signals: ["nature", "modern"] },
        diyor: { evidenceRelevance: 4, text: "An’anaviy texnika, lekin yangi uskunalar bilan.", signals: ["technology"] },
        zuhra: { evidenceRelevance: 4, text: "An’anaviy ta’lim, yangi usullar bilan.", signals: ["people"] }
      }
    },
    {
      id: "s5q4",
      text: "O‘zingizni qayerga yaqin deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Hali aniq emas.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Har xil narsa qiziq.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Keyinroq qaror qilaman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Oilam nima desa.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Do‘stlarim nima tanlasa.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Hali o‘ylanmoqdaman.", signals: [] }
      }
    },
    {
      id: "s5q5",
      text: "Qanday ish sizga mos ko‘rinadi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Oson ish.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Chiroyli ish.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Tinch ish.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Foydali ish.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Kuch talab qiladigan ish.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlar ko‘p bo‘lgan ish.", signals: [] }
      }
    },
    {
      id: "s5q6",
      text: "An’anaviy kasb haqida nima deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Eski bo‘lishi mumkin.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Ba’zilari yaxshi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Barqaror.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Hurmatli.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Kerakli.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Muhim.", signals: [] }
      }
    },
    {
      id: "s5q7",
      text: "Yangi kasb sizga qiziqmi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Ha, eshitganman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Biroz.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Bilmayman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Ehtimol.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Qiziq.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Balki.", signals: [] }
      }
    }
  ]
};
