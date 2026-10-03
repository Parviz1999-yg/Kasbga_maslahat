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
      evidenceRelevance:5,
      evidenceType:"direct",
      answers:{
        azizbek:{text:"Tinch, yopiq joyda.",signals:["indoor","calm"]},
        madina:{text:"Yorug‘ va erkin joyda.",signals:["indoor","creative"]},
        javohir:{text:"Tartibli joyda.",signals:["indoor","order"]},
        sevinch:{text:"Toza va qulay joyda.",signals:["indoor","clean"]},
        diyor:{text:"Ustaxona kabi joyda.",signals:["practical","active"]},
        zuhra:{text:"Odamlar bor joyda.",signals:["social"]}
      }
    },
    {
      id:"s2q2",
      text:"Ish joyingiz tinch bo‘lishini xohlaysizmi?",
      evidenceRelevance:5,
      evidenceType:"direct",
      answers:{
        azizbek:{text:"Ha, albatta.",signals:["calm"]},
        madina:{text:"Juda jim bo‘lmasa yaxshi.",signals:["moderate"]},
        javohir:{text:"Ha, tinchlik kerak.",signals:["calm"]},
        sevinch:{text:"Ha, qulayroq.",signals:["calm"]},
        diyor:{text:"Biroz harakat bo‘lsa yaxshi.",signals:["active"]},
        zuhra:{text:"Odamlar bilan suhbat bo‘lsa yaxshi.",signals:["social","active"]}
      }
    },
    {
      id:"s2q3",
      text:"Odamlar bilan birga ishlash sizga yoqadimi?",
      evidenceRelevance:5,
      evidenceType:"direct",
      answers:{
        azizbek:{text:"Ba’zan.",signals:["mixed-social"]},
        madina:{text:"Ha, yoqadi.",signals:["social"]},
        javohir:{text:"Kerak bo‘lsa.",signals:["mixed-social"]},
        sevinch:{text:"Ha, juda yoqadi.",signals:["social"]},
        diyor:{text:"Kichik guruh bilan.",signals:["team"]},
        zuhra:{text:"Ha, juda yoqadi.",signals:["social"]}
      }
    },
    {
      id:"s2q4",
      text:"Turli joylarda ishlashga qanday qaraysiz?",
      evidenceRelevance:4,
      evidenceType:"indirect",
      answers:{
        azizbek:{text:"Bir joy qulayroq.",signals:["stable"]},
        madina:{text:"Juda qiziq.",signals:["variety"]},
        javohir:{text:"Vaziyatga qarab.",signals:["flexible"]},
        sevinch:{text:"Farqi yo‘q.",signals:["neutral"]},
        diyor:{text:"Yaxshi, yoqadi.",signals:["variety","active"]},
        zuhra:{text:"Yangi joylar yoqadi.",signals:["variety","social"]}
      }
    },
    {
      id:"s2q5",
      text:"Maktabdan keyin bo‘sh vaqtingizni qanday o‘tkazishni yoqtirasiz?",
      evidenceRelevance:1,
      evidenceType:"distractor",
      answers:{
        azizbek:{text:"Kompyuterda o‘yin o‘ynashni yoki video ko‘rishni.",signals:[]},
        madina:{text:"Rasm chizishni yoki musiqa tinglashni.",signals:[]},
        javohir:{text:"Kitob o‘qishni yoki masalalar yechishni.",signals:[]},
        sevinch:{text:"Tabiat qo‘ynida sayr qilishni.",signals:[]},
        diyor:{text:"Sport bilan shug‘ullanishni.",signals:[]},
        zuhra:{text:"Do‘stlarim bilan suhbatlashishni.",signals:[]}
      }
    }
  ]
};