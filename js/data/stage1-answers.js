// Kasbga maslahat — 1-bosqich javob banki.
// Savollar QUESTION_BANK.stage1 ichida.
// Bu faylda javobning matni va yashirin kasbiy dalillari saqlanadi.
// evidenceRelevance javobga emas, savolning o‘ziga tegishli va question-bank.js da turadi.

const STAGE1_ANSWERS = {
  s1q1: {
    azizbek: {
      text: "Kompyuter va texnologiyalar bilan bog‘liq narsalar, ayniqsa biror muammoning yechimini topish qiziq.",
      signals: ["belgilar tizimi", "texnika"]
    },
    madina: {
      text: "Rasm chizish, ranglar bilan ishlash va yangi ko‘rinishlar o‘ylab topish menga qiziq.",
      signals: ["badiiy obraz"]
    },
    javohir: {
      text: "Raqamlar, hisob-kitob va turli ma’lumotlarni solishtirish menga qiziq.",
      signals: ["belgilar tizimi"]
    },
    sevinch: {
      text: "Inson salomatligi va odamga yordam berish bilan bog‘liq narsalar meni qiziqtiradi.",
      signals: ["inson", "tabiat"]
    },
    diyor: {
      text: "Mashinalar, mexanizmlar va turli qurilmalarning qanday ishlashi qiziq.",
      signals: ["texnika"]
    },
    zuh​​ra: {
      text: "Odamlar bilan gaplashish, ularga nimanidir tushuntirish va yordam berish qiziq.",
      signals: ["inson"]
    }
  },

  s1q2: {
    azizbek: {
      text: "Kompyuterda ishlash, dasturlarni ko‘rish va murakkab masalalarni yechish bilan shug‘ullanishni yoqtiraman.",
      signals: ["belgilar tizimi", "texnika"]
    },
    madina: {
      text: "Rasm, dizayn yoki biror narsani chiroyli qilib bezash bilan shug‘ullanishni yoqtiraman.",
      signals: ["badiiy obraz"]
    },
    javohir: {
      text: "Hisoblash, jadval tuzish va raqamlar orasidagi farqlarni topish bilan shug‘ullanishni yoqtiraman.",
      signals: ["belgilar tizimi"]
    },
    sevinch: {
      text: "Biologiyaga oid mavzularni o‘rganish va odamlarga yordam berish bilan shug‘ullanishni yoqtiraman.",
      signals: ["inson", "tabiat"]
    },
    diyor: {
      text: "Biror qurilmani yig‘ish, tuzatish yoki qanday ishlashini tekshirish bilan shug‘ullanishni yoqtiraman.",
      signals: ["texnika"]
    },
    zuh​​ra: {
      text: "Odamlar bilan suhbatlashish, tushuntirish va birgalikda ish qilishni yoqtiraman.",
      signals: ["inson"]
    }
  },

  s1q3: {
    azizbek: {
      text: "Texnologiya qanday ishlashi va ma’lumotni qanday tartibga solish mumkinligi qiziqtiradi.",
      signals: ["belgilar tizimi", "texnika"]
    },
    madina: {
      text: "Yangi tasvirlar, ranglar va boshqalarda hali yo‘q bo‘lgan g‘oyalar qiziqtiradi.",
      signals: ["badiiy obraz"]
    },
    javohir: {
      text: "Raqamlar orqali biror holatni tushunish va qaysi natija to‘g‘ri ekanini aniqlash qiziqtiradi.",
      signals: ["belgilar tizimi"]
    },
    sevinch: {
      text: "Inson organizmi, sog‘liq va tirik tabiat bilan bog‘liq mavzular qiziqtiradi.",
      signals: ["inson", "tabiat"]
    },
    diyor: {
      text: "Mexanizmlar ichida nima sodir bo‘lishi va ularni qanday yaxshilash mumkinligi qiziqtiradi.",
      signals: ["texnika"]
    },
    zuh​​ra: {
      text: "Odamlar qanday fikrlashi, bir-birini tushunishi va bilimni qanday yetkazish mumkinligi qiziqtiradi.",
      signals: ["inson"]
    }
  },

  s1q4: {
    azizbek: {
      text: "Kompyuterda ma’lumot qanday ishlayotganiga va muammo qayerdan kelganiga e’tibor beraman.",
      signals: ["belgilar tizimi", "texnika"]
    },
    madina: {
      text: "Rang, shakl va narsalarning bir-biriga qanday mos kelishiga e’tibor beraman.",
      signals: ["badiiy obraz"]
    },
    javohir: {
      text: "Raqamlardagi farq, natijaning aniqligi va ma’lumotlarning bir-biriga mos kelishiga e’tibor beraman.",
      signals: ["belgilar tizimi"]
    },
    sevinch: {
      text: "Odamning holatiga va undagi o‘zgarishlarga e’tibor beraman.",
      signals: ["inson", "tabiat"]
    },
    diyor: {
      text: "Qurilmaning qismlari qanday joylashgani va qayerida muammo borligiga e’tibor beraman.",
      signals: ["texnika"]
    },
    zuh​​ra: {
      text: "Odamning gapini qanday tushunayotganimga va unga nimani tushuntirish kerakligiga e’tibor beraman.",
      signals: ["inson"]
    }
  },

  s1q5: {
    azizbek: {
      text: "Telefon yoki kompyuterda yangi narsalarni ko‘rib chiqaman, ba’zan mantiqiy masalalar bilan shug‘ullanaman.",
      signals: ["belgilar tizimi", "texnika"]
    },
    madina: {
      text: "Rasm chizaman, suratlarni bezayman yoki yangi dizaynlar o‘ylab ko‘raman.",
      signals: ["badiiy obraz"]
    },
    javohir: {
      text: "Mantiqiy masalalar yechaman yoki raqamlar bilan bog‘liq narsalarni ko‘rib chiqaman.",
      signals: ["belgilar tizimi"]
    },
    sevinch: {
      text: "Biologiya bilan bog‘liq narsalarni o‘qiyman yoki yaqinlarimga yordam berib yuraman.",
      signals: ["inson", "tabiat"]
    },
    diyor: {
      text: "Biror narsani yig‘ib ko‘raman, eski qurilmalarni ko‘rib chiqaman yoki mayda ta’mirlash ishlarini qilaman.",
      signals: ["texnika"]
    },
    zuh​​ra: {
      text: "Do‘stlarim bilan suhbatlashaman, ularga dars yoki biror masalada yordam beraman.",
      signals: ["inson"]
    }
  }
};

window.STAGE1_ANSWERS = STAGE1_ANSWERS;