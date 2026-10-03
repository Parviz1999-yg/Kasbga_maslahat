const state={selectedStudentId:null,asked:false,signals:[],currentQuestion:null,questionOrder:[],gazeStarted:false,gazeTimer:null,blinkStarted:false};
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
  $("progress-text").textContent="1 / 1";
  $("progress-bar").style.width="0%";
  renderQuestionChoices();
  showScreen("screen-game");
  $("screen-game").classList.remove("answer-only");
  startGazeSystem();
  startBlinkSystem();
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
  $("question-text").textContent=q.text;
  $("question-text").hidden=false;
  $("ask-btn").hidden=false;
  $("ask-btn").textContent="Ushbu savolni berish";
  $("ask-btn").onclick=askQuestion;
  $("question-list").hidden=true;
  $("question-label").hidden=true;
}
function askQuestion(){
  if(state.asked||!state.currentQuestion)return;
  const q=state.currentQuestion;
  const answer=q.answers[getStudent().id];
  if(!answer)return;
  state.asked=true;
  state.signals.push(...(answer.signals||[]));
  $("question-text").textContent=q.text;
  $("question-text").hidden=false;
  $("answer-text").textContent=answer.text;
  $("ask-btn").hidden=true;
  $("question-list").hidden=true;
  $("answer-box").hidden=false;
  $("ask-btn").hidden=true;
  $("question-label").hidden=true;
  $("mood").textContent="Javob berdi";
  $("progress-bar").style.width="100%";
  $("question-card").classList.add("answered-card","answer-mode");
  $("screen-game").classList.add("answer-only");
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
    const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
    const dx=clientX-cx, dy=clientY-cy;
    const distance=Math.hypot(dx,dy);
    if(distance<70){
      person.style.setProperty("--gaze-x","0px");
      person.style.setProperty("--gaze-y","0px");
      return;
    }
    const maxX=3.2, maxY=2.1;
    const gx=Math.max(-maxX,Math.min(maxX,dx/70));
    const gy=Math.max(-maxY,Math.min(maxY,dy/70));
    person.style.setProperty("--gaze-x",gx+"px");
    person.style.setProperty("--gaze-y",gy+"px");
  });
  clearTimeout(state.gazeTimer);
  state.gazeTimer=setTimeout(()=>{
    document.querySelectorAll(".css-person").forEach(person=>{
      person.style.setProperty("--gaze-x","0px");
      person.style.setProperty("--gaze-y","0px");
    });
  },900);
}
function startBlinkSystem(){
  if(state.blinkStarted)return;
  state.blinkStarted=true;
  document.querySelectorAll(".css-person").forEach(scheduleAvatarBlink);
}
function scheduleAvatarBlink(avatar){
  if(!avatar || avatar.dataset.blinkBound==="1")return;
  avatar.dataset.blinkBound="1";
  const next=2600+Math.random()*6200;
  setTimeout(()=>{
    avatar.classList.add("blink-now");
    setTimeout(()=>avatar.classList.remove("blink-now"),150+Math.random()*90);
    scheduleNextAvatarBlink(avatar);
  },next);
}
function scheduleNextAvatarBlink(avatar){
  const next=3200+Math.random()*7200;
  setTimeout(()=>{
    avatar.classList.add("blink-now");
    setTimeout(()=>avatar.classList.remove("blink-now"),150+Math.random()*90);
    scheduleNextAvatarBlink(avatar);
  },next);
}
function startGazeSystem(){
  const move=e=>setGaze(e.clientX,e.clientY);
  if(!state.gazeStarted){
    document.addEventListener("pointermove",move,{passive:true});
    document.addEventListener("touchmove",e=>{const t=e.touches[0];if(t)setGaze(t.clientX,t.clientY);},{passive:true});
    state.gazeStarted=true;
  }
}
document.addEventListener("DOMContentLoaded",()=>{renderStudentList();startBlinkSystem();});