const state={selectedStudentId:null,asked:new Set(),signals:[]};
const $=id=>document.getElementById(id);
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id)?.classList.add("active");}
function getStudent(){return STUDENTS.find(s=>s.id===state.selectedStudentId);}
function renderStudentList(){
  const list=$("student-list"); if(!list)return;
  list.innerHTML=STUDENTS.map(s=>`<button class="student-option" data-student-id="${s.id}">
    <div class="avatar css-person ${s.avatarClass}"><i></i><span class="eye left"><b class="pupil"></b></span><span class="eye right"><b class="pupil"></b></span></div>
    <span><strong>${s.name}</strong><small>${s.className} · ${s.age} yosh</small></span>
  </button>`).join("");
  list.querySelectorAll(".student-option").forEach(b=>b.addEventListener("click",()=>selectStudent(b.dataset.studentId)));
}
function selectStudent(id){
  state.selectedStudentId=id;
  document.querySelectorAll(".student-option").forEach(b=>b.classList.toggle("selected",b.dataset.studentId===id));
  const s=getStudent(); $("start-btn").disabled=false; $("start-btn").textContent="Suhbatni boshlash →"; $("start-btn").onclick=startConversation;
  if(s)$("start-intro").textContent=s.intro;
}
function startConversation(){
  if(!state.selectedStudentId)return;
  state.asked=new Set(); state.signals=[];
  const s=getStudent();
  $("teen-name").textContent=s.name; $("teen-meta").textContent=`${s.className} · ${s.age} yosh`;
  $("teen-avatar").className=`avatar teen-avatar css-person ${s.avatarClass}`;
  $("stage-title").textContent=STAGE_1.title; $("stage-description").textContent=STAGE_1.description;
  renderQuestionMenu(); clearAnswer(); showScreen("screen-game");
}
function renderQuestionMenu(){
  const box=$("question-menu"); if(!box)return;
  box.innerHTML=STAGE_1.questions.map((q,i)=>`<button class="question-choice ${state.asked.has(q.id)?"used":""}" data-q="${q.id}" ${state.asked.has(q.id)?"disabled":""}>
    <span>${i+1}</span><b>${q.text}</b><small>${q.relevanceLabel}</small>
  </button>`).join("");
  box.querySelectorAll(".question-choice:not(:disabled)").forEach(b=>b.addEventListener("click",()=>selectQuestion(b.dataset.q)));
  $("progress-text").textContent=`${state.asked.size} / ${STAGE_1.questions.length}`;
  $("progress-bar").style.width=`${state.asked.size/STAGE_1.questions.length*100}%`;
}
function selectQuestion(id){
  const q=STAGE_1.questions.find(x=>x.id===id); if(!q)return;
  $("question-level").textContent=q.relevanceLabel; $("question-text").textContent=q.text;
  $("question-purpose").textContent=""; $("answer-box").hidden=true; $("ask-btn").hidden=false;
  $("ask-btn").onclick=()=>askQuestion(q); $("mood").textContent="Savolni kutmoqda";
}
function askQuestion(q){
  if(state.asked.has(q.id))return;
  state.asked.add(q.id);
  const answer=q.answers[getStudent().id]; state.signals.push(...(answer.signals||[]));
  $("answer-text").textContent=answer.text; $("answer-box").hidden=false; $("ask-btn").hidden=true; $("mood").textContent="Javob berdi";
  renderQuestionMenu();
}
function clearAnswer(){ $("question-text").textContent="Savolni tanlang"; $("question-level").textContent=""; $("answer-text").textContent=""; $("answer-box").hidden=true; $("ask-btn").hidden=true; $("mood").textContent="Savolni kutmoqda"; }
document.addEventListener("DOMContentLoaded",renderStudentList);