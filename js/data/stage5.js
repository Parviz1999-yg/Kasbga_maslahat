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
        azizbek: { evidenceRelevance: 5, text: "Kompyuter, dastur, texnika tomonga. IT deb ataladigan yo‘nalish menga yaqinroq tuyuladi.", signals: ["technology"] },
        madina: { evidenceRelevance: 5, text: "Dizayn, rasm, chiroyli narsa yaratish. Ijodiy sohaga yaqinman.", signals: ["artistic"] },
        javohir: { evidenceRelevance: 5, text: "Hisob, tahlil, raqamlar. Aniq fanlar va ma’lumot bilan ishlash.", signals: ["signs"] },
        sevinch: { evidenceRelevance: 5, text: "Tabiat, hayvonlar, salomatlik. Odam yoki tabiatga foyda beradigan yo‘nalish.", signals: ["nature"] },
        diyor: { evidenceRelevance: 5, text: "Texnika, ta’mirlash, mexanika. Qo‘l va asbob bilan ishlanadigan soha.", signals: ["technology"] },
        zuhra: { evidenceRelevance: 5, text: "Odamlar, tushuntirish, jamoa. Ta’lim yoki odamlar bilan ishlash.", signals: ["people"] }
      }
    },
    {
      id: "s5q2",
      text: "Qanday ish sizga mos?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Dastur yozish, sayt qilish yoki kompyuter muammosini yechish — shunday ish mos keladi deb o‘ylayman.", signals: ["technology", "automated"] },
        madina: { evidenceRelevance: 5, text: "Logo, post, video muqovasi yasash. Ijodiy topshiriq bo‘lsa, o‘zimni erkin his qilaman.", signals: ["artistic", "manual"] },
        javohir: { evidenceRelevance: 5, text: "Ma’lumotni tekshirish, hisob-kitob, hisobot. Aniqlik talab qiladigan ish.", signals: ["signs", "gnostic"] },
        sevinch: { evidenceRelevance: 5, text: "Parvarish, yordam, tabiat bilan bog‘liq ish. Kimdirga foyda tegadigan ish.", signals: ["nature", "people"] },
        diyor: { evidenceRelevance: 5, text: "Qurilmani tuzatish, sozlash, yig‘ish. Natija ko‘rinadigan amaliy ish.", signals: ["technology", "mechanized"] },
        zuhra: { evidenceRelevance: 5, text: "Dars o‘tish, maslahat, tadbir. Odamlar bilan gaplashib ishlanadigan ish.", signals: ["people", "functional"] }
      }
    },
    {
      id: "s5q3",
      text: "An’anaviy yoki yangi kasbmi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 4, text: "Yangi kasblar — dasturchi, AI, web. Lekin asosiy bilim kerak, shuni tushunaman.", signals: ["modern", "technology"] },
        madina: { evidenceRelevance: 4, text: "Ikkisi ham. Dizayn eski san’at, lekin hozir raqamli. Zamonaviy vositalar bilan ishlashni xohlayman.", signals: ["modern", "artistic"] },
        javohir: { evidenceRelevance: 4, text: "Yangi — data tahlil, raqamli hisob. An’anaviy buxgalteriya ham yaqin, lekin kompyuter bilan.", signals: ["modern", "signs"] },
        sevinch: { evidenceRelevance: 4, text: "An’anaviy ham (agronom, hamshira), yangi ekologik kasblar ham qiziq.", signals: ["nature", "modern"] },
        diyor: { evidenceRelevance: 4, text: "An’anaviy ustaxonalar bor, lekin yangi uskunalar bilan. Ikkalasini birlashtirgan yo‘l.", signals: ["technology"] },
        zuhra: { evidenceRelevance: 4, text: "O‘qituvchilik an’anaviy, lekin onlayn dars, yangi metodlar bilan bo‘lsa, yanada qiziq.", signals: ["people"] }
      }
    },
    {
      id: "s5q4",
      text: "O‘zingizni qayerga yaqin deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Hali 9-sinfman, aniq aytish qiyin. Keyinroq ko‘raman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Har xil narsa qiziq. Bir kun dizayn, bir kun boshqa.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Ota-onam nima desa, o‘ylab ko‘raman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Oilam maslahat beradi, men ham tinglayman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Do‘stlarim nima tanlasa, bilmayman, o‘zimiki bo‘lishi kerak.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Hali o‘ylanmoqdaman, shoshilmayman.", signals: [] }
      }
    },
    {
      id: "s5q5",
      text: "Qanday ish sizga mos ko‘rinadi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Oson va uydan qilinadigan ish ko‘rinadi.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Chiroyli ofis, chiroyli ish — shunday ko‘rinadi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Tinch, barqaror ish.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Foydali, odamlarga yaxshi ish.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Kuch talab qiladigan, erkaklar ishi deb o‘ylayman.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlar ko‘p, suhbat ko‘p bo‘lgan ish.", signals: [] }
      }
    },
    {
      id: "s5q6",
      text: "An’anaviy kasb haqida nima deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Ba’zilari eskirgan, lekin kerakliari bor.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Hurmatli, lekin zamon bilan o‘zgarishi kerak.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Barqaror, ish topish osonroq bo‘lishi mumkin.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Hurmatli va foydali deb o‘ylayman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Kerakli. Hamma narsa yangi bo‘lavermaydi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Muhim, ayniqsa o‘qituvchi, shifokor.", signals: [] }
      }
    },
    {
      id: "s5q7",
      text: "Yangi kasb sizga qiziqmi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Ha, eshitganman. Sinab ko‘rish mumkin.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Biroz. Yangi narsa doim qiziq.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Bilmayman, avval o‘rganib ko‘raman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Ehtimol, agar foydali bo‘lsa.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Qiziq, lekin amaliy tomoni muhim.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Balki. Odamlar bilan bog‘liq bo‘lsa, yaxshi.", signals: [] }
      }
    }
  ]
};
