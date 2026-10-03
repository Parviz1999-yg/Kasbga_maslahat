const STAGE_3 = {
  id:"stage3-work-goal",
  title:"3-bosqich",
  criterion:"Mehnat maqsadi",
  description:"O‘quvchining ish jarayonida nimaga intilishini aniqlang.",
  questions:[
    {
      id:"s3q1",
      text:"Ishda nimani bilishni yoqtirasiz?",
      answers:{
        azizbek:{text:"Qanday ishlashini.",relevance:5,signals:["knowledge","technical"]},
        madina:{text:"Yangi g‘oyalarni.",relevance:3,signals:["creative","new-ideas"]},
        javohir:{text:"Sababini va tartibini.",relevance:5,signals:["knowledge","analysis"]},
        sevinch:{text:"Odamlarga qanday yordam berishni.",relevance:4,signals:["knowledge","helping"]},
        diyor:{text:"Mexanizmi qanday ishlashini.",relevance:5,signals:["knowledge","technical"]},
        zuhra:{text:"Odamlar fikrini.",relevance:4,signals:["knowledge","people"]}
      }
    },
    {
      id:"s3q2",
      text:"Biror narsani yaxshilashni yoqtirasizmi?",
      answers:{
        azizbek:{text:"Ha, ishlashini yaxshilashni.",relevance:5,signals:["improvement","technical"]},
        madina:{text:"Ha, ko‘rinishini ham.",relevance:5,signals:["transformation","creative"]},
        javohir:{text:"Ha, qulayroq qilishni.",relevance:4,signals:["improvement","analysis"]},
        sevinch:{text:"Ha, foydaliroq qilishni.",relevance:4,signals:["improvement","helping"]},
        diyor:{text:"Ha, tuzilishini yaxshilashni.",relevance:5,signals:["improvement","practical"]},
        zuhra:{text:"Ha, tartibini yaxshilashni.",relevance:3,signals:["improvement","organization"]}
      }
    },
    {
      id:"s3q3",
      text:"Muammolarga yechim izlash sizga yoqadimi?",
      answers:{
        azizbek:{text:"Ha, ayniqsa texnik muammolarga.",relevance:5,signals:["search","problem-solving","technical"]},
        madina:{text:"Ha, noodatiy yo‘l izlayman.",relevance:4,signals:["search","creative"]},
        javohir:{text:"Ha, avval sababini topaman.",relevance:5,signals:["search","analysis"]},
        sevinch:{text:"Ha, odamga yordam beradigan yechimni.",relevance:4,signals:["search","helping"]},
        diyor:{text:"Ha, amalda sinab ko‘raman.",relevance:5,signals:["search","practical"]},
        zuhra:{text:"Ha, turli yo‘llarni o‘ylab ko‘raman.",relevance:4,signals:["search","flexible"]}
      }
    },
    {
      id:"s3q4",
      text:"Yangi narsalarni o‘rganishga qiziqasizmi?",
      answers:{
        azizbek:{text:"Ha, texnologiyalarni.",relevance:4,signals:["search","technical"]},
        madina:{text:"Ha, yangi usullarni.",relevance:5,signals:["search","creative"]},
        javohir:{text:"Ha, foydali bilimlarni.",relevance:4,signals:["knowledge","search"]},
        sevinch:{text:"Ha, yangi ma’lumotlarni.",relevance:5,signals:["knowledge","search"]},
        diyor:{text:"Ha, yangi asbob-uskunalarni.",relevance:4,signals:["search","practical"]},
        zuhra:{text:"Ha, yangi mavzularni.",relevance:5,signals:["knowledge","search"]}
      }
    },
    {
      id:"s3q5",
      text:"Biror natija yaratish siz uchun muhimmi?",
      answers:{
        azizbek:{text:"Ha, ishlaydigan natija.",relevance:5,signals:["result","transformation"]},
        madina:{text:"Ha, chiroyli va o‘ziga xos natija.",relevance:5,signals:["result","creative","transformation"]},
        javohir:{text:"Ha, aniq natija.",relevance:5,signals:["result","analysis"]},
        sevinch:{text:"Ha, foydali natija.",relevance:4,signals:["result","helping"]},
        diyor:{text:"Ha, qo‘l bilan ko‘rish muhim.",relevance:5,signals:["result","practical","transformation"]},
        zuhra:{text:"Ha, odamga foydasi tegsa yaxshi.",relevance:4,signals:["result","people"]}
      }
    }
  ]
};