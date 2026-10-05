const state = {
  selectedStudentId: null,
  asked: false,
  signals: [],
  history: [],
  currentQuestion: null,
  questionOrder: [],
  currentStage: 1,
  gazeStarted: false,
  gazeTimer: null,
  blinkStarted: false,
  userConclusion: {
    predmet: null,
    maqsad: null,
    careerId: null
  }
};
const $ = id => document.getElementById(id);

const PREDMET_OPTIONS = [
  { id: "technology", label: "Inson — texnika", hint: "Qurilma, kompyuter, mexanizm" },
  { id: "people", label: "Inson — inson", hint: "Suhbat, yordam, o‘qitish" },
  { id: "signs", label: "Inson — belgilar", hint: "Raqam, matn, ma’lumot" },
  { id: "artistic", label: "Inson — badiiy obraz", hint: "Rasm, dizayn, ijod" },
  { id: "nature", label: "Inson — tabiat", hint: "O‘simlik, hayvon, ekologiya" }
];

const MAQSAD_OPTIONS = [
  { id: "gnostic", label: "Gnostik (bilish)", hint: "Tushunish, tahlil qilish" },
  { id: "transform", label: "Transformatsion", hint: "O‘zgartirish, yaratish" },
  { id: "search", label: "Izlovchi", hint: "Yechim izlash, yangilik" }
];

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id)?.classList.add("active");
}
function getStudent() {
  return STUDENTS.find(s => s.id === state.selectedStudentId);
}
function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderStudentList() {
  const list = $("student-list");
  if (!list) return;
  list.innerHTML = STUDENTS.map(s => `<button class="student-option student-card" data-student-id="${s.id}">
    <div class="avatar student-avatar css-person ${s.avatarClass}"><i></i><span class="eye left"><b class="pupil"></b></span><span class="eye right"><b class="pupil"></b></span></div>
    <span class="student-info"><strong>${s.name}</strong><span>${s.className} · ${s.age} yosh</span></span>
    <span class="student-check">✓</span>
  </button>`).join("");
  list.querySelectorAll(".student-option").forEach(b =>
    b.addEventListener("click", () => selectStudent(b.dataset.studentId))
  );
}
function selectStudent(id) {
  state.selectedStudentId = id;
  document.querySelectorAll(".student-option").forEach(b =>
    b.classList.toggle("selected", b.dataset.studentId === id)
  );
  const s = getStudent();
  $("start-btn").disabled = false;
  $("start-btn").textContent = "Suhbatni boshlash →";
  $("start-btn").onclick = startConversation;
  if (s) $("start-intro").textContent = s.intro;
}
function startConversation() {
  if (!state.selectedStudentId) return;
  state.asked = false;
  state.signals = [];
  state.history = [];
  state.currentStage = 1;
  state.currentQuestion = null;
  state.userConclusion = { predmet: null, maqsad: null, careerId: null };
  const s = getStudent();
  $("teen-name").textContent = s.name;
  $("teen-meta").textContent = `${s.className} · ${s.age} yosh`;
  $("teen-avatar").className = `avatar teen-avatar css-person ${s.avatarClass}`;
  loadStage(1, STAGE_1, "1 / 5", "0%");
  showScreen("screen-game");
  startGazeSystem();
  startBlinkSystem();
}
function renderQuestionChoices() {
  const list = $("question-list");
  if (!list) return;
  list.innerHTML = state.questionOrder.map((q, index) =>
    `<button class="question-choice" data-question-id="${q.id}" ${state.asked ? "disabled" : ""}>
      <span class="choice-number">${index + 1}</span>
      <span class="choice-text">${q.text}</span>
      <span class="choice-arrow">→</span>
    </button>`
  ).join("");
  list.querySelectorAll(".question-choice").forEach(btn =>
    btn.addEventListener("click", () => chooseQuestion(btn.dataset.questionId))
  );
}
function chooseQuestion(id) {
  if (state.asked) return;
  const q = state.questionOrder.find(item => item.id === id);
  if (!q) return;
  state.currentQuestion = q;
  $("question-text").textContent = q.text;
  $("question-text").hidden = false;
  $("ask-btn").hidden = false;
  $("ask-btn").textContent = "Ushbu savolni berish";
  $("ask-btn").onclick = askQuestion;
  $("question-list").hidden = true;
  $("question-label").hidden = true;
}
function askQuestion() {
  if (state.asked || !state.currentQuestion) return;
  const q = state.currentQuestion;
  const answer = q.answers[getStudent().id];
  if (!answer) return;
  state.asked = true;
  const sigs = answer.signals || [];
  state.signals.push(...sigs);
  state.history.push({
    stage: state.currentStage,
    questionId: q.id,
    text: q.text,
    type: q.evidenceType || "direct",
    signals: sigs,
    relevance: answer.evidenceRelevance || 0
  });
  $("question-text").textContent = q.text;
  $("question-text").hidden = false;
  $("answer-text").textContent = answer.text;
  $("ask-btn").hidden = true;
  $("question-list").hidden = true;
  $("answer-box").hidden = false;
  $("next-stage-btn").hidden = false;
  if (state.currentStage >= 5) {
    $("next-stage-btn").textContent = "Xulosa chiqarish →";
    $("next-stage-btn").onclick = showConclusion;
  } else {
    $("next-stage-btn").textContent = (state.currentStage + 1) + "-bosqichga o‘tish →";
    $("next-stage-btn").onclick = goToNextStage;
  }
  $("question-label").hidden = true;
  $("mood").textContent = "Javob berdi";
  $("progress-bar").style.width = "100%";
  $("question-card").classList.add("answered-card", "answer-mode");
  $("screen-game").classList.add("answer-only");
  document.querySelectorAll(".question-choice").forEach(btn => {
    btn.disabled = true;
    btn.classList.toggle("chosen", btn.dataset.questionId === q.id);
  });
  animateResponse();
}
function loadStage(stageNum, stageObj, progressText, progressWidth) {
  state.currentStage = stageNum;
  state.asked = false;
  state.currentQuestion = null;
  state.questionOrder = shuffle(stageObj.questions);
  $("stage-title").textContent = stageObj.title;
  $("stage-description").textContent = stageObj.description;
  $("progress-text").textContent = progressText;
  $("progress-bar").style.width = progressWidth;
  $("question-card").classList.remove("answered-card", "answer-mode");
  $("screen-game").classList.remove("answer-only");
  $("question-text").hidden = true;
  $("answer-box").hidden = true;
  $("next-stage-btn").hidden = true;
  $("ask-btn").hidden = true;
  $("question-label").hidden = false;
  $("question-label").textContent = "SAVOLNI TANLANG";
  $("question-list").hidden = false;
  $("mood").textContent = "Savolni kutmoqda";
  renderQuestionChoices();
}
function goToNextStage() {
  if (!state.asked) return;
  if (state.currentStage === 1) loadStage(2, STAGE_2, "2 / 5", "20%");
  else if (state.currentStage === 2) loadStage(3, STAGE_3, "3 / 5", "40%");
  else if (state.currentStage === 3) loadStage(4, STAGE_4, "4 / 5", "60%");
  else if (state.currentStage === 4) loadStage(5, STAGE_5, "5 / 5", "80%");
}

function renderOptionGroup(containerId, options, selectedKey, onSelect) {
  const box = $(containerId);
  if (!box) return;
  box.innerHTML = options.map(o =>
    `<button type="button" class="conclude-btn ${state.userConclusion[selectedKey] === o.id ? "selected" : ""}" data-id="${o.id}">
      <strong>${o.label}</strong>
      <span>${o.hint || ""}</span>
    </button>`
  ).join("");
  box.querySelectorAll(".conclude-btn").forEach(btn => {
    btn.onclick = () => {
      state.userConclusion[selectedKey] = btn.dataset.id;
      renderOptionGroup(containerId, options, selectedKey, onSelect);
      updateConcludeSubmit();
      if (onSelect) onSelect();
    };
  });
}

function renderCareerOptions() {
  const box = $("conclude-careers");
  if (!box || typeof CAREER_PROFILES === "undefined") return;
  box.innerHTML = CAREER_PROFILES.map(c =>
    `<button type="button" class="conclude-btn career ${state.userConclusion.careerId === c.id ? "selected" : ""}" data-id="${c.id}">
      <strong>${c.title}</strong>
      <span>${c.examples.slice(0, 3).join(", ")}</span>
    </button>`
  ).join("");
  box.querySelectorAll(".conclude-btn").forEach(btn => {
    btn.onclick = () => {
      state.userConclusion.careerId = btn.dataset.id;
      renderCareerOptions();
      updateConcludeSubmit();
    };
  });
}

function updateConcludeSubmit() {
  const btn = $("conclude-submit");
  if (!btn) return;
  const ok = state.userConclusion.predmet && state.userConclusion.maqsad && state.userConclusion.careerId;
  btn.disabled = !ok;
  btn.textContent = ok ? "Tavsiyani tasdiqlash →" : "Avval barcha xulosalarni tanlang";
}

function showConclusion() {
  const s = getStudent();
  $("conclude-student-name").textContent = s ? s.name : "O‘quvchi";
  state.userConclusion = { predmet: null, maqsad: null, careerId: null };
  renderOptionGroup("conclude-predmet", PREDMET_OPTIONS, "predmet");
  renderOptionGroup("conclude-maqsad", MAQSAD_OPTIONS, "maqsad");
  renderCareerOptions();
  updateConcludeSubmit();
  const submit = $("conclude-submit");
  if (submit) submit.onclick = submitConclusion;
  showScreen("screen-conclude");
}

function topSignal(keys) {
  const counts = {};
  (state.signals || []).forEach(s => {
    if (keys.includes(s)) counts[s] = (counts[s] || 0) + 1;
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return sorted.length ? sorted[0][0] : null;
}

function evaluateRecommendation() {
  const uc = state.userConclusion;
  const systemPredmet = topSignal(["technology", "people", "signs", "artistic", "nature"]);
  const systemMaqsad = topSignal(["gnostic", "transform", "search"]);
  const ranked = typeof rankCareers === "function" ? rankCareers(state.signals) : [];
  const systemCareer = ranked[0] ? ranked[0].id : null;

  const predmetOk = uc.predmet && systemPredmet && uc.predmet === systemPredmet;
  const maqsadOk = uc.maqsad && systemMaqsad && uc.maqsad === systemMaqsad;
  const careerOk = uc.careerId && systemCareer && uc.careerId === systemCareer;
  const careerNear = uc.careerId && ranked.slice(0, 3).some(c => c.id === uc.careerId);

  let recScore = 0;
  if (predmetOk) recScore += 35;
  if (maqsadOk) recScore += 25;
  if (careerOk) recScore += 40;
  else if (careerNear) recScore += 20;

  let recFeedback;
  if (recScore >= 80) {
    recFeedback = "Tavsiyangiz suhbat dalillariga yaxshi mos keldi. Xulosa chiqarish ko‘nikmasi yuqori.";
  } else if (recScore >= 50) {
    recFeedback = "Qisman to‘g‘ri. Ba’zi mezonlarni yana bir bor javoblar bilan solishtiring.";
  } else {
    recFeedback = "Tavsiya dalillarga kam mos keldi. Avval predmet va maqsadni aniq ajrating, keyin kasb tanlang.";
  }

  const predmetLabel = PREDMET_OPTIONS.find(p => p.id === uc.predmet)?.label || uc.predmet;
  const maqsadLabel = MAQSAD_OPTIONS.find(p => p.id === uc.maqsad)?.label || uc.maqsad;
  const careerLabel = CAREER_PROFILES.find(c => c.id === uc.careerId)?.title || uc.careerId;
  const systemCareerLabel = ranked[0] ? ranked[0].title : "Aniqlanmadi";

  return {
    recScore,
    recFeedback,
    predmetOk,
    maqsadOk,
    careerOk,
    careerNear,
    predmetLabel,
    maqsadLabel,
    careerLabel,
    systemPredmet,
    systemMaqsad,
    systemCareerLabel,
    ranked
  };
}

function submitConclusion() {
  if (!state.userConclusion.predmet || !state.userConclusion.maqsad || !state.userConclusion.careerId) return;
  showResults();
}

function evaluateCounselor() {
  const total = state.history.length || 1;
  const direct = state.history.filter(h => h.type === "direct").length;
  const distractor = state.history.filter(h => h.type === "distractor").length;
  const score = Math.round((direct / total) * 100);
  let level, feedback;
  if (score >= 80) {
    level = "A’lo";
    feedback = "Savollaringiz maqsadga yo‘naltirilgan. To‘g‘ri savol berish ko‘nikmasi yuqori.";
  } else if (score >= 60) {
    level = "Yaxshi";
    feedback = "Ko‘p hollarda to‘g‘ri savol tanladingiz. Chalg‘ituvchi savollardan ehtiyot bo‘ling.";
  } else if (score >= 40) {
    level = "O‘rta";
    feedback = "Ba’zi savollar maqsadga yetkazmadi. Taalluqli savolni aniqroq tanlang.";
  } else {
    level = "Past";
    feedback = "Ko‘p chalg‘ituvchi savol tanlandi. Savol mezonni ochishi kerak — shakliga emas, maqsadiga qarang.";
  }
  return { total, direct, distractor, score, level, feedback };
}

function showResults() {
  const s = getStudent();
  const ev = evaluateCounselor();
  const rec = evaluateRecommendation();
  const top = rec.ranked.slice(0, 3);

  $("result-student").textContent = s ? s.name : "O‘quvchi";
  $("result-score").textContent = ev.score + "%";
  $("result-level").textContent = ev.level;
  $("result-feedback").textContent = ev.feedback;
  $("result-direct").textContent = String(ev.direct);
  $("result-distractor").textContent = String(ev.distractor);

  const recBox = $("result-recommendation");
  if (recBox) {
    recBox.innerHTML = `
      <div class="result-score-block">
        <div class="result-score-main">
          <span>${rec.recScore}%</span>
          <b>Tavsiya mosligi</b>
        </div>
        <p class="result-feedback">${rec.recFeedback}</p>
        <div class="result-stats">
          <div><b class="${rec.predmetOk ? "ok-text" : "bad-text"}">${rec.predmetOk ? "✓" : "✗"}</b><span>Predmet: ${rec.predmetLabel}</span></div>
          <div><b class="${rec.maqsadOk ? "ok-text" : "bad-text"}">${rec.maqsadOk ? "✓" : "✗"}</b><span>Maqsad: ${rec.maqsadLabel}</span></div>
          <div><b class="${rec.careerOk || rec.careerNear ? "ok-text" : "bad-text"}">${rec.careerOk ? "✓" : rec.careerNear ? "≈" : "✗"}</b><span>Kasb: ${rec.careerLabel}</span></div>
          <div><b>~</b><span>Tizim: ${rec.systemCareerLabel}</span></div>
        </div>
      </div>`;
  }

  const hist = $("result-history");
  if (hist) {
    hist.innerHTML = state.history.map((h, i) =>
      `<div class="result-row ${h.type === "direct" ? "ok" : "bad"}">
        <span>${i + 1}. ${h.text}</span>
        <b>${h.type === "direct" ? "Taalluqli" : "Chalg‘ituvchi"}</b>
      </div>`
    ).join("");
  }

  const careerBox = $("result-careers");
  if (careerBox) {
    if (!top.length) {
      careerBox.innerHTML = "<p>Yetarli dalil yig‘ilmadi. Ko‘proq taalluqli savol bering.</p>";
    } else {
      careerBox.innerHTML = top.map(c =>
        `<div class="career-card ${c.id === state.userConclusion.careerId ? "user-pick" : ""}">
          <strong>${c.title}${c.id === state.userConclusion.careerId ? " (sizning tavsiyangiz)" : ""}</strong>
          <span>${c.examples.slice(0, 3).join(", ")}</span>
        </div>`
      ).join("");
    }
  }

  showScreen("screen-result");
}

function restartAll() {
  state.selectedStudentId = null;
  state.asked = false;
  state.signals = [];
  state.history = [];
  state.currentQuestion = null;
  state.currentStage = 1;
  state.userConclusion = { predmet: null, maqsad: null, careerId: null };
  document.querySelectorAll(".student-option").forEach(b => b.classList.remove("selected"));
  $("start-btn").disabled = true;
  $("start-btn").textContent = "Avval o‘quvchini tanlang →";
  $("start-intro").textContent = "Avval o‘quvchini tanlang. Keyin suhbatni o‘zingiz olib boring.";
  showScreen("screen-start");
}

function animateResponse() {
  const avatar = $("teen-avatar");
  avatar.classList.remove("thinking", "speaking", "smile");
  void avatar.offsetWidth;
  avatar.classList.add("speaking", "smile");
  setTimeout(() => avatar.classList.remove("speaking"), 1100);
  setTimeout(() => avatar.classList.remove("smile"), 1700);
}
function setGaze(clientX, clientY) {
  document.querySelectorAll(".css-person").forEach(person => {
    const rect = person.getBoundingClientRect();
    const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
    const dx = clientX - cx, dy = clientY - cy;
    const distance = Math.hypot(dx, dy);
    if (distance < 70) {
      person.style.setProperty("--gaze-x", "0px");
      person.style.setProperty("--gaze-y", "0px");
      return;
    }
    const maxX = 3.2, maxY = 2.1;
    const gx = Math.max(-maxX, Math.min(maxX, dx / 70));
    const gy = Math.max(-maxY, Math.min(maxY, dy / 70));
    person.style.setProperty("--gaze-x", gx + "px");
    person.style.setProperty("--gaze-y", gy + "px");
  });
  clearTimeout(state.gazeTimer);
  state.gazeTimer = setTimeout(() => {
    document.querySelectorAll(".css-person").forEach(person => {
      person.style.setProperty("--gaze-x", "0px");
      person.style.setProperty("--gaze-y", "0px");
    });
  }, 900);
}
function startBlinkSystem() {
  if (state.blinkStarted) return;
  state.blinkStarted = true;
  document.querySelectorAll(".css-person").forEach(scheduleAvatarBlink);
}
function scheduleAvatarBlink(avatar) {
  if (!avatar || avatar.dataset.blinkBound === "1") return;
  avatar.dataset.blinkBound = "1";
  const next = 1800 + Math.random() * 4200;
  setTimeout(() => {
    avatar.classList.add("blink-now");
    setTimeout(() => avatar.classList.remove("blink-now"), 150 + Math.random() * 90);
    scheduleNextAvatarBlink(avatar);
  }, next);
}
function scheduleNextAvatarBlink(avatar) {
  const next = 3000 + Math.random() * 6500;
  setTimeout(() => {
    avatar.classList.add("blink-now");
    setTimeout(() => avatar.classList.remove("blink-now"), 150 + Math.random() * 90);
    scheduleNextAvatarBlink(avatar);
  }, next);
}
function startGazeSystem() {
  const move = e => setGaze(e.clientX, e.clientY);
  if (!state.gazeStarted) {
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("touchmove", e => {
      const t = e.touches[0];
      if (t) setGaze(t.clientX, t.clientY);
    }, { passive: true });
    state.gazeStarted = true;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  renderStudentList();
  startBlinkSystem();
  const again = $("restart-btn");
  if (again) again.onclick = restartAll;
});
