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
        azizbek: { evidenceRelevance: 5, text: "Tinch, yopiq joyda.", signals: ["normal"] },
        madina: { evidenceRelevance: 5, text: "Yorug‘ va erkin joyda.", signals: ["normal"] },
        javohir: { evidenceRelevance: 5, text: "Tartibli, tinch joyda.", signals: ["normal"] },
        sevinch: { evidenceRelevance: 5, text: "Toza joyda, ba’zan ochiq havoda.", signals: ["outdoor"] },
        diyor: { evidenceRelevance: 5, text: "Ustaxona yoki harakatli joyda.", signals: ["nonstandard"] },
        zuhra: { evidenceRelevance: 5, text: "Odamlar bor, jonli joyda.", signals: ["demanding"] }
      }
    },
    {
      id: "s4q2",
      text: "Yopiq yoki ochiq joy yoqadimi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Yopiq joy qulayroq.", signals: ["normal"] },
        madina: { evidenceRelevance: 4, text: "Yorug‘ yopiq joy yoqadi.", signals: ["normal"] },
        javohir: { evidenceRelevance: 5, text: "Yopiq, tinch joy.", signals: ["normal"] },
        sevinch: { evidenceRelevance: 5, text: "Ochiq havo ham yoqadi.", signals: ["outdoor"] },
        diyor: { evidenceRelevance: 4, text: "Ikkisi ham, asosiysi ish bo‘lsin.", signals: ["nonstandard"] },
        zuhra: { evidenceRelevance: 4, text: "Odamlar bilan bo‘lsa farqi yo‘q.", signals: ["demanding"] }
      }
    },
    {
      id: "s4q3",
      text: "Tinchni yoqtirasizmi yoki harakatni?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Tinchlikni yoqtiraman.", signals: ["normal"] },
        madina: { evidenceRelevance: 4, text: "Biroz harakat bo‘lsa yaxshi.", signals: ["normal"] },
        javohir: { evidenceRelevance: 5, text: "Tinchlik kerak.", signals: ["normal"] },
        sevinch: { evidenceRelevance: 4, text: "Harakat ham yoqadi.", signals: ["outdoor"] },
        diyor: { evidenceRelevance: 5, text: "Harakatni yoqtiraman.", signals: ["nonstandard"] },
        zuhra: { evidenceRelevance: 5, text: "Jonli muhitni yoqtiraman.", signals: ["demanding"] }
      }
    },
    {
      id: "s4q4",
      text: "Qanday joyda ishlashni eshitgansiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Ofis haqida eshitganman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Studiya haqida eshitganman.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Kabinet haqida eshitganman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Dalada ishlash haqida.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ustaxona haqida eshitganman.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Maktab haqida eshitganman.", signals: [] }
      }
    },
    {
      id: "s4q5",
      text: "Yopiq joy haqida nima deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Qulay deb o‘ylayman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Yorug‘ bo‘lsa yaxshi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Tinch bo‘lsa yaxshi.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Toza bo‘lsa yaxshi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ba’zan zerikarli.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlar bo‘lsa yaxshi.", signals: [] }
      }
    },
    {
      id: "s4q6",
      text: "Ochiq joy sizga qanday tuyuladi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Ba’zan yoqadi.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Qiziq.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Shovqinli bo‘lishi mumkin.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Yoqimli.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Erkin.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Foydali.", signals: [] }
      }
    },
    {
      id: "s4q7",
      text: "Tinch ish haqida nima bilasiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Diqqatni jamlaydi.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Ijodga yordam beradi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Hisob-kitobga qulay.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Dam olishga o‘xshaydi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ba’zan zerikarli.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Yolg‘izlik bo‘lishi mumkin.", signals: [] }
      }
    },
    {
      id: "s4q8",
      text: "Harakatli ish sizga qiziqmi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Unchalik emas.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Biroz.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Kamroq.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Ha, biroz.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ha.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Ha, yoqadi.", signals: [] }
      }
    }
  ]
};
