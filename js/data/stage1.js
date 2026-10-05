const STAGE_1 = {
  id: "stage1-person-object",
  title: "1-bosqich",
  criterion: "Mehnat predmeti",
  description: "O‘quvchining mehnat jarayonida asosan nima bilan ishlashga moyilligini aniqlang.",
  evidence: "O‘quvchi faoliyatining asosiy yo‘nalishi: inson, texnika, belgilar tizimi, badiiy obraz yoki tabiat.",
  questions: [
    {
      id: "s1q1",
      text: "Nima bilan ishlashni yoqtirasiz?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Kompyuter va texnik qurilmalar bilan.", signals: ["technology"] },
        madina: { evidenceRelevance: 5, text: "Rasm, rang va dizayn bilan.", signals: ["artistic"] },
        javohir: { evidenceRelevance: 5, text: "Raqamlar, jadvallar va ma’lumotlar bilan.", signals: ["signs"] },
        sevinch: { evidenceRelevance: 5, text: "O‘simliklar, hayvonlar va tabiat bilan.", signals: ["nature"] },
        diyor: { evidenceRelevance: 5, text: "Mashina, mexanizm va asboblar bilan.", signals: ["technology"] },
        zuhra: { evidenceRelevance: 5, text: "Odamlar bilan suhbat va yordam berish bilan.", signals: ["people"] }
      }
    },
    {
      id: "s1q2",
      text: "Nima sizni ko‘proq qiziqtiradi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Dasturlar va texnologiyalar.", signals: ["technology"] },
        madina: { evidenceRelevance: 5, text: "Ijod va chiroyli narsalar yaratish.", signals: ["artistic"] },
        javohir: { evidenceRelevance: 5, text: "Hisob-kitob va tahlil.", signals: ["signs"] },
        sevinch: { evidenceRelevance: 5, text: "Tabiat va tirik organizmlar.", signals: ["nature"] },
        diyor: { evidenceRelevance: 5, text: "Qurilmalar qanday ishlashi.", signals: ["technology"] },
        zuhra: { evidenceRelevance: 5, text: "Odamlar bilan ishlash va tushuntirish.", signals: ["people"] }
      }
    },
    {
      id: "s1q3",
      text: "Qanday narsa bilan band bo‘lishni xohlaysiz?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 4, text: "Kompyuter loyihalari bilan.", signals: ["technology"] },
        madina: { evidenceRelevance: 4, text: "Dizayn va chizma bilan.", signals: ["artistic"] },
        javohir: { evidenceRelevance: 4, text: "Ma’lumot va jadvallar bilan.", signals: ["signs"] },
        sevinch: { evidenceRelevance: 4, text: "Tabiat va biologik ishlar bilan.", signals: ["nature"] },
        diyor: { evidenceRelevance: 4, text: "Asbob va mexanizmlar bilan.", signals: ["technology"] },
        zuhra: { evidenceRelevance: 4, text: "Odamlarga yordam berish bilan.", signals: ["people"] }
      }
    },
    {
      id: "s1q4",
      text: "Nima haqida ko‘p gapirasiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "O‘yinlar va yangiliklar haqida.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Do‘stlar va moda haqida.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Maktab va uy ishlari haqida.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Oilam va dam olish haqida.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Sport va do‘stlar haqida.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Yangiliklar va suhbatlar haqida.", signals: [] }
      }
    },
    {
      id: "s1q5",
      text: "Nima sizga osonroq tuyuladi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Telefon bilan vaqt o‘tkazish.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Musiqa tinglash.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Uyda dam olish.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Sayr qilish.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Sport qilish.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Do‘stlar bilan gaplashish.", signals: [] }
      }
    },
    {
      id: "s1q6",
      text: "Nima bilan shug‘ullanishni eshitgansiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Dasturlash haqida eshitganman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Dizayn haqida eshitganman.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Hisob-kitob haqida eshitganman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Tabiat ishlari haqida eshitganman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Mexanika haqida eshitganman.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "O‘qituvchilik haqida eshitganman.", signals: [] }
      }
    },
    {
      id: "s1q7",
      text: "Nima haqida ko‘p o‘qigansiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Texnologiya yangiliklari.", signals: [] },
        madina: { evidenceRelevance: 1, text: "San’at va moda.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Fan darsliklari.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Biologiya mavzulari.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Texnika haqida.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlar haqidagi hikoyalar.", signals: [] }
      }
    },
    {
      id: "s1q8",
      text: "Nima sizga qiziqarli ko‘rinadi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Yangi gadjetlar.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Chiroyli rasmlar.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Murakkab masalalar.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Hayvonlar haqida videolar.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Mashinalar.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Suhbatlar va tadbirlar.", signals: [] }
      }
    }
  ]
};
