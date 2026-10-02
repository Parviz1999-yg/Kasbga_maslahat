const state={questionCount:0,asked:[],answers:[],categories:[],score:0,selectedProfession:null};

const $=id=>document.getElementById(id);
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}

function startGame(){
  state.questionCount=0;state.asked=[];state.answers=[];state.categories=[];state.score=0;state.selectedProfession=null;
  $("mood").textContent="Suhbatga tayyor";
  showScreen("screen-game");renderQuestion();
}

function chooseQuestion(){
  const unused=QUESTIONS.filter(q=>!state.asked.includes(q.id));
  if(!unused.length)return QUESTIONS[0];
  const uncovered=unused.filter(q=>!state.categories.includes(q.category));
  const pool=uncovered.length?uncovered:unused;
  return [...pool].sort((a,b)=>b.weight-a.weight)[0];
}

function renderQuestion(){
  const q=chooseQuestion();state.currentQuestion=q;state.asked.push(q.id);
  $("question-counter").textContent=(state.questionCount+1)+" / 5";
  $("progress-bar").style.width=((state.questionCount+1)*20)+"%";
  $("question-text").textContent=q.text;
  $("answers").innerHTML="";
  shuffle(q.answers).forEach(answer=>{
    const b=document.createElement("button");b.className="answer-btn";b.textContent=answer;
    b.onclick=()=>answerQuestion(answer);$("answers").appendChild(b);
  });
}

function answerQuestion(answer){
  const q=state.currentQuestion;
  state.answers.push({questionId:q.id,answer,category:q.category,weight:q.weight});
  state.categories.push(q.category);state.score+=q.weight;
  $("mood").textContent="Javobingiz qayd etildi";
  state.questionCount++;
  if(state.questionCount>=5){setTimeout(showProfessionChoice,250)}else{setTimeout(renderQuestion,250)}
}

function showProfessionChoice(){
  showScreen("screen-profession");
  $("profession-list").innerHTML="";
  shuffle(PROFESSIONS).forEach(p=>{
    const b=document.createElement("button");b.className="profession-btn";b.innerHTML="<b>"+p.name+"</b><br><small>Azizbek uchun yakuniy tavsiya</small>";
    b.onclick=()=>evaluate(p);$("profession-list").appendChild(b);
  });
}

function evaluate(profession){
  state.selectedProfession=profession;
  const profile=TEEN.profile;
  let fit=0,total=0;
  Object.entries(profession.requirements).forEach(([key,need])=>{const actual=profile[key]??50;fit+=Math.max(0,100-Math.abs(actual-need));total+=100});
  const professionFit=Math.round(fit/total*100);

  const useful=state.answers.filter(a=>a.answer===TEEN.answers[a.questionId]).sort((a,b)=>b.weight-a.weight);
  const evidenceQuality=Math.min(100,Math.round(useful.reduce((s,a)=>s+a.weight,0)/state.answers.reduce((s,a)=>s+a.weight,0)*100));
  const categoryCoverage=Math.min(100,state.categories.length/5*100);
  const questionQuality=Math.round((evidenceQuality+categoryCoverage)/2);
  const supported=Math.min(professionFit,evidenceQuality);
  let reaction="😔",title="Tavsiya qayta ko‘rib chiqilishi kerak",mood="Xafa bo‘ldi";
  if(professionFit>=80&&evidenceQuality>=65){reaction="🎉";title="Asoslangan tavsiya!";mood="Xursand bo‘ldi"}
  else if(professionFit>=65&&evidenceQuality>=45){reaction="😮‍💨";title="Qisman asoslangan tavsiya";mood="Biroz hafsalasi pir bo‘ldi"}
  $("teen-avatar").textContent=reaction;$("mood").textContent=mood;
  renderResult({professionFit,evidenceQuality,questionQuality,supported,useful});
}

function renderResult(r){
  showScreen("screen-result");
  $("result-avatar").textContent=r.supported>=80?"🎉":r.supported>=55?"😮‍💨":"😔";
  $("result-title").textContent=r.supported>=80?"Asoslangan tavsiya!":r.supported>=55?"Qisman asoslangan tavsiya":"Tavsiya qayta ko‘rib chiqilishi kerak";
  $("result-summary").textContent="Tanlangan kasb: "+state.selectedProfession.name+". Natija kasbning profilga mosligi va suhbat davomida to‘plangan dalillar alohida hisobga olinib baholandi.";
  $("score-grid").innerHTML=[
    ["Kasb mosligi",r.professionFit+"%"],["Savol sifati",r.questionQuality+"%"],["Dalillar",r.evidenceQuality+"%"]
  ].map(x=>"<div class='score'><b>"+x[1]+"</b><span>"+x[0]+"</span></div>").join("");
  $("useful-questions").innerHTML=r.useful.length?r.useful.slice(0,4).map(a=>"<li>"+a.questionId+" — foydali dalil berdi</li>").join(""):"<li>Yetarli diagnostik dalil yig‘ilmadi.</li>";
  const weak=state.answers.filter(a=>a.answer!==TEEN.answers[a.questionId]);
  $("weak-points").innerHTML=weak.length?weak.slice(0,4).map(a=>"<li>"+a.questionId+" — Azizbek profilini ochishda kuchsiz bo‘ldi</li>").join(""):"<li>Asosiy savollar javoblar bilan yaxshi mos tushdi.</li>";
  $("methodology").textContent=r.evidenceQuality<60?"Kasb tanlashda faqat taxmin yoki bitta belgiga tayanish yetarli emas. Qiziqish, qobiliyat, faoliyat uslubi va real kasb talablari bo‘yicha yetarli dalil yig‘ish kerak.":r.questionQuality<70?"Savollar foydali bo‘ldi, ammo ayrim muhim ko‘rsatkichlar yetarlicha tekshirilmadi. Kasbiy maslahatda savolning diagnostik qiymati muhim.":"Kasbiy maslahatda to‘g‘ri kasbni topishning o‘zi yetarli emas: tavsiya kuzatilgan qiziqish, qobiliyat va xulqiy ko‘rsatkichlar bilan asoslanishi kerak.";
}

$("start-btn").addEventListener("click",startGame);
$("restart-btn").addEventListener("click",()=>showScreen("screen-start"));