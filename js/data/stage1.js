const STAGE_1 = {
  id:"stage1-person-object",
  title:"1-bosqich",
  criterion:"Mehnat predmeti",
  description:"O‘quvchining mehnat jarayonida asosan nima bilan ishlashga moyilligini aniqlang.",
  evidence:"O‘quvchi faoliyatining asosiy yo‘nalishi: inson, texnika, belgilar tizimi, badiiy obraz yoki tabiat.",
  questions:[
    {
      id:"s1q1",
      text:"Nima bilan ishlashni yoqtirasiz?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:5,text:"Kompyuter va turli texnik qurilmalar bilan ishlashni yoqtiraman.",signals:["technology"]},
        madina:{evidenceRelevance:4,text:"Rasmlar, ranglar va dizayn bilan ishlashni yoqtiraman.",signals:["artistic"]},
        javohir:{evidenceRelevance:3,text:"Raqamlar, jadvallar va ma’lumotlar bilan ishlashni yoqtiraman.",signals:["signs"]},
        sevinch:{evidenceRelevance:2,text:"O‘simliklar, hayvonlar va tabiat bilan ishlashni yoqtiraman.",signals:["nature"]},
        diyor:{evidenceRelevance:5,text:"Mashina, mexanizm va asboblar bilan ishlashni yoqtiraman.",signals:["technology"]},
        zuhra:{evidenceRelevance:4,text:"Odamlar va matnlar bilan ishlashni yoqtiraman.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q2",
      text:"Bo‘sh vaqtingizda qanday mashg‘ulot bilan shug‘ullanishni yoqtirasiz?",
      evidenceType:"indirect",
      answers:{
        azizbek:{evidenceRelevance:4,text:"Kompyuterda dastur, loyiha yoki yangi texnologiyalarni o‘rganish bilan shug‘ullanishni yoqtiraman.",signals:["technology"]},
        madina:{evidenceRelevance:5,text:"Rasm chizish, dizayn qilish yoki ijodiy g‘oyalar ustida ishlashni yoqtiraman.",signals:["artistic"]},
        javohir:{evidenceRelevance:2,text:"Masalalar yechish, hisob-kitob qilish va ma’lumotlarni tahlil qilishni yoqtiraman.",signals:["signs"]},
        sevinch:{evidenceRelevance:3,text:"Tabiatni kuzatish, o‘simliklar yoki hayvonlar bilan shug‘ullanishni yoqtiraman.",signals:["nature"]},
        diyor:{evidenceRelevance:3,text:"Biror buyumni tuzatish, yasash yoki mexanizmlarni o‘rganishni yoqtiraman.",signals:["technology"]},
        zuhra:{evidenceRelevance:2,text:"Kitob o‘qish, suhbatlashish va tadbirlarni tashkil qilish bilan shug‘ullanishni yoqtiraman.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q3",
      text:"Qaysi faoliyat bilan shug‘ullanganda vaqt qanday o‘tganini sezmay qolasiz?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:3,text:"Kompyuterda biror muammoni yechayotganimda yoki dastur bilan ishlayotganimda vaqtni sezmay qolaman.",signals:["technology"]},
        madina:{evidenceRelevance:2,text:"Rasm, bezak yoki yangi dizayn yaratganimda vaqt qanday o‘tganini sezmay qolaman.",signals:["artistic"]},
        javohir:{evidenceRelevance:5,text:"Murakkab masalani yechish yoki raqamlarni tahlil qilishda vaqtni sezmay qolaman.",signals:["signs"]},
        sevinch:{evidenceRelevance:4,text:"Tabiatni kuzatish yoki biologiyaga oid amaliy ishlar bilan shug‘ullanganda vaqtni sezmay qolaman.",signals:["nature"]},
        diyor:{evidenceRelevance:4,text:"Mexanizmni qismlarga ajratib, qanday ishlashini tekshirganimda vaqtni sezmay qolaman.",signals:["technology"]},
        zuhra:{evidenceRelevance:5,text:"Odamlar bilan suhbatlashish, matn yozish yoki tadbir tayyorlashda vaqtni sezmay qolaman.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q4",
      text:"Biror narsa yaratish imkoniyati bo‘lsa, nimani yaratishni xohlardingiz?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:2,text:"Foydali dastur, elektron qurilma yoki texnologik loyiha yaratishni xohlardim.",signals:["technology"]},
        madina:{evidenceRelevance:3,text:"Chiroyli dizayn, illyustratsiya yoki ijodiy loyiha yaratishni xohlardim.",signals:["artistic"]},
        javohir:{evidenceRelevance:4,text:"Ma’lumotlarni tartibga soladigan jadval, hisob-kitob tizimi yoki tahliliy loyiha yaratishni xohlardim.",signals:["signs"]},
        sevinch:{evidenceRelevance:5,text:"O‘simliklar, hayvonlar yoki inson salomatligiga foyda beradigan loyiha yaratishni xohlardim.",signals:["nature"]},
        diyor:{evidenceRelevance:2,text:"Ishni yengillashtiradigan mexanizm, moslama yoki foydali buyum yaratishni xohlardim.",signals:["technology"]},
        zuhra:{evidenceRelevance:3,text:"Odamlarga foydali bo‘ladigan ta’limiy loyiha, tadbir yoki axborot materiali yaratishni xohlardim.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q5",
      text:"Dam olish kuningizni qanday o‘tkazishni yoqtirasiz?",
      evidenceType:"distractor",
      answers:{
        azizbek:{evidenceRelevance:1,text:"Uyda dam olishni yoki film ko‘rishni yoqtiraman.",signals:[]},
        madina:{evidenceRelevance:1,text:"Do‘stlarim bilan sayr qilishni yoqtiraman.",signals:[]},
        javohir:{evidenceRelevance:1,text:"Uyda tinch dam olishni yoqtiraman.",signals:[]},
        sevinch:{evidenceRelevance:1,text:"Oilam bilan vaqt o‘tkazishni yoqtiraman.",signals:[]},
        diyor:{evidenceRelevance:1,text:"Do‘stlarim bilan sayr qilishni yoqtiraman.",signals:[]},
        zuhra:{evidenceRelevance:1,text:"Do‘stlarim bilan suhbatlashishni yoqtiraman.",signals:[]}
      }
    }
  ]
};