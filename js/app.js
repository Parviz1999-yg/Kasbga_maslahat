const state={selectedStudentId:null,asked:false,signals:[],currentQuestion:null,questionOrder:[]};
const $=id=>document.getElementById(id);

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $(id)?.classList.add("active");
}
function getStudent(){return STUDENTS.find(s=>s.id===state.selectedStudentId);}
function shuffle(list){
  const a=[...list];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function renderStudentList(){
  const list=$("student-list"); if(!list)return;
  list.innerHTML=STUDENTS.map(s=>`<button class="student-option student-card" data-student-id="${s.id}">
    <div class="avatar student-avatar css-person ${s.avatarClass}"><i></i><span class="eye left"><b class="pupil"></b></span><span class="eye right"><b class="pupil"></b></span></div>
    <span class="student-info"><strong>${s.name}</strong><span>${s.className} · ${s.age} yosh</span></span>
    <span class="student-check">✓</span>
  </button>`).join("");
  list.querySelectorAll(".student-option").forEach(b=>b.addEventListener("click",()=>selectStudent(b.dataset.studentId)));
}
function selectStudent(id){
  state.selectedStudentId=id;
  document.querySelectorAll(".student-option").forEach(b=>b.classList.toggle("selected",b.dataset.studentId===id));
  const s=getStudent();
  $("start-btn").disabled=false;
  $("start-btn").textContent="Suhbatni boshlash →";
  $("start-btn").onclick=startConversation;
  if(s)$("start-intro").textContent=s.intro;
}
function startConversation(){
  if(!state.selectedStudentId)return;
  state.asked=false;
  state.signals=[];
  state.questionOrder=shuffle(STAGE_1.questions);
  state.currentQuestion=null;
  const s=getStudent();
  $("teen-name").textContent=s.name;
  $("teen-meta").textContent=`${s.className} · ${s.age} yosh`;
  $("teen-avatar").className=`avatar teen-avatar css-person ${s.avatarClass}`;
  $("stage-title").textContent=STAGE_1.title;
  $("stage-description").textContent=STAGE_1.description;
  $("progress-text").textContent=`1 / ${STAGE_1.questions.length}`;
  $("progress-bar").style.width="0%";
  renderQuestionChoices();
  showScreen("screen-game");
  startGazeSystem();
}
function renderQuestionChoices(){
  const list=$("question-list");
  if(!list)return;
  list.innerHTML=state.questionOrder.map((q,index)=>`<button class="question-choice" data-question-id="${q.id}" ${state.asked?"disabled":""}>
    <span class="choice-number">${index+1}</span>
    <span class="choice-text">${q.text}</span>
    <span class="choice-arrow">→</span>
  </button>`).join("");
  list.querySelectorAll(".question-choice").forEach(btn=>btn.addEventListener("click",()=>chooseQuestion(btn.dataset.questionId)));
}
function chooseQuestion(id){
  if(state.asked)return;
  const q=state.questionOrder.find(item=>item.id===id);
  if(!q)return;
  state.currentQuestion=q;
  askQuestion();
}
function askQuestion(){
  if(state.asked||!state.currentQuestion)return;
  const q=state.currentQuestion;
  const answer=q.answers[getStudent().id];
  if(!answer)return;
  state.asked=true;
  state.signals.push(...(answer.signals||[]));
  $("question-text").textContent=q.text;
  $("answer-text").textContent=answer.text;
  $("answer-box").hidden=false;
  $("mood").textContent="Javob berdi";
  $("progress-bar").style.width="100%";
  $("question-card").classList.add("answered-card");
  document.querySelectorAll(".question-choice").forEach(btn=>{
    btn.disabled=true;
    btn.classList.toggle("chosen",btn.dataset.questionId===q.id);
  });
  animateResponse();
}
function animateResponse(){
  const avatar=$("teen-avatar");
  avatar.classList.remove("thinking","speaking","smile");
  void avatar.offsetWidth;
  avatar.classList.add("speaking","smile");
  setTimeout(()=>avatar.classList.remove("speaking"),1100);
  setTimeout(()=>avatar.classList.remove("smile"),1700);
}
function setGaze(clientX,clientY){
  document.querySelectorAll(".css-person").forEach(person=>{
    const rect=person.getBoundingClientRect();
    const x=(clientX-(rect.left+rect.width/2))/(rect.width/2);
    const y=(clientY-(rect.top+rect.height/2))/(rect.height/2);
    const gx=Math.max(-2.5,Math.min(2.5,x*2.5));
    const gy=Math.max(-1.7,Math.min(1.7,y*1.7));
    person.style.setProperty("--gaze-x",gx+"px");
    person.style.setProperty("--gaze-y",gy+"px");
  });
}
function startGazeSystem(){
  const move=e=>setGaze(e.clientX,e.clientY);
  document.addEventListener("pointermove",move,{passive:true});
  document.addEventListener("touchmove",e=>{const t=e.touches[0];if(t)setGaze(t.clientX,t.clientY);},{passive:true});
  scheduleBlink();
}
function scheduleBlink(){
  const avatars=[...document.querySelectorAll(".css-person")];
  if(!avatars.length)return;
  setTimeout(()=>{
    avatars.forEach(a=>a.classList.add("blink-now"));
    setTimeout(()=>avatars.forEach(a=>a.classList.remove("blink-now")),170);
    scheduleBlink();
  },3200+Math.random()*3600);
}
document.addEventListener("DOMContentLoaded",renderStudentList);