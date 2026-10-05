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
        azizbek: { evidenceRelevance: 5, text: "Avval qanday ishlashini tushunishni yoqtiraman. Sababini bilmasam, keyingi qadamni qo‘ymayman.", signals: ["gnostic"] },
        madina: { evidenceRelevance: 5, text: "Mavjud narsani boshqacha, chiroyliroq qilib o‘zgartirish menga yoqadi.", signals: ["transform"] },
        javohir: { evidenceRelevance: 5, text: "Sababini topish, tahlil qilish — shu yoqadi. Taxmin bilan ishlashni yoqtirmayman.", signals: ["gnostic"] },
        sevinch: { evidenceRelevance: 5, text: "Kimdirga foyda beradigan yechimni izlash. Oddiy yordam ham bo‘lsa, qidiraman.", signals: ["search"] },
        diyor: { evidenceRelevance: 5, text: "Sinab ko‘raman, ishlamasa boshqa usul bilan o‘zgartiraman. Amalda ko‘raman.", signals: ["transform"] },
        zuhra: { evidenceRelevance: 5, text: "Bir necha variantni solishtirib, eng yaxshisini izlayman. Odamlar fikrini ham so‘rayman.", signals: ["search"] }
      }
    },
    {
      id: "s2q2",
      text: "Qiyin ishda avval nima qilasiz?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Nima ishlamayotganini aniqlayman. Xato qayerda ekanini topishga harakat qilaman.", signals: ["gnostic"] },
        madina: { evidenceRelevance: 5, text: "Boshqa usul o‘ylab ko‘raman — rangni, shaklni yoki tartibni o‘zgartiraman.", signals: ["transform"] },
        javohir: { evidenceRelevance: 5, text: "Ma’lumot yig‘aman, qog‘ozga yozaman, keyin bosqichma-bosqich tahlil qilaman.", signals: ["gnostic"] },
        sevinch: { evidenceRelevance: 5, text: "Kimdirga yordam beradigan yechim bormi deb qidiraman. Ba’zan kattalardan so‘rayman.", signals: ["search"] },
        diyor: { evidenceRelevance: 5, text: "Qo‘lim bilan sinab ko‘raman. Ishlamasa, boshqa asbob yoki usul bilan urinib ko‘raman.", signals: ["transform"] },
        zuhra: { evidenceRelevance: 5, text: "Do‘stlarim yoki o‘qituvchim bilan gaplashaman, turli fikrlarni eshitib, yo‘l tanlayman.", signals: ["search"] }
      }
    },
    {
      id: "s2q3",
      text: "Natija yoki jarayon muhimroqmi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 4, text: "Jarayonni tushunish muhimroq. Tushunmasam, keyin yana xato qilaman.", signals: ["gnostic"] },
        madina: { evidenceRelevance: 4, text: "Oxirida chiroyli natija chiqishi menga muhim. Jarayon charchatsa ham, natija kerak.", signals: ["transform"] },
        javohir: { evidenceRelevance: 4, text: "To‘g‘ri tahlil qilingan bo‘lsa, natija o‘zi keladi. Shuning uchun jarayon aniq bo‘lishi kerak.", signals: ["gnostic"] },
        sevinch: { evidenceRelevance: 4, text: "Foydali natija muhim — kimdirga yordam bersa, jarayon qancha qiyin bo‘lsa ham arziydi.", signals: ["search"] },
        diyor: { evidenceRelevance: 4, text: "Ishlab turgan natija kerak. Nazariya emas, amalda ko‘rinadigan narsa.", signals: ["transform"] },
        zuhra: { evidenceRelevance: 4, text: "Hammaga mos yo‘l topilsa, yaxshi. Natija ham, odamlar roziligi ham muhim.", signals: ["search"] }
      }
    },
    {
      id: "s2q4",
      text: "Nima qilishni xohlaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Hali aniq aytolmayman. Qiziqarli bo‘lsa, bas.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Zeriktirmaydigan, chiroyli ish bo‘lsa, qilaman.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Foydali va tushunarli ish bo‘lsa, yaxshi.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Odamlarga yordam beradigan ish bo‘lsa, xursand bo‘laman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Harakatli, qo‘l bilan qilinadigan ish bo‘lsa, yoqadi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Jamoa bilan, suhbatlashib ishlansa, yaxshi.", signals: [] }
      }
    },
    {
      id: "s2q5",
      text: "Qiyin ishda nima qilishni o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Keyinroq qaytaman deb o‘ylayman. Hozir shoshilmayman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Opam yoki do‘stimdan so‘rayman, balki ular biladi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Vaqt ajrataman, lekin kechqurun charchagan bo‘lsam, ertalab qilaman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Ona-otamdan yordam so‘rayman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Shunchaki urinib ko‘raman, chiqsa chiqadi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Sinfdoshlarim bilan maslahatlashaman.", signals: [] }
      }
    },
    {
      id: "s2q6",
      text: "Natija haqida nima deb o‘ylaysiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Yaxshi chiqsa, bo‘ldi. Juda mukammal bo‘lishi shart emas.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Ko‘zga chiroyli ko‘rinsa, men uchun yaxshi natija.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "To‘g‘ri bo‘lishi kerak, xato bo‘lmasin.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Kimdirga foydasi tegsa, natija yaxshi deb hisoblayman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Ishlasa — bas. Ko‘p o‘ylamayman.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlar maqtasa yoki rozi bo‘lsa, yaxshi.", signals: [] }
      }
    },
    {
      id: "s2q7",
      text: "Jarayon sizga qanday tuyuladi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Ba’zan qiziq, ba’zan zerikarli. Holatga bog‘liq.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Musiqa bilan qilsam, jarayon yoqimliroq bo‘ladi.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Tartibli bo‘lsa, charchamayman.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Foydali ekanini bilsam, jarayon osonroq o‘tadi.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Harakat bo‘lsa, jarayon menga yoqadi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Yolg‘iz qilsam zerikaman, birga bo‘lsa yaxshi.", signals: [] }
      }
    },
    {
      id: "s2q8",
      text: "Nima sizga muhimroq ko‘rinadi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Qulaylik — uydan ishlash yoki tinch joy.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Go‘zallik, chiroyli muhit.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Aniqlik va tartib.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Foyda — birovga yordam.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Tez natija.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlar, jamoa.", signals: [] }
      }
    }
  ]
};
