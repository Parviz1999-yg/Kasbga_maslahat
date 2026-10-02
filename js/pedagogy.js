/* Kasbga maslahat — pedagogik suhbat rejimi
   Maqsad: bo'lajak texnologiya o'qituvchisi 8–9-sinf o'quvchisi bilan
   kasbga yo'naltiruvchi suhbatni savol -> javob -> dalil -> aniqlashtirish
   tamoyili asosida mashq qiladi.
*/
const PEDAGOGY_VERSION="2026.10.02";

const PEDAGOGICAL_PURPOSES={
  personType:["interest","technical","communication","medicine","environment","design"],
  workType:["problem","practical","creativity","organization","teamwork","persistence"],
  domain:["career","technology","environment","information"],
  subject:["subject"],
  distractor:["error_salary","error_peer","error_parent"],
  selfKnowledge:["selfknowledge","motivation"]
};

const PEDAGOGICAL_LABELS={
  personType:"Kasb tipi",
  workType:"Mehnat turi",
  domain:"Kasbiy soha",
  subject:"Fan/qiziqish",
  distractor:"Chalg'ituvchi tekshiruv",
  selfKnowledge:"O'zini anglash"
};

const PED_RULES=[
  {bucket:"personType",key:"people",rx:/odam|inson|o'quvchi|o‘quvchi|bemor|mijoz|jamoa|muloqot|suhbat|yordam ber/i},
  {bucket:"personType",key:"nature",rx:/tabiat|o'simlik|o‘simlik|hayvon|chorva|ekin|agronom|ekolog/i},
  {bucket:"personType",key:"technology",rx:/texnika|qurilma|mexanizm|mashina|asbob|motor|detal|ustaxona|montaj/i},
  {bucket:"personType",key:"signs",rx:/raqam|hisob|formula|jadval|kod|dastur|ma'lumot|ma’lumot|matn|hujjat|tahlil/i},
  {bucket:"personType",key:"artistic",rx:/rasm|rang|dizayn|obraz|musiqa|ijod|kompozitsiya|chizma/i},

  {bucket:"workType",key:"practical",rx:/qo'l|qo‘l|yasash|tuzat|ta'mirl|ta’mirl|sozlash|amaliy|asbob|qurish/i},
  {bucket:"workType",key:"mental",rx:/tahlil|hisob|mantiq|formula|reja|ma'lumot|ma’lumot|yechim|solishtir|fikrl/i},
  {bucket:"workType",key:"creative",rx:/ijod|g'oya|g‘oya|dizayn|yangi yechim|yarat|rang|obraz/i},
  {bucket:"workType",key:"social",rx:/muloqot|odam|o'quvchi|o‘quvchi|bemor|mijoz|yordam|tushuntir|jamoa/i},
  {bucket:"workType",key:"organizational",rx:/tashkil|boshqar|reja|muvofiq|vazifa|muddat|rahbar|taqsim/i},

  {bucket:"domain",key:"education",rx:/o'qit|o‘qit|dars|maktab|ta'lim|ta’lim|pedagog|o'quvchi|o‘quvchi/i},
  {bucket:"domain",key:"health",rx:/tibbiyot|shifokor|bemor|klinika|laborator/i},
  {bucket:"domain",key:"it",rx:/kompyuter|dastur|kod|informat|texnolog|IT|raqamli/i},
  {bucket:"domain",key:"engineering",rx:/muhandis|mexanik|konstruk|texnika|mexanizm|qurilma/i},
  {bucket:"domain",key:"transport",rx:/haydov|avtomobil|transport|yo'l|yo‘l|yuk mashina/i},
  {bucket:"domain",key:"agriculture",rx:/agronom|dehqon|o'simlik|o‘simlik|hayvon|chorva|ekolog|tabiat/i},
  {bucket:"domain",key:"law",rx:/huquq|yurist|qonun|sud|advokat/i},
  {bucket:"domain",key:"business",rx:/biznes|savdo|menejer|mijoz|tashkil|boshqar/i},
  {bucket:"domain",key:"finance",rx:/moliya|iqtisod|hisob|bank|daromad|byudjet|buxgalter/i},
  {bucket:"domain",key:"construction",rx:/qurilish|arxitekt|konstruk|bino/i},
  {bucket:"domain",key:"media",rx:/media|jurnalist|dizayn|san'at|san’at|grafik|kontent/i},
  {bucket:"domain",key:"language",rx:/til|adabiyot|tarjimon|matn|muharrir|jurnal/i},
  {bucket:"domain",key:"service",rx:/xizmat|turizm|mehmon|reseps|sotuv|sartarosh/i},

  {bucket:"subject",key:"math",rx:/matematika|hisob|formula|geometri|algebra/i},
  {bucket:"subject",key:"informatics",rx:/informat|kompyuter|dastur|kod|algoritm/i},
  {bucket:"subject",key:"physics",rx:/fizika|mexan|energi|qurilma/i},
  {bucket:"subject",key:"chemistry",rx:/kimyo|modda|laborator/i},
  {bucket:"subject",key:"biology",rx:/biolog|organizm|hayvon|o'simlik|o‘simlik/i},
  {bucket:"subject",key:"language",rx:/ona tili|adabiyot|til|matn|nutq/i},
  {bucket:"subject",key:"history",rx:/tarix|jamiyat|huquq/i},
  {bucket:"subject",key:"art",rx:/san'at|san’at|rasm|dizayn|rang|kompoz/i}
];

const CAREER_PATHS=[
  {id:"education",title:"Ta'lim va tarbiya",icon:"👩‍🏫",desc:"Odamlar bilan ishlash, tushuntirish, o'qitish va rivojlantirish.",types:["people"],works:["social","organizational","mental"],domains:["education"],subjects:["language","math","informatics","biology"],related:["O'qituvchi","Matematika o'qituvchisi","Informatika o'qituvchisi","Texnologiya o'qituvchisi","To'garak rahbari"]},
  {id:"health",title:"Tibbiyot va yordam",icon:"🩺",desc:"Inson salomatligi, biologik jarayonlar va yordam ko'rsatishga tayangan.",types:["people","nature"],works:["social","mental","practical"],domains:["health"],subjects:["biology","chemistry"],related:["Shifokor","Hamshira","Laboratoriya mutaxassisi","Farmatsevt","Tibbiy texnologiya mutaxassisi"]},
  {id:"it",title:"IT va raqamli texnologiyalar",icon:"💻",desc:"Kod, ma'lumot, raqamli tizimlar va texnologik yechimlar bilan ishlash.",types:["signs","technology"],works:["mental","creative","practical"],domains:["it"],subjects:["informatics","math","physics"],related:["Dasturchi","Web-dasturchi","Data-analitik","Tizim administratori","UX/UI dizayner"]},
  {id:"engineering",title:"Muhandislik va texnika",icon:"⚙️",desc:"Mexanizm, qurilma, konstruksiya va amaliy texnik muammolarni hal qilish.",types:["technology"],works:["practical","mental","creative"],domains:["engineering","construction"],subjects:["physics","math","informatics"],related:["Muhandis","Mexanik","Texnolog","Konstruktor","Avtomobil diagnostikasi mutaxassisi"]},
  {id:"nature",title:"Tabiat va biologiya",icon:"🌿",desc:"Tirik tabiat, o'simlik, hayvonot va ekologik jarayonlar bilan ishlash.",types:["nature"],works:["practical","mental"],domains:["agriculture"],subjects:["biology","chemistry"],related:["Agronom","Veterinar","Biolog","Ekolog","Zootexnik"]},
  {id:"business",title:"Biznes va boshqaruv",icon:"📊",desc:"Jarayon, odamlar, resurs va ma'lumotlarni rejalash hamda muvofiqlashtirish.",types:["people","signs"],works:["organizational","mental","social"],domains:["business","finance"],subjects:["math","history"],related:["Menejer","HR mutaxassisi","Biznes administrator","Savdo menejeri","Iqtisodchi"]},
  {id:"law",title:"Huquq va axborot",icon:"⚖️",desc:"Matn, hujjat, qoidalar, dalillar va odamlar bilan ishlash.",types:["people","signs"],works:["mental","social","organizational"],domains:["law","language"],subjects:["language","history"],related:["Yurist","Advokat","Sud kotibi","Tarjimon","Muharrir"]},
  {id:"creative",title:"Dizayn va ijod",icon:"🎨",desc:"Obraz, rang, shakl, loyiha va ijodiy mahsulot yaratishga yo'naltirilgan.",types:["artistic"],works:["creative","practical"],domains:["media","construction"],subjects:["art","informatics","physics"],related:["Dizayner","Grafik dizayner","Arxitektor","Illyustrator","Media mutaxassisi"]}
];

function pedEsc(v){
  return String(v??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
}
function pedBump(obj,key,n=1){obj[key]=(obj[key]||0)+n;}
function pedTop(bucket){
  const arr=Object.entries(state.dimensionScores[bucket]||{}).sort((a,b)=>b[1]-a[1]);
  return arr.length?{id:arr[0][0],score:arr[0][1]}:null;
}
function pedQuestionPurpose(q){
  const p=[];
  for(const [purpose,cats] of Object.entries(PEDAGOGICAL_PURPOSES)){
    if(cats.includes(q.category)) p.push(purpose);
  }
  if(q.category==="subject") p.push("subject");
  return [...new Set(p)];
}
function pedSignals(answer){
  const t=String(answer||"");
  const out=[];
  for(const r of PED_RULES) if(r.rx.test(t)){pedBump(state.dimensionScores[r.bucket],r.key,1);out.push(r.bucket+":"+r.key);}
  return out;
}
function pedAnswer(student,q){
  const exact=student.answers?.[q.id];
  let base=exact||student.answerByCategory?.[q.category]||"Bu savol haqida hali aniq o'ylab ko'rmaganman.";
  const id=q.id;
  const add={
    interest:{
      azizbek:"Ayniqsa, texnik muammoni o'zim yechib ko'rish qiziq.",
      madina:"Ayniqsa, o'z g'oyamni boshqalarga ko'rsatish yoqadi.",
      javohir:"Ayniqsa, natijani raqamlar orqali ko'rish qiziq.",
      sevinch:"Ayniqsa, odamga foydasi tegadigan tomonlari qiziq.",
      diyor:"Ayniqsa, qo'l bilan natija chiqarish menga yoqadi.",
      zuhra:"Ayniqsa, odamlar bilan fikr almashish yoqadi."
    },
    subject:{
      azizbek:"Masalani yechish va kompyuterda qo'llash tomoni menga qiziq.",
      madina:"Mavzuni tasvir, matn yoki loyiha orqali ifodalash yoqadi.",
      javohir:"Hisob-kitob va mantiqiy masalalarni yechish yoqadi.",
      sevinch:"Nazariyani amaliy hayot, inson organizmi bilan bog'lash qiziq.",
      diyor:"Qoidani tajriba yoki qurilma orqali tekshirish qiziq.",
      zuhra:"O'qigan mavzuni gapirish va boshqalarga tushuntirish yoqadi."
    },
    problem:{
      azizbek:"Avval sababini topaman, keyin bir necha yechimni tekshiraman.",
      madina:"Bir nechta variant o'ylab, eng qulay va ijodiy yo'lni tanlayman.",
      javohir:"Faktlarni ajratib, hisoblab, keyin xulosa qilaman.",
      sevinch:"Odamga zarar bermaydigan va foydali yechimni izlayman.",
      diyor:"Muammoni ko'rib, amalda tekshirib ko'raman.",
      zuhra:"Avval tomonlarni tinglayman, keyin tartib bilan yechim topaman."
    },
    technical:{
      azizbek:"Qurilmaning qanday ishlashi va uni yaxshilash qiziq.",
      madina:"Texnik vositaning ijodiy imkoniyatlari qiziqroq.",
      javohir:"Texnikadan ko'ra ma'lumot bilan ishlash menga yaqinroq.",
      sevinch:"Tibbiy asboblarning ishlashini bilish foydali deb o'ylayman.",
      diyor:"Mexanizmning ichki tuzilishini tushunish juda qiziq.",
      zuhra:"Texnik qurilma yordamchi vosita sifatida qiziq."
    },
    career:{
      azizbek:"Men uchun shu sohada muammo yechish va yangi narsa yaratish muhim.",
      madina:"Men uchun ishda ijod qilish va o'z g'oyamni ifodalash muhim.",
      javohir:"Men uchun tahlil, natija va rivojlanish imkoniyati muhim.",
      sevinch:"Men uchun odamga foyda keltirish va mas'uliyat muhim.",
      diyor:"Men uchun amaliy natija va texnik muammoni hal qilish muhim.",
      zuhra:"Men uchun odamlar bilan ishlash va jarayonni tashkil qilish muhim."
    }
  };
  const extra=add[q.category]?.[student.id];
  return extra && !base.includes(extra) ? base+" "+extra : base;
}
function pedStudentAnswer(student,q){ return pedAnswer(student,q); }

function pedCategoryPurpose(q){
  const ps=pedQuestionPurpose(q);
  return ps[0]||"kasbiy moslik";
}
function pedQuestionScore(q){
  let s=(q.weight||5);
  const ps=pedQuestionPurpose(q);
  const missing={
    personType:!pedTop("personType"),
    workType:!pedTop("workType"),
    domain:!pedTop("domain"),
    subject:!pedTop("subject"),
    distractor:!state.history.some(x=>["error_salary","error_peer","error_parent"].includes(x.q.category)),
    selfKnowledge:!state.history.some(x=>["selfknowledge","motivation"].includes(x.q.category))
  };
  ps.forEach(p=>{if(missing[p])s+=38;});
  const last=state.history.at(-1);
  if(last){
    const lp=pedQuestionPurpose(last.q);
    if(ps.some(x=>lp.includes(x)))s+=10;
    if(last.q.category===q.category)s-=28;
    const text=last.answer||"";
    if(/matematika|informat|fizika|biolog|kimyo|adabiyot|tarix|san'at|san’at/i.test(text) && q.category==="subject")s-=12;
  }
  if(state.asked.includes(q.id))s=-999;
  return s;
}

function chooseAvailableQuestions(){
  const poolIds=STUDENT_QUESTION_POOLS[state.currentStudent.id]||QUESTIONS.map(q=>q.id);
  const unused=QUESTIONS.filter(q=>poolIds.includes(q.id)&&!state.asked.includes(q.id));
  const ranked=shuffle(unused).sort((a,b)=>pedQuestionScore(b)-pedQuestionScore(a));
  const result=[];
  const cats=new Set();
  for(const q of ranked){
    if(result.length>=6)break;
    if(!cats.has(q.category)){result.push(q);cats.add(q.category);}
  }
  for(const q of ranked){
    if(result.length>=6)break;
    if(!result.some(x=>x.id===q.id))result.push(q);
  }
  return result;
}

function recordAnswerEvidence(q,answer){
  const signals=new Set(extractAnswerSignals(q,answer));
  const mapped=state.currentStudent?.answerSignals?.[q.id]||[];
  // Eski xarita faqat qo'shimcha dalil sifatida ishlatiladi; tasniflashning
  // asosiy manbai aynan o'quvchining matnli javobidir.
  mapped.forEach(x=>signals.add(x));
  pedSignals(answer);
  signals.forEach(x=>state.evidence.add(x));
  if(["error_salary","error_peer","error_parent"].includes(q.category)){
    state.errors.add(q.category);
  }
  state.questionPurposes.push(...pedQuestionPurpose(q));
  return [...signals];
}

function startTimer(){
  stopTimer();
  state.timeLeft=25;
  const timerEl=$("timer"),card=document.querySelector(".question-card");
  const draw=()=>{
    if(!timerEl)return;
    timerEl.textContent="00:"+String(Math.max(0,state.timeLeft)).padStart(2,"0");
    timerEl.classList.toggle("warning",state.timeLeft<=10&&state.timeLeft>5);
    timerEl.classList.toggle("danger",state.timeLeft<=5);
    if(card)card.classList.toggle("time-pressure",state.timeLeft<=10);
  };
  draw();
  state.timer=setInterval(()=>{
    state.timeLeft--;draw();
    if(state.timeLeft<=0){
      stopTimer();
      const q=state.currentQuestion;
      if(q){
        state.missed.push({step:state.step+1,qId:q.id});
        state.history.push({q,answer:"Javob berilmadi",signals:[],answered:false});
        addDialogueGraphRecord(q,"Javob berilmadi",[],false);
      }
      state.step++;
      if(state.step>=6)showProfessionChoice();else renderQuestionChoices();
    }
  },1000);
}

function renderQuestionChoices(){
  state.available=chooseAvailableQuestions();
  $("question-counter").textContent=(state.step+1)+" / 6";
  $("progress-bar").style.width=((state.step+1)/6*100)+"%";
  const label=document.querySelector(".question-label");
  if(label)label.textContent="MAQSADLI SAVOLNI TANLANG";
  $("question-text").textContent=state.currentStudent.name+"ga qaysi savolni berasiz?";
  $("answers").innerHTML="";
  state.available.forEach((q,i)=>{
    const b=document.createElement("button");
    b.className="answer-btn";
    b.innerHTML="<strong>"+(i+1)+".</strong> "+pedEsc(q.text);
    b.onclick=()=>askQuestion(q);
    $("answers").appendChild(b);
  });
  $("mood").textContent="Avval javobni tinglang, keyin keyingi savolni aniqlashtiring";
  renderEvidencePanel();
  startTimer();
}

function askQuestion(q){
  stopTimer();
  state.currentQuestion=q;
  state.asked.push(q.id);
  const answer=pedStudentAnswer(state.currentStudent,q);
  const signals=recordAnswerEvidence(q,answer);
  const record={q,answer,signals,answered:true,purpose:pedQuestionPurpose(q)};
  state.history.push(record);
  addDialogueGraphRecord(q,answer,signals,true);
  $("answers").innerHTML="";
  renderEvidencePanel();
  $("question-text").textContent=q.text;
  setTeenMood(state.currentStudent.name+" javob bermoqda…");
  setTimeout(()=>{
    stopAndReact(q);
    setTeenMood("Javob berdi — keyingi savolni aniqlashtiring");
    const response=document.createElement("div");
    response.className="teen-response";
    response.innerHTML="<span>"+pedEsc(state.currentStudent.name)+":</span><p>“"+pedEsc(answer)+"”</p>";
    $("answers").appendChild(response);
    const reason=document.createElement("div");
    reason.className="evidence-note";
    reason.innerHTML="<b>Maslahatchi uchun:</b> bu javobdan qaysi kasbiy dalilni olish mumkinligini o'zingiz tahlil qiling.";
    $("answers").appendChild(reason);
    const next=document.createElement("button");
    next.className="primary-btn";
    next.style.marginTop="18px";
    next.textContent=state.step===5?"Tavsiyangizni berish →":"Javobni aniqlashtirish / keyingi savollar →";
    next.onclick=()=>{state.step++;if(state.step>=6)showProfessionChoice();else renderQuestionChoices();};
    $("answers").appendChild(next);
  },260);
}

function showProfessionChoice(){
  stopTimer();
  showScreen("screen-profession");
  const n=$("profession-student-name");if(n)n.textContent=state.currentStudent.name;
  $("profession-list").innerHTML="";
  shuffle(PROFESSIONS).forEach(p=>{
    const b=document.createElement("button");
    b.className="profession-btn";
    b.innerHTML="<b>"+pedEsc(p.name)+"</b><br><small>"+pedEsc(CAREER_TYPES[p.type]?.name||"Kasbiy yo'nalish")+" — suhbat dalillari asosida</small>";
    b.onclick=()=>evaluate(p);
    $("profession-list").appendChild(b);
  });
}

function pedClassificationSummary(){
  const type=pedTop("personType"),work=pedTop("workType"),domain=pedTop("domain"),subject=pedTop("subject");
  const names={
    personType:type?CAREER_CLASSIFICATION.personTypes[type.id].name:"Aniqlanmagan",
    workType:work?CAREER_CLASSIFICATION.workTypes[work.id].name:"Aniqlanmagan",
    domain:domain?CAREER_CLASSIFICATION.domains[domain.id]:"Aniqlanmagan",
    subject:subject?CAREER_CLASSIFICATION.subjects[subject.id]:"Aniqlanmagan"
  };
  return {type,work,domain,subject,names};
}
function pedPathScore(path){
  const s=pedClassificationSummary();
  let n=0;
  if(s.type&&path.types.includes(s.type.id))n+=30;
  if(s.work&&path.works.includes(s.work.id))n+=25;
  if(s.domain&&path.domains.includes(s.domain.id))n+=30;
  if(s.subject&&path.subjects.includes(s.subject.id))n+=15;
  return Math.min(100,n);
}
function pedGroupList(){
  return CAREER_PATHS.map(p=>({path:p,score:pedPathScore(p)})).sort((a,b)=>b.score-a.score);
}
function pedCounselorQuality(selected){
  const s=pedClassificationSummary();
  const coverage=[s.type,s.work,s.domain,s.subject].filter(Boolean).length/4*60;
  const distractor=state.history.some(x=>["error_salary","error_peer","error_parent"].includes(x.q.category))?15:0;
  const verification=state.history.length>=2 && state.history.slice(1).some((x,i)=>{
    const prev=state.history[i];return pedQuestionPurpose(x.q).some(p=>pedQuestionPurpose(prev.q).includes(p));
  })?15:0;
  const evidence=Math.min(10,state.history.filter(x=>(x.signals||[]).length>=2).length*2);
  const base=Math.round(Math.min(100,coverage+distractor+verification+evidence));
  return base;
}
function pedRecommendationRationale(selected){
  const s=pedClassificationSummary();
  const path=pedGroupList()[0];
  const parts=[];
  if(s.type)parts.push("mehnat predmeti — "+s.names.type);
  if(s.work)parts.push("mehnat turi — "+s.names.work);
  if(s.domain)parts.push("soha — "+s.names.domain);
  if(s.subject)parts.push("fan/qiziqish — "+s.names.subject);
  return {path,parts};
}

function renderSystemRecommendation(selected){
  const panel=$("system-recommendation"),groups=$("career-groups-panel");
  const s=pedClassificationSummary(),ranked=pedGroupList();
  const best=ranked[0];
  const quality=pedCounselorQuality(selected);
  const caution=quality<65?"Suhbatda yetarli dalil yig'ilmagan. Yakuniy tavsiyani qat'iy xulosa emas, dastlabki yo'nalish sifatida ko'ring.":"Suhbat asosiy yo'nalishlarni qamrab oldi, lekin real hayotda o'quvchining amaliy sinovi va qo'shimcha ma'lumotlari ham tekshiriladi.";
  panel.innerHTML=`
    <div class="system-rec-head"><span>🧭</span><div><b>Saytning mustaqil tahlili</b><strong>${pedEsc(best?.path.title||"Yo'nalish aniqlanmadi")}</strong></div><em>${quality}/100 mashq sifati</em></div>
    <p class="system-rec-type"><b>Kasbiy xarita:</b> ${pedEsc(s.names.type)} · ${pedEsc(s.names.work)} · ${pedEsc(s.names.domain)} · ${pedEsc(s.names.subject)}</p>
    <div class="system-rec-grid">
      <div><b>Sizning tavsiyangiz</b><span>${pedEsc(selected?.name||"Ko'rsatilmagan")}</span></div>
      <div><b>Mustaqil tahlil</b><span>${pedEsc(best?.path.title||"Aniqlanmadi")}</span></div>
    </div>
    <p class="system-rec-note">${pedEsc(caution)}</p>
  `;
  groups.innerHTML=`
    <div class="career-groups-title"><span class="eyebrow">BOG'LIQ KASBLAR OILALARI</span><h2>O'quvchiga mos bo'lishi mumkin bo'lgan yo'nalishlar</h2><p>Kartani bosing — shu yo'nalishdagi yaqin kasblar va mutaxassisliklar ochiladi.</p></div>
    ${ranked.slice(0,4).map((x,i)=>`<button class="career-group-card" data-path="${x.path.id}"><div class="career-group-icon">${x.path.icon}</div><div class="career-group-body"><h3>${pedEsc(x.path.title)}</h3><p>${pedEsc(x.path.desc)}</p><div class="career-mini-list"><span>${x.score}/100 dalil mosligi</span></div><div class="career-expanded" hidden><b>Yaqin kasblar:</b><div>${x.path.related.map(r=>"<span>"+pedEsc(r)+"</span>").join("")}</div></div></div><div class="career-group-score">${i===0?"asosiy":"muqobil"}</div></button>`).join("")}
  `;
  groups.querySelectorAll(".career-group-card").forEach(card=>card.addEventListener("click",()=>{
    const box=card.querySelector(".career-expanded");box.hidden=!box.hidden;
  }));
}

function evaluate(profession){
  stopTimer();
  state.selectedProfession=profession;
  showScreen("screen-result");
  const s=pedClassificationSummary(), quality=pedCounselorQuality(profession);
  const rationale=pedRecommendationRationale(profession);
  $("result-title").textContent=state.currentStudent.name+" bilan maslahat yakuni";
  $("result-summary").textContent="Siz o'quvchining javoblarini tinglab, kasbiy yo'nalish bo'yicha tavsiya berdingiz. Endi sayt shu suhbatni mustaqil tahlil qiladi.";
  $("score-grid").innerHTML=[
    ["Kasb tipi",s.names.type],["Mehnat turi",s.names.work],["Kasbiy soha",s.names.domain],
    ["Fan/qiziqish",s.names.subject],["Suhbat savollari",state.history.filter(x=>x.answered!==false).length+" ta"],["Mashq sifati",quality+"/100"]
  ].map(x=>'<div class="score"><b style="font-size:18px">'+pedEsc(x[1])+'</b><span>'+pedEsc(x[0])+'</span></div>').join("");
  const useful=$("useful-questions"),weak=$("weak-points");
  useful.innerHTML="";
  state.history.filter(x=>x.answered!==false).slice(0,6).forEach(x=>{
    const li=document.createElement("li");li.textContent=x.q.text;useful.appendChild(li);
  });
  weak.innerHTML="";
  const missing=[];
  if(!s.type)missing.push("Kasb tipi yetarli dalil bilan aniqlanmadi.");
  if(!s.work)missing.push("Mehnat turi bo'yicha qo'shimcha savol kerak.");
  if(!s.domain)missing.push("Kasbiy soha aniq emas.");
  if(!s.subject)missing.push("Fan/qiziqish bo'yicha dalil kam.");
  if(!state.history.some(x=>["error_salary","error_peer","error_parent"].includes(x.q.category)))missing.push("Tipik xatoliklarni tekshiruvchi savol berilmadi.");
  if(!missing.length)missing.push("Asosiy diagnostik yo'nalishlar qamrab olindi.");
  missing.forEach(x=>{const li=document.createElement("li");li.textContent=x;weak.appendChild(li);});
  const method=$("methodology");
  method.textContent="Maslahatchi kasbni faqat bitta qiziqish yoki bitta fan asosida tanlamasligi kerak. Avval o'quvchining mehnat predmeti, mehnat turi, kasbiy sohasi va fan/qiziqishini aniqlab, keyin javobni aniqlashtiruvchi savol bilan tekshirishi, so'ng bir nechta yaqin yo'nalishni ko'rsatishi kerak.";
  renderSystemRecommendation(profession);
  renderDialogueGraph();
}

function pedInit(){
  const old=window.__pedInitDone;
  if(old)return;
  window.__pedInitDone=true;
  const start=$("start-btn");
  if(start)start.addEventListener("click",startGame);
  const restart=$("restart-btn");
  if(restart)restart.addEventListener("click",()=>{showScreen("screen-start");state.currentStudent=null;document.querySelectorAll(".student-card").forEach(x=>x.classList.remove("selected"));if(start){start.disabled=true;start.textContent="Avval o'quvchini tanlang →";}renderStudents();});
  renderStudents();
  const rules=document.querySelector(".rules");
  if(rules)rules.innerHTML="<div><b>6 ta maqsadli savol</b><span>har bosqichda savolni siz tanlaysiz</span></div><div><b>Jonli suhbat</b><span>javobdan keyingi savolni aniqlashtirasiz</span></div><div><b>Mustaqil tahlil</b><span>sayt sizning tavsiyangizni tekshiradi</span></div>";
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",pedInit);else pedInit();
