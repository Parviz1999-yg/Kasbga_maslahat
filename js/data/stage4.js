const STAGE_4 = {
  id:"stage4-work-tools",
  title:"4-bosqich",
  criterion:"Mehnat vositalari",
  description:"O‘quvchining ish jarayonida qaysi vositalar bilan ishlashga moyilligini aniqlang.",
  evidence:"O‘quvchining qo‘l mehnati, mexanizatsiyalashgan, avtomatlashtirilgan yoki funksional vositalardan foydalanishga moyilligi.",
  questions:[
    {
      id:"s4q1",
      text:"Ishda ko‘proq nima bilan ishlashni yoqtirasiz?",
      evidenceRelevance:5,
      evidenceType:"direct",
      answers:{
        azizbek:{text:"Kompyuter va dasturlar bilan.",signals:["automated","functional"]},
        madina:{text:"Rasm chizish va dizayn vositalari bilan.",signals:["manual","functional"]},
        javohir:{text:"Kompyuter va hisoblash dasturlari bilan.",signals:["automated","functional"]},
        sevinch:{text:"Oddiy asboblar va tibbiy vositalar bilan.",signals:["manual","functional"]},
        diyor:{text:"Asboblar va mexanizmlar bilan.",signals:["mechanized","manual"]},
        zuhra:{text:"Kompyuter, telefon va aloqa vositalari bilan.",signals:["automated","functional"]}
      }
    },
    {
      id:"s4q2",
      text:"Ishni asbob yordamida bajarishni yoqtirasizmi?",
      evidenceRelevance:5,
      evidenceType:"direct",
      answers:{
        azizbek:{text:"Ha, texnik asboblar bilan.",signals:["mechanized","functional"]},
        madina:{text:"Ha, ijodiy vositalar bilan.",signals:["manual","functional"]},
        javohir:{text:"Ha, hisoblash vositalari bilan.",signals:["functional","automated"]},
        sevinch:{text:"Ha, kerakli asboblar bilan.",signals:["manual","functional"]},
        diyor:{text:"Ha, ayniqsa mexanizmlar bilan.",signals:["mechanized"]},
        zuhra:{text:"Ha, aloqa va kompyuter vositalari bilan.",signals:["automated","functional"]}
      }
    },
    {
      id:"s4q3",
      text:"Ishning bir qismini qurilma bajarsa, qanday qaraysiz?",
      evidenceRelevance:5,
      evidenceType:"direct",
      answers:{
        azizbek:{text:"Juda qulay, texnika vaqtni tejaydi.",signals:["automated"]},
        madina:{text:"Qiziq, lekin ijodiy qismini o‘zim bajargim keladi.",signals:["automated","manual"]},
        javohir:{text:"Yaxshi, ayniqsa hisob-kitobda.",signals:["automated"]},
        sevinch:{text:"Yaxshi, agar ishni yengillashtirsa.",signals:["automated"]},
        diyor:{text:"Yaxshi, lekin mexanizmni o‘zim ham boshqarmoqchiman.",signals:["mechanized","automated"]},
        zuhra:{text:"Juda yaxshi, ish tezlashadi.",signals:["automated"]}
      }
    },
    {
      id:"s4q4",
      text:"Qo‘l bilan bajariladigan ishlar sizga qanday?",
      evidenceRelevance:4,
      evidenceType:"indirect",
      answers:{
        azizbek:{text:"Kamroq bo‘lsa yaxshi.",signals:["automated"]},
        madina:{text:"Ijodiy ish bo‘lsa yoqadi.",signals:["manual"]},
        javohir:{text:"Kerak bo‘lsa bajaraman.",signals:["functional"]},
        sevinch:{text:"Amaliy ish bo‘lsa yoqadi.",signals:["manual"]},
        diyor:{text:"Juda yoqadi.",signals:["manual","mechanized"]},
        zuhra:{text:"Ko‘p bo‘lmasa yaxshi.",signals:["automated","functional"]}
      }
    },
    {
      id:"s4q5",
      text:"Ish kiyimida qaysi rang sizga yoqadi?",
      evidenceRelevance:1,
      evidenceType:"distractor",
      answers:{
        azizbek:{text:"Ko‘k yoki qora.",signals:[]},
        madina:{text:"Yashil yoki pushti.",signals:[]},
        javohir:{text:"To‘q ranglar.",signals:[]},
        sevinch:{text:"Oq yoki och ranglar.",signals:[]},
        diyor:{text:"Ko‘k yoki kulrang.",signals:[]},
        zuhra:{text:"Och ranglar.",signals:[]}
      }
    }
  ]
};