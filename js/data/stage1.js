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
        azizbek: { evidenceRelevance: 5, text: "Kompyuterda biror narsani sozlab, ishlamay qolganini tuzatish menga yoqadi. Telefon yoki noutbuk ichida nima borligini bilish qiziq.", signals: ["technology"] },
        madina: { evidenceRelevance: 5, text: "Rasm chizaman, rang tanlayman, Instagram uchun post yasayman. Chiroyli narsa chiqsa, xursand bo‘laman.", signals: ["artistic"] },
        javohir: { evidenceRelevance: 5, text: "Jadval, foiz, masala — shular bilan ishlashni yoqtiraman. Raqamlar tartibli bo‘lsa, tushunarliroq bo‘ladi.", signals: ["signs"] },
        sevinch: { evidenceRelevance: 5, text: "Uyda gullarni parvarish qilaman, itimiz bilan sayr qilaman. Tabiat haqida video ko‘rish ham yoqadi.", signals: ["nature"] },
        diyor: { evidenceRelevance: 5, text: "Velosipedni, eshik tutqichini yoki oddiy asbobni tuzatishni yoqtiraman. Qo‘lim bilan ishlash menga oson.", signals: ["technology"] },
        zuhra: { evidenceRelevance: 5, text: "Do‘stlarimga darsni tushuntirish, kichik birodarimga uy vazifasida yordam berish — shular menga yoqadi.", signals: ["people"] }
      }
    },
    {
      id: "s1q2",
      text: "Nima sizni ko‘proq qiziqtiradi?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 5, text: "Yangi dastur, o‘yin yoki ilova qanday ishlashi. Ba’zan o‘zim ham oddiy kod yozib ko‘raman.", signals: ["technology"] },
        madina: { evidenceRelevance: 5, text: "Libos, interyer, poster dizayni. Biror narsani chiroyli qilib ko‘rsatish meni qiziqtiradi.", signals: ["artistic"] },
        javohir: { evidenceRelevance: 5, text: "Nima uchun shunday chiqqanini hisoblash. Masalan, statistika yoki oddiy tajriba natijasi.", signals: ["signs"] },
        sevinch: { evidenceRelevance: 5, text: "Hayvonlar qanday yashashi, o‘simliklar qanday o‘sishi. Biologiya darsida ham diqqatim shunga ketadi.", signals: ["nature"] },
        diyor: { evidenceRelevance: 5, text: "Mashina motori, nasos, oddiy mexanizm — ichida nima aylanayotganini bilish qiziq.", signals: ["technology"] },
        zuhra: { evidenceRelevance: 5, text: "Odamlar nima deb o‘ylayotgani, qanday gaplashishi. Guruhda ishlash meni charchatmaydi.", signals: ["people"] }
      }
    },
    {
      id: "s1q3",
      text: "Qanday narsa bilan band bo‘lishni xohlaysiz?",
      evidenceType: "direct",
      answers: {
        azizbek: { evidenceRelevance: 4, text: "Kompyuterda loyiha qilishni xohlardim — sayt yoki oddiy dastur bo‘lsa ham.", signals: ["technology"] },
        madina: { evidenceRelevance: 4, text: "Logotip, plakat yoki video muqovasi yasash. Ijodiy ish bo‘lsa, vaqt sezilmaydi.", signals: ["artistic"] },
        javohir: { evidenceRelevance: 4, text: "Ma’lumotlarni tartibga solish, Excelda hisob-kitob qilish menga mos keladi deb o‘ylayman.", signals: ["signs"] },
        sevinch: { evidenceRelevance: 4, text: "Bog‘da ishlash, hayvonlarga qarash yoki ekologik tadbirda qatnashishni xohlardim.", signals: ["nature"] },
        diyor: { evidenceRelevance: 4, text: "Ustaxonada asbob bilan ishlash, biror narsani yig‘ish yoki ta’mirlash.", signals: ["technology"] },
        zuhra: { evidenceRelevance: 4, text: "Odamlarga tushuntirish, tadbir tashkil qilish yoki kichik guruhni boshqarish.", signals: ["people"] }
      }
    },
    {
      id: "s1q4",
      text: "Nima haqida ko‘p gapirasiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Asosan yangi o‘yinlar, YouTube’dagi texnika videolari haqida gapiramiz do‘stlarim bilan.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Maktab, moda, qaysi serial chiqqani — shular haqida ko‘p gapiramiz.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Uy vazifasi, nazorat ishi, baholar haqida ko‘proq gap ketadi.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Oilam, dam olish, qayerga borishimiz haqida gaplashaman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Futbol, velosiped, do‘stlar bilan o‘yin haqida.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Kim nima dedi, qanday voqea bo‘ldi — yangiliklar haqida ko‘p gapiramiz.", signals: [] }
      }
    },
    {
      id: "s1q5",
      text: "Nima sizga osonroq tuyuladi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Telefonda o‘tirib video ko‘rish eng oson, hech narsa qilmasangiz ham bo‘ladi.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Musiqa qo‘yib, xona yig‘ishtirish yoki rasmga qarab o‘tirish oson.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Uyda tinch o‘tirib kitob varaqlarini ko‘zdan kechirish osonroq.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Hovlida sayr qilish, hech narsa o‘ylamasdan yurish oson.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Sport maydonchasida yugurish yoki to‘p o‘ynash oson tuyuladi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Do‘stlar bilan shunchaki suhbatlashib o‘tirish eng oson.", signals: [] }
      }
    },
    {
      id: "s1q6",
      text: "Nima bilan shug‘ullanishni eshitgansiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Amakim dasturlash kurslari haqida gapirgan. Lekin o‘zim hali sinab ko‘rmaganman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Tanishlar dizayn o‘qishadi deb eshitganman. Qanday ekanini aniq bilmayman.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Buxgalteriya, iqtisod haqida ota-onam gapirib qolishadi ba’zan.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Veterinariya yoki agronomiya haqida televizorda ko‘rganman.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Avtoservisda ishlash haqida qo‘shnilar gapirgan.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "O‘qituvchi bo‘lish haqida maktabda ko‘p gapiriladi.", signals: [] }
      }
    },
    {
      id: "s1q7",
      text: "Nima haqida ko‘p o‘qigansiz?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Telegram kanallarida gadjet sharhlari, yangi telefon chiqqani haqida o‘qiyman.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Pinterest va bloglarida libos, xona bezagi haqida ko‘p ko‘raman.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Asosan darslik, qo‘shimcha masala to‘plamlari.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Hayvonlar haqidagi maqolalar, National Geographic tipidagi narsalar.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Avtomobil jurnallaridagi yangiliklar, YouTube’dagi ta’mirlash videolari.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Odamlar haqidagi hikoyalar, motivatsion postlar.", signals: [] }
      }
    },
    {
      id: "s1q8",
      text: "Nima sizga qiziqarli ko‘rinadi?",
      evidenceType: "distractor",
      answers: {
        azizbek: { evidenceRelevance: 1, text: "Yangi telefon modeli, naushnik, klaviatura — shular qiziq ko‘rinadi.", signals: [] },
        madina: { evidenceRelevance: 1, text: "Chiroyli suratlar, rang uyg‘unligi, moda ko‘rgazmalari.", signals: [] },
        javohir: { evidenceRelevance: 1, text: "Qiyin masala yechilganda chiqqan javob qiziq.", signals: [] },
        sevinch: { evidenceRelevance: 1, text: "Kuchukcha yoki mushukcha videolari, tabiat manzaralari.", signals: [] },
        diyor: { evidenceRelevance: 1, text: "Tez mashinalar, mototsikl, velosiped yarishi.", signals: [] },
        zuhra: { evidenceRelevance: 1, text: "Tadbirlar, konsert, do‘stlar bilan yig‘ilishlar.", signals: [] }
      }
    }
  ]
};
