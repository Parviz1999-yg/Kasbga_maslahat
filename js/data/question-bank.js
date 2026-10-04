const QUESTION_BANK = {
  stage1: {
    criterion: "Mehnat predmeti",
    evidenceRelevance: "Savolning mehnat predmetini aniqlashdagi daliliy kuchi.",
    questions: [
      { id:"s1q1", relevance:5, text:"Asosiy qiziqishingiz nima?" },
      { id:"s1q2", relevance:4, text:"Ko‘proq nima bilan shug‘ullanishni yoqtirasiz?" },
      { id:"s1q3", relevance:3, text:"Sizni eng ko‘p nima qiziqtiradi?" },
      { id:"s1q4", relevance:2, text:"Ko‘proq nimalarga e’tibor berasiz?" },
      { id:"s1q5", relevance:1, text:"Bo‘sh vaqtingizda nima bilan shug‘ullanasiz?" }
    ]
  },

  stage2: {
    criterion: "Mehnat sharoiti",
    evidenceRelevance: "Savolning mehnat sharoitini aniqlashdagi daliliy kuchi.",
    questions: [
      { id:"s2q1", relevance:5, text:"Qanday sharoitda ishlashni xohlaysiz?" },
      { id:"s2q2", relevance:4, text:"Siz uchun qulay ish muhiti qanday?" },
      { id:"s2q3", relevance:3, text:"Ish jarayonida sizga nima muhim?" },
      { id:"s2q4", relevance:2, text:"Qanday ish tartibi sizga mos?" },
      { id:"s2q5", relevance:1, text:"Qanday joyda o‘zingizni qulay his qilasiz?" }
    ]
  },

  stage3: {
    criterion: "Mehnat maqsadi",
    evidenceRelevance: "Savolning mehnat maqsadini aniqlashdagi daliliy kuchi.",
    questions: [
      { id:"s3q1", relevance:5, text:"Ishda asosiy maqsadingiz nima?" },
      { id:"s3q2", relevance:4, text:"Siz uchun ish natijasi nimada ko‘rinadi?" },
      { id:"s3q3", relevance:3, text:"Muammo oldida birinchi navbatda nima qilasiz?" },
      { id:"s3q4", relevance:2, text:"Vazifani bajarganda nimaga e’tibor berasiz?" },
      { id:"s3q5", relevance:1, text:"Biror ishni boshlaganda nimadan boshlaysiz?" }
    ]
  },

  stage4: {
    criterion: "Mehnat vositalari",
    evidenceRelevance: "Savolning mehnat vositalarini aniqlashdagi daliliy kuchi.",
    questions: [
      { id:"s4q1", relevance:5, text:"Ishni bajarishda nimadan foydalanasiz?" },
      { id:"s4q2", relevance:4, text:"Ishlashda sizga nima yordam beradi?" },
      { id:"s4q3", relevance:3, text:"Vazifani qanday bajarishni afzal ko‘rasiz?" },
      { id:"s4q4", relevance:2, text:"Ishingizni yengillashtirish uchun nimadan foydalanasiz?" },
      { id:"s4q5", relevance:1, text:"Kundalik ishlaringizda nimalardan foydalanasiz?" }
    ]
  },

  stage5: {
    criterion: "Qiziqish, qobiliyat va moyillik",
    evidenceRelevance: "Savolning qiziqish, qobiliyat va moyillikni aniqlashdagi daliliy kuchi.",
    questions: [
      { id:"s5q1", relevance:5, text:"Qaysi ishni yaxshi bajara olasiz?" },
      { id:"s5q2", relevance:4, text:"Qaysi faoliyat sizga oson?" },
      { id:"s5q3", relevance:3, text:"Nimani bajarishga moyilsiz?" },
      { id:"s5q4", relevance:2, text:"Qaysi ishni bajarish sizga yoqadi?" },
      { id:"s5q5", relevance:1, text:"Nima bilan shug‘ullanishni yoqtirasiz?" }
    ]
  }
};

window.QUESTION_BANK = QUESTION_BANK;
