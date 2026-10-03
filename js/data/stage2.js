const STAGE_2 = {
  id:"stage2-work-conditions",
  title:"2-bosqich",
  criterion:"Mehnat sharoiti",
  description:"O‘quvchining qaysi mehnat sharoitida o‘zini qulay his qilishini aniqlang.",
  evidence:"O‘quvchining ish joyi, tinchlik, jamoa, harakatchanlik va ish muhitiga oid afzalliklari.",
  questions:[
    {
      id:"s2q1",
      text:"Qanday joyda ishlashni yoqtirasiz?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:5,text:"Tinch, yopiq joyda.",signals:["indoor","calm"]},
        madina:{evidenceRelevance:4,text:"Yorug‘ va erkin joyda.",signals:["indoor","creative"]},
        javohir:{evidenceRelevance:3,text:"Tartibli joyda.",signals:["indoor","order"]},
        sevinch:{evidenceRelevance:2,text:"Toza va qulay joyda.",signals:["indoor","clean"]},
        diyor:{evidenceRelevance:5,text:"Ustaxona kabi joyda.",signals:["practical","active"]},
        zuhra:{evidenceRelevance:4,text:"Odamlar bor joyda.",signals:["social"]}
      }
    },
    {
      id:"s2q2",
      text:"Ish joyingiz tinch bo‘lishini xohlaysizmi?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:4,text:"Ha, albatta.",signals:["calm"]},
        madina:{evidenceRelevance:5,text:"Juda jim bo‘lmasa yaxshi.",signals:["moderate"]},
        javohir:{evidenceRelevance:2,text:"Ha, tinchlik kerak.",signals:["calm"]},
        sevinch:{evidenceRelevance:3,text:"Ha, qulayroq.",signals:["calm"]},
        diyor:{evidenceRelevance:3,text:"Biroz harakat bo‘lsa yaxshi.",signals:["active"]},
        zuhra:{evidenceRelevance:2,text:"Odamlar bilan suhbat bo‘lsa yaxshi.",signals:["social","active"]}
      }
    },
    {
      id:"s2q3",
      text:"Odamlar bilan birga ishlash sizga yoqadimi?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:3,text:"Ba’zan.",signals:["mixed-social"]},
        madina:{evidenceRelevance:2,text:"Ha, yoqadi.",signals:["social"]},
        javohir:{evidenceRelevance:5,text:"Kerak bo‘lsa.",signals:["mixed-social"]},
        sevinch:{evidenceRelevance:4,text:"Ha, juda yoqadi.",signals:["social"]},
        diyor:{evidenceRelevance:4,text:"Kichik guruh bilan.",signals:["team"]},
        zuhra:{evidenceRelevance:5,text:"Ha, juda yoqadi.",signals:["social"]}
      }
    },
    {
      id:"s2q4",
      text:"Turli joylarda ishlashga qanday qaraysiz?",
      evidenceType:"indirect",
      answers:{
        azizbek:{evidenceRelevance:2,text:"Bir joy qulayroq.",signals:["stable"]},
        madina:{evidenceRelevance:3,text:"Juda qiziq.",signals:["variety"]},
        javohir:{evidenceRelevance:4,text:"Vaziyatga qarab.",signals:["flexible"]},
        sevinch:{evidenceRelevance:5,text:"Farqi yo‘q.",signals:["neutral"]},
        diyor:{evidenceRelevance:2,text:"Yaxshi, yoqadi.",signals:["variety","active"]},
        zuhra:{evidenceRelevance:3,text:"Yangi joylar yoqadi.",signals:["variety","social"]}
      }
    },
    {
      id:"s2q5",
      text:"Maktabdan keyin bo‘sh vaqtingizni qanday o‘tkazishni yoqtirasiz?",
      evidenceType:"distractor",
      answers:{
        azizbek:{evidenceRelevance:1,text:"Kompyuterda o‘yin o‘ynashni yoki video ko‘rishni.",signals:[]},
        madina:{evidenceRelevance:1,text:"Rasm chizishni yoki musiqa tinglashni.",signals:[]},
        javohir:{evidenceRelevance:1,text:"Kitob o‘qishni yoki masalalar yechishni.",signals:[]},
        sevinch:{evidenceRelevance:1,text:"Tabiat qo‘ynida sayr qilishni.",signals:[]},
        diyor:{evidenceRelevance:1,text:"Sport bilan shug‘ullanishni.",signals:[]},
        zuhra:{evidenceRelevance:1,text:"Do‘stlarim bilan suhbatlashishni.",signals:[]}
      }
    }
  ]
};