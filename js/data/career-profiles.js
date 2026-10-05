// Kasbga maslahat — o‘quvchilar uchun ichki kasbiy etalon profillar.
// Bu fayl diagnostika uchun mezon sifatida ishlatiladi.
// UI ga chiqarilmaydi.

const CAREER_PROFILES = {
  Azizbek: {
    studentId: "azizbek",
    targetCareer: "Dasturchi",
    careerGroup: ["Dasturchi", "Dasturiy ta’minot mutaxassisi", "Tizim administratori", "Data/analitika mutaxassisi"],
    laborSubject: {
      primary: ["belgilar tizimi"],
      secondary: ["texnika"],
      evidence: ["axborot", "kod", "algoritm", "ma’lumot", "kompyuter tizimlari"]
    },
    laborGoal: {
      primary: ["izlovchi"],
      secondary: ["gnostik"],
      evidence: ["muammoni tahlil qilish", "yangi yechim izlash", "sababni aniqlash", "tizimni yaxshilash"]
    },
    laborTools: {
      primary: ["avtomatlashtirilgan", "funksional"],
      evidence: ["kompyuter", "dasturiy ta’minot", "algoritmlar", "raqamli vositalar"]
    },
    laborConditions: {
      primary: ["yopiq xona", "individual yoki kichik jamoa"],
      secondary: ["barqaror ish muhiti", "yuqori diqqat"],
      evidence: ["kompyuter bilan ishlash", "mustaqil ishlash", "diqqat", "uzoq fikrlash"]
    },
    interestsAbilitiesTendencies: ["mantiqiy fikrlash", "tahlil", "muammo yechish", "texnologiya", "diqqat", "sabr", "mustaqillik"]
  },

  Madina: {
    studentId: "madina",
    targetCareer: "Grafik dizayner",
    careerGroup: ["Grafik dizayner", "Interyer dizayneri", "Reklama dizayni", "Media/vizual dizayn"],
    laborSubject: {
      primary: ["badiiy obraz"],
      secondary: ["belgilar tizimi"],
      evidence: ["tasvir", "rang", "shakl", "kompozitsiya", "bezak", "vizual g‘oya"]
    },
    laborGoal: {
      primary: ["izlovchi"],
      secondary: ["transformatsion"],
      evidence: ["yangi g‘oya yaratish", "mavjud materialni o‘zgartirish", "yangi ko‘rinish hosil qilish"]
    },
    laborTools: {
      primary: ["funksional", "avtomatlashtirilgan"],
      evidence: ["grafik dasturlar", "kompyuter", "planshet", "dizayn vositalari"]
    },
    laborConditions: {
      primary: ["yopiq xona", "ijodiy muhit"],
      secondary: ["individual yoki kichik jamoa", "erkinroq ish tartibi"],
      evidence: ["ijodiy loyiha", "vizual material", "loyiha asosida ishlash"]
    },
    interestsAbilitiesTendencies: ["ijodkorlik", "tasavvur", "estetik did", "rang va shaklni his qilish", "vizual fikrlash", "yangilik yaratish"]
  },

  Javohir: {
    studentId: "javohir",
    targetCareer: "Iqtisodchi",
    careerGroup: ["Iqtisodchi", "Moliyachi", "Buxgalter", "Moliyaviy tahlilchi", "Biznes-analitik"],
    laborSubject: {
      primary: ["belgilar tizimi"],
      evidence: ["raqamlar", "jadvallar", "statistik ma’lumotlar", "hisob-kitob", "grafiklar", "ko‘rsatkichlar"]
    },
    laborGoal: {
      primary: ["gnostik"],
      secondary: ["transformatsion"],
      evidence: ["ma’lumotni tushunish", "tahlil qilish", "taqqoslash", "tahlil asosida qaror chiqarish"]
    },
    laborTools: {
      primary: ["funksional", "avtomatlashtirilgan"],
      evidence: ["kalkulyator", "kompyuter", "elektron jadval", "analitik dasturlar", "statistik vositalar"]
    },
    laborConditions: {
      primary: ["yopiq xona", "tartibli muhit"],
      secondary: ["individual yoki kichik jamoa", "barqaror ish jarayoni"],
      evidence: ["diqqat", "aniqlik", "ma’lumotlar bilan ishlash", "tartiblilik"]
    },
    interestsAbilitiesTendencies: ["matematika", "hisob-kitob", "tahlil", "taqqoslash", "mantiq", "aniqlik", "rejalashtirish"]
  },

  Sevinch: {
    studentId: "sevinch",
    targetCareer: "Shifokor",
    careerGroup: ["Shifokor", "Hamshira", "Diagnostika mutaxassisi", "Farmatsevt", "Reabilitatsiya mutaxassisi"],
    laborSubject: {
      primary: ["inson"],
      secondary: ["tabiat"],
      evidence: ["inson organizmi", "sog‘liq", "biologik jarayonlar", "bemor holati"]
    },
    laborGoal: {
      primary: ["gnostik", "transformatsion"],
      evidence: ["holatni aniqlash", "tushunish", "tashxislash", "yaxshilash", "davolash", "yordam berish"]
    },
    laborTools: {
      primary: ["funksional", "mexanizatsiyalashgan"],
      evidence: ["tibbiy asboblar", "diagnostika qurilmalari", "laboratoriya vositalari"]
    },
    laborConditions: {
      primary: ["tibbiyot muassasasi", "jamoa bilan ishlash"],
      secondary: ["odamlar bilan bevosita muloqot", "yuqori mas’uliyat"],
      evidence: ["bemorlar bilan ishlash", "tezkor vaziyat", "gigiyena", "tartib"]
    },
    interestsAbilitiesTendencies: ["biologiya", "inson salomatligi", "yordam berish", "kuzatuvchanlik", "mas’uliyat", "sabr", "muloqot"]
  },

  Diyor: {
    studentId: "diyor",
    targetCareer: "Mexanik",
    careerGroup: ["Mexanik", "Texnik muhandis", "Texnolog", "Avtomexanik", "Ishlab chiqarish texnigi"],
    laborSubject: {
      primary: ["texnika"],
      evidence: ["mexanizm", "mashina", "asbob", "qurilma", "detal", "texnik tizim"]
    },
    laborGoal: {
      primary: ["transformatsion"],
      secondary: ["izlovchi"],
      evidence: ["sozlash", "ta’mirlash", "takomillashtirish", "yig‘ish", "texnik muammoni hal qilish"]
    },
    laborTools: {
      primary: ["qo‘l", "mexanizatsiyalashgan"],
      evidence: ["asboblar", "stanoklar", "o‘lchov vositalari", "mexanik qurilmalar"]
    },
    laborConditions: {
      primary: ["ustaxona", "ishlab chiqarish muhiti"],
      secondary: ["texnik obyektlar bilan bevosita ishlash", "jismoniy faol muhit"],
      evidence: ["xavfsizlik qoidalari", "amaliy faoliyat", "texnik obyektlar"]
    },
    interestsAbilitiesTendencies: ["texnika", "mexanizmlar", "amaliy ish", "qo‘l mehnati", "qurish", "yig‘ish", "fazoviy tasavvur"]
  },

  Zuhra: {
    studentId: "zuhra",
    targetCareer: "O‘qituvchi",
    careerGroup: ["O‘qituvchi", "Pedagog", "Trener", "Tarbiyachi", "Menejer", "HR mutaxassisi", "Konsultant"],
    laborSubject: {
      primary: ["inson"],
      secondary: ["belgilar tizimi"],
      evidence: ["inson", "muloqot", "bilim", "axborot", "o‘quvchi", "jamoa"]
    },
    laborGoal: {
      primary: ["transformatsion"],
      secondary: ["gnostik"],
      evidence: ["tushuntirish", "o‘rgatish", "rivojlantirish", "ijobiy o‘zgarish", "bilim va ko‘nikma hosil qilish"]
    },
    laborTools: {
      primary: ["funksional"],
      secondary: ["avtomatlashtirilgan"],
      evidence: ["nutq", "muloqot", "pedagogik usullar", "taqdimot", "o‘quv materiallari", "raqamli ta’lim vositalari"]
    },
    laborConditions: {
      primary: ["odamlar bilan bevosita ishlash", "jamoaviy muhit"],
      secondary: ["faol va dinamik ish jarayoni"],
      evidence: ["doimiy muloqot", "jamoa", "tashkilotchilik", "ta’lim muassasasi"]
    },
    interestsAbilitiesTendencies: ["muloqot", "tushuntirish", "tashkilotchilik", "boshqalarga yordam berish", "nutq", "jamoa bilan ishlash", "mas’uliyat"]
  }
};

window.CAREER_PROFILES = CAREER_PROFILES;