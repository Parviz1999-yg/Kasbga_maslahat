const state={
  step:0,
  asked:[],
  history:[],
  available:[],
  selectedProfession:null,
  currentStudent:null,
  evidence:new Set(),
  errors:new Set(),
  timer:null,
  timeLeft:20,
  dialogueGraph:{nodes:[],edges:[]},
  missed:[]
};

const $=id=>document.getElementById(id);

const CATEGORY_EVIDENCE={
  interest:["interest"],
  subject:["logic","interest"],
  problem:["problem","logic"],
  technology:["technology"],
  career:["interest","technology"],
  practical:["practical"],
  independence:["independence"],
  persistence:["persistence"],
  technical:["technical","technology"],
  teamwork:["teamwork","communication"],
  organization:["organization"],
  design:["design","creativity"],
  medicine:["medicine"],
  communication:["communication"],
  environment:["environment"],
  variety:["creativity","persistence"],
  creativity:["creativity"],
  error_salary:["decision_error"],
  error_peer:["decision_error"],
  error_parent:["decision_error"],
  selfknowledge:["selfknowledge"],
  information:["information"],
  motivation:["motivation"]
};

const STUDENT_INTROS={
  azizbek:"Salom ustoz. Men kasb tanlashda qiynalyapman. O‘zimga mos yo‘nalishni topishda yordam kerak.",
  madina:"Salom ustoz. Men kelajakdagi kasbimni tanlashda ikkilanib qolyapman. O‘zim uchun to‘g‘ri yo‘nalishni aniqlashda maslahat kerak.",
  javohir:"Assalomu alaykum, ustoz. Kasb tanlash masalasida aniq qarorga kela olmayapman. Menga to‘g‘ri savollar berib, yo‘nalishimni aniqlashga yordam bering.",
  sevinch:"Salom ustoz. Kelajakdagi kasbim haqida ko‘p o‘ylayapman, lekin qaysi yo‘l menga mosligini bilmayapman. Maslahat berishingizni xohlayman.",
  diyor:"Salom ustoz. Kasb tanlashda biroz adashyapman. O‘zimga mos ish yo‘nalishini topish uchun siz bilan gaplashmoqchiman.",
  zuhra:"Assalomu alaykum, ustoz. Kelajak kasbimni tanlash va qaror qilishda yordam kerak. Menga savollar berib, o‘zimni yaxshiroq anglashimga yordam bering."
};

const CATEGORY_LABEL={
  interest:"qiziqish",
  subject:"qobiliyat/fan",
  problem:"muammo yechish",
  technology:"texnologik qiziqish",
  career:"kasbiy qiziqish",
  practical:"amaliy faoliyat",
  independence:"mustaqillik",
  persistence:"qat’iyat",
  technical:"texnik fikrlash",
  teamwork:"jamoada ishlash",
  organization:"tashkilotchilik",
  design:"dizayn",
  medicine:"tibbiyotga qiziqish",
  communication:"muloqot",
  environment:"ish muhiti",
  variety:"ish xilma-xilligi",
  creativity:"ijodkorlik",
  error_salary:"faqat maoshga tayanish xatosi",
  error_peer:"do‘stlarga ergashish xatosi",
  error_parent:"ota-ona xohishiga ko‘r-ko‘rona ergashish xatosi",
  selfknowledge:"o‘zini anglash",
  information:"kasb haqida ma’lumot",
  motivation:"kasbiy motiv"
};

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $(id).classList.add("active");
}

function shuffle(items){
  return [...items].sort(()=>Math.random()-0.5);
}

function questionEvidence(q){
  // Savolning o‘zi dalil bermaydi. Dalil faqat o‘quvchining javobidan olinadi.
  return q.evidence || CATEGORY_EVIDENCE[q.category] || [q.category];
}

const SIGNAL_RULES={
  interest:[[/kompyuter|dastur|texnolog/i,"technology"],[/rasm|dizayn|rang|ijod/i,"creativity"],[/odam|suhbat|muloqot/i,"communication"],[/biolog|tibb|sog‘liq|kasal/i,"medicine"],[/mashina|mexanizm|ustaxona|asbob/i,"technical"],[/hisob|raqam|matemat|tahlil/i,"logic"]],
  subject:[[/matemat|informat|hisob/i,"logic"],[/biolog|kimyo|tibb/i,"medicine"],[/adabiyot|til|tarix|huquq/i,"communication"],[/texnika|fizika/i,"technical"]],
  problem:[[/tahlil|qismlarga|sabab|dalil|mantiq/i,"problem"],[/yechim|hal qil|yech/i,"problem"],[/yordam so‘ray|boshqalarga topshir/i,"teamwork"]],
  technology:[[/texnolog|dastur|platform|kompyuter/i,"technology"],[/qiziqmay|foydalanmay/i,"low_technology_interest"]],
  career:[[/dasturch|program|kod/i,"technology"],[/muhandis|mexan|texnik/i,"technical"],[/dizayn|arxitekt/i,"creativity"],[/o‘qit|ta’lim/i,"communication"],[/shifokor|tibb/i,"medicine"],[/huquq|yurist/i,"communication"],[/iqtisod|moliya/i,"logic"]],
  practical:[[/qo‘l bilan|yas|tuzat|amaliy|ustaxona/i,"practical"],[/nazariya/i,"low_practical"]],
  independence:[[/mustaqil|o‘zim|o‘zi qaror/i,"independence"],[/boshqalarga topshir|ko‘rsatma kut/i,"dependence"]],
  persistence:[[/davom|tugat|oxirigacha|urin/i,"persistence"],[/voz kech|keyinga qoldir/i,"low_persistence"]],
  technical:[[/qurilma|mexanizm|asbob|ichki tuzil|texnik/i,"technical"],[/qiziqmay/i,"low_technical_interest"]],
  teamwork:[[/jamoa|birga|hamkor/i,"teamwork"],[/yolg‘iz|mustaqil/i,"independence"]],
  organization:[[/reja|bosqich|jadval|muddat|tartib|tashkil/i,"organization"],[/tasodif|keyinga qoldir/i,"low_organization"]],
  design:[[/rang|shakl|kompoz|chizma|dizayn|ko‘rinish/i,"design"],[/texnik sxema/i,"technical"]],
  medicine:[[/tibb|biolog|organizm|kasallik|davol|sog‘liq/i,"medicine"],[/qiziqmay/i,"low_medicine_interest"]],
  communication:[[/tingla|tushuntir|gaplash|muloqot|nutq|suhbat/i,"communication"],[/qoch|gaplashishni istamay/i,"low_communication"]],
  environment:[[/kompyuter|ofis/i,"technology"],[/laborator/i,"medicine"],[/ustaxona/i,"technical"],[/maktab|sinf/i,"communication"]],
  variety:[[/turli|o‘zgar|yangi loyih|har xil/i,"variety"],[/bir xil|takror/i,"low_variety"]],
  creativity:[[/yangi g‘oya|ijod|yangi variant|chizma/i,"creativity"],[/tayyor|takror/i,"low_creativity"]],
  error_salary:[[/faqat maosh|faqat daromad|prestij/i,"decision_error"],[/qiziqish|mos|rivojlanish|vazifa/i,"decision_awareness"]],
  error_peer:[[/do‘st|tanish/i,"peer_influence_check"],[/o‘zim|o‘z qiziqish/i,"decision_awareness"]],
  error_parent:[[/ota-ona|ota onam/i,"parent_influence_check"],[/o‘zim|moslik|qiziqish/i,"decision_awareness"]],
  selfknowledge:[[/kuchli tomon|qobiliyat|o‘zimni|o‘z qobiliyat/i,"selfknowledge"]],
  information:[[/rasmiy|manba|solishtir|talab|kundalik|mutaxassis|ma’lumot/i,"information"],[/reklama|tanishim fikri|tekshirmay/i,"low_information"]],
  motivation:[[/qiziqish|rivojlanish|foyda|barqaror|daromad/i,"motivation"]]
};

function extractAnswerSignals(q,answer){
  const text=String(answer||"");
  const found=new Set();
  const rules=SIGNAL_RULES[q.category]||[];
  rules.forEach(([rx,signal])=>{if(rx.test(text)) found.add(signal);});
  // Composite savollarda javob mazmuni ustun; savolning barcha dalillarini avtomatik qo‘shmaymiz.
  return [...found];
}

function recordAnswerEvidence(q,answer){
  // Agar o‘quvchining aynan shu savolga individual dalil xaritasi bo‘lsa,
  // regexdan ko‘ra shu xarita ustun turadi. Bu real suhbatdagi javob mazmunini
  // yashirin profil emas, aynan javob bilan bog‘laydi.
  const mapped=state.currentStudent?.answerSignals?.[q.id];
  const signals=Array.isArray(mapped) ? [...mapped] : extractAnswerSignals(q,answer);
  signals.forEach(s=>state.evidence.add(s));
  if(["error_salary","error_peer","error_parent"].includes(q.category)){
    if(signals.includes("decision_error") || signals.includes("peer_influence_check") || signals.includes("parent_influence_check")) state.errors.add(q.category);
  }
  return signals;
}

function stopTimer(){
  if(state.timer){clearInterval(state.timer);state.timer=null;}
}

function renderEvidencePanel(){
  const el=$("evidence-list");
  if(!el) return;
  const items=[
    ["interest","Qiziqish"],["logic","Mantiqiy fikrlash"],["problem","Muammo yechish"],
    ["technology","Texnologiya"],["practical","Amaliy faoliyat"],["communication","Muloqot"],
    ["teamwork","Jamoa"],["organization","Tashkilotchilik"],["creativity","Ijodkorlik"],
    ["medicine","Tibbiyot"],["independence","Mustaqillik"],["decision_error","Qaror sababi"]
  ];
  el.innerHTML=items.map(([key,label])=>{
    const found=state.evidence.has(key);
    return '<div class="evidence-item '+(found?'found':'')+'"><i class="e-dot"></i><span>'+(found?'Aniqlandi: ':'Noma’lum: ')+label+'</span></div>';
  }).join('');
}


function addDialogueGraphRecord(q,answer,signals,answered=true){
  const index=state.history.length;
  const qId="qnode-"+index;
  const aId="anode-"+index;
  state.dialogueGraph.nodes.push({id:qId,type:"question",label:"S"+(index+1)+" · "+q.text});
  state.dialogueGraph.nodes.push({id:aId,type:"answer",label:answer});
  state.dialogueGraph.edges.push({from:qId,to:aId,type:answered?"answer":"missed"});
  signals.forEach((signal,j)=>{
    const eId="enode-"+index+"-"+j;
    state.dialogueGraph.nodes.push({id:eId,type:"evidence",label:CATEGORY_LABEL[signal]||signal});
    state.dialogueGraph.edges.push({from:aId,to:eId,type:"evidence"});
  });
}

function renderDialogueGraph(){
  const el=$("dialogue-graph");
  if(!el) return;
  const records=state.history;
  if(!records.length){el.innerHTML="<p class='graph-empty'>Suhbat grafigi bo‘sh.</p>";return;}
  const width=920,rowH=105,height=Math.max(300,records.length*rowH+35);
  const esc=s=>String(s||"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
  let lines="",nodes="";
  records.forEach((rec,i)=>{
    const y=35+i*rowH,qx=30,ax=335,ex=690;
    const qText=esc(rec.q.text).slice(0,54)+(rec.q.text.length>54?"…":"");
    const aText=esc(rec.answer||"Javob berilmadi").slice(0,48)+(String(rec.answer||"").length>48?"…":"");
    lines+=`<line x1="${qx+255}" y1="${y+30}" x2="${ax}" y2="${y+30}" class="graph-line ${rec.answered===false?"missed":""}"/>`;
    (rec.signals||[]).slice(0,3).forEach((s,j)=>{
      const ey=y-15+j*30;
      lines+=`<line x1="${ax+315}" y1="${y+30}" x2="${ex}" y2="${ey+15}" class="graph-line evidence"/>`;
      nodes+=`<g class="graph-node evidence-node"><rect x="${ex}" y="${ey}" width="200" height="30" rx="10"/><text x="${ex+100}" y="${ey+20}" text-anchor="middle">${esc(CATEGORY_LABEL[s]||s)}</text></g>`;
    });
    nodes+=`<g class="graph-node question-node"><rect x="${qx}" y="${y}" width="255" height="60" rx="14"/><text x="${qx+14}" y="${y+24}">S${i+1}</text><text x="${qx+40}" y="${y+24}">${qText}</text><text x="${qx+14}" y="${y+46}" class="graph-sub">${rec.q.category}</text></g>`;
    nodes+=`<g class="graph-node answer-node"><rect x="${ax}" y="${y}" width="315" height="60" rx="14"/><text x="${ax+14}" y="${y+22}">${rec.answered===false?"Javobsiz":"Javob"}</text><text x="${ax+14}" y="${y+44}" class="graph-answer">${aText}</text></g>`;
  });
  el.innerHTML=`<div class="graph-head"><b>Savol → javob → dalil</b><span>Obsidian uslubidagi suhbat xaritasi</span></div><div class="dialogue-graph-scroll"><svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Savol javob dalil grafigi">${lines}${nodes}</svg></div>`;
}

function startTimer(){
  stopTimer(); state.timeLeft=20;
  const timerEl=$("timer"), card=document.querySelector(".question-card");
  const draw=()=>{
    if(!timerEl) return;
    timerEl.textContent="00:"+String(state.timeLeft).padStart(2,"0");
    timerEl.classList.toggle("warning",state.timeLeft<=8&&state.timeLeft>4);
    timerEl.classList.toggle("danger",state.timeLeft<=4);
    if(card) card.classList.toggle("time-pressure",state.timeLeft<=8);
  };
  draw();
  state.timer=setInterval(()=>{
    state.timeLeft--;
    draw();
    if(state.timeLeft<=0){
      stopTimer();
      const mood=$("mood");
      if(mood) mood.textContent="Vaqt tugadi — bu savol o‘tkazib yuborildi";
      state.missed.push({step:state.step+1});
      const timeoutQ=state.available[0]||{id:"timeout",text:"Savol",category:"unknown",weight:0};
      const timeoutRecord={q:timeoutQ,answer:"Javob berilmadi",signals:[],answered:false};
      state.history.push(timeoutRecord);
      addDialogueGraphRecord(timeoutQ,"Javob berilmadi",[],false);
      state.step++;
      setTimeout(()=>state.step>=5?showProfessionChoice():renderQuestionChoices(),700);
    }
  },1000);
}

function stopAndReact(q){
  stopTimer();
  const avatar=$("teen-avatar");
  const reaction=(q.category.includes("error")?"surprised":q.category==="selfknowledge"?"thinking":"smile");
  avatar.className="avatar teen-avatar css-person person-"+state.currentStudent.id+" "+reaction;
}

function resetState(){
  state.step=0;
  state.asked=[];
  state.history=[];
  state.available=[];
  state.selectedProfession=null;
  state.evidence=new Set();
  state.errors=new Set();
  state.dialogueGraph={nodes:[],edges:[]};
  state.missed=[];
  stopTimer();
  state.timeLeft=20;
  renderEvidencePanel();
}

function renderStudents(){
  const list=$("student-list");
  if(!list) return;

  list.replaceChildren();

  const students=Array.isArray(STUDENTS)?STUDENTS:[];
  if(!students.length){
    list.innerHTML='<div class="student-empty">O‘quvchilar ro‘yxati yuklanmadi.</div>';
    return;
  }

  const fragment=document.createDocumentFragment();

  students.forEach(student=>{
    const card=document.createElement("button");
    card.type="button";
    card.className="student-card";
    card.dataset.studentId=student.id;
    card.setAttribute("aria-label",student.name+" bilan maslahatni boshlash");

    const avatar=document.createElement("div");
    avatar.className="avatar student-avatar css-person person-"+student.id;
    avatar.setAttribute("aria-hidden","true");
    avatar.append(document.createElement("i"),Object.assign(document.createElement("span"),{className:"eye left"}),Object.assign(document.createElement("span"),{className:"eye right"}));
    avatar.querySelector(".left").appendChild(Object.assign(document.createElement("b"),{className:"pupil"}));
    avatar.querySelector(".right").appendChild(Object.assign(document.createElement("b"),{className:"pupil"}));

    const info=document.createElement("div");
    info.className="student-info";

    const name=document.createElement("strong");
    name.textContent=student.name;

    const status=document.createElement("span");
    status.textContent="Maslahat kutmoqda";

    info.append(name,status);

    const check=document.createElement("span");
    check.className="student-check";
    check.textContent="✓";
    check.setAttribute("aria-hidden","true");

    card.append(avatar,info,check);

    card.addEventListener("click",()=>{
      document.querySelectorAll(".student-card").forEach(x=>x.classList.remove("selected"));
      card.classList.add("selected");
      state.currentStudent=student;

      const startBtn=$("start-btn");
      if(startBtn){
        startBtn.disabled=false;
        startBtn.textContent=student.name+" bilan maslahatni boshlash →";
        startBtn.classList.add("ready");
      }
    });

    fragment.appendChild(card);
  });

  list.appendChild(fragment);
}

function setGaze(x=0,y=0){
  document.querySelectorAll(".css-person").forEach(el=>{
    el.style.setProperty("--gaze-x",Math.max(-2,Math.min(2,x))+"px");
    el.style.setProperty("--gaze-y",Math.max(-1.5,Math.min(1.5,y))+"px");
  });
}

function setTeenMood(text){
  $("mood").textContent=text;
  const avatar=$("teen-avatar");
  let face="smile";
  if(text.includes("javob bermoqda") || text.includes("kutmoqda")) face="thinking";
  if(text.includes("tinglayapti")) face="smile";
  if(text.includes("Sizni kutyapti")) face="thinking";
  avatar.className="avatar teen-avatar css-person person-"+state.currentStudent.id+" "+face;
}

function startGame(){
  if(!state.currentStudent) return;
  resetState();
  $("teen-name").textContent=state.currentStudent.name;
  $("teen-meta").textContent="Suhbatdagi o‘quvchi";
  setTeenMood("Sizni kutyapti…");
  showScreen("screen-game");
  renderEvidencePanel();
  renderStudentGreeting();
}

/*
  O‘yin 5 bosqichli diagnostik suhbat sifatida ishlaydi.
  Maqsad — bir xil 4 savolni aylantirish emas, 5 savolda turli
  dalil bloklarini tekshirish. Har bosqich oldingi suhbat tarixini
  hisobga oladi va hali tekshirilmagan yo‘nalishlarni ustun qo‘yadi.
*/
const STAGE_TARGETS=[
  ["interest","subject","problem","selfknowledge"],
  ["technology","technical","practical","independence","persistence"],
  ["communication","teamwork","organization","design","environment","creativity"],
  ["error_salary","error_peer","error_parent","information","motivation"],
  ["career","subject","problem","technology","practical","information","motivation"]
];

function candidateScore(q){
  let score=q.weight||5;
  const evidence=questionEvidence(q);

  // Bir savol bir nechta yangi dalil bersa, uning diagnostik qiymati yuqori.
  const newEvidenceCount=evidence.filter(e=>!state.evidence.has(e)).length;
  score += newEvidenceCount*12;
  score += evidence.length>=4 ? 8 : 0;

  // Hali so‘ralmagan xatolik/self-knowledge savollari metodik maqsad uchun muhim.
  if(["error_salary","error_peer","error_parent","selfknowledge","information"].includes(q.category)
     && !state.asked.includes(q.id)) score+=8;

  // Bir xil kategoriya ketma-ket takrorlanmasin.
  const last=state.history[state.history.length-1];
  if(last && last.q && last.q.category===q.category) score-=30;

  // Oldingi savol bilan bog‘liq mantiqiy davomiylik.
  if(last){
    const pair=[
      ["interest","subject"],["subject","problem"],["technology","technical"],
      ["technical","practical"],["communication","teamwork"],
      ["teamwork","organization"],["selfknowledge","information"],
      ["information","motivation"],["career","motivation"]
    ];
    if(pair.some(([a,b])=>(a===last.q.category&&b===q.category)||(b===last.q.category&&a===q.category))){
      score+=12;
    }
  }
  return score;
}

function chooseAvailableQuestions(){
  const poolIds=STUDENT_QUESTION_POOLS[state.currentStudent.id]||QUESTIONS.map(q=>q.id);
  const unused=QUESTIONS.filter(q=>poolIds.includes(q.id)&&!state.asked.includes(q.id));
  const targets=STAGE_TARGETS[Math.min(state.step,STAGE_TARGETS.length-1)];
  let pool=unused.filter(q=>targets.includes(q.category));
  if(pool.length<6) pool=[...new Map([...pool,...unused].map(q=>[q.id,q])).values()];
  const ranked=shuffle(pool).sort((a,b)=>candidateScore(b)-candidateScore(a));
  const result=[], categories=new Set();
  for(const q of ranked){
    if(result.length>=6) break;
    if(!categories.has(q.category)){result.push(q);categories.add(q.category);}
  }
  for(const q of ranked){
    if(result.length>=6) break;
    if(!result.some(x=>x.id===q.id)) result.push(q);
  }
  return shuffle(result);
}

function renderStudentGreeting(){
  $("question-counter").textContent="Suhbat";
  $("progress-bar").style.width="0%";
  const label=document.querySelector(".question-label");
  if(label) label.textContent="O‘QUVCHI MUROJAATI";
  $("question-text").textContent=state.currentStudent.name+" sizga murojaat qildi";
  $("answers").innerHTML="";
  const bubble=document.createElement("div");
  bubble.className="student-speech";
  bubble.innerHTML="<div class='speech-avatar'>"+state.currentStudent.name+"</div><p>“"+STUDENT_INTROS[state.currentStudent.id]+"</p>";
  $("answers").appendChild(bubble);
  const btn=document.createElement("button");
  btn.className="primary-btn conversation-start";
  btn.textContent="Tingladim, savol berishni boshlayman →";
  btn.onclick=()=>{ setTeenMood("Savolingizni kutyapti"); renderQuestionChoices(); };
  $("answers").appendChild(btn);
  setTeenMood("Sizni kutyapti…");
}

function renderQuestionChoices(){
  state.available=chooseAvailableQuestions();

  $("question-counter").textContent=(state.step+1)+" / 5";
  $("progress-bar").style.width=((state.step+1)*20)+"%";

  const label=document.querySelector(".question-label");
  if(label) label.textContent="SAVOL TANLANG";

  $("question-text").textContent=state.currentStudent.name+"ga qaysi savolni berasiz?";
  $("answers").innerHTML="";

  state.available.forEach((q,i)=>{
    const b=document.createElement("button");
    b.className="answer-btn";
    b.innerHTML="<strong>"+(i+1)+".</strong> "+q.text;
    b.onclick=()=>askQuestion(q);
    $("answers").appendChild(b);
  });

  $("mood").textContent="Dalil yig‘ish uchun savol tanlang";
  renderEvidencePanel();
  startTimer();
}

function askQuestion(q){
  stopTimer();
  state.asked.push(q.id);

  // Savol, aynan shu savolga berilgan javob va undan chiqqan dalil bitta dialog yozuviga bog‘lanadi.
  const answer=getStudentAnswer(state.currentStudent,q);
  const answerSignals=recordAnswerEvidence(q,answer);
  const record={q,answer,signals:answerSignals,answered:true};
  state.history.push(record);
  addDialogueGraphRecord(q,answer,answerSignals,true);

  $("answers").innerHTML="";
  renderEvidencePanel();
  $("question-text").textContent=q.text;
  $("mood").textContent=state.currentStudent.name+" javob bermoqda…";

  setTimeout(()=>{
    stopAndReact(q);
    setTeenMood("Javob berdi");

    const response=document.createElement("div");
    response.className="teen-response";
    response.innerHTML="<span>"+state.currentStudent.name+":</span><p>“"+answer+"”</p>"+(q.category.includes("error")?"<span class='reaction-chip'>Bu savol muhim qaror sababini ochishi mumkin.</span>":"");
    $("answers").appendChild(response);

    const clue=document.createElement("div");
    clue.className="evidence-note hidden-diagnostic";
    clue.innerHTML="🔎 <b>Javobdan olingan dalillar:</b> "+(answerSignals.length?answerSignals.map(e=>CATEGORY_LABEL[e]||e).join(", "):"aniq dalil aniqlanmadi");
    $("answers").appendChild(clue);

    const next=document.createElement("button");
    next.className="primary-btn";
    next.style.marginTop="18px";
    next.textContent=state.step===4 ? "Yakuniy tavsiyaga o‘tish →" : "Keyingi savollarni tanlash →";
    next.onclick=()=>{
      state.step++;
      if(state.step>=5) showProfessionChoice();
      else renderQuestionChoices();
    };
    $("answers").appendChild(next);
    setTeenMood("Sizni diqqat bilan tinglayapti");
  },300);
}

function showProfessionChoice(){
  stopTimer();
  showScreen("screen-profession");
  const n=$("profession-student-name"); if(n) n.textContent=state.currentStudent.name;
  $("profession-list").innerHTML="";

  shuffle(PROFESSIONS).forEach(p=>{
    const b=document.createElement("button");
    b.className="profession-btn";
    b.innerHTML="<b>"+p.name+"</b><br><small>"+(CAREER_TYPES[p.type]?.name||"Kasb tipi")+" — dalillar asosida tekshirish</small>";
    b.onclick=()=>evaluate(p);
    $("profession-list").appendChild(b);
  });
}

function determineCareerType(student=state.currentStudent){
  const profile=student?.careerTypes||{};
  const entries=Object.entries(profile);
  if(!entries.length) return {id:null,name:"Aniqlanmagan",score:0};
  entries.sort((a,b)=>b[1]-a[1]);
  const [id,score]=entries[0];
  return {id,name:CAREER_TYPES[id]?.name||id,score};
}

const TYPE_SIGNALS={
  realistic:["technical","practical","technology"],
  investigative:["logic","problem","information"],
  artistic:["creativity","design","variety"],
  social:["communication","teamwork","medicine"],
  enterprising:["communication","organization","decision_awareness"],
  conventional:["organization","logic","information"]
};

function determineCareerType(){
  const scores=Object.entries(TYPE_SIGNALS).map(([id,signals])=>({id,score:signals.reduce((n,s)=>n+(state.evidence.has(s)?1:0),0)})).sort((a,b)=>b.score-a.score);
  const top=scores[0]||{id:null,score:0};
  return {id:top.id,name:CAREER_TYPES[top.id]?.name||"Aniqlanmagan",score:top.score};
}

function calculateCareerTypeFit(profession){
  const detected=determineCareerType();
  if(!detected.id) return 0;
  return detected.id===profession.type ? 100 : Math.max(0,100-detected.score*15);
}

function calculateProfessionFit(profession){
  const req=Object.keys(profession.requirements||{});
  const mapped={
    logic:"logic",problem:"problem",technology:"technology",independence:"independence",creativity:"creativity",
    communication:"communication",teamwork:"teamwork",organization:"organization",medicine:"medicine",practical:"practical",design:"design",technical:"technical",interest:"interest",motivation:"motivation"
  };
  if(!req.length) return 0;
  const matched=req.filter(k=>state.evidence.has(mapped[k]||k)).length;
  return Math.round(matched/req.length*100);
}

function calculateSystemRecommendation(){
  const negativeSignals=[...state.evidence].filter(x=>x.startsWith("low_")||x==="dependence");
  const candidates=PROFESSIONS.map(p=>{
    const req=Object.keys(p.requirements||{});
    const matched=p.evidence.filter(e=>state.evidence.has(e));
    const missing=p.evidence.filter(e=>!state.evidence.has(e));
    const supportingRecords=state.history.filter(rec=>(rec.signals||[]).some(s=>p.evidence.includes(s)));
    const contradictory=negativeSignals.filter(s=>{
      const base=s.replace(/^low_/,"");
      return p.evidence.includes(base) || Object.keys(p.requirements||{}).includes(base);
    });
    const evidenceScore=p.evidence.length ? matched.length/p.evidence.length*100 : 0;
    const requirementScore=req.length
      ? req.reduce((sum,k)=>{
          const positive=state.evidence.has(k);
          const negative=state.evidence.has("low_"+k)||state.evidence.has("dependence")&&k==="independence";
          return sum+(positive?1:0)-(negative?.6:0);
        },0)/req.length*100
      : 0;
    const type=CAREER_TYPES[p.type];
    const detected=determineCareerType();
    const typeScore=detected.id===p.type ? 100 : Math.max(0,100-Math.abs((detected.score||0)-2)*10);
    const supportScore=Math.min(100,supportingRecords.length/3*100);
    const contradictionPenalty=Math.min(30,contradictory.length*10);
    const score=Math.max(0,Math.round(
      evidenceScore*0.45+
      requirementScore*0.30+
      typeScore*0.15+
      supportScore*0.10-
      contradictionPenalty
    ));
    return {profession:p,score,matched,missing,supportingRecords,contradictory,type,evidenceScore,requirementScore};
  }).sort((a,b)=>b.score-a.score);
  return candidates[0]||null;
}

function evaluate(profession){
  state.selectedProfession=profession;

  const systemRecommendation=calculateSystemRecommendation();
  const professionFit=calculateProfessionFit(profession);
  const careerTypeFit=calculateCareerTypeFit(profession);
  const detectedType=determineCareerType();
  const required=profession.evidence||[];
  const matched=required.filter(x=>state.evidence.has(x));
  const missing=required.filter(x=>!state.evidence.has(x));
  const evidenceCoverage=Math.round(matched.length/Math.max(1,required.length)*100);

  const diagnosticQuality=Math.round(
    state.history.reduce((sum,rec)=>sum+((rec.signals||[]).length ? (rec.q.weight||5) : 0),0)/
    Math.max(1,state.history.length*10)*100
  );

  const errorCheck=state.errors.size>0 ? 100 : 0;
  const supported=Math.round(
    professionFit*0.30+
    careerTypeFit*0.15+
    evidenceCoverage*0.30+
    diagnosticQuality*0.15+
    errorCheck*0.10
  );

  let reaction="😔";
  let mood="Tavsiya yetarli dalil bilan asoslanmadi";

  if(evidenceCoverage>=70 && professionFit>=75 && supported>=75){
    reaction="🎉";
    mood=state.currentStudent.name+" tavsiyadan mamnun";
  }else if(evidenceCoverage>=40 && professionFit>=60){
    reaction="😮‍💨";
    mood=state.currentStudent.name+" hali ikkilanmoqda";
  }

  renderResult({
    professionFit,careerTypeFit,evidenceCoverage,diagnosticQuality,supported,
    matched,missing,errorCheck,detectedType,systemRecommendation
  });

  $("result-avatar").textContent=reaction;
  $("mood").textContent=mood;
}

function renderResult(r){
  showScreen("screen-result");

  const strong=r.evidenceCoverage>=70 && r.professionFit>=75 && r.supported>=75;
  const partial=r.evidenceCoverage>=40 && r.professionFit>=60;

  $("result-avatar").textContent=strong?"🎉":partial?"😮‍💨":"😔";
  $("result-title").textContent=strong
    ?"Asoslangan tavsiya!"
    :partial
      ?"Tavsiya qisman asoslangan"
      :"Tavsiya yetarli asoslanmagan";

  $("result-summary").textContent=
    "Siz "+state.selectedProfession.name+
    " kasbini "+state.currentStudent.name+"ga tavsiya qildingiz. Quyida sizning qaroringiz bilan birga saytning mustaqil dalil-tavsiyasi ham ko‘rsatiladi.";

  const sr=r.systemRecommendation;
  const srEl=$("system-recommendation");
  if(srEl && sr){
    const reliable=sr.score>=65 && sr.matched.length>=2 && sr.supportingRecords.length>=2;
    const recName=reliable ? sr.profession.name : "Hozircha aniq kasb tavsiya qilishga dalil yetarli emas";
    const supportQuestions=sr.supportingRecords.slice(0,3).map(rec=>"“"+rec.q.text+"”").join("<br>")||"Aniq asoslovchi javob yetarli emas";
    const matchedText=sr.matched.map(x=>CATEGORY_LABEL[x]||x).join(", ")||"hali yetarli dalil yo‘q";
    const missingText=sr.missing.map(x=>CATEGORY_LABEL[x]||x).join(", ")||"asosiy dalillar qamrab olingan";
    const contradictionText=sr.contradictory.map(x=>CATEGORY_LABEL[x]||x.replace(/^low_/,'')).join(", ");
    srEl.innerHTML=
      "<div class='system-rec-head'><span>🤖</span><div><b>Saytning mustaqil tavsiyasi</b><strong>"+recName+"</strong></div><em>"+sr.score+"/100 dalil mosligi</em></div>"+
      "<p class='system-rec-type'>"+(reliable ? "Aniqlangan yo‘nalish: <b>"+(CAREER_TYPES[sr.profession.type]?.name||sr.profession.type)+"</b>" : "Tizim xulosasi: qo‘shimcha suhbat kerak")+"</p>"+
      "<div class='system-rec-grid'>"+
        "<div><b>Asosiy dalillar</b><span>"+matchedText+"</span></div>"+
        "<div><b>Tavsiyaga asos bo‘lgan javoblar</b><span>"+supportQuestions+"</span></div>"+
        "<div><b>Hali tekshirilmagan jihatlar</b><span>"+missingText+"</span></div>"+
        (contradictionText?"<div><b>Qarama-qarshi signal</b><span>"+contradictionText+"</span></div>":"")+
      "</div>"+
      "<p class='system-rec-note'>Tavsiya yashirin profil yoki oldindan berilgan kasbga emas, shu suhbatda o‘quvchining javoblaridan yig‘ilgan dalillarga tayangan.</p>";
  }

  $("score-grid").innerHTML=[
    ["Aniqlangan kasb tipi",r.detectedType.name],
    ["Tip mosligi",r.careerTypeFit+"%"],
    ["Kasb mosligi",r.professionFit+"%"],
    ["Savollar sifati",r.diagnosticQuality+"%"],
    ["Dalil qamrovi",r.evidenceCoverage+"%"]
  ].map(x=>"<div class='score'><b>"+x[1]+"</b><span>"+x[0]+"</span></div>").join("");

  const useful=state.history.filter(rec=>(rec.signals||[]).some(e=>state.selectedProfession.evidence?.includes(e)));
  const weak=state.history.filter(rec=>!(rec.signals||[]).some(e=>state.selectedProfession.evidence?.includes(e)));

  $("useful-questions").innerHTML=useful.length
    ?useful.map(rec=>"<li><b>"+rec.q.id.toUpperCase()+"</b> — "+rec.q.text+"<br><small>Javob: "+rec.answer+"</small></li>").join("")
    :"<li>Tanlangan kasbga bevosita dalil bergan savol kam.</li>";

  $("weak-points").innerHTML=r.missing.length
    ?"<li><b>Yetishmagan dalillar:</b> "+r.missing.map(x=>CATEGORY_LABEL[x]||x).join(", ")+"</li>"
     +(weak.length?weak.map(rec=>"<li><b>"+rec.q.id.toUpperCase()+"</b> — "+rec.q.text+" (javobdan tanlangan kasb uchun yetarli dalil chiqmagan)</li>").join(""):"")
    :"<li>Tanlangan kasb uchun asosiy dalillar yig‘ildi.</li>";

  let lesson;
  if(r.errorCheck===0){
    lesson="Siz 5 savolda kasbga moslikni tekshirish bilan birga qaror xatolarini ham aniqlashingiz kerak edi. Faqat qiziqish yoki qobiliyatni aniqlashning o‘zi yetarli emas.";
  }else if(r.evidenceCoverage<40){
    lesson="Asosiy metodik xato — yakuniy tavsiyaga yetarli dalil yig‘masdan o‘tish. Kasb tanlashda qiziqish, qobiliyat, ish uslubi, kasb talablari va qaror sabablarini birgalikda tekshirish zarur.";
  }else if(r.evidenceCoverage<70){
    lesson="Dalillar qisman yig‘ildi. Tipik xato — bitta-ikkita belgiga tayanib xulosa chiqarish. Maslahatchi qarorni bir nechta mustaqil ko‘rsatkich bilan asoslaydi.";
  }else{
    lesson="Metodik jihatdan muhim qoida: kasb tavsiyasi faqat 'yoqadi' degan javobga emas, qobiliyat, ish uslubi, kasb talablari, o‘zini anglash va qaror sabablariga oid dalillarga tayanishi kerak.";
  }

  $("methodology").textContent=lesson;
  renderDialogueGraph();
}

$("start-btn").addEventListener("click",startGame);
$("restart-btn").addEventListener("click",()=>{
  stopTimer();
  showScreen("screen-start");
  renderStudents();
});

document.addEventListener("pointermove",e=>{
  const x=(e.clientX/window.innerWidth-.5)*4;
  const y=(e.clientY/window.innerHeight-.5)*3;
  setGaze(x,y);
});
document.addEventListener("pointerdown",e=>{
  const x=(e.clientX/window.innerWidth-.5)*5;
  const y=(e.clientY/window.innerHeight-.5)*4;
  setGaze(x,y);
  setTimeout(()=>setGaze(0,0),900);
});
renderStudents();
