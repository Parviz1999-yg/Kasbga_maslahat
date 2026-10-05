const STAGE_4 = {
  id: "stage4-work-conditions",
  title: "4-bosqich",
  criterion: "Mehnat sharoitlari",
  description: "O‘quvchining qaysi mehnat sharoitida o‘zini qulay his qilishini aniqlang.",
  evidence: "Oddiy sharoit, ochiq havo, nostandart sharoit yoki yuqori jismoniy-ma’naviy talab.",
  questions: [
    {
      id: "s4q1",
      text: "Qanday joyda ishlashni yoqtirasiz?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Tinch xona, stolda kompyuter. Shovqin bo‘lmasa, diqqatim yig‘iladi.", signals: ["normal"] },
        madina: { evidenceRelevance: 5, text: "Yorug‘ xona, deraza yonida. Ranglar ko‘rinsa, ishlash osonroq.", signals: ["normal"] },
        javohir: { evidenceRelevance: 5, text: "Tartibli, jim joy. Kutubxona yoki tinch kabinet yoqadi.", signals: ["normal"] },
        sevinch: { evidenceRelevance: 5, text: "Ba’zan hovlida, bog‘da. Toza havo bo‘lsa, ishlash yoqimli.", signals: ["outdoor"] },
        diyor: { evidenceRelevance: 5, text: "Ustaxona, garaj yoki ochiq maydon — harakat bo‘lsa, yaxshi.", signals: ["nonstandard"] },
        zuhra: { evidenceRelevance: 5, text: "Odamlar bor joy — sinf, zal, ofis. Yolg‘iz qolsam, zerikaman.", signals: ["demanding"] }
      }
    },
    {
      id: "s4q2",
      text: "Yopiq yoki ochiq joy yoqadimi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Yopiq joy qulayroq. Issiq-sovuq, chang — ochiqda diqqat chalg‘iydi.", signals: ["normal"] },
        madina: { evidenceRelevance: 4, text: "Yorug‘ yopiq joy yoqadi. Ochiqda ham rasmga olish mumkin, lekin ish uchun xona yaxshi.", signals: ["normal"] },
        javohir: { evidenceRelevance: 5, text: "Yopiq, tinch. Hisob-kitob ochiq maydonda qiyin.", signals: ["normal"] },
        sevinch: { evidenceRelevance: 5, text: "Ochiq havo menga yoqadi. Yopiqda uzoq o‘tirsam, charchayman.", signals: ["outdoor"] },
        diyor: { evidenceRelevance: 4, text: "Ikkisi ham. Asosiysi ish bo‘lsin — yomg‘irda yopiq, quruq kunda ochiq.", signals: ["nonstandard"] },
        zuhra: { evidenceRelevance: 4, text: "Odamlar bilan bo‘lsa, yopiq yoki ochiq farqi yo‘q.", signals: ["demanding"] }
      }
    },
    {
      id: "s4q3",
      text: "Tinchni yoqtirasizmi yoki harakatni?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Tinchlikni yoqtiraman. Shovqin bo‘lsa, kod yoki o‘yin ham o‘ynamaydi.", signals: ["normal"] },
        madina: { evidenceRelevance: 4, text: "Biroz harakat, musiqa bo‘lsa yaxshi. Juda jim bo‘lsa, uxlab qolaman.", signals: ["normal"] },
        javohir: { evidenceRelevance: 5, text: "Tinchlik kerak. Diqqatni jamlab ishlayman.", signals: ["normal"] },
        sevinch: { evidenceRelevance: 4, text: "Harakat ham yoqadi — sayr, bog‘ ishi. Uzoq o‘tirish og‘ir.", signals: ["outdoor"] },
        diyor: { evidenceRelevance: 5, text: "Harakatni yoqtiraman. Bir joyda o‘tirib qolish zerikarli.", signals: ["nonstandard"] },
        zuhra: { evidenceRelevance: 5, text: "Jonli muhit — suhbat, kulgu. Juda jim joyda o‘zimni yolg‘iz his qilaman.", signals: ["demanding"] }
      }
    },
    {
      id: "s4q4",
      text: "Qanday joyda ishlashni eshitgansiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "IT ofislar, uydan remote ishlash haqida eshitaman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Studiya, agentlik haqida gapiriladi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Bank, ofis kabineti haqida bilaman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Dalada, issiqxonada ishlash haqida eshitganman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Zavod, ustaxona, qurilish maydoni.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Maktab, bolalar bog‘chasi, ofis.", signals: [] }
      }
    },
    {
      id: "s4q5",
      text: "Yopiq joy haqida nima deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Qulay, konditsioner bo‘lsa umuman yaxshi.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Yorug‘ va toza bo‘lsa, ishlash mumkin.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Tinch bo‘lsa, eng yaxshi variant.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Uzoq qolsangiz, havo yetishmaydi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ba’zan zerikarli, chiqib turish kerak.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlar bo‘lsa, yopiq joy ham jonli bo‘ladi.", signals: [] }
      }
    },
    {
      id: "s4q6",
      text: "Ochiq joy sizga qanday tuyuladi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Yozda issiq, qishda sovuq. Kamdan-kam yoqadi.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Fotosurat uchun yaxshi, lekin uzoq ishlash qiyin.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Shovqinli, diqqat chalg‘iydi.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Yoqimli, nafas kengayadi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Erkin, yoqadi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Tadbir uchun yaxshi, odamlar yig‘iladi.", signals: [] }
      }
    },
    {
      id: "s4q7",
      text: "Tinch ish haqida nima bilasiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Dasturlashda tinchlik kerak, shuni bilaman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Ijod qilishda tinch muhit yordam beradi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Hisob-kitobda shovqin xato keltiradi.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Ba’zan tinchlik dam olishga o‘xshaydi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Juda tinch bo‘lsa, uxlab qolish mumkin.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Yolg‘izlik bo‘lishi mumkin, menga to‘g‘ri kelmasligi mumkin.", signals: [] }
      }
    },
    {
      id: "s4q8",
      text: "Harakatli ish sizga qiziqmi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Unchalik emas. Bir joyda o‘tirib ishlash qulayroq.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Biroz — suratga olish, joy tanlash uchun.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Kamroq. Asosan stol oldida ishlayman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Ha, biroz harakat bo‘lsa, charchamayman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ha, qiziq. Bir joyda o‘tirish yoqmaydi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Ha, odamlar orasida yurish yoqadi.", signals: [] }
      }
    }
  ]
};
