const STAGE_1 = {
  id:"stage1-person-object",
  title:"1-bosqich: Mehnat predmetiga ko‘ra kasbiy moyillik",
  criterion:"Mehnat predmeti",
  description:"O‘quvchi nimaga qiziqishi va qanday faoliyatga moyilligini suhbat orqali aniqlang.",
  questions:[
    {
      id:"s1q1", text:"Nima bilan ishlashni yoqtirasiz?", relevance:"tegishli", relevanceLabel:"Tegishli",
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
      id:"s1q2", text:"Qanday mashg‘ulotlarni yoqtirasiz?", relevance:"biroz", relevanceLabel:"Biroz tegishli",
      answers:{
        azizbek:{text:"Muammo yechish va yangi dasturlarni sinab ko‘rishni yoqtiraman.",signals:["technology","signs"]},
        madina:{text:"Rasm chizish, bezash va yangi g‘oyalar o‘ylab topishni yoqtiraman.",signals:["artistic"]},
        javohir:{text:"Hisoblash, taqqoslash va natijalarni tahlil qilishni yoqtiraman.",signals:["signs"]},
        sevinch:{text:"O‘simliklarni parvarishlash va hayvonlarni kuzatishni yoqtiraman.",signals:["nature"]},
        diyor:{text:"Biror narsani yig‘ish, tuzatish va sinab ko‘rishni yoqtiraman.",signals:["technology"]},
        zuhra:{text:"Suhbatlashish, tushuntirish va matn yozishni yoqtiraman.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q3", text:"Bo‘sh vaqtingizda nima qilasiz?", relevance:"kam", relevanceLabel:"Kam tegishli",
      answers:{
        azizbek:{text:"Ko‘pincha kompyuterda turli narsalarni ko‘rib, sinab ko‘raman.",signals:["technology","signs"]},
        madina:{text:"Rasm chizaman yoki telefonda dizaynlar ko‘raman.",signals:["artistic"]},
        javohir:{text:"Shaxmat o‘ynayman, ba’zan qiziq ma’lumotlarni izlayman.",signals:["signs"]},
        sevinch:{text:"Bog‘da yuraman, gullar bilan shug‘ullanaman.",signals:["nature"]},
        diyor:{text:"Velosipedimni sozlayman yoki mayda buyumlar yasayman.",signals:["technology"]},
        zuhra:{text:"Kitob o‘qiyman, do‘stlarim bilan suhbatlashaman.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q4", text:"Qaysi fan sizga yoqadi?", relevance:"uzoq", relevanceLabel:"Uzoq",
      answers:{
        azizbek:{text:"Informatika.",signals:["technology","signs"]},
        madina:{text:"Tasviriy san’at.",signals:["artistic"]},
        javohir:{text:"Matematika.",signals:["signs"]},
        sevinch:{text:"Biologiya.",signals:["nature"]},
        diyor:{text:"Fizika.",signals:["technology"]},
        zuhra:{text:"Ona tili va adabiyot.",signals:["people","signs"]}
      }
    },
    {
      id:"s1q5", text:"Kelajakda qancha maosh olishni xohlaysiz?", relevance:"chalg‘ituvchi", relevanceLabel:"Chalg‘ituvchi",
      answers:{
        azizbek:{text:"Yaxshi daromad bo‘lishini xohlayman, lekin ish ham qiziqarli bo‘lsin.",signals:["motivation"]},
        madina:{text:"Daromadi yaxshi bo‘lsa, albatta xursand bo‘laman.",signals:["motivation"]},
        javohir:{text:"Barqaror va yaxshi daromadli ish bo‘lishini xohlayman.",signals:["motivation"]},
        sevinch:{text:"Daromadi yetarli bo‘lsa, odamlar uchun foydali ish qilishni xohlayman.",signals:["motivation","people"]},
        diyor:{text:"Mehnatimga yarasha yaxshi daromad olishni xohlayman.",signals:["motivation"]},
        zuhra:{text:"Yaxshi daromad bilan birga odamlar bilan ishlash imkoniyati bo‘lishini xohlayman.",signals:["motivation","people"]}
      }
    }
  ]
};