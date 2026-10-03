const STAGE_3 = {
  id:"stage3-work-goal",
  title:"3-bosqich",
  criterion:"Mehnat maqsadi",
  description:"O‘quvchining ish faoliyatida qanday natijaga intilishini aniqlang.",
  evidence:"O‘quvchining bilish, o‘zgartirish va izlashga yo‘nalgan mehnat maqsadi.",
  questions:[
    {
      id:"s3q1",
      text:"Ishda nimani bilishni yoqtirasiz?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:5,text:"Qanday ishlashini.",signals:["knowledge","technical"]},
        madina:{evidenceRelevance:4,text:"Yangi g‘oyalarni.",signals:["creative","new-ideas"]},
        javohir:{evidenceRelevance:3,text:"Sababini va tartibini.",signals:["knowledge","analysis"]},
        sevinch:{evidenceRelevance:2,text:"Odamlarga qanday yordam berishni.",signals:["knowledge","helping"]},
        diyor:{evidenceRelevance:5,text:"Mexanizmi qanday ishlashini.",signals:["knowledge","technical"]},
        zuhra:{evidenceRelevance:4,text:"Odamlar fikrini.",signals:["knowledge","people"]}
      }
    },
    {
      id:"s3q2",
      text:"Biror narsani yaxshilashni yoqtirasizmi?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:4,text:"Ha, ishlashini yaxshilashni.",signals:["improvement","technical"]},
        madina:{evidenceRelevance:5,text:"Ha, ko‘rinishini ham.",signals:["transformation","creative"]},
        javohir:{evidenceRelevance:2,text:"Ha, qulayroq qilishni.",signals:["improvement","analysis"]},
        sevinch:{evidenceRelevance:3,text:"Ha, foydaliroq qilishni.",signals:["improvement","helping"]},
        diyor:{evidenceRelevance:3,text:"Ha, tuzilishini yaxshilashni.",signals:["improvement","practical"]},
        zuhra:{evidenceRelevance:2,text:"Ha, tartibini yaxshilashni.",signals:["improvement","organization"]}
      }
    },
    {
      id:"s3q3",
      text:"Muammolarga yechim izlash sizga yoqadimi?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:3,text:"Ha, ayniqsa texnik muammolarga.",signals:["search","problem-solving","technical"]},
        madina:{evidenceRelevance:2,text:"Ha, noodatiy yo‘l izlayman.",signals:["search","creative"]},
        javohir:{evidenceRelevance:5,text:"Ha, avval sababini topaman.",signals:["search","analysis"]},
        sevinch:{evidenceRelevance:4,text:"Ha, odamga yordam beradigan yechimni.",signals:["search","helping"]},
        diyor:{evidenceRelevance:4,text:"Ha, amalda sinab ko‘raman.",signals:["search","practical"]},
        zuhra:{evidenceRelevance:5,text:"Ha, turli yo‘llarni o‘ylab ko‘raman.",signals:["search","flexible"]}
      }
    },
    {
      id:"s3q4",
      text:"Yangi narsalarni o‘rganishga qiziqasizmi?",
      evidenceType:"indirect",
      answers:{
        azizbek:{evidenceRelevance:2,text:"Ha, texnologiyalarni.",signals:["search","technical"]},
        madina:{evidenceRelevance:3,text:"Ha, yangi usullarni.",signals:["search","creative"]},
        javohir:{evidenceRelevance:4,text:"Ha, foydali bilimlarni.",signals:["knowledge","search"]},
        sevinch:{evidenceRelevance:5,text:"Ha, yangi ma’lumotlarni.",signals:["knowledge","search"]},
        diyor:{evidenceRelevance:2,text:"Ha, yangi asbob-uskunalarni.",signals:["search","practical"]},
        zuhra:{evidenceRelevance:3,text:"Ha, yangi mavzularni.",signals:["knowledge","search"]}
      }
    },
    {
      id:"s3q5",
      text:"Dam olish paytida ko‘proq nima qilishni yoqtirasiz?",
      evidenceType:"distractor",
      answers:{
        azizbek:{evidenceRelevance:1,text:"Kompyuter o‘yinlari o‘ynashni.",signals:[]},
        madina:{evidenceRelevance:1,text:"Musiqa tinglash yoki sayr qilishni.",signals:[]},
        javohir:{evidenceRelevance:1,text:"Kitob o‘qish yoki dam olishni.",signals:[]},
        sevinch:{evidenceRelevance:1,text:"Tabiatda sayr qilishni.",signals:[]},
        diyor:{evidenceRelevance:1,text:"Sport bilan shug‘ullanishni.",signals:[]},
        zuhra:{evidenceRelevance:1,text:"Do‘stlarim bilan suhbatlashishni.",signals:[]}
      }
    }
  ]
};