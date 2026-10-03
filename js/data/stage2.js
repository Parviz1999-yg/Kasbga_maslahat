const STAGE_2 = {
  id:"stage2-work-conditions",
  title:"2-bosqich",
  criterion:"Mehnat sharoiti",
  description:"O‘quvchining qanday ish sharoitida o‘zini qulay his qilishini aniqlang.",
  questions:[
    {
      id:"s2q1",
      text:"Qanday joyda ishlashni yoqtirasiz?",
      answers:{
        azizbek:{text:"Tinch, yopiq joyda.",relevance:5,signals:["indoor","calm"]},
        madina:{text:"Yorug‘ va erkin joyda.",relevance:5,signals:["indoor","creative"]},
        javohir:{text:"Tartibli joyda.",relevance:5,signals:["indoor","order"]},
        sevinch:{text:"Toza va qulay joyda.",relevance:5,signals:["indoor","clean"]},
        diyor:{text:"Ustaxona kabi joyda.",relevance:5,signals:["practical","active"]},
        zuhra:{text:"Odamlar bor joyda.",relevance:5,signals:["social"]}
      }
    },
    {
      id:"s2q2",
      text:"Ish joyingiz tinch bo‘lishini xohlaysizmi?",
      answers:{
        azizbek:{text:"Ha, albatta.",relevance:5,signals:["calm"]},
        madina:{text:"Juda jim bo‘lmasa yaxshi.",relevance:3,signals:["moderate"]},
        javohir:{text:"Ha, tinchlik kerak.",relevance:5,signals:["calm"]},
        sevinch:{text:"Ha, qulayroq.",relevance:4,signals:["calm"]},
        diyor:{text:"Biroz harakat bo‘lsa yaxshi.",relevance:2,signals:["active"]},
        zuhra:{text:"Odamlar bilan suhbat bo‘lsa yaxshi.",relevance:2,signals:["social","active"]}
      }
    },
    {
      id:"s2q3",
      text:"Odamlar bilan birga ishlash sizga yoqadimi?",
      answers:{
        azizbek:{text:"Ba’zan.",relevance:3,signals:["mixed-social"]},
        madina:{text:"Ha, yoqadi.",relevance:5,signals:["social"]},
        javohir:{text:"Kerak bo‘lsa.",relevance:3,signals:["mixed-social"]},
        sevinch:{text:"Ha, juda yoqadi.",relevance:5,signals:["social"]},
        diyor:{text:"Kichik guruh bilan.",relevance:4,signals:["team"]},
        zuhra:{text:"Ha, juda yoqadi.",relevance:5,signals:["social"]}
      }
    },
    {
      id:"s2q4",
      text:"Turli joylarda ishlashga qanday qaraysiz?",
      answers:{
        azizbek:{text:"Bir joy qulayroq.",relevance:3,signals:["stable"]},
        madina:{text:"Juda qiziq.",relevance:5,signals:["variety"]},
        javohir:{text:"Vaziyatga qarab.",relevance:3,signals:["flexible"]},
        sevinch:{text:"Farqi yo‘q.",relevance:2,signals:["neutral"]},
        diyor:{text:"Yaxshi, yoqadi.",relevance:5,signals:["variety","active"]},
        zuhra:{text:"Yangi joylar yoqadi.",relevance:5,signals:["variety","social"]}
      }
    },
    {
      id:"s2q5",
      text:"Harakatchan ish sizga yoqadimi?",
      answers:{
        azizbek:{text:"Me’yorida bo‘lsa.",relevance:3,signals:["moderate"]},
        madina:{text:"Ha, yoqadi.",relevance:4,signals:["active"]},
        javohir:{text:"Juda ko‘p bo‘lmasa.",relevance:2,signals:["calm"]},
        sevinch:{text:"Ba’zan yoqadi.",relevance:3,signals:["moderate"]},
        diyor:{text:"Ha, albatta.",relevance:5,signals:["active","practical"]},
        zuhra:{text:"Odamlar bilan bo‘lsa.",relevance:4,signals:["active","social"]}
      }
    }
  ]
};