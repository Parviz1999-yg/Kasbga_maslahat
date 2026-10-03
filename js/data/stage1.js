const STAGE_1 = {
  id:"stage1-person-object",
  title:"1-bosqich",
  criterion:"Mehnat predmeti",
  description:"O‘quvchining nimaga qiziqishi va qanday faoliyatga moyilligini aniqlash uchun suhbatni boshlang.",
  questions:[
    {
      id:"s1q1",
      text:"Nima bilan ishlashni yoqtirasiz?",
      answers:{
        azizbek:{text:"Kompyuter va turli texnik qurilmalar bilan ishlashni yoqtiraman.",signals:["technology","signs"]},
        madina:{text:"Rasmlar, ranglar va dizayn bilan ishlashni yoqtiraman.",signals:["artistic"]},
        javohir:{text:"Raqamlar, jadvallar va ma’lumotlar bilan ishlashni yoqtiraman.",signals:["signs"]},
        sevinch:{text:"O‘simliklar, hayvonlar va tabiat bilan ishlashni yoqtiraman.",signals:["nature"]},
        diyor:{text:"Mashina, mexanizm va asboblar bilan ishlashni yoqtiraman.",signals:["technology"]},
        zuhra:{text:"Odamlar va matnlar bilan ishlashni yoqtiraman.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q2",
      text:"Bo‘sh vaqtingizda qanday mashg‘ulot bilan shug‘ullanishni yoqtirasiz?",
      answers:{
        azizbek:{text:"Kompyuterda dastur, loyiha yoki yangi texnologiyalarni o‘rganish bilan shug‘ullanishni yoqtiraman.",signals:["technology","signs"]},
        madina:{text:"Rasm chizish, dizayn qilish yoki ijodiy g‘oyalar ustida ishlashni yoqtiraman.",signals:["artistic"]},
        javohir:{text:"Masalalar yechish, hisob-kitob qilish va ma’lumotlarni tahlil qilishni yoqtiraman.",signals:["signs"]},
        sevinch:{text:"Tabiatni kuzatish, o‘simliklar yoki hayvonlar bilan shug‘ullanishni yoqtiraman.",signals:["nature"]},
        diyor:{text:"Biror buyumni tuzatish, yasash yoki mexanizmlarni o‘rganishni yoqtiraman.",signals:["technology"]},
        zuhra:{text:"Kitob o‘qish, suhbatlashish va tadbirlarni tashkil qilish bilan shug‘ullanishni yoqtiraman.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q3",
      text:"Qaysi faoliyat bilan shug‘ullanganda vaqt qanday o‘tganini sezmay qolasiz?",
      answers:{
        azizbek:{text:"Kompyuterda biror muammoni yechayotganimda yoki dastur bilan ishlayotganimda vaqtni sezmay qolaman.",signals:["technology","signs"]},
        madina:{text:"Rasm, bezak yoki yangi dizayn yaratganimda vaqt qanday o‘tganini sezmay qolaman.",signals:["artistic"]},
        javohir:{text:"Murakkab masalani yechish yoki raqamlarni tahlil qilishda vaqtni sezmay qolaman.",signals:["signs"]},
        sevinch:{text:"Tabiatni kuzatish yoki biologiyaga oid amaliy ishlar bilan shug‘ullanganda vaqtni sezmay qolaman.",signals:["nature"]},
        diyor:{text:"Mexanizmni qismlarga ajratib, qanday ishlashini tekshirganimda vaqtni sezmay qolaman.",signals:["technology"]},
        zuhra:{text:"Odamlar bilan suhbatlashish, matn yozish yoki tadbir tayyorlashda vaqtni sezmay qolaman.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q4",
      text:"Biror narsa yaratish imkoniyati bo‘lsa, nimani yaratishni xohlardingiz?",
      answers:{
        azizbek:{text:"Foydali dastur, elektron qurilma yoki texnologik loyiha yaratishni xohlardim.",signals:["technology","signs"]},
        madina:{text:"Chiroyli dizayn, illyustratsiya yoki ijodiy loyiha yaratishni xohlardim.",signals:["artistic"]},
        javohir:{text:"Ma’lumotlarni tartibga soladigan jadval, hisob-kitob tizimi yoki tahliliy loyiha yaratishni xohlardim.",signals:["signs"]},
        sevinch:{text:"O‘simliklar, hayvonlar yoki inson salomatligiga foyda beradigan loyiha yaratishni xohlardim.",signals:["nature","people"]},
        diyor:{text:"Ishni yengillashtiradigan mexanizm, moslama yoki foydali buyum yaratishni xohlardim.",signals:["technology"]},
        zuhra:{text:"Odamlarga foydali bo‘ladigan ta’limiy loyiha, tadbir yoki axborot materiali yaratishni xohlardim.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q5",
      text:"Qaysi narsalar bilan ishlash sizga ko‘proq qulay?",
      answers:{
        azizbek:{text:"Kompyuter, dasturlar va elektron qurilmalar bilan ishlash menga qulay.",signals:["technology","signs"]},
        madina:{text:"Ranglar, tasvirlar, shakllar va ijodiy vositalar bilan ishlash menga qulay.",signals:["artistic"]},
        javohir:{text:"Raqamlar, hujjatlar, jadvallar va ma’lumotlar bilan ishlash menga qulay.",signals:["signs"]},
        sevinch:{text:"Tabiiy obyektlar, biologik materiallar va odamlar bilan ishlash menga qulay.",signals:["nature","people"]},
        diyor:{text:"Asboblar, mexanizmlar, materiallar va texnik qurilmalar bilan ishlash menga qulay.",signals:["technology"]},
        zuhra:{text:"Odamlar, kitoblar, matnlar va axborot bilan ishlash menga qulay.",signals:["people","signs"]}
      }
    }
  ]
};