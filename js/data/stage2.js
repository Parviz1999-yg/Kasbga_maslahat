const STAGE_2 = {
  id: "stage2-work-goal",
  title: "2-bosqich",
  criterion: "Mehnat maqsadi",
  description: "O‘quvchining ish faoliyatida qanday natijaga intilishini aniqlang.",
  evidence: "O‘quvchining bilish (gnostik), o‘zgartirish (transformatsion) yoki izlash (izlovchi) maqsadi.",
  questions: [
    {
      id: "s2q1",
      text: "Nima qilishni yoqtirasiz: bilish, o‘zgartirish yoki izlash?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Qanday ishlashini bilishni.", signals: ["gnostic"] },
        madina: { evidenceRelevance: 5, text: "Yangi narsa yaratish va o‘zgartirishni.", signals: ["transform"] },
        javohir: { evidenceRelevance: 5, text: "Sababini topish va tahlil qilishni.", signals: ["gnostic"] },
        sevinch: { evidenceRelevance: 5, text: "Yordam beradigan yechim izlashni.", signals: ["search"] },
        diyor: { evidenceRelevance: 5, text: "Amalda o‘zgartirib ko‘rishni.", signals: ["transform"] },
        zuhra: { evidenceRelevance: 5, text: "Turli yo‘llarni izlab topishni.", signals: ["search"] }
      }
    },
    {
      id: "s2q2",
      text: "Qiyin ishda avval nima qilasiz?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Sababini tushunishga harakat qilaman.", signals: ["gnostic"] },
        madina: { evidenceRelevance: 5, text: "Yangi variant o‘ylab, o‘zgartiraman.", signals: ["transform"] },
        javohir: { evidenceRelevance: 5, text: "Ma’lumot yig‘ib, tahlil qilaman.", signals: ["gnostic"] },
        sevinch: { evidenceRelevance: 5, text: "Yechim izlayman.", signals: ["search"] },
        diyor: { evidenceRelevance: 5, text: "Sinab ko‘rib, tuzataman.", signals: ["transform"] },
        zuhra: { evidenceRelevance: 5, text: "Bir necha yo‘lni solishtiraman.", signals: ["search"] }
      }
    },
    {
      id: "s2q3",
      text: "Natija yoki jarayon muhimroqmi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 4, text: "Qanday ishlashini tushunish muhim.", signals: ["gnostic"] },
        madina: { evidenceRelevance: 4, text: "Yaxshi natija chiqishi muhim.", signals: ["transform"] },
        javohir: { evidenceRelevance: 4, text: "To‘g‘ri tahlil qilish muhim.", signals: ["gnostic"] },
        sevinch: { evidenceRelevance: 4, text: "Foydali yechim topish muhim.", signals: ["search"] },
        diyor: { evidenceRelevance: 4, text: "Amaliy natija muhim.", signals: ["transform"] },
        zuhra: { evidenceRelevance: 4, text: "Yaxshi yo‘lni topish muhim.", signals: ["search"] }
      }
    },
    {
      id: "s2q4",
      text: "Nima qilishni xohlaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Hozircha aniq bilmayman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Qiziqarli narsa bo‘lsa bas.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Foydali ish bo‘lsa yaxshi.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Odamlarga yordam bersa yaxshi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Amaliy ish bo‘lsa yoqadi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Jamoa bilan bo‘lsa yaxshi.", signals: [] }
      }
    },
    {
      id: "s2q5",
      text: "Qiyin ishda nima qilishni o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Keyinroq o‘ylab ko‘raman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Kimdandir so‘rayman.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Vaqt ajrataman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Yordam so‘rayman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Sinab ko‘raman.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Maslahat olaman.", signals: [] }
      }
    },
    {
      id: "s2q6",
      text: "Natija haqida nima deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Yaxshi bo‘lishi kerak.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Chiroyli chiqsa yaxshi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "To‘g‘ri bo‘lishi kerak.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Foydali bo‘lsa yaxshi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ishlasa bas.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Hammaga yoqsa yaxshi.", signals: [] }
      }
    },
    {
      id: "s2q7",
      text: "Jarayon sizga qanday tuyuladi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Ba’zan qiziq.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Ijodiy bo‘lsa yoqadi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Tartibli bo‘lsa yaxshi.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Foydali bo‘lsa yoqadi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Amaliy bo‘lsa yoqadi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Jamoa bilan bo‘lsa yaxshi.", signals: [] }
      }
    },
    {
      id: "s2q8",
      text: "Nima sizga muhimroq ko‘rinadi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Qulaylik.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Go‘zallik.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Aniqlik.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Foyda.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Natija.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlar.", signals: [] }
      }
    }
  ]
};
