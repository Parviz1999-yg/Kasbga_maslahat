const state={
  step:0,
  asked:[],
  history:[],
  available:[],
  selectedProfession:null,
  currentStudent:null,
  evidence:new Set(),
  errors:new Set()
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
  return q.evidence || CATEGORY_EVIDENCE[q.category] || [q.category];
}

function resetState(){
  state.step=0;
  state.asked=[];
  state.history=[];
  state.available=[];
  state.selectedProfession=null;
  state.evidence=new Set();
  state.errors=new Set();
}

function renderStudents(){
  const list=$("student-list");
  if(!list) return;
  list.innerHTML="";
  STUDENTS.forEach(student=>{
    const card=document.createElement("button");
    card.className="student-card";
    card.innerHTML=
      '<div class="avatar student-avatar css-person person-'+student.id+'"><i></i></div>'+
      '<div class="student-info"><strong>'+student.name+'</strong><span>Maslahat kutmoqda</span></div>'+
      '<span class="student-check">✓</span>';
    card.onclick=()=>{
      document.querySelectorAll(".student-card").forEach(x=>x.classList.remove("selected"));
      card.classList.add("selected");
      state.currentStudent=student;
      $("start-btn").disabled=false;
      $("start-btn").textContent=student.name+" bilan maslahatni boshlash →";
      $("start-btn").classList.add("ready");
    };
    list.appendChild(card);
  });
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
  avatar.className="avatar teen-avatar css-person person-"+state.currentStudent.id;
}

function startGame(){
  if(!state.currentStudent) return;
  resetState();
  $("teen-name").textContent=state.currentStudent.name;
  $("teen-meta").textContent="Suhbatdagi o‘quvchi";
  setTeenMood("Sizni kutyapti…");
  showScreen("screen-game");
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

  // Yangi dalil beradigan savol doim ustun.
  score += evidence.some(e=>!state.evidence.has(e)) ? 35 : 0;

  // Hali so‘ralmagan xatolik/self-knowledge savollari metodik maqsad uchun muhim.
  if(["error_salary","error_peer","error_parent","selfknowledge","information"].includes(q.category)
     && !state.asked.includes(q.id)) score+=8;

  // Bir xil kategoriya ketma-ket takrorlanmasin.
  const last=state.history[state.history.length-1];
  if(last && last.category===q.category) score-=30;

  // Oldingi savol bilan bog‘liq mantiqiy davomiylik.
  if(last){
    const pair=[
      ["interest","subject"],["subject","problem"],["technology","technical"],
      ["technical","practical"],["communication","teamwork"],
      ["teamwork","organization"],["selfknowledge","information"],
      ["information","motivation"],["career","motivation"]
    ];
    if(pair.some(([a,b])=>(a===last.category&&b===q.category)||(b===last.category&&a===q.category))){
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
}

function askQuestion(q){
  state.asked.push(q.id);
  state.history.push(q);

  questionEvidence(q).forEach(e=>state.evidence.add(e));

  if(["error_salary","error_peer","error_parent"].includes(q.category)){
    state.errors.add(q.category);
  }

  $("answers").innerHTML="";
  $("question-text").textContent=q.text;
  $("mood").textContent=state.currentStudent.name+" javob bermoqda…";

  setTimeout(()=>{
    setTeenMood("Javob berdi");

    const response=document.createElement("div");
    response.className="teen-response";
    response.innerHTML="<span>"+state.currentStudent.name+":</span><p>“"+getStudentAnswer(state.currentStudent,q)+"”</p>";
    $("answers").appendChild(response);

    const clue=document.createElement("div");
    clue.className="evidence-note hidden-diagnostic";
    clue.innerHTML="🔎 <b>Bu savol tekshirgan dalil:</b> "+questionEvidence(q).map(e=>CATEGORY_LABEL[e]||e).join(", ");
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
  showScreen("screen-profession");
  const n=$("profession-student-name"); if(n) n.textContent=state.currentStudent.name;
  $("profession-list").innerHTML="";

  shuffle(PROFESSIONS).forEach(p=>{
    const b=document.createElement("button");
    b.className="profession-btn";
    b.innerHTML="<b>"+p.name+"</b><br><small>Yig‘ilgan dalillar asosida tavsiya qilish</small>";
    b.onclick=()=>evaluate(p);
    $("profession-list").appendChild(b);
  });
}

function calculateProfessionFit(profession){
  const profile=state.currentStudent.profile;
  let fit=0,total=0;
  Object.entries(profession.requirements).forEach(([key,need])=>{
    const actual=profile[key] ?? 50;
    fit+=Math.max(0,100-Math.abs(actual-need));
    total+=100;
  });
  return Math.round((fit/Math.max(1,total))*100);
}

function evaluate(profession){
  state.selectedProfession=profession;

  const professionFit=calculateProfessionFit(profession);
  const required=profession.evidence||[];
  const matched=required.filter(x=>state.evidence.has(x));
  const missing=required.filter(x=>!state.evidence.has(x));
  const evidenceCoverage=Math.round(matched.length/Math.max(1,required.length)*100);

  const diagnosticQuality=Math.round(
    state.history.reduce((sum,q)=>sum+(q.weight||5),0)/
    Math.max(1,state.history.length*10)*100
  );

  const errorCheck=state.errors.size>0 ? 100 : 0;
  const supported=Math.round(
    professionFit*0.35+
    evidenceCoverage*0.40+
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
    professionFit,evidenceCoverage,diagnosticQuality,supported,
    matched,missing,errorCheck
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
    " kasbini "+state.currentStudent.name+"ga tavsiya qildingiz. Natija faqat kasb mosligiga emas, balki 5 ta savolda qanday dalil yig‘ilganiga ham bog‘liq.";

  $("score-grid").innerHTML=[
    ["Kasb mosligi",r.professionFit+"%"],
    ["Savollar sifati",r.diagnosticQuality+"%"],
    ["Dalil qamrovi",r.evidenceCoverage+"%"]
  ].map(x=>"<div class='score'><b>"+x[1]+"</b><span>"+x[0]+"</span></div>").join("");

  const useful=state.history.filter(q=>questionEvidence(q).some(e=>state.selectedProfession.evidence?.includes(e)));
  const weak=state.history.filter(q=>!questionEvidence(q).some(e=>state.selectedProfession.evidence?.includes(e)));

  $("useful-questions").innerHTML=useful.length
    ?useful.map(q=>"<li><b>"+q.id.toUpperCase()+"</b> — "+q.text+"</li>").join("")
    :"<li>Tanlangan kasbga bevosita dalil bergan savol kam.</li>";

  $("weak-points").innerHTML=r.missing.length
    ?"<li><b>Yetishmagan dalillar:</b> "+r.missing.map(x=>CATEGORY_LABEL[x]||x).join(", ")+"</li>"
     +(weak.length?weak.map(q=>"<li><b>"+q.id.toUpperCase()+"</b> — "+q.text+" (tanlangan kasb uchun qiymati past)</li>").join(""):"")
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
}

$("start-btn").addEventListener("click",startGame);
$("restart-btn").addEventListener("click",()=>{
  showScreen("screen-start");
  renderStudents();

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
});
renderStudents();
