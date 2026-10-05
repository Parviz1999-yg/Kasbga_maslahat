const QUESTION_BANK = {
  stage1: {
    criterion: "Mehnat predmeti",
    questions: [
      { id: "s1q1", type: "direct", text: "Nima bilan ishlashni yoqtirasiz?" },
      { id: "s1q2", type: "direct", text: "Nima sizni ko‘proq qiziqtiradi?" },
      { id: "s1q3", type: "direct", text: "Qanday narsa bilan band bo‘lishni xohlaysiz?" },
      { id: "s1q4", type: "distractor", text: "Nima haqida ko‘p gapirasiz?" },
      { id: "s1q5", type: "distractor", text: "Nima sizga osonroq tuyuladi?" },
      { id: "s1q6", type: "distractor", text: "Nima bilan shug‘ullanishni eshitgansiz?" },
      { id: "s1q7", type: "distractor", text: "Nima haqida ko‘p o‘qigansiz?" },
      { id: "s1q8", type: "distractor", text: "Nima sizga qiziqarli ko‘rinadi?" }
    ]
  },
  stage2: {
    criterion: "Mehnat maqsadi",
    questions: [
      { id: "s2q1", type: "direct", text: "Nima qilishni yoqtirasiz: bilish, o‘zgartirish yoki izlash?" },
      { id: "s2q2", type: "direct", text: "Qiyin ishda avval nima qilasiz?" },
      { id: "s2q3", type: "direct", text: "Natija yoki jarayon muhimroqmi?" },
      { id: "s2q4", type: "distractor", text: "Nima qilishni xohlaysiz?" },
      { id: "s2q5", type: "distractor", text: "Qiyin ishda nima qilishni o‘ylaysiz?" },
      { id: "s2q6", type: "distractor", text: "Natija haqida nima deb o‘ylaysiz?" },
      { id: "s2q7", type: "distractor", text: "Jarayon sizga qanday tuyuladi?" },
      { id: "s2q8", type: "distractor", text: "Nima sizga muhimroq ko‘rinadi?" }
    ]
  },
  stage3: {
    criterion: "Mehnat vositalari",
    questions: [
      { id: "s3q1", type: "direct", text: "Qanday usulda ishlashni yoqtirasiz?" },
      { id: "s3q2", type: "direct", text: "Qo‘l bilan ishlash yoqadimi?" },
      { id: "s3q3", type: "direct", text: "Texnika bilan ishlash yoqadimi?" },
      { id: "s3q4", type: "distractor", text: "Qanday usulda ishlashni eshitgansiz?" },
      { id: "s3q5", type: "distractor", text: "Qo‘l bilan ishlash haqida nima deb o‘ylaysiz?" },
      { id: "s3q6", type: "distractor", text: "Texnika bilan ishlash sizga qanday tuyuladi?" },
      { id: "s3q7", type: "distractor", text: "Qanday vosita haqida bilasiz?" },
      { id: "s3q8", type: "distractor", text: "Nima bilan ishlashni xohlaysiz deb o‘ylaysiz?" }
    ]
  },
  stage4: {
    criterion: "Mehnat sharoitlari",
    questions: [
      { id: "s4q1", type: "direct", text: "Qanday joyda ishlashni yoqtirasiz?" },
      { id: "s4q2", type: "direct", text: "Yopiq yoki ochiq joy yoqadimi?" },
      { id: "s4q3", type: "direct", text: "Tinchni yoqtirasizmi yoki harakatni?" },
      { id: "s4q4", type: "distractor", text: "Qanday joyda ishlashni eshitgansiz?" },
      { id: "s4q5", type: "distractor", text: "Yopiq joy haqida nima deb o‘ylaysiz?" },
      { id: "s4q6", type: "distractor", text: "Ochiq joy sizga qanday tuyuladi?" },
      { id: "s4q7", type: "distractor", text: "Tinch ish haqida nima bilasiz?" },
      { id: "s4q8", type: "distractor", text: "Harakatli ish sizga qiziqmi?" }
    ]
  }
};

window.QUESTION_BANK = QUESTION_BANK;
