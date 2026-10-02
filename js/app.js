const state={step:0,asked:[],history:[],available:[],selectedProfession:null};

const $=id=>document.getElementById(id);
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}

function startGame(){
  state.step=0;state.asked=[];state.history=[];state.available=[];state.selectedProfession=null;
  $("mood").textContent="Suhbatga tayyor";$("teen-avatar").textContent="👨‍🎓";
  showScreen("screen-game");renderQuestionChoices();
}

function chooseAvailableQuestions(){
  const unused=QUESTIONS.filter(q=>!state.asked.includes(q.id));
  if(state.step===0)return shuffle(unused).sort((a,b)=>b.weight-a.weight).slice(0,4);
  const covered=new Set(state.history.flatMap(q=>[q.category]));
  const follow=unused.filter(q=>!covered.has(q.category));
  const pool=follow.length?follow:unused;
  return shuffle(pool).sort((a,b)=>b.weight-a.weight).slice(0,4);
}

function renderQuestionChoices(){
  state.available=chooseAvailableQuestions();
  $("question-counter").textContent=(state.step+1)+" / 5";
  $("progress-bar").style.width=((state.step+1)*20)+"%";
  const label=document.querySelector(".question-label");if(label)label.textContent="SAVOL TANLANG";
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
  state.asked.push(q.id);state.history.push(q);
  $("answers").innerHTML="";
  $("question-text").textContent=q.text;
  $("mood").textContent="Azizbek javob bermoqda…";
  setTimeout(()=>{
    $("teen-avatar").textContent="🗣️";
    const response=document.createElement("div");
    response.className="teen-response";
    response.innerHTML="<span>Azizbek:</span><p>“"+TEEN.answers[q.id]+"”</p>";
    $("answers").appendChild(response);
    const next=document.createElement("button");
    next.className="primary-btn";next.style.marginTop="18px";
    next.textContent=state.step===4?"Yakuniy tavsiyaga o‘tish →":"Keyingi savollarni ko‘rish →";
    next.onclick=()=>{state.step++;state.step>=5?showProfessionChoice():renderQuestionChoices()};
    $("answers").appendChild(next);
    $("mood").textContent="Javob berildi";
  },300);
}

function showProfessionChoice(){
  showScreen("screen-profession");$("profession-list").innerHTML="";
  const intro=$("profession-intro");if(intro)intro.textContent="5 ta savoldan so‘ng yig‘ilgan dalillarga asoslanib Azizbekka kasb tavsiya qiling.";
  shuffle(PROFESSIONS).forEach(p=>{
    const b=document.createElement("button");b.className="profession-btn";
    b.innerHTML="<b>"+p.name+"</b><br><small>Yakuniy tavsiya sifatida tanlash</small>";
    b.onclick=()=>evaluate(p);$("profession-list").appendChild(b);
  });
}

function evaluate(profession){
  state.selectedProfession=profession;
  const profile=TEEN.profile;let fit=0,total=0;
  Object.entries(profession.requirements).forEach(([key,need])=>{const actual=profile[key]??50;fit+=Math.max(0,100-Math.abs(actual-need));total+=100});
  const professionFit=Math.round(fit/total*100);

  const gathered=state.history.map(q=>q.category);
  const required=profession.requirements?Object.keys(profession.requirements):[];
  const evidenceCoverage=Math.round(required.filter(x=>gathered.includes(x)).length/Math.max(1,required.length)*100);
  const diagnosticQuality=Math.round(state.history.reduce((s,q)=>s+q.weight,0)/(state.history.length*10)*100);
  const supported=Math.round(professionFit*.45+evidenceCoverage*.35+diagnosticQuality*.20);

  let reaction="😔",mood="Xafa bo‘ldi";
  if(supported>=80&&evidenceCoverage>=60){reaction="🎉";mood="Xursand bo‘ldi"}
  else if(supported>=55){reaction="😮‍💨";mood="Biroz hafsalasi pir bo‘ldi"}
  $("teen-avatar").textContent=reaction;$("mood").textContent=mood;
  renderResult({professionFit,evidenceCoverage,diagnosticQuality,supported,gathered});
}

function renderResult(r){
  showScreen("screen-result");
  $("result-avatar").textContent=r.supported>=80&&r.evidenceCoverage>=60?"🎉":r.supported>=55?"😮‍💨":"😔";
  $("result-title").textContent=r.supported>=80&&r.evidenceCoverage>=60?"Asoslangan tavsiya!":r.supported>=55?"Tavsiya qisman asoslangan":"Tavsiya yetarli asoslanmagan";
  $("result-summary").textContent="Siz "+state.selectedProfession.name+" kasbini tavsiya qildingiz. Natija kasb mosligi bilan birga siz tanlagan 5 ta savolning qamrovi va diagnostik qiymati asosida baholandi.";
  $("score-grid").innerHTML=[["Kasb mosligi",r.professionFit+"%"],["Savollar sifati",r.diagnosticQuality+"%"],["Dalil qamrovi",r.evidenceCoverage+"%"]].map(x=>"<div class='score'><b>"+x[1]+"</b><span>"+x[0]+"</span></div>").join("");
  $("useful-questions").innerHTML=state.history.map(q=>"<li><b>"+q.id.toUpperCase()+"</b> — "+q.text+"</li>").join("");
  const required=state.selectedProfession.evidence||[];const missing=required.filter(x=>!r.gathered.includes(x));
  $("weak-points").innerHTML=missing.length?missing.map(x=>"<li>"+x+" bo‘yicha yetarli savol berilmadi.</li>").join(""):"<li>Tanlangan kasb uchun asosiy ko‘rsatkichlar bo‘yicha savollar berildi.</li>";
  $("methodology").textContent=r.evidenceCoverage<50?"Asosiy xato: kasb tavsiyasi uchun yetarli dalil yig‘ilmagan. 5 ta savolni maqsadli tanlash kerak.":r.diagnosticQuality<75?"Savollar foydali, ammo ularning diagnostik qiymatini hisobga olish kerak. Har bir savol kasbiy qaror uchun yangi va muhim ma’lumot berishi lozim.":"Siz savollarni maqsadli tanlab, kasbiy tavsiya uchun yetarli dalil yig‘ishga harakat qildingiz.";
}

$("start-btn").addEventListener("click",startGame);
$("restart-btn").addEventListener("click",()=>showScreen("screen-start"));