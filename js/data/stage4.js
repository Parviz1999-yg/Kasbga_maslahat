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
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:5,text:"Kompyuter va dasturlar bilan.",signals:["automated","functional"]},
        madina:{evidenceRelevance:4,text:"Rasm chizish va dizayn vositalari bilan.",signals:["manual","functional"]},
        javohir:{evidenceRelevance:3,text:"Kompyuter va hisoblash dasturlari bilan.",signals:["automated","functional"]},
        sevinch:{evidenceRelevance:2,text:"Oddiy asboblar va tibbiy vositalar bilan.",signals:["manual","functional"]},
        diyor:{evidenceRelevance:5,text:"Asboblar va mexanizmlar bilan.",signals:["mechanized","manual"]},
        zuhra:{evidenceRelevance:4,text:"Kompyuter, telefon va aloqa vositalari bilan.",signals:["automated","functional"]}
      }
    },
    {
      id:"s4q2",
      text:"Ishni asbob yordamida bajarishni yoqtirasizmi?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:4,text:"Ha, texnik asboblar bilan.",signals:["mechanized","functional"]},
        madina:{evidenceRelevance:5,text:"Ha, ijodiy vositalar bilan.",signals:["manual","functional"]},
        javohir:{evidenceRelevance:2,text:"Ha, hisoblash vositalari bilan.",signals:["functional","automated"]},
        sevinch:{evidenceRelevance:3,text:"Ha, kerakli asboblar bilan.",signals:["manual","functional"]},
        diyor:{evidenceRelevance:3,text:"Ha, ayniqsa mexanizmlar bilan.",signals:["mechanized"]},
        zuhra:{evidenceRelevance:2,text:"Ha, aloqa va kompyuter vositalari bilan.",signals:["automated","functional"]}
      }
    },
    {
      id:"s4q3",
      text:"Ishning bir qismini qurilma bajarsa, qanday qaraysiz?",
      evidenceType:"direct",
      answers:{
        azizbek:{evidenceRelevance:3,text:"Juda qulay, texnika vaqtni tejaydi.",signals:["automated"]},
        madina:{evidenceRelevance:2,text:"Qiziq, lekin ijodiy qismini o‘zim bajargim keladi.",signals:["automated","manual"]},
        javohir:{evidenceRelevance:5,text:"Yaxshi, ayniqsa hisob-kitobda.",signals:["automated"]},
        sevinch:{evidenceRelevance:4,text:"Yaxshi, agar ishni yengillashtirsa.",signals:["automated"]},
        diyor:{evidenceRelevance:4,text:"Yaxshi, lekin mexanizmni o‘zim ham boshqarmoqchiman.",signals:["mechanized","automated"]},
        zuhra:{evidenceRelevance:5,text:"Juda yaxshi, ish tezlashadi.",signals:["automated"]}
      }
    },
    {
      id:"s4q4",
      text:"Qo‘l bilan bajariladigan ishlar sizga qanday?",
      evidenceType:"indirect",
      answers:{
        azizbek:{evidenceRelevance:2,text:"Kamroq bo‘lsa yaxshi.",signals:["automated"]},
        madina:{evidenceRelevance:3,text:"Ijodiy ish bo‘lsa yoqadi.",signals:["manual"]},
        javohir:{evidenceRelevance:4,text:"Kerak bo‘lsa bajaraman.",signals:["functional"]},
        sevinch:{evidenceRelevance:5,text:"Amaliy ish bo‘lsa yoqadi.",signals:["manual"]},
        diyor:{evidenceRelevance:2,text:"Juda yoqadi.",signals:["manual","mechanized"]},
        zuhra:{evidenceRelevance:3,text:"Ko‘p bo‘lmasa yaxshi.",signals:["automated","functional"]}
      }
    },
    {
      id:"s4q5",
      text:"Ish kiyimida qaysi rang sizga yoqadi?",
      evidenceType:"distractor",
      answers:{
        azizbek:{evidenceRelevance:1,text:"Ko‘k yoki qora.",signals:[]},
        madina:{evidenceRelevance:1,text:"Yashil yoki pushti.",signals:[]},
        javohir:{evidenceRelevance:1,text:"To‘q ranglar.",signals:[]},
        sevinch:{evidenceRelevance:1,text:"Oq yoki och ranglar.",signals:[]},
        diyor:{evidenceRelevance:1,text:"Ko‘k yoki kulrang.",signals:[]},
        zuhra:{evidenceRelevance:1,text:"Och ranglar.",signals:[]}
      }
    }
  ]
};