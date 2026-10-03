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
      evidenceRelevance:5,
      evidenceType:"direct",
      answers:{
        azizbek:{text:"Qanday ishlashini.",signals:["knowledge","technical"]},
        madina:{text:"Yangi g‘oyalarni.",signals:["creative","new-ideas"]},
        javohir:{text:"Sababini va tartibini.",signals:["knowledge","analysis"]},
        sevinch:{text:"Odamlarga qanday yordam berishni.",signals:["knowledge","helping"]},
        diyor:{text:"Mexanizmi qanday ishlashini.",signals:["knowledge","technical"]},
        zuhra:{text:"Odamlar fikrini.",signals:["knowledge","people"]}
      }
    },
    {
      id:"s3q2",
      text:"Biror narsani yaxshilashni yoqtirasizmi?",
      evidenceRelevance:5,
      evidenceType:"direct",
      answers:{
        azizbek:{text:"Ha, ishlashini yaxshilashni.",signals:["improvement","technical"]},
        madina:{text:"Ha, ko‘rinishini ham.",signals:["transformation","creative"]},
        javohir:{text:"Ha, qulayroq qilishni.",signals:["improvement","analysis"]},
        sevinch:{text:"Ha, foydaliroq qilishni.",signals:["improvement","helping"]},
        diyor:{text:"Ha, tuzilishini yaxshilashni.",signals:["improvement","practical"]},
        zuhra:{text:"Ha, tartibini yaxshilashni.",signals:["improvement","organization"]}
      }
    },
    {
      id:"s3q3",
      text:"Muammolarga yechim izlash sizga yoqadimi?",
      evidenceRelevance:5,
      evidenceType:"direct",
      answers:{
        azizbek:{text:"Ha, ayniqsa texnik muammolarga.",signals:["search","problem-solving","technical"]},
        madina:{text:"Ha, noodatiy yo‘l izlayman.",signals:["search","creative"]},
        javohir:{text:"Ha, avval sababini topaman.",signals:["search","analysis"]},
        sevinch:{text:"Ha, odamga yordam beradigan yechimni.",signals:["search","helping"]},
        diyor:{text:"Ha, amalda sinab ko‘raman.",signals:["search","practical"]},
        zuhra:{text:"Ha, turli yo‘llarni o‘ylab ko‘raman.",signals:["search","flexible"]}
      }
    },
    {
      id:"s3q4",
      text:"Yangi narsalarni o‘rganishga qiziqasizmi?",
      evidenceRelevance:4,
      evidenceType:"indirect",
      answers:{
        azizbek:{text:"Ha, texnologiyalarni.",signals:["search","technical"]},
        madina:{text:"Ha, yangi usullarni.",signals:["search","creative"]},
        javohir:{text:"Ha, foydali bilimlarni.",signals:["knowledge","search"]},
        sevinch:{text:"Ha, yangi ma’lumotlarni.",signals:["knowledge","search"]},
        diyor:{text:"Ha, yangi asbob-uskunalarni.",signals:["search","practical"]},
        zuhra:{text:"Ha, yangi mavzularni.",signals:["knowledge","search"]}
      }
    },
    {
      id:"s3q5",
      text:"Dam olish paytida ko‘proq nima qilishni yoqtirasiz?",
      evidenceRelevance:1,
      evidenceType:"distractor",
      answers:{
        azizbek:{text:"Kompyuter o‘yinlari o‘ynashni.",signals:[]},
        madina:{text:"Musiqa tinglash yoki sayr qilishni.",signals:[]},
        javohir:{text:"Kitob o‘qish yoki dam olishni.",signals:[]},
        sevinch:{text:"Tabiatda sayr qilishni.",signals:[]},
        diyor:{text:"Sport bilan shug‘ullanishni.",signals:[]},
        zuhra:{text:"Do‘stlarim bilan suhbatlashishni.",signals:[]}
      }
    }
  ]
};