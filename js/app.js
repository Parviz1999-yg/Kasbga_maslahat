const state={
  step:0,
  asked:[],
  history:[],
  available:[],
  selectedProfession:null,
  covered:new Set()
};

const $=id=>document.getElementById(id);

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $(id).classList.add("active");
}

function shuffle(items){
  return [...items].sort(()=>Math.random()-0.5);
}

/*
  Har bir savol qaysi dalilni ochishini belgilaymiz.
  Bu yerda category — savol turi, evidence — kasbga oid dalil.
*/
const CATEGORY_EVIDENCE={
  interest:["interest"],
  subject:["logic","interest"],
  problem:["problem","logic"],
  technology:["technology"],
  career:["interest","technology","communication"],
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

function questionEvidence(q){
  return q.evidence || CATEGORY_EVIDENCE[q.category] || [q.category];
}

function startGame(){
  state.step=0;
  state.asked=[];
  state.history=[];
  state.available=[];
  state.selectedProfession=null;
  state.covered=new Set();

  $("mood").textContent="Suhbatga tayyor";
  $("teen-avatar").textContent="👨‍🎓";
  showScreen("screen-game");
  renderQuestionChoices();
}

/*
  Muhim qoida:
  - Savol qayta chiqmaydi.
  - Bir xil kategoriya ketma-ket takrorlanmaydi.
  - Oldin ochilmagan dalilni beradigan savollar ustuvor.
  - Har safar 4 ta turli yo'nalishdagi real savol ko'rsatiladi.
  - Tasodifiylik faqat variantlarning joylashuviga ta'sir qiladi.
*/
function chooseAvailableQuestions(){
  const unused=QUESTIONS.filter(q=>!state.asked.includes(q.id));
  const lastCategory=state.history.length
    ? state.history[state.history.length-1].category
    : null;

  const uncovered=unused.filter(q=>
    questionEvidence(q).some(e=>!state.covered.has(e))
  );

  let pool=uncovered.filter(q=>q.category!==lastCategory);

  if(pool.length<4){
    pool=unused.filter(q=>q.category!==lastCategory);
  }

  if(pool.length<4){
    pool=unused;
  }

  // Avval turli kategoriyalarni olish
  const result=[];
  const usedCategories=new Set();

  for(const q of shuffle(pool).sort((a,b)=>b.weight-a.weight)){
    if(result.length>=4) break;
    if(!usedCategories.has(q.category)){
      result.push(q);
      usedCategories.add(q.category);
    }
  }

  // Yetmasa, boshqa unused savollar bilan to'ldiramiz
  for(const q of shuffle(pool).sort((a,b)=>b.weight-a.weight)){
    if(result.length>=4) break;
    if(!result.some(x=>x.id===q.id)) result.push(q);
  }

  return shuffle(result);
}

function renderQuestionChoices(){
  state.available=chooseAvailableQuestions();

  $("question-counter").textContent=(state.step+1)+" / 5";
  $("progress-bar").style.width=((state.step+1)*20)+"%";

  const label=document.querySelector(".question-label");
  if(label) label.textContent="SAVOL TANLANG";

  $("question-text").textContent="Azizbekka qaysi savolni berasiz?";
  $("answers").innerHTML="";

  state.available.forEach((q,i)=>{
    const b=document.createElement("button");
    b.className="answer-btn";
    b.innerHTML="<strong>"+(i+1)+".</strong> "+q.text;
    b.onclick=()=>askQuestion(q);
    $("answers").appendChild(b);
  });

  $("mood").textContent="Savol tanlashingizni kutmoqda";
}

function askQuestion(q){
  state.asked.push(q.id);
  state.history.push(q);

  // Savol ochgan dalillarni darhol saqlaymiz
  questionEvidence(q).forEach(e=>state.covered.add(e));

  $("answers").innerHTML="";
  $("question-text").textContent=q.text;
  $("mood").textContent="Azizbek javob bermoqda…";

  setTimeout(()=>{
    $("teen-avatar").textContent="🗣️";

    const response=document.createElement("div");
    response.className="teen-response";
    response.innerHTML="<span>Azizbek:</span><p>“"+(TEEN.answers[q.id]||"Bu haqda hali aniq o‘ylab ko‘rmaganman.")+"”</p>";
    $("answers").appendChild(response);

    const next=document.createElement("button");
    next.className="primary-btn";
    next.style.marginTop="18px";
    next.textContent=state.step===4
      ?"Yakuniy tavsiyaga o‘tish →"
      :"Keyingi savollarni ko‘rish →";

    next.onclick=()=>{
      state.step++;
      if(state.step>=5) showProfessionChoice();
      else renderQuestionChoices();
    };

    $("answers").appendChild(next);
    $("mood").textContent="Javob berildi";
  },300);
}

function showProfessionChoice(){
  showScreen("screen-profession");
  $("profession-list").innerHTML="";

  shuffle(PROFESSIONS).forEach(p=>{
    const b=document.createElement("button");
    b.className="profession-btn";
    b.innerHTML="<b>"+p.name+"</b><br><small>Yakuniy tavsiya sifatida tanlash</small>";
    b.onclick=()=>evaluate(p);
    $("profession-list").appendChild(b);
  });
}

function calculateProfessionFit(profession){
  const profile=TEEN.profile;
  let fit=0;
  let total=0;

  Object.entries(profession.requirements).forEach(([key,need])=>{
    const actual=profile[key] ?? 50;
    const closeness=Math.max(0,100-Math.abs(actual-need));
    fit+=closeness;
    total+=100;
  });

  return Math.round((fit/Math.max(1,total))*100);
}

function evaluate(profession){
  state.selectedProfession=profession;

  const professionFit=calculateProfessionFit(profession);

  const gathered=[...state.covered];
  const required=profession.evidence||[];
  const matched=required.filter(x=>gathered.includes(x));
  const evidenceCoverage=Math.round(
    matched.length/Math.max(1,required.length)*100
  );

  const diagnosticQuality=Math.round(
    state.history.reduce((sum,q)=>sum+q.weight,0)/
    Math.max(1,state.history.length*10)*100
  );

  // Dalil yetarli bo'lmasa, kasb mosligi baland bo'lsa ham "asoslangan" deb chiqmaydi.
  const supported=Math.round(
    professionFit*0.40+
    evidenceCoverage*0.40+
    diagnosticQuality*0.20
  );

  let reaction="😔";
  let mood="Tavsiya yetarli asoslanmadi";

  if(evidenceCoverage>=70 && professionFit>=75 && supported>=75){
    reaction="🎉";
    mood="Azizbek xursand bo‘ldi";
  }else if(evidenceCoverage>=40 && professionFit>=60){
    reaction="😮‍💨";
    mood="Azizbek biroz ikkilanib qoldi";
  }

  $("teen-avatar").textContent=reaction;
  $("mood").textContent=mood;

  renderResult({
    professionFit,
    evidenceCoverage,
    diagnosticQuality,
    supported,
    gathered,
    matched
  });
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
    " kasbini tavsiya qildingiz. Tizim kasb mosligi, yig‘ilgan dalillar va savollarning diagnostik qiymatini alohida baholadi.";

  $("score-grid").innerHTML=[
    ["Kasb mosligi",r.professionFit+"%"],
    ["Savollar sifati",r.diagnosticQuality+"%"],
    ["Dalil qamrovi",r.evidenceCoverage+"%"]
  ].map(x=>
    "<div class='score'><b>"+x[1]+"</b><span>"+x[0]+"</span></div>"
  ).join("");

  $("useful-questions").innerHTML=state.history.map(q=>
    "<li><b>"+q.id.toUpperCase()+"</b> — "+q.text+"</li>"
  ).join("");

  const required=state.selectedProfession.evidence||[];
  const missing=required.filter(x=>!r.gathered.includes(x));

  $("weak-points").innerHTML=missing.length
    ?missing.map(x=>"<li>"+x+" bo‘yicha dalil yetishmadi.</li>").join("")
    :"<li>Tanlangan kasb uchun asosiy dalillar yig‘ildi.</li>";

  if(r.evidenceCoverage<40){
    $("methodology").textContent=
      "Asosiy metodik xato — kasb tanlashdan oldin yetarli dalil yig‘ilmadi. Savollarni faqat yoqimli yoki umumiy mavzular bo‘yicha emas, kasb talab qiladigan ko‘rsatkichlarni aniqlash uchun tanlash kerak.";
  }else if(r.evidenceCoverage<70){
    $("methodology").textContent=
      "Dalillar qisman yig‘ildi. Keyingi bosqichda qobiliyat, qiziqish, ish uslubi va kasb talablari o‘rtasidagi bog‘liqlikni tekshiradigan savollarni tanlash muhim.";
  }else if(r.diagnosticQuality<75){
    $("methodology").textContent=
      "Dalil qamrovi yaxshi, ammo ayrim savollar qaror uchun kamroq ma’lumot berdi. Maslahatchi har bir savolning diagnostik qiymatini oldindan o‘ylashi kerak.";
  }else{
    $("methodology").textContent=
      "Siz savollarni maqsadli tanlab, bir nechta muhim ko‘rsatkichlar bo‘yicha dalil yig‘dingiz. Bu kasb tanlashdagi shoshma-shosharlik va faqat bitta belgiga tayanish xatosini kamaytiradi.";
  }
}

$("start-btn").addEventListener("click",startGame);
$("restart-btn").addEventListener("click",()=>showScreen("screen-start"));
