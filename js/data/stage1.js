const STAGE_1 = {
  id: "stage1-person-object",
  title: "1-bosqich: Mehnat predmetiga ko‘ra kasbiy moyillik",
  criterion: "Mehnat predmeti",
  description: "Suhbat davomida o‘quvchi ko‘proq nima bilan ishlashga qiziqishini aniqlash: inson, texnika, belgilar tizimi, badiiy obraz yoki tabiat.",
  objectTypes: {
    people: "Inson–inson",
    technology: "Inson–texnika",
    signs: "Inson–belgilar tizimi",
    artistic: "Inson–badiiy obraz",
    nature: "Inson–tabiat"
  },
  questions: [
    {
      id: "s1q1",
      text: "Nima bilan ishlashni yoqtirasiz?",
      relevance: "tegishli",
      relevanceLabel: "Tegishli",
      diagnosticPurpose: "O‘quvchining mehnat predmetiga bo‘lgan dastlabki moyilligini aniqlash.",
      answers: {
        azizbek: {
          text: "Menga kompyuterlar, turli qurilmalar va ularning qanday ishlashini o‘rganish yoqadi. Biror texnikani ko‘rsam, ichidagi qismlari qanday ishlashini tushunishga qiziqaman. Ba’zan dastur bilan ishlash yoki qurilmani sozlab ko‘rish ham menga qiziq.",
          evidence: ["technology", "signs"],
          objectTypes: ["technology", "signs"],
          note: "Texnik qurilmalar bilan ishlash va ularning ishlash tamoyilini tushunishga qiziqish bildirildi."
        },
        madina: {
          text: "Men rasmlar, ranglar, bezaklar va dizayn bilan ishlashni yaxshi ko‘raman. Biror narsani chiroyliroq ko‘rinishga keltirish yoki o‘zimcha yangi ko‘rinish yaratish menga zavq beradi. Kompyuterda ham dizayn qilishni sinab ko‘rishni yoqtiraman.",
          evidence: ["artistic", "creativity"],
          objectTypes: ["artistic"],
          note: "Rang, shakl, dizayn va yangi obraz yaratishga qiziqish ko‘rindi."
        },
        javohir: {
          text: "Menga raqamlar, jadvallar va ma’lumotlar bilan ishlash yoqadi. Hisob-kitob qilish, ma’lumotlarni solishtirish yoki biror natijaning qanday chiqqanini aniqlash qiziq tuyuladi. Ayniqsa, tartibli ma’lumotdan xulosa chiqarish menga yoqadi.",
          evidence: ["signs", "logic"],
          objectTypes: ["signs"],
          note: "Raqam, jadval va ma’lumotlarni tahlil qilishga moyillik aniq ko‘rindi."
        },
        sevinch: {
          text: "Men tabiat, o‘simliklar va hayvonlar bilan ishlashni yoqtiraman. Ularning qanday yashashi, o‘sishi yoki nimaga muhtojligini kuzatish qiziq. Odamlarga yordam berish ham menga yoqadi, shuning uchun tirik organizmlar bilan bog‘liq ishlar menga yaqin tuyuladi.",
          evidence: ["nature", "people"],
          objectTypes: ["nature", "people"],
          note: "Tirik tabiatni kuzatish va odamga foyda berish istagi birgalikda namoyon bo‘ldi."
        },
        diyor: {
          text: "Menga mashina, mexanizm va turli asboblar bilan ishlash yoqadi. Biror narsa buzilsa, uning sababini topib, tuzatib ko‘rishga qiziqaman. Qo‘l bilan biror narsani yig‘ish, sozlash yoki ishlatib ko‘rish menga nazariyadan ko‘ra qiziqroq.",
          evidence: ["technology", "practical"],
          objectTypes: ["technology"],
          note: "Mexanizm, asbob va amaliy texnik faoliyatga kuchli qiziqish bildirildi."
        },
        zuhra: {
          text: "Menga odamlar bilan ishlash, gaplashish va ularga biror narsani tushuntirish yoqadi. Kimdir biror masalada qiynalsa, gaplashib, unga yo‘l ko‘rsatishga harakat qilaman. Shuningdek, matn va hujjatlar bilan ishlash ham menga qiziq.",
          evidence: ["people", "communication", "signs"],
          objectTypes: ["people", "signs"],
          note: "Muloqot, tushuntirish va axborot-hujjatlar bilan ishlashga moyillik ko‘rindi."
        }
      }
    }
  ]
};