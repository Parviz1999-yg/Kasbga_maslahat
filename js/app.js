const state={selectedStudentId:null,currentQuestionId:null,answered:false,evidence:[]};
const $=id=>document.getElementById(id);

function showScreen(id){
  document.querySelectorAll(".screen").forEach(screen=>screen.classList.remove("active"));
  $(id)?.classList.add("active");
}
function getStudent(){return STUDENTS.find(student=>student.id===state.selectedStudentId);}
function getQuestion(){return STAGE_1.questions.find(question=>question.id===state.currentQuestionId);}

function renderStudentList(){
  const list=$("student-list"); if(!list)return;
  list.innerHTML=STUDENTS.map(student=>`
    <button class="student-option" data-student-id="${student.id}">
      <div class="avatar css-person ${student.avatarClass}"><i></i><span class="eye left"><b class="pupil"></b></span><span class="eye right"><b class="pupil"></b></span></div>
      <span><strong>${student.name}</strong><small>${student.meta}</small></span>
    </button>`).join("");
  list.querySelectorAll(".student-option").forEach(button=>button.addEventListener("click",()=>selectStudent(button.dataset.studentId)));
}

function selectStudent(studentId){
  state.selectedStudentId=studentId;
  document.querySelectorAll(".student-option").forEach(button=>button.classList.toggle("selected",button.dataset.studentId===studentId));
  const student=getStudent();
  $("start-btn").disabled=false;
  $("start-btn").textContent="Suhbatni boshlash →";
  $("start-btn").onclick=startConversation;
  if(student)$("start-intro").textContent=student.intro;
}

function startConversation(){
  if(!state.selectedStudentId)return;
  state.currentQuestionId=STAGE_1.questions[0].id;
  state.answered=false; state.evidence=[];
  const student=getStudent();
  $("teen-name").textContent=student.name;
  $("teen-meta").textContent=student.meta;
  $("teen-avatar").className=`avatar teen-avatar css-person ${student.avatarClass}`;
  $("stage-title").textContent=STAGE_1.title;
  $("stage-description").textContent=STAGE_1.description;
  renderQuestion();
  showScreen("screen-game");
}

function renderQuestion(){
  const question=getQuestion(); if(!question)return;
  $("question-text").textContent=question.text;
  $("question-level").textContent=question.relevanceLabel;
  $("question-purpose").textContent=question.diagnosticPurpose;
  $("answer-box").hidden=!state.answered;
  $("ask-btn").hidden=state.answered;
  if(!state.answered){
    $("mood").textContent="Savolni kutmoqda";
    $("answer-text").textContent="";
    $("evidence-list").innerHTML="";
    $("evidence-list-bottom").innerHTML="";
    return;
  }
  const answer=question.answers[getStudent().id];
  $("answer-text").textContent=answer.text;
  $("mood").textContent="Javob berdi";
  state.evidence=answer.evidence||[];
  const chips=state.evidence.map(item=>`<span class="evidence-chip">${formatEvidence(item)}</span>`).join("");
  $("evidence-list").innerHTML=chips;
  $("evidence-list-bottom").innerHTML=chips;
  $("ask-btn").hidden=true;
}
function formatEvidence(value){
  const labels={technology:"Inson–texnika",signs:"Inson–belgilar tizimi",artistic:"Inson–badiiy obraz",nature:"Inson–tabiat",people:"Inson–inson",creativity:"Ijodkorlik",logic:"Tahliliy qiziqish",practical:"Amaliy faoliyat",communication:"Muloqot"};
  return labels[value]||value;
}
function askQuestion(){if(state.answered||!getQuestion())return;state.answered=true;renderQuestion();}
document.addEventListener("DOMContentLoaded",()=>{renderStudentList();$("ask-btn")?.addEventListener("click",askQuestion);});