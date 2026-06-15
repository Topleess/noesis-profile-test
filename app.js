const rawQuestions = `
1|S1|0|Мое настроение может резко меняться из-за одной фразы или сообщения.
2|S1|0|В близких отношениях я иногда реагирую сильнее, чем сам(а) ожидал(а).
3|S1|0|Когда я чувствую угрозу отношениям, мне сложно быстро успокоиться.
4|S1|0|Я могу долго прокручивать эмоционально болезненный разговор.
5|S1|0|Внутри меня часто бывает больше напряжения, чем видно снаружи.
6|S1|0|Мне знакомо ощущение: то очень близко, то хочется все оборвать.
7|S1|0|Сильные чувства могут подталкивать меня к резким словам или решениям.
8|S1|0|Если человек стал холоднее, я быстро это замечаю и тревожусь.
9|S1|1|Даже в конфликте мое эмоциональное состояние обычно остается ровным.
10|S1|1|Я редко принимаю решения под влиянием сильных эмоций.
11|S2|0|Мне важно регулярно получать подтверждение, что я нужен/нужна.
12|S2|0|Молчание важного человека может ощущаться как отвержение.
13|S2|0|Мне трудно спокойно выдерживать неопределенность в отношениях.
14|S2|0|Я могу подстраиваться, чтобы не потерять близость.
15|S2|0|Если меня игнорируют, я начинаю искать причины в себе.
16|S2|0|Мне бывает страшно, что близкий человек внезапно уйдет.
17|S2|0|Я легко считываю изменения в тоне, паузах и внимании.
18|S2|0|В отношениях мне важно понимать, где мы и что между нами.
19|S2|1|Я спокойно переношу дистанцию, даже если человек важен.
20|S2|1|Мне не нужно много подтверждений, чтобы чувствовать себя уверенно в отношениях.
21|S3|0|Мне нужно много личного пространства, даже с близкими.
22|S3|0|Я чаще обрабатываю переживания внутри себя, чем обсуждаю их.
23|S3|0|Слишком частое общение быстро меня утомляет.
24|S3|0|Я могу казаться холодным(ой), хотя внутри все сложнее.
25|S3|0|Мне проще анализировать чувства, чем показывать их.
26|S3|0|Я не люблю, когда от меня ждут постоянной эмоциональной вовлеченности.
27|S3|0|У меня есть внутренний мир, куда я редко пускаю других.
28|S3|0|Я предпочитаю независимость тесной взаимозависимости.
29|S3|1|Мне легко быть эмоционально открытым(ой) почти с любым близким человеком.
30|S3|1|Я быстро начинаю скучать без постоянного контакта с людьми.
31|S4|0|Мне важно чувствовать, что меня ценят выше среднего.
32|S4|0|Я болезненно реагирую, когда мои достижения не замечают.
33|S4|0|Я часто сравниваю себя с другими по уровню, статусу или таланту.
34|S4|0|Мне нравится быть человеком, к чьему мнению прислушиваются.
35|S4|0|Критика может задевать меня сильнее, чем я показываю.
36|S4|0|Я хочу, чтобы мои способности были видны и признаны.
37|S4|0|Если я вкладываюсь, мне важно получить уважение и благодарность.
38|S4|0|Я могу терять интерес к людям, которые меня недооценивают.
39|S4|1|Мне почти безразлично, признают ли мои достижения другие.
40|S4|1|Я спокойно отношусь к тому, что не выделяюсь на фоне остальных.
41|S5|0|Мне естественно ярко рассказывать истории и усиливать эмоцию.
42|S5|0|В компании я часто становлюсь заметным(ой), даже если не планировал(а).
43|S5|0|Мне важно, чтобы мой внешний образ передавал что-то о моей личности.
44|S5|0|Я легко включаю обаяние, когда хочу расположить человека.
45|S5|0|Мне нравится производить впечатление.
46|S5|0|Я могу играть роль, если ситуация этого требует.
47|S5|0|Я быстро чувствую, что именно зацепит аудиторию или собеседника.
48|S5|0|Когда меня не замечают, мне становится неприятно.
49|S5|1|Я почти всегда предпочитаю оставаться в тени.
50|S5|1|Мне трудно выражать эмоции выразительно, даже если они сильные.
51|S6|0|Мне важно, чтобы вещи и процессы были устроены правильно.
52|S6|0|Хаос, спешка и небрежность быстро выводят меня из равновесия.
53|S6|0|Я замечаю ошибки и несостыковки быстрее многих.
54|S6|0|Мне сложно расслабиться, пока важное дело не доведено до порядка.
55|S6|0|Я могу быть жестким(ой), когда люди нарушают договоренности.
56|S6|0|В работе мне легче доверять проверенным правилам, чем импровизации.
57|S6|0|Я часто держу ситуацию под контролем, потому что иначе все расползется.
58|S6|0|Мне важно, чтобы ответственность была четко распределена.
59|S6|1|Я легко отношусь к беспорядку и меняющимся планам.
60|S6|1|Мне комфортно действовать без структуры и подготовки.
61|S7|0|Я часто замечаю скрытые мотивы там, где другие видят простую ситуацию.
62|S7|0|Мне трудно быстро доверять людям.
63|S7|0|Если меня подвели, я долго это помню.
64|S7|0|Я редко забываю несправедливость в свой адрес.
65|S7|0|Мне важно заранее понимать, кто какую выгоду получает.
66|S7|0|Я настораживаюсь, когда человек слишком быстро становится дружелюбным.
67|S7|0|Я могу проверять слова людей поступками.
68|S7|0|В конфликте я ищу, что стоит за словами, а не только то, что сказано.
69|S7|1|Я обычно предполагаю, что люди действуют честно, пока не доказано обратное.
70|S7|1|Мне легко отпустить обиду и больше к ней не возвращаться.
71|S8|0|Я могу быстро решиться на поступок, если почувствовал(а) импульс.
72|S8|0|Риск иногда заряжает меня энергией.
73|S8|0|Мне сложно терпеть ограничения, если они кажутся бессмысленными.
74|S8|0|Я могу начать новое дело, не до конца продумав последствия.
75|S8|0|В сильном настроении я могу тратить, писать или обещать лишнее.
76|S8|0|Рутина быстро снижает мою мотивацию.
77|S8|0|Мне нравится ощущение свободы, когда можно действовать без плана.
78|S8|0|Иногда я сначала делаю, а потом объясняю себе почему.
79|S8|1|Перед важным действием я почти всегда тщательно просчитываю последствия.
80|S8|1|Мне комфортнее стабильность, чем риск и новизна.
81|S9|0|Я часто заранее прокручиваю возможные ошибки.
82|S9|0|Мне трудно выключить мысли, когда решение еще не найдено.
83|S9|0|Я могу долго сомневаться даже после разумного выбора.
84|S9|0|Я замечаю риски, которые другие пропускают.
85|S9|0|Перед важным разговором я обычно продумываю разные сценарии.
86|S9|0|Я склонен(на) искать правильный ответ, даже когда его нет.
87|S9|0|Мне бывает сложно начать, пока я не уверен(а), что готов(а).
88|S9|0|Я могу переживать из-за того, что сказал(а) не так.
89|S9|1|Я легко принимаю неопределенность и редко переживаю заранее.
90|S9|1|Я быстро принимаю решения без долгого анализа.
91|S10|0|Мне важно не выглядеть глупо или навязчиво.
92|S10|0|Замечание может долго оставаться у меня в голове.
93|S10|0|Я часто сдерживаю себя, чтобы не быть отвергнутым(ой).
94|S10|0|В новой группе мне нужно время, чтобы раскрыться.
95|S10|0|Я могу отказаться от возможности, если боюсь оценки.
96|S10|0|Я хорошо чувствую неловкость и напряжение в общении.
97|S10|0|Меня задевает грубость, даже если она сказана без злого умысла.
98|S10|0|Мне легче быть смелым(ой), когда я уверен(а), что меня принимают.
99|S10|1|Я спокойно отношусь к критике и быстро забываю ее.
100|S10|1|Мне легко проявляться перед незнакомыми людьми без внутреннего напряжения.
101|S11|0|Если цель важна, я могу жестко продавливать свою позицию.
102|S11|0|Я легче многих отключаю сочувствие, когда нужно принять выгодное решение.
103|S11|0|Иногда правила можно обойти, если они мешают результату.
104|S11|0|В споре я могу использовать слабые места человека, если он сам начал.
105|S11|0|Мне проще сохранять холодную голову, чем переживать чужие эмоции.
106|S11|0|Я не люблю, когда моральные аргументы мешают эффективности.
107|S11|0|Если человек позволяет собой пользоваться, он сам частично за это отвечает.
108|S11|0|Я могу быть обаятельным(ой), даже когда внутренне не расположен(а) к человеку.
109|S11|1|Мне трудно причинить человеку дискомфорт, даже если это выгодно.
110|S11|1|Чувство вины сильно влияет на мои решения.
111|S12|0|У меня часто много идей, контактов и планов.
112|S12|0|Я быстро включаюсь в новые возможности.
113|S12|0|Люди часто воспринимают меня как активного(ую) или инициативного(ую).
114|S12|0|Мне легче двигаться, когда вокруг есть общение и события.
115|S12|0|Я могу заряжать других своим настроением.
116|S12|0|Мне скучно, если жизнь слишком предсказуема.
117|S12|0|Я быстро восстанавливаюсь после мелких неудач.
118|S12|0|В компании я легко нахожу тему для разговора.
119|S12|1|Мне обычно требуется много времени, чтобы включиться в новое дело.
120|S12|1|Я предпочитаю очень спокойный ритм и минимум событий.
`;

const publicDimensions = {
  S1: {
    label: "Эмоциональная динамика",
    insight: "Ваши реакции могут быть быстрыми и насыщенными. Это помогает тонко чувствовать контакт, но требует бережной саморегуляции."
  },
  S2: {
    label: "Потребность в ясности контакта",
    insight: "Для вас важны понятные сигналы близости и надежности. Неопределенность может быстро становиться внутренним шумом."
  },
  S3: {
    label: "Автономность",
    insight: "Вам нужно пространство для восстановления и самостоятельной обработки опыта. Это не холодность, а способ сохранять устойчивость."
  },
  S4: {
    label: "Запрос на признание",
    insight: "Вам важно, чтобы вклад и уровень были замечены. Это усиливает амбицию, но делает критику более значимой."
  },
  S5: {
    label: "Выразительность",
    insight: "Вы умеете проявляться, считывать аудиторию и усиливать контакт через образ, речь или эмоцию."
  },
  S6: {
    label: "Структура и контроль",
    insight: "Вы лучше функционируете там, где есть ясность, правила и ответственность. Хаос быстро забирает ресурс."
  },
  S7: {
    label: "Настороженность к мотивам",
    insight: "Вы замечаете скрытые слои общения и редко доверяете автоматически. Это защищает, но иногда усиливает напряжение."
  },
  S8: {
    label: "Импульс и новизна",
    insight: "Ваша энергия растет там, где есть свобода, скорость и возможность действовать. Рутина может быстро гасить интерес."
  },
  S9: {
    label: "Аналитическая осторожность",
    insight: "Вы заранее видите риски и сценарии. Это дает точность, но может задерживать старт и усиливать сомнения."
  },
  S10: {
    label: "Чувствительность к оценке",
    insight: "Вы тонко чувствуете социальные нюансы. Поддерживающая среда раскрывает вас намного сильнее, чем давление."
  },
  S11: {
    label: "Жесткость в достижении цели",
    insight: "Когда задача важна, вы можете становиться холоднее и прямее. Это помогает результату, но требует внимания к границам других."
  },
  S12: {
    label: "Инициативность",
    insight: "У вас есть ресурс движения, идей и контакта. Сила профиля раскрывается там, где можно быстро включаться и вести."
  }
};

const answerLabels = [
  "Совсем не про меня",
  "Скорее не про меня",
  "Частично про меня",
  "Скорее про меня",
  "Очень точно про меня"
];

const submissionsConfig = {
  url: "https://ooxuclhybyiapkhgekph.supabase.co",
  key: "sb_publishable_ldOiB6YjhLlwBUaDjNbW4A_6qdnmC47",
  table: "test_submissions"
};

const questions = rawQuestions
  .trim()
  .split("\n")
  .map((line) => {
    const [id, scale, reverse, text] = line.split("|");
    return { id: Number(id), scale, reverse: reverse === "1", text };
  });

const state = {
  lead: {},
  current: 0,
  answers: new Array(questions.length).fill(null),
  latestScores: [],
  latestTier: "basic",
  profileCode: "",
  submittedEvents: new Set(),
  teasersShown: new Set(),
  teaserTimer: null
};

const elements = {
  leadForm: document.querySelector("#leadForm"),
  leadScreen: document.querySelector("[data-lead-screen]"),
  quizScreen: document.querySelector("[data-quiz-screen]"),
  resultScreen: document.querySelector("[data-result-screen]"),
  stepLabel: document.querySelector("[data-step-label]"),
  questionText: document.querySelector("[data-question-text]"),
  progressBar: document.querySelector("[data-progress-bar]"),
  answers: document.querySelector("[data-answers]"),
  quizTeaser: document.querySelector("[data-quiz-teaser]"),
  teaserTitle: document.querySelector("[data-teaser-title]"),
  teaserPercent: document.querySelector("[data-teaser-percent]"),
  signalDock: document.querySelector("[data-signal-dock]"),
  signalStatus: document.querySelector("[data-signal-status]"),
  signalChips: document.querySelector("[data-signal-chips]"),
  teaserToast: document.querySelector("[data-teaser-toast]"),
  toastTitle: document.querySelector("[data-toast-title]"),
  toastText: document.querySelector("[data-toast-text]"),
  back: document.querySelector("[data-back]"),
  reset: document.querySelector("[data-reset]"),
  resultTitle: document.querySelector("[data-result-title]"),
  resultSummary: document.querySelector("[data-result-summary]"),
  profileCode: document.querySelector("[data-profile-code]"),
  basicInsights: document.querySelector("[data-basic-insights]"),
  refLink: document.querySelector("[data-ref-link]"),
  copy: document.querySelector("[data-copy]"),
  upgrade: document.querySelector("[data-upgrade]"),
  middleReport: document.querySelector("[data-middle-report]"),
  paidVerdict: document.querySelector("[data-paid-verdict]"),
  passportShare: document.querySelector("[data-passport-share]"),
  attachmentStyle: document.querySelector("[data-attachment-style]"),
  darkRadicals: document.querySelector("[data-dark-radicals]"),
  resultDecoder: document.querySelector("[data-result-decoder]"),
  scoreList: document.querySelector("[data-score-list]"),
  middleRecommendations: document.querySelector("[data-middle-recommendations]"),
  lifeMap: document.querySelector("[data-life-map]"),
  answerList: document.querySelector("[data-answer-list]")
};

function renderQuestion() {
  const question = questions[state.current];
  const answered = state.answers[state.current];
  elements.stepLabel.textContent = `Шаг ${state.current + 1}`;
  elements.questionText.textContent = question.text;
  elements.progressBar.style.width = `${getCompletionPercent()}%`;
  elements.back.disabled = state.current === 0;
  elements.answers.innerHTML = answerLabels
    .map((label, index) => {
      const value = index + 1;
      const selected = answered === value ? " is-selected" : "";
      return `
        <button class="answer-button${selected}" type="button" data-value="${value}">
          <strong>${value}</strong>
          <span>${label}</span>
        </button>
      `;
    })
    .join("");
  renderLiveSignals();
}

function showQuiz() {
  elements.leadScreen.hidden = true;
  elements.resultScreen.hidden = true;
  elements.quizScreen.hidden = false;
  renderQuestion();
}

function calculateScores() {
  const totals = {};
  const counts = {};
  questions.forEach((question, index) => {
    const raw = state.answers[index] ?? 3;
    const value = question.reverse ? 6 - raw : raw;
    totals[question.scale] = (totals[question.scale] || 0) + value;
    counts[question.scale] = (counts[question.scale] || 0) + 1;
  });

  return Object.keys(totals).map((scale) => {
    const average = totals[scale] / counts[scale];
    const score = Math.round(((average - 1) / 4) * 100);
    return { scale, score, ...publicDimensions[scale] };
  });
}

function getCompletionPercent() {
  const answeredCount = state.answers.filter((answer) => answer !== null).length;
  return Math.round((answeredCount / questions.length) * 100);
}

function calculatePartialScores() {
  const totals = {};
  const counts = {};

  questions.forEach((question, index) => {
    const raw = state.answers[index];
    if (raw === null) return;
    const value = question.reverse ? 6 - raw : raw;
    totals[question.scale] = (totals[question.scale] || 0) + value;
    counts[question.scale] = (counts[question.scale] || 0) + 1;
  });

  return Object.keys(totals)
    .filter((scale) => counts[scale] >= 3)
    .map((scale) => {
      const average = totals[scale] / counts[scale];
      const score = Math.round(((average - 1) / 4) * 100);
      return { scale, score, count: counts[scale], ...publicDimensions[scale] };
    })
    .sort((a, b) => b.score - a.score);
}

function getLiveSignalCopy(answeredCount, partialScores) {
  if (answeredCount < 10 || !partialScores.length) {
    return {
      status: "Нужно еще несколько ответов",
      title: "Первые сигналы появятся скоро",
      chips: []
    };
  }

  const top = partialScores.slice(0, 3);
  const strongest = top[0];
  const contrast = top.length > 1 ? Math.abs(top[0].score - top[top.length - 1].score) : 0;
  const status =
    answeredCount < 40
      ? "Черновой контур"
      : answeredCount < 80
        ? "Профиль проявляется"
        : "Паспорт почти собран";
  const title =
    contrast >= 18
      ? `Уже виден сильный вектор: ${strongest.label.toLowerCase()}`
      : `Пока проявляется смешанный профиль`;

  return {
    status,
    title,
    chips: top.map((item) => ({
      label: item.label,
      score: item.score,
      text: item.score >= 70 ? "сильный сигнал" : item.score >= 55 ? "заметный сигнал" : "ситуативно"
    }))
  };
}

function renderLiveSignals() {
  const answeredCount = state.answers.filter((answer) => answer !== null).length;
  const completion = getCompletionPercent();
  const partialScores = calculatePartialScores();
  const signal = getLiveSignalCopy(answeredCount, partialScores);

  elements.quizTeaser.hidden = answeredCount < 3;
  elements.signalDock.hidden = answeredCount < 10;
  elements.teaserTitle.textContent = signal.title;
  elements.teaserPercent.textContent = `${completion}%`;
  elements.signalStatus.textContent = signal.status;
  elements.signalChips.innerHTML = signal.chips
    .map(
      (chip) => `
        <article class="signal-chip">
          <div>
            <strong>${chip.label}</strong>
            <span>${chip.text}</span>
          </div>
          <b>${chip.score}%</b>
        </article>
      `
    )
    .join("");
}

function getTeaserMilestone(answeredCount) {
  const milestones = {
    12: {
      title: "Первые контуры уже видны",
      text: "Паспорт начал собирать не ответы по отдельности, а повторяющиеся реакции."
    },
    24: {
      title: "Профиль становится контрастнее",
      text: "Уже можно заметить, где вы чаще тянетесь к контролю, близости или дистанции."
    },
    40: {
      title: "Скоро появится первый слой",
      text: "Еще немного, и алгоритм сможет точнее отделить случайные ответы от устойчивого сценария."
    },
    60: {
      title: "Половина паспорта собрана",
      text: "Сейчас проявляются не только сильные стороны, но и защитные стратегии."
    },
    80: {
      title: "Темные радикалы уже намечены",
      text: "Финальный отчет покажет, где ваша сила может превращаться в давление."
    },
    100: {
      title: "Финальный слой близко",
      text: "Остались последние вопросы. После них откроется базовый результат и паспорт личности."
    }
  };

  return milestones[answeredCount] || null;
}

function showTeaserToast(answeredCount) {
  const milestone = getTeaserMilestone(answeredCount);
  if (!milestone || state.teasersShown.has(answeredCount)) return;
  state.teasersShown.add(answeredCount);

  elements.toastTitle.textContent = milestone.title;
  elements.toastText.textContent = milestone.text;
  elements.teaserToast.hidden = false;
  elements.teaserToast.classList.add("is-visible");

  window.clearTimeout(state.teaserTimer);
  state.teaserTimer = window.setTimeout(() => {
    elements.teaserToast.classList.remove("is-visible");
    window.setTimeout(() => {
      elements.teaserToast.hidden = true;
    }, 250);
  }, 4200);
}

function makeProfileCode(scores) {
  const seed = `${state.lead.email || "demo"}:${scores.map((item) => item.score).join("-")}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return `NP-${Math.abs(hash).toString(36).slice(0, 6).toUpperCase()}`;
}

function encodeResultPayload(payload) {
  const json = JSON.stringify(payload);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

function decodeResultPayload(value) {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function makeResultUrl(tier = state.latestTier) {
  const url = new URL(window.location.href);
  const payload = {
    v: 1,
    code: state.profileCode,
    tier,
    scores: state.latestScores.map((item) => [item.scale, item.score]),
    answers: state.answers.map((answer) => answer || 0).join("")
  };

  url.searchParams.delete("ref");
  url.searchParams.set("result", encodeResultPayload(payload));
  url.hash = "test";
  return url.toString();
}

function cleanText(value) {
  const trimmed = String(value || "").trim();
  return trimmed || null;
}

function hasConsent() {
  return state.lead.consent === "on" || state.lead.consent === true;
}

function getReferralSource() {
  const params = new URLSearchParams(window.location.search);
  return cleanText(params.get("ref")) || cleanText(state.lead.partnerCode);
}

function buildSubmissionPayload(eventType, tier) {
  const answers = questions.map((question, index) => {
    const value = state.answers[index] || null;
    return {
      question_id: question.id,
      scale: question.scale,
      reverse: question.reverse,
      value,
      label: value ? answerLabels[value - 1] : null,
      text: question.text
    };
  });

  return {
    profile_code: state.profileCode,
    event_type: eventType,
    tier,
    source: getReferralSource(),
    name: cleanText(state.lead.name),
    email: cleanText(state.lead.email),
    goal: cleanText(state.lead.goal),
    occupation: cleanText(state.lead.occupation),
    partner_code: cleanText(state.lead.partnerCode),
    result_url: makeResultUrl(tier),
    page_url: window.location.href,
    user_agent: navigator.userAgent,
    scores: state.latestScores.map((item) => ({
      scale: item.scale,
      label: item.label,
      score: item.score
    })),
    answers,
    consent: hasConsent(),
    metadata: {
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language || null,
      attachment_style: getAttachmentProfile(state.latestScores),
      dark_radicals: summarizeDarkRadicals(state.latestScores).map((item) => ({
        id: item.id,
        title: item.title,
        score: item.score,
        level: darkRadicalLevel(item.score)
      }))
    }
  };
}

async function submitResult(eventType = "result", tier = state.latestTier) {
  const hasCompleteAnswers = state.answers.every((answer) => answer >= 1 && answer <= 5);
  if (!hasConsent() || !state.profileCode || !state.latestScores.length || !hasCompleteAnswers) return;

  const eventKey = `${state.profileCode}:${eventType}:${tier}`;
  if (state.submittedEvents.has(eventKey)) return;
  state.submittedEvents.add(eventKey);

  try {
    const response = await fetch(`${submissionsConfig.url}/rest/v1/${submissionsConfig.table}`, {
      method: "POST",
      headers: {
        apikey: submissionsConfig.key,
        Authorization: `Bearer ${submissionsConfig.key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(buildSubmissionPayload(eventType, tier))
    });

    if (!response.ok) {
      throw new Error(`Submission failed with ${response.status}`);
    }
  } catch (error) {
    state.submittedEvents.delete(eventKey);
    console.warn("Could not submit result", error);
  }
}

function hydrateScores(compactScores) {
  return compactScores
    .map(([scale, score]) => ({
      scale,
      score: Number(score),
      ...publicDimensions[scale]
    }))
    .filter((item) => item.label && Number.isFinite(item.score))
    .sort((a, b) => b.score - a.score);
}

function resetUnlockedReports() {
  elements.middleReport.hidden = true;
  elements.paidVerdict.innerHTML = "";
  elements.passportShare.innerHTML = "";
  elements.attachmentStyle.innerHTML = "";
  elements.darkRadicals.innerHTML = "";
  elements.resultDecoder.innerHTML = "";
  elements.scoreList.innerHTML = "";
  elements.middleRecommendations.innerHTML = "";
  elements.lifeMap.innerHTML = "";
  elements.answerList.innerHTML = "";
  elements.upgrade.classList.remove("is-unlocked");
  elements.upgrade.innerHTML = '<i data-lucide="lock-keyhole" aria-hidden="true"></i> Открыть за $40';
}

function renderBasicResult(scores, code) {
  const topScores = scores.slice(0, 3);
  const tone = resultTone(topScores);

  elements.leadScreen.hidden = true;
  elements.quizScreen.hidden = true;
  elements.resultScreen.hidden = false;
  elements.resultTitle.textContent = tone.title;
  elements.resultSummary.textContent = tone.summary;
  elements.profileCode.textContent = code;
  elements.refLink.value = makeResultUrl();
  elements.basicInsights.innerHTML = topScores
    .map(
      (item, index) => `
        <article class="insight">
          <span>Зона ${index + 1}</span>
          <strong>${item.label}</strong>
          <p>${item.insight}</p>
        </article>
      `
    )
    .join("");
}

function resultTone(topScores) {
  const spread = topScores[0].score - topScores[2].score;
  if (topScores[0].score >= 74 && spread >= 14) {
    return {
      title: "Ваш базовый профиль имеет выраженный ведущий вектор",
      summary:
        "Одна динамика заметно сильнее остальных, поэтому в стрессовых и важных ситуациях она может определять ваш способ реагирования. Платный отчет покажет, где это становится преимуществом, а где создает трение."
    };
  }
  if (topScores[0].score >= 64) {
    return {
      title: "Ваш базовый профиль выглядит контрастным",
      summary:
        "В ответах заметно несколько сильных линий поведения. Такой профиль часто дает глубину, но может создавать внутренний конфликт между разными потребностями."
    };
  }
  return {
    title: "Ваш базовый профиль выглядит сбалансированным",
    summary:
      "Ответы не показывают одного резко доминирующего вектора. Вероятно, ваш стиль сильно зависит от контекста, уровня доверия и текущей нагрузки."
  };
}

function levelLabel(score) {
  if (score >= 85) return "доминирует";
  if (score >= 70) return "высоко";
  if (score >= 55) return "заметно";
  if (score >= 35) return "умеренно";
  return "спокойно";
}

function scoreMap(scores) {
  return Object.fromEntries(scores.map((item) => [item.scale, item.score]));
}

function modelScore(map, criteria) {
  const totalWeight = criteria.reduce((sum, item) => sum + item.weight, 0);
  const total = criteria.reduce((sum, item) => {
    const raw = map[item.scale] ?? 50;
    const value = item.inverse ? 100 - raw : raw;
    return sum + value * item.weight;
  }, 0);
  return Math.round(total / totalWeight);
}

function rankModels(scores, models) {
  const map = scoreMap(scores);
  return models
    .map((model) => ({
      ...model,
      score: modelScore(map, model.criteria)
    }))
    .sort((a, b) => b.score - a.score);
}

function getAccentuationModels() {
  return [
    {
      name: "шизоидной акцентуации",
      compact: "шизоидный профиль",
      criteria: [
        { scale: "S3", weight: 1.5 },
        { scale: "S9", weight: 0.4 },
        { scale: "S5", weight: 0.5, inverse: true },
        { scale: "S2", weight: 0.4, inverse: true }
      ],
      sharp:
        "Вы держите дистанцию не потому, что ничего не чувствуете, а потому что близость быстро начинает требовать слишком много доступа к вам."
    },
    {
      name: "демонстративно-нарциссической акцентуации",
      compact: "демонстративно-нарциссический профиль",
      criteria: [
        { scale: "S4", weight: 1.25 },
        { scale: "S5", weight: 1 },
        { scale: "S11", weight: 0.45 },
        { scale: "S10", weight: 0.25, inverse: true }
      ],
      sharp:
        "Вам важно не просто быть хорошим человеком, а быть заметным, выбранным и признанным. Игнор вы можете переживать как скрытое обесценивание."
    },
    {
      name: "лабильно-зависимой акцентуации",
      compact: "лабильно-зависимый профиль",
      criteria: [
        { scale: "S1", weight: 1.25 },
        { scale: "S2", weight: 1.2 },
        { scale: "S10", weight: 0.5 },
        { scale: "S3", weight: 0.3, inverse: true }
      ],
      sharp:
        "Ваше состояние слишком сильно зависит от качества контакта. Когда человек становится холоднее, психика быстро пытается вернуть ясность."
    },
    {
      name: "психастенически-сенситивной акцентуации",
      compact: "психастенически-сенситивный профиль",
      criteria: [
        { scale: "S9", weight: 1.15 },
        { scale: "S10", weight: 1.1 },
        { scale: "S6", weight: 0.35 },
        { scale: "S8", weight: 0.35, inverse: true }
      ],
      sharp:
        "Вы слишком хорошо видите последствия, поэтому можете тормозить там, где другим легче рискнуть. Ошибка для вас часто ощущается не как факт, а как удар по самооценке."
    },
    {
      name: "эпилептоидно-контролирующей акцентуации",
      compact: "контролирующий профиль",
      criteria: [
        { scale: "S6", weight: 1.2 },
        { scale: "S7", weight: 0.75 },
        { scale: "S11", weight: 0.7 },
        { scale: "S8", weight: 0.25, inverse: true }
      ],
      sharp:
        "Вы плохо переносите хаос, слабые договоренности и чужую беспечность. Контроль для вас не каприз, а способ не дать миру развалиться."
    },
    {
      name: "паранойяльно-застревающей акцентуации",
      compact: "застревающий профиль",
      criteria: [
        { scale: "S7", weight: 1.25 },
        { scale: "S6", weight: 0.8 },
        { scale: "S4", weight: 0.35 }
      ],
      sharp:
        "Вы быстро замечаете несправедливость и скрытые мотивы. Проблема в том, что психика может продолжать расследование даже там, где уже пора выйти из ситуации."
    },
    {
      name: "гипертимно-импульсивной акцентуации",
      compact: "гипертимно-импульсивный профиль",
      criteria: [
        { scale: "S12", weight: 1.15 },
        { scale: "S8", weight: 1 },
        { scale: "S9", weight: 0.35, inverse: true },
        { scale: "S3", weight: 0.25, inverse: true }
      ],
      sharp:
        "Вы оживаете от движения, новизны и возможности действовать. Риск в том, что интерес может закончиться быстрее, чем обязательства."
    },
    {
      name: "конформно-зависимой акцентуации",
      compact: "конформно-зависимый профиль",
      criteria: [
        { scale: "S2", weight: 1.1 },
        { scale: "S10", weight: 0.7 },
        { scale: "S3", weight: 0.7, inverse: true },
        { scale: "S4", weight: 0.25, inverse: true }
      ],
      sharp:
        "Вам легче быть устойчивым, когда есть принятие и понятная роль. Без опоры на людей вы можете терять уверенность быстрее, чем показываете."
    }
  ];
}

function getPatternModels() {
  return [
    {
      name: "шизоидными чертами",
      compact: "шизоидные черты",
      criteria: [
        { scale: "S3", weight: 1.4 },
        { scale: "S5", weight: 0.5, inverse: true },
        { scale: "S2", weight: 0.35, inverse: true }
      ]
    },
    {
      name: "нарциссическими чертами",
      compact: "нарциссические черты",
      criteria: [
        { scale: "S4", weight: 1.25 },
        { scale: "S5", weight: 0.8 },
        { scale: "S11", weight: 0.45 }
      ]
    },
    {
      name: "пограничным паттерном",
      compact: "пограничные черты",
      criteria: [
        { scale: "S1", weight: 1.15 },
        { scale: "S2", weight: 1.1 },
        { scale: "S8", weight: 0.55 }
      ]
    },
    {
      name: "ананкастными чертами",
      compact: "ананкастные черты",
      criteria: [
        { scale: "S6", weight: 1.1 },
        { scale: "S9", weight: 0.8 },
        { scale: "S8", weight: 0.35, inverse: true }
      ]
    },
    {
      name: "параноидными чертами",
      compact: "параноидные черты",
      criteria: [
        { scale: "S7", weight: 1.2 },
        { scale: "S6", weight: 0.65 }
      ]
    },
    {
      name: "избегающими чертами",
      compact: "избегающие черты",
      criteria: [
        { scale: "S10", weight: 1.1 },
        { scale: "S9", weight: 0.85 },
        { scale: "S3", weight: 0.35 }
      ]
    },
    {
      name: "зависимыми чертами",
      compact: "зависимые черты",
      criteria: [
        { scale: "S2", weight: 1.15 },
        { scale: "S10", weight: 0.65 },
        { scale: "S3", weight: 0.65, inverse: true }
      ]
    },
    {
      name: "диссоциальными чертами",
      compact: "диссоциальные черты",
      criteria: [
        { scale: "S11", weight: 1.05 },
        { scale: "S8", weight: 0.75 },
        { scale: "S2", weight: 0.45, inverse: true },
        { scale: "S10", weight: 0.45, inverse: true }
      ]
    }
  ];
}

function getDarkRadicalModels() {
  return [
    {
      id: "dissocial",
      title: "Психопатический / диссоциальный радикал",
      compact: "психопатический / диссоциальный слой",
      criteria: [
        { scale: "S11", weight: 1.25 },
        { scale: "S8", weight: 0.65 },
        { scale: "S2", weight: 0.35, inverse: true },
        { scale: "S10", weight: 0.35, inverse: true }
      ],
      text:
        "В ситуациях цели, конкуренции или конфликта вы можете становиться холоднее, жестче и расчетливее, чем люди ожидают.",
      decode:
        "Это про способность временно отключать мягкость, сочувствие и вину, если на первом месте стоит результат, победа или контроль.",
      example:
        "В жизни это может выглядеть как давление в споре, обход правил, использование слабых мест человека или фраза: \"если это работает, значит это оправдано\".",
      risk:
        "Риск: давление начинает казаться нормальным способом решать вопросы, а чужой дискомфорт - слабостью или помехой."
    },
    {
      id: "narcissistic",
      title: "Нарциссический радикал",
      compact: "нарциссический слой",
      criteria: [
        { scale: "S4", weight: 1.2 },
        { scale: "S5", weight: 0.65 },
        { scale: "S11", weight: 0.35 }
      ],
      text:
        "Вам важно быть выбранным, заметным и признанным. Игнор может переживаться не как нейтральность, а как скрытое обесценивание.",
      decode:
        "Это про чувствительность к статусу, восхищению, особому отношению и ощущению собственной ценности в глазах других.",
      example:
        "В жизни это может выглядеть как болезненная реакция на равнодушие, желание доказать уровень или быстрое обесценивание тех, кто не оценил ваш вклад.",
      risk:
        "Риск: вы можете быстро обесценивать людей, если они не подтверждают ваш уровень или не дают нужного восхищения."
    },
    {
      id: "paranoid",
      title: "Параноидный радикал",
      compact: "параноидный слой",
      criteria: [
        { scale: "S7", weight: 1.25 },
        { scale: "S6", weight: 0.5 },
        { scale: "S4", weight: 0.25 }
      ],
      text:
        "Вы быстро считываете мотивы, выгоду и потенциальную угрозу. Это дает точность, но не всегда дает покой.",
      decode:
        "Это про настороженность: психика ищет, где скрытый мотив, подвох, неуважение, предательство или попытка получить выгоду за ваш счет.",
      example:
        "В жизни это может выглядеть как проверка слов поступками, память на старые обиды и привычка заранее понимать, кто что хочет.",
      risk:
        "Риск: отношения могут превращаться в проверку, где человек сначала должен доказать, что он не против вас."
    },
    {
      id: "machiavellian",
      title: "Макиавеллистический радикал",
      compact: "макиавеллистический слой",
      criteria: [
        { scale: "S11", weight: 0.75 },
        { scale: "S7", weight: 0.7 },
        { scale: "S5", weight: 0.55 },
        { scale: "S4", weight: 0.35 },
        { scale: "S10", weight: 0.2, inverse: true }
      ],
      text:
        "Вы можете видеть коммуникацию как шахматную доску: кто чего хочет, где слабое место, каким образом получить нужную реакцию.",
      decode:
        "Это про стратегическое влияние: умение читать людей, выбирать роль, управлять впечатлением и добиваться нужного поведения через точные ходы.",
      example:
        "В жизни это может выглядеть как обаяние по задаче, продуманная подача себя, мягкое давление или расчет, что именно заставит человека согласиться.",
      risk:
        "Риск: обаяние и чтение людей становятся инструментом контроля, а не способом настоящего контакта."
    },
    {
      id: "risk",
      title: "Импульсивно-рисковый радикал",
      compact: "импульсивно-рисковый слой",
      criteria: [
        { scale: "S8", weight: 1.15 },
        { scale: "S12", weight: 0.75 },
        { scale: "S9", weight: 0.3, inverse: true }
      ],
      text:
        "Вас может заряжать скорость, новизна и ощущение свободы. Решение иногда появляется раньше, чем полный расчет последствий.",
      decode:
        "Это про тягу к действию, риску, быстрым решениям и живому ощущению \"я могу\". Рамки и рутина быстро снижают энергию.",
      example:
        "В жизни это может выглядеть как резкие сообщения, траты, обещания, смена планов или запуск нового дела до того, как понятны последствия.",
      risk:
        "Риск: интерес заканчивается быстрее, чем обязательства, а резкое действие приходится объяснять уже после."
    },
    {
      id: "dominant",
      title: "Контролирующе-доминантный радикал",
      compact: "контролирующе-доминантный слой",
      criteria: [
        { scale: "S6", weight: 1.1 },
        { scale: "S11", weight: 0.7 },
        { scale: "S7", weight: 0.45 }
      ],
      text:
        "Вы можете держать систему, правила и людей в жестком контуре. Это дает порядок, но рядом может ощущаться как давление.",
      decode:
        "Это про потребность управлять хаосом: задать правила, распределить ответственность, убрать слабые места и заставить систему работать.",
      example:
        "В жизни это может выглядеть как жесткость к ошибкам, нетерпимость к беспорядку и желание, чтобы люди делали не \"как-нибудь\", а правильно.",
      risk:
        "Риск: люди начинают бояться ошибки и перестают быть партнерами, превращаясь в исполнителей."
    },
    {
      id: "destructive",
      title: "Эмоционально-разрушительный радикал",
      compact: "эмоционально-разрушительный слой",
      criteria: [
        { scale: "S1", weight: 1.1 },
        { scale: "S2", weight: 0.85 },
        { scale: "S8", weight: 0.45 },
        { scale: "S3", weight: 0.25, inverse: true }
      ],
      text:
        "В близости эмоции могут быстро переходить в резкие слова, проверки, угрозу разрыва или попытку срочно вернуть контроль.",
      decode:
        "Это про эмоциональную эскалацию: когда боль, страх отвержения или неопределенность быстро превращаются в сильную реакцию.",
      example:
        "В жизни это может выглядеть как качели \"подойди ближе - уйди\", резкие сообщения, проверка чувств или желание немедленно закрыть тревогу.",
      risk:
        "Риск: конфликт становится способом доказать боль, хотя на деле разрушает безопасность контакта."
    }
  ];
}

function darkRadicalLevel(score) {
  if (score >= 85) return "очень высокий";
  if (score >= 70) return "высокий";
  if (score >= 55) return "заметный";
  if (score >= 40) return "умеренный";
  return "спокойный";
}

function summarizeDarkRadicals(scores) {
  return rankModels(scores, getDarkRadicalModels());
}

function selectDarkRadicals(scores) {
  const ranked = summarizeDarkRadicals(scores);
  const selected = ranked.slice(0, 3);
  const dissocial = ranked.find((item) => item.id === "dissocial");

  if (dissocial && dissocial.score >= 70 && !selected.some((item) => item.id === dissocial.id)) {
    selected[selected.length - 1] = dissocial;
  }

  return selected.sort((a, b) => b.score - a.score);
}

function getAttachmentProfile(scores) {
  const map = scoreMap(scores);
  const anxiety = modelScoreFromMap(map, [
    { scale: "S2", weight: 1.05 },
    { scale: "S1", weight: 0.8 },
    { scale: "S10", weight: 0.75 },
    { scale: "S9", weight: 0.45 },
    { scale: "S4", weight: 0.35 },
    { scale: "S7", weight: 0.25 },
    { scale: "S8", weight: 0.25 },
    { scale: "S3", weight: 0.2, inverse: true }
  ]);
  const avoidance = modelScoreFromMap(map, [
    { scale: "S3", weight: 1.05 },
    { scale: "S7", weight: 0.75 },
    { scale: "S11", weight: 0.45 },
    { scale: "S6", weight: 0.3 },
    { scale: "S2", weight: 0.35, inverse: true },
    { scale: "S5", weight: 0.25, inverse: true },
    { scale: "S1", weight: 0.2, inverse: true }
  ]);
  const highAnxiety = anxiety >= 55;
  const highAvoidance = avoidance >= 55;

  if (highAnxiety && highAvoidance) {
    return {
      id: "fearful",
      name: "тревожно-избегающий стиль привязанности",
      compact: "тревожно-избегающий стиль",
      anxiety,
      avoidance,
      summary:
        "Вам может быть нужна близость, но когда человек становится значимым, близость одновременно начинает пугать. Поэтому возможны качели: приблизиться, проверить, почувствовать угрозу, отстраниться или начать давить.",
      risk:
        "Главный риск - путать спокойную близость с потерей контроля, а паузу партнера с отвержением или скрытой угрозой.",
      need:
        "Помогает медленная ясность: проговаривать правила контакта, не проверять человека через боль и не исчезать в момент тревоги."
    };
  }

  if (highAnxiety) {
    return {
      id: "anxious",
      name: "тревожный стиль привязанности",
      compact: "тревожный стиль",
      anxiety,
      avoidance,
      summary:
        "Контакт может становиться главным источником безопасности. Молчание, холодный тон или неопределенность быстро запускают попытку вернуть ясность и подтверждение.",
      risk:
        "Главный риск - начинать искать доказательства любви там, где нужна спокойная просьба или прямой разговор.",
      need:
        "Помогают регулярные договоренности, ясные сигналы близости и способность выдерживать паузу без мгновенной проверки."
    };
  }

  if (highAvoidance) {
    return {
      id: "avoidant",
      name: "избегающий стиль привязанности",
      compact: "избегающий стиль",
      anxiety,
      avoidance,
      summary:
        "Близость может ощущаться как давление, потеря свободы или вторжение. Поэтому психика выбирает дистанцию, контроль, рациональность и самостоятельную обработку чувств.",
      risk:
        "Главный риск - выглядеть холоднее, чем вы есть, и обрывать контакт как раз тогда, когда партнеру нужна понятность.",
      need:
        "Помогает заранее обозначать границы и объяснять дистанцию словами, а не тишиной или резким уходом."
    };
  }

  return {
    id: "secure",
    name: "надежный стиль привязанности",
    compact: "надежный стиль",
    anxiety,
    avoidance,
    summary:
      "Вам в целом доступна близость без сильной потери себя. Вы можете просить, говорить, выдерживать паузы и возвращаться к контакту после напряжения.",
    risk:
      "Главный риск появляется не из базового стиля, а из перегруза: при сильном стрессе могут временно включаться тревожные или избегающие защиты.",
    need:
      "Помогают честные договоренности, спокойная обратная связь и партнеры, которые не превращают близость в контроль."
  };
}

function modelScoreFromMap(map, criteria) {
  const totalWeight = criteria.reduce((sum, item) => sum + item.weight, 0);
  const total = criteria.reduce((sum, item) => {
    const raw = map[item.scale] ?? 50;
    const value = item.inverse ? 100 - raw : raw;
    return sum + value * item.weight;
  }, 0);
  return Math.round(total / totalWeight);
}

function classifyProfile(scores) {
  const accentuations = rankModels(scores, getAccentuationModels());
  const patterns = rankModels(scores, getPatternModels());
  const primaryAccent = accentuations[0];
  const secondaryAccent = accentuations[1];
  const primaryPattern = patterns[0];
  const secondaryPattern = patterns[1];
  const range = scores[0].score - scores[scores.length - 1].score;
  const confidence = range < 10 ? "низкая" : primaryAccent.score >= 65 ? "высокая" : "средняя";

  return {
    primaryAccent,
    secondaryAccent,
    primaryPattern,
    secondaryPattern,
    confidence,
    range,
    headline: `Скорее всего, ваш профиль ближе к ${primaryAccent.name} с ${primaryPattern.name}.`
  };
}

function getBrandType(profile, radicals) {
  const topRadical = radicals[0]?.id;
  const accent = profile.primaryAccent.compact;

  if (accent.includes("демонстративно") && topRadical === "machiavellian") return "Опасный харизматик";
  if (accent.includes("демонстративно") && topRadical === "narcissistic") return "Зеркальный стратег";
  if (accent.includes("шизоид")) return "Закрытый наблюдатель";
  if (accent.includes("лабильно")) return "Эмоциональный магнит";
  if (accent.includes("психастен")) return "Тревожный аналитик";
  if (accent.includes("контролир")) return "Доминантный архитектор";
  if (accent.includes("застрева")) return "Холодный детектор";
  if (accent.includes("гипертим")) return "Импульсивный двигатель";
  if (accent.includes("конформ")) return "Чуткий адаптер";
  return "Контрастный профиль";
}

function getAccentDeepCopy(accent) {
  const compact = accent.compact;
  if (compact.includes("шизоид")) {
    return {
      hook: "Психика строит внутреннюю крепость: снаружи может быть спокойствие, внутри - сложная система наблюдения, анализа и дистанции.",
      plus: "В плюсе это дает независимость, глубину, оригинальное мышление и способность не растворяться в чужих эмоциях.",
      stress: "В стрессе контакт начинает ощущаться как вторжение. Человек может уходить в холод, молчание, рационализацию или исчезновение.",
      growth: "Главный рост - учиться объяснять дистанцию словами, а не заставлять других гадать, есть ли вы еще в контакте."
    };
  }
  if (compact.includes("демонстративно")) {
    return {
      hook: "Психика сильно завязана на видимость, признание и эффект присутствия. Ваша энергия раскрывается, когда вас видят и выбирают.",
      plus: "В плюсе это дает харизму, вкус к сцене, умение влиять, собирать внимание и превращать себя в событие.",
      stress: "В стрессе игнор, холод или обесценивание переживаются слишком остро. Может включаться демонстрация силы, обиды или быстрый разворот в презрение.",
      growth: "Главный рост - отделять реальную ценность от реакции аудитории: не каждое молчание означает, что вас обесценили."
    };
  }
  if (compact.includes("лабильно")) {
    return {
      hook: "Ваше состояние быстро меняется от качества контакта. Близость может давать мощный заряд, а пауза - резкий провал безопасности.",
      plus: "В плюсе это дает живость, эмпатию, эмоциональную заразительность и способность тонко чувствовать нюансы отношений.",
      stress: "В стрессе возможны качели: приблизиться, проверить, вспыхнуть, оттолкнуть, а потом снова искать контакт.",
      growth: "Главный рост - не превращать тревогу в проверку любви. Сначала стабилизация, потом разговор."
    };
  }
  if (compact.includes("психастен")) {
    return {
      hook: "Психика работает как аналитическая лаборатория: сначала сценарии, риски и последствия, потом действие.",
      plus: "В плюсе это дает точность, ответственность, глубокое мышление и способность видеть слабые места до того, как они стали проблемой.",
      stress: "В стрессе анализ может стать ловушкой: слишком много вариантов, слишком высокая цена ошибки, слишком поздний старт.",
      growth: "Главный рост - переводить анализ в действие раньше, чем мозг построит еще десять катастрофических сценариев."
    };
  }
  if (compact.includes("контролир")) {
    return {
      hook: "Базовый способ снижать тревогу - держать систему в руках: правила, порядок, ответственность, качество.",
      plus: "В плюсе это дает надежность, управленческую силу, способность держать стандарт и не разваливаться под давлением.",
      stress: "В стрессе контроль превращается в микроменеджмент: люди рядом начинают чувствовать себя не партнерами, а исполнителями.",
      growth: "Главный рост - контролировать не людей, а систему: правила, метрики, границы и зоны ответственности."
    };
  }
  if (compact.includes("застрева")) {
    return {
      hook: "Главный механизм - ригидность: идея, обида, цель или несправедливость долго удерживаются внутри и продолжают давать энергию.",
      plus: "В плюсе это дает упорство, верность цели, память на детали, чувство справедливости и способность копать глубже остальных.",
      stress: "В стрессе трудно переключиться. Старый конфликт может жить в голове дольше, чем сама ситуация существовала в реальности.",
      growth: "Главный рост - научиться закрывать внутренние процессы: не все, что было несправедливо, должно управлять вами годами."
    };
  }
  if (compact.includes("гипертим")) {
    return {
      hook: "Психика оживает от движения, риска, людей и новых возможностей. Скука для такого профиля часто тяжелее, чем нагрузка.",
      plus: "В плюсе это дает скорость, инициативу, заражающую энергию, легкость входа в новые проекты и социальную смелость.",
      stress: "В стрессе можно действовать быстрее, чем успевает включиться расчет последствий: обещания, траты, резкие решения.",
      growth: "Главный рост - ставить тормоза не на энергию, а на момент принятия обязательств."
    };
  }
  return {
    hook: "Ваша устойчивость сильно зависит от понятной роли, принятия и качества социальной среды.",
    plus: "В плюсе это дает адаптивность, социальный интеллект, способность чувствовать правила группы и держать контакт.",
    stress: "В стрессе может появляться зависимость от внешнего подтверждения: без опоры на людей уверенность снижается быстрее.",
    growth: "Главный рост - строить внутреннюю опору, чтобы принятие других усиливало вас, но не управляло вами полностью."
  };
}

function getPatternDeepCopy(pattern) {
  const compact = pattern.compact;
  if (compact.includes("шизоид")) {
    return {
      hook: "Шизоидный слой - это защита через дистанцию, автономию и внутренний мир.",
      mechanism: "Вы можете быть рядом физически, но психологически держать отдельную комнату, куда не пускаете почти никого.",
      risk: "Риск - выглядеть холоднее, чем вы есть, и терять людей не из-за отсутствия чувств, а из-за отсутствия понятных сигналов."
    };
  }
  if (compact.includes("нарцисс")) {
    return {
      hook: "Нарциссический слой - это чувствительность к ценности, статусу, восхищению и особому отношению.",
      mechanism: "Вам важно не просто быть нормальным, а быть выбранным, заметным, сильным, лучшим в значимой системе координат.",
      risk: "Риск - быстро обесценивать людей или отношения, если они не подтверждают ваш уровень."
    };
  }
  if (compact.includes("погранич")) {
    return {
      hook: "Пограничный слой, он же ПРЛ-радикал в бытовом языке, - это высокая чувствительность к близости, отвержению и неопределенности.",
      mechanism: "Когда контакт становится небезопасным, психика может резко усиливать эмоцию: проверить, приблизить, оттолкнуть, вернуть контроль.",
      risk: "Риск - превращать тревогу в драму, а потребность в ясности - в проверку человека на прочность."
    };
  }
  if (compact.includes("ананкаст")) {
    return {
      hook: "Ананкастный слой - это защита через порядок, правильность, контроль ошибок и высокие стандарты.",
      mechanism: "Психика пытается снизить тревогу через структуру: если все просчитано, аккуратно и правильно, значит опасность меньше.",
      risk: "Риск - застревать в идеальной подготовке и требовать от людей такой точности, которую они не выдерживают."
    };
  }
  if (compact.includes("параноид")) {
    return {
      hook: "Параноидный слой - это мощный радар скрытых мотивов, угроз, выгоды и неуважения.",
      mechanism: "Вы быстро считываете, кто что хочет, где слабое место, где подвох и кто может оказаться ненадежным.",
      risk: "Риск - жить в режиме проверки, где человек сначала должен доказать, что он не против вас."
    };
  }
  if (compact.includes("избега")) {
    return {
      hook: "Избегающий слой - это защита от уязвимости, оценки, стыда и слишком близкого доступа к вам.",
      mechanism: "Можно быть умным, сильным и социальным, но при угрозе эмоционального проигрыша технично отступать в дистанцию.",
      risk: "Риск - выходить из контакта именно тогда, когда честный разговор мог бы укрепить связь."
    };
  }
  if (compact.includes("зависим")) {
    return {
      hook: "Зависимый слой - это поиск безопасности через связь, принятие и понятную фигуру рядом.",
      mechanism: "Контакт становится способом стабилизировать себя: если человек рядом, понятен и теплый, внутри легче держаться.",
      risk: "Риск - подстраиваться сильнее, чем хочется, и терять свои границы ради сохранения близости."
    };
  }
  return {
    hook: "Диссоциальный слой - это холодная, инструментальная часть профиля, которая включается там, где важны цель, выгода и победа.",
    mechanism: "В нужный момент психика может снижать эмпатию, отключать вину и действовать жестче, чем от вас ожидают.",
    risk: "Риск - начать считать давление, манипуляцию или обход правил нормальной ценой результата."
  };
}

function getVerdictArchetypeCopy(brandType) {
  const map = {
    "Опасный харизматик": "Это профиль человека, который может входить в комнату как событие: считывать людей, управлять впечатлением и превращать внимание в ресурс.",
    "Зеркальный стратег": "Это профиль человека, который остро чувствует признание и умеет строить образ, но внутри постоянно сверяет: меня правда ценят или просто используют?",
    "Закрытый наблюдатель": "Это профиль человека, который видит больше, чем показывает. Снаружи дистанция, внутри - сложная карта людей, рисков и смыслов.",
    "Эмоциональный магнит": "Это профиль человека, вокруг которого быстро возникает напряжение, близость и сильные реакции. Его трудно не заметить и трудно читать поверхностно.",
    "Тревожный аналитик": "Это профиль человека, который слишком хорошо видит последствия. Его сила - точность, его цена - внутреннее напряжение перед ошибкой.",
    "Доминантный архитектор": "Это профиль человека, который строит систему, держит стандарт и плохо переносит хаос. Его энергия включается там, где нужно навести порядок.",
    "Холодный детектор": "Это профиль человека, который быстро замечает слабые места, скрытые мотивы и несправедливость. Он редко верит словам без проверки действиями.",
    "Импульсивный двигатель": "Это профиль человека, который оживает от скорости, новизны и возможности действовать. Там, где другим страшно, ему часто становится интересно.",
    "Чуткий адаптер": "Это профиль человека, который тонко считывает среду и людей. Его сила - социальная чувствительность, его риск - зависеть от внешнего принятия."
  };
  return map[brandType] || "Это контрастный профиль: в нем несколько сильных линий тянут в разные стороны, поэтому человек может быть сложнее, чем кажется по первому впечатлению.";
}

function renderDetailedVerdict(profile, scores) {
  const radicals = selectDarkRadicals(scores);
  const brandType = getBrandType(profile, radicals);
  const primaryAccent = getAccentDeepCopy(profile.primaryAccent);
  const secondaryAccent = getAccentDeepCopy(profile.secondaryAccent);
  const primaryPattern = getPatternDeepCopy(profile.primaryPattern);
  const secondaryPattern = getPatternDeepCopy(profile.secondaryPattern);
  const topScores = scores.slice(0, 3);
  const leadingRadical = radicals[0];
  const layers = [
    {
      label: "Акцентуация · база",
      title: profile.primaryAccent.compact,
      text: primaryAccent.hook,
      plus: primaryAccent.plus,
      stress: primaryAccent.stress
    },
    {
      label: "Акцентуация · надстройка",
      title: profile.secondaryAccent.compact,
      text: secondaryAccent.hook,
      plus: secondaryAccent.plus,
      stress: secondaryAccent.stress
    },
    {
      label: "Паттерн · защита",
      title: profile.primaryPattern.compact,
      text: primaryPattern.hook,
      plus: primaryPattern.mechanism,
      stress: primaryPattern.risk
    },
    {
      label: "Паттерн · тень",
      title: profile.secondaryPattern.compact,
      text: secondaryPattern.hook,
      plus: secondaryPattern.mechanism,
      stress: secondaryPattern.risk
    }
  ];
  const chain = [
    `Слой "${profile.primaryPattern.compact}" показывает, где небезопасно, где есть оценка, слабое место или риск потери контроля.`,
    `Слой "${profile.primaryAccent.compact}" превращает это в устойчивый способ действия: не разовую реакцию, а повторяемый сценарий.`,
    `Слой "${profile.secondaryAccent.compact}" добавляет второй режим поведения, который включается, когда ставки становятся выше.`,
    `Слой "${profile.secondaryPattern.compact}" защищает самое уязвимое место: близость, самооценку, автономию или право быть сильным.`
  ];
  const riskCards = [
    {
      title: "Суперсила",
      text: `Сильнее всего в профиле сейчас звучат ${topScores.map((item) => item.label.toLowerCase()).join(", ")}. Это дает энергию, которой другие часто не обладают.`
    },
    {
      title: "Темный радикал",
      text: `${leadingRadical.compact} на уровне ${leadingRadical.score}% показывает, где сила может становиться давлением, холодом, проверкой или драмой.`
    },
    {
      title: "Главный рычаг роста",
      text: primaryAccent.growth
    }
  ];

  return `
    <section class="verdict-deep" aria-label="Подробная расшифровка главного вывода">
      <div class="verdict-deep-head">
        <span>Подробная расшифровка</span>
        <h4>Архетип профиля: ${brandType}</h4>
        <p>
          ${getVerdictArchetypeCopy(brandType)} В связке это создает мощный, но
          энергозатратный психологический коктейль: много ресурса, много защиты
          и несколько мест, где сила может резко становиться проблемой.
        </p>
      </div>

      <div class="verdict-layer-grid">
        ${layers
          .map(
            (layer) => `
              <article class="verdict-layer">
                <span>${layer.label}</span>
                <h5>${layer.title}</h5>
                <p>${layer.text}</p>
                <dl>
                  <div>
                    <dt>В плюсе</dt>
                    <dd>${layer.plus}</dd>
                  </div>
                  <div>
                    <dt>В стрессе</dt>
                    <dd>${layer.stress}</dd>
                  </div>
                </dl>
              </article>
            `
          )
          .join("")}
      </div>

      <div class="verdict-synergy">
        <span>Как это работает в связке</span>
        <h5>Почему вы можете узнавать себя сразу в нескольких описаниях</h5>
        <ol class="verdict-chain">
          ${chain.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </div>

      <div class="verdict-risk-grid">
        ${riskCards
          .map(
            (card) => `
              <article>
                <span>${card.title}</span>
                <p>${card.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPaidVerdict(scores) {
  const profile = classifyProfile(scores);
  const flatWarning =
    profile.range < 10
      ? `<p class="verdict-warning">Ответы выглядят слишком ровными. Типологический вывод можно читать как предварительный: для точности лучше отвечать не из позиции "как надо", а из позиции "как обычно бывает".</p>`
      : "";

  elements.paidVerdict.innerHTML = `
    <article class="verdict-card">
      <span>Главный вывод</span>
      <h3>${profile.headline}</h3>
      <p>
        Это не диагноз и не медицинское заключение. Но по самооценке видно:
        ваш основной сценарий — ${profile.primaryAccent.compact}, а в стрессовых отношениях
        заметнее всего могут включаться ${profile.primaryPattern.compact}.
      </p>
      ${flatWarning}
      <div class="type-grid">
        <div>
          <b>Система акцентуаций</b>
          <strong>${profile.primaryAccent.compact}</strong>
          <small>второй слой: ${profile.secondaryAccent.compact}</small>
          <p class="type-note">Акцентуация - это не диагноз, а усиленная черта характера. Она показывает, какой стиль поведения становится особенно заметным в стрессе, близости, конкуренции или ситуации оценки.</p>
        </div>
        <div>
          <b>Система личностных паттернов</b>
          <strong>${profile.primaryPattern.compact}</strong>
          <small>второй слой: ${profile.secondaryPattern.compact}</small>
          <p class="type-note">Паттерн - это повторяющийся сценарий: как человек защищается, ищет признание, строит контакт, реагирует на угрозу и объясняет себе свое поведение.</p>
        </div>
      </div>
      <p class="sharp-line">${profile.primaryAccent.sharp}</p>
      ${renderDetailedVerdict(profile, scores)}
    </article>
  `;
}

function renderPassportShare(scores) {
  const profile = classifyProfile(scores);
  const radicals = selectDarkRadicals(scores);
  const attachment = getAttachmentProfile(scores);
  const brandType = getBrandType(profile, radicals);
  const topRadical = radicals[0];
  const topScores = scores.slice(0, 3);

  elements.passportShare.innerHTML = `
    <article class="passport-card" data-passport-card>
      <div class="passport-top">
        <span>WHOAMI Personality Passport</span>
        <b>Full Profile Unlocked</b>
      </div>
      <h4>${brandType}</h4>
      <div class="passport-meta">
        <span>Serial ${state.profileCode}</span>
        <span>${new Date().toLocaleDateString("ru-RU")}</span>
        <span>Private details hidden</span>
      </div>
      <div class="passport-lines">
        <div>
          <small>Identity class</small>
          <strong>${profile.primaryAccent.compact}</strong>
        </div>
        <div>
          <small>Attachment mode</small>
          <strong>${attachment.compact}</strong>
        </div>
        <div>
          <small>Shadow signature</small>
          <strong>${topRadical.title} · ${topRadical.score}%</strong>
        </div>
      </div>
      <div class="passport-score-strip">
        ${topScores
          .map(
            (item) => `
          <div>
            <span>${item.score}%</span>
            <small>${item.label}</small>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="passport-footer-line">
        <span>Public status card</span>
        <span>NOESIS method · not a diagnosis</span>
      </div>
    </article>
    <div class="passport-actions">
      <button class="price-button dark" type="button" data-download-passport>
        <i data-lucide="download" aria-hidden="true"></i>
        Скачать паспорт для сторис
      </button>
      <p>Публичная fashion-карточка WHOAMI без ответов на вопросы и без личных данных. Методология NOESIS остается внутри, а наружу выходит статусный паспорт.</p>
    </div>
  `;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 2) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  });
  if (line) lines.push(line);

  lines.slice(0, maxLines).forEach((currentLine, index) => {
    const suffix = index === maxLines - 1 && lines.length > maxLines ? "..." : "";
    ctx.fillText(`${currentLine}${suffix}`, x, y + index * lineHeight);
  });

  return y + Math.min(lines.length, maxLines) * lineHeight;
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function downloadPassportImage() {
  const profile = classifyProfile(state.latestScores);
  const radicals = selectDarkRadicals(state.latestScores);
  const attachment = getAttachmentProfile(state.latestScores);
  const brandType = getBrandType(profile, radicals);
  const topRadical = radicals[0];
  const topScores = state.latestScores.slice(0, 3);
  const canvas = document.createElement("canvas");
  const scale = 2;
  canvas.width = 1080 * scale;
  canvas.height = 1350 * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);

  ctx.fillStyle = "#111311";
  ctx.fillRect(0, 0, 1080, 1350);

  ctx.strokeStyle = "#b48a45";
  ctx.lineWidth = 3;
  ctx.strokeRect(42, 42, 996, 1266);

  ctx.fillStyle = "#fff8ec";
  roundRect(ctx, 76, 76, 928, 1198, 28);
  ctx.fill();
  ctx.strokeStyle = "#d5c4aa";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#111311";
  ctx.font = "700 34px Inter, Arial, sans-serif";
  ctx.fillText("WHOAMI", 124, 150);
  ctx.font = "500 20px Inter, Arial, sans-serif";
  ctx.fillStyle = "#7f2e3c";
  ctx.fillText("PERSONALITY PASSPORT", 124, 184);

  ctx.fillStyle = "#0f6a62";
  roundRect(ctx, 676, 118, 260, 54, 8);
  ctx.fill();
  ctx.fillStyle = "#fff8ec";
  ctx.font = "700 17px Inter, Arial, sans-serif";
  ctx.fillText("FULL PROFILE", 704, 141);
  ctx.fillText("UNLOCKED", 704, 163);

  ctx.strokeStyle = "#d5c4aa";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(124, 230);
  ctx.lineTo(936, 230);
  ctx.stroke();

  ctx.fillStyle = "#111311";
  ctx.font = "650 74px Georgia, serif";
  drawWrappedText(ctx, brandType, 124, 330, 790, 82, 2);

  ctx.fillStyle = "#6d6258";
  ctx.font = "500 22px Inter, Arial, sans-serif";
  ctx.fillText(`SERIAL ${state.profileCode}  ·  ${new Date().toLocaleDateString("ru-RU")}  ·  PRIVATE DETAILS HIDDEN`, 124, 500);

  const blocks = [
    ["IDENTITY CLASS", profile.primaryAccent.compact],
    ["ATTACHMENT MODE", attachment.compact],
    ["SHADOW SIGNATURE", `${topRadical.title} · ${topRadical.score}%`]
  ];

  let y = 600;
  blocks.forEach(([label, value]) => {
    ctx.fillStyle = "#fffdfa";
    roundRect(ctx, 124, y - 56, 812, 120, 12);
    ctx.fill();
    ctx.strokeStyle = "#d5c4aa";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#7f2e3c";
    ctx.font = "700 20px IBM Plex Mono, monospace";
    ctx.fillText(label, 154, y - 18);
    ctx.fillStyle = "#111311";
    ctx.font = "700 32px Inter, Arial, sans-serif";
    drawWrappedText(ctx, value, 154, y + 28, 730, 38, 2);
    y += 146;
  });

  ctx.fillStyle = "#111311";
  ctx.font = "700 26px Inter, Arial, sans-serif";
  ctx.fillText("TOP SIGNALS", 124, 1055);

  topScores.forEach((item, index) => {
    const x = 124 + index * 274;
    ctx.fillStyle = "#111311";
    roundRect(ctx, x, 1084, 246, 140, 12);
    ctx.fill();
    ctx.strokeStyle = "#b48a45";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = "#b48a45";
    ctx.font = "700 42px IBM Plex Mono, monospace";
    ctx.fillText(`${item.score}%`, x + 24, 1122);
    ctx.fillStyle = "#fff8ec";
    ctx.font = "700 21px Inter, Arial, sans-serif";
    drawWrappedText(ctx, item.label, x + 24, 1166, 190, 27, 2);
  });

  ctx.fillStyle = "#6d6258";
  ctx.font = "500 20px Inter, Arial, sans-serif";
  ctx.fillText("PUBLIC STATUS CARD · NOESIS METHOD · NOT A DIAGNOSIS", 124, 1248);

  const link = document.createElement("a");
  link.download = `${state.profileCode || "whoami"}-personality-passport.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function renderAttachmentStyle(scores) {
  const attachment = getAttachmentProfile(scores);
  const axisText = [
    {
      title: "Тревога привязанности",
      value: attachment.anxiety,
      text: "Насколько сильно неопределенность, пауза, холодный тон или дистанция запускают страх потери контакта."
    },
    {
      title: "Избегание близости",
      value: attachment.avoidance,
      text: "Насколько быстро близость начинает ощущаться как давление, потеря свободы или вторжение в личное пространство."
    }
  ];

  elements.attachmentStyle.innerHTML = `
    <article class="attachment-card">
      <div class="attachment-head">
        <span>Стиль привязанности</span>
        <h4>${attachment.name}</h4>
        <p>${attachment.summary}</p>
      </div>
      <div class="attachment-axis-grid">
        ${axisText
          .map(
            (axis) => `
              <article class="attachment-axis">
                <div class="attachment-axis-top">
                  <strong>${axis.title}</strong>
                  <b>${axis.value}%</b>
                </div>
                <div class="attachment-meter" aria-label="${axis.title}: ${axis.value}%">
                  <span style="width: ${axis.value}%"></span>
                </div>
                <p>${axis.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="attachment-note-grid">
        <div>
          <b>Главный риск</b>
          <p>${attachment.risk}</p>
        </div>
        <div>
          <b>Что помогает</b>
          <p>${attachment.need}</p>
        </div>
      </div>
    </article>
  `;
}

function renderDarkRadicals(scores) {
  const selected = selectDarkRadicals(scores);
  const leading = selected[0];
  const dissocial = summarizeDarkRadicals(scores).find((item) => item.id === "dissocial");
  const dissocialLine =
    dissocial && dissocial.score >= 70 && leading.id !== "dissocial"
      ? `Психопатический / диссоциальный радикал не стал главным типом, но имеет ${darkRadicalLevel(dissocial.score)} уровень: ${dissocial.score}%. Это значит, что жесткость может включаться как инструмент давления, защиты или достижения цели.`
      : `Главный жесткий слой сейчас: ${leading.compact}. Он показывает не диагноз, а способ, которым психика может защищаться, давить, контролировать или ускорять события.`;

  elements.darkRadicals.innerHTML = `
    <article class="dark-radicals-card">
      <div class="dark-radicals-head">
        <span>Темные радикалы профиля</span>
        <h4>${leading.title}: ${leading.score}%</h4>
        <p>${dissocialLine}</p>
      </div>
      <div class="dark-radical-grid">
        ${selected
          .map(
            (item) => `
              <article class="dark-radical">
                <div class="dark-radical-top">
                  <strong>${item.title}</strong>
                  <b>${item.score}%</b>
                </div>
                <div class="dark-meter" aria-label="${item.title}: ${item.score}%">
                  <span style="width: ${item.score}%"></span>
                </div>
                <small>${darkRadicalLevel(item.score)}</small>
                <p>${item.text}</p>
                <dl class="radical-explain">
                  <div>
                    <dt>Что это значит</dt>
                    <dd>${item.decode}</dd>
                  </div>
                  <div>
                    <dt>Как проявляется</dt>
                    <dd>${item.example}</dd>
                  </div>
                </dl>
                <p class="dark-risk">${item.risk}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderResultDecoder(scores) {
  const profile = classifyProfile(scores);
  const radicals = selectDarkRadicals(scores);
  const attachment = getAttachmentProfile(scores);
  const topScores = scores.slice(0, 3).map((item) => `${item.label} ${item.score}%`).join(", ");
  const cards = [
    {
      title: "Как читать проценты",
      text:
        "Процент показывает выраженность признака внутри этого теста, а не медицинскую норму. 85%+ значит, что черта часто управляет реакциями; 70%+ - заметно включается; 55%+ - проявляется ситуативно."
    },
    {
      title: "Главный тип",
      text: `Главный тип - это самый вероятный центр профиля. Здесь это ${profile.primaryAccent.compact}: через него чаще всего собираются реакции, защита, самооценка и стиль контакта.`
    },
    {
      title: "Второй слой",
      text: `Второй слой - не менее важная примесь, которая усиливается в отдельных ситуациях. У вас по системам рядом стоят ${profile.secondaryAccent.compact} и ${profile.secondaryPattern.compact}.`
    },
    {
      title: "Привязанность",
      text: `Стиль привязанности показывает, что происходит в близости: человек тянется к контакту, тревожится, отстраняется или делает и то и другое. Здесь вероятнее всего ${attachment.compact}.`
    },
    {
      title: "Темный радикал",
      text: `Темный радикал - это жесткая стратегия, которая может помогать выживать, побеждать или защищаться, но портить доверие. Ведущие радикалы сейчас: ${radicals.map((item) => item.compact).join(", ")}.`
    },
    {
      title: "Что смотреть первым",
      text: `Сначала смотрите не все шкалы подряд, а тройку самых высоких: ${topScores}. Именно их сочетание обычно создает главный характер результата.`
    }
  ];

  elements.resultDecoder.innerHTML = `
    <article class="decoder-card">
      <div class="decoder-head">
        <span>Расшифровка результата</span>
        <h4>Как понимать основные термины</h4>
        <p>Этот блок переводит психологические слова на обычный язык, чтобы отчет был понятен без подготовки.</p>
      </div>
      <div class="decoder-grid">
        ${cards
          .map(
            (card) => `
              <article class="decoder-item">
                <strong>${card.title}</strong>
                <p>${card.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderScoreList(scores) {
  elements.scoreList.innerHTML = scores
    .map(
      (item) => `
        <article class="score-row">
          <div>
            <strong>${item.label}</strong>
            <span>${levelLabel(item.score)}</span>
            <p>${item.insight}</p>
          </div>
          <div class="score-meter" aria-label="${item.label}: ${item.score}%">
            <span style="width: ${item.score}%"></span>
          </div>
          <b>${item.score}%</b>
        </article>
      `
    )
    .join("");
}

function renderMiddleRecommendations(scores) {
  const top = scores.slice(0, 3);
  const low = [...scores].sort((a, b) => a.score - b.score).slice(0, 1)[0];
  const profile = classifyProfile(scores);
  const cards = [
    {
      title: "Что видно сразу",
      text: `Ведущая линия — ${profile.primaryAccent.compact}. Это значит, что ваш характер не случайный набор реакций, а довольно устойчивый сценарий.`
    },
    {
      title: "Где может ломать",
      text: `${top[1].label} может включаться сильнее в близости, стрессе или ситуации оценки. Там вы рискуете реагировать жестче, чем планировали.`
    },
    {
      title: "Слепая зона",
      text: `${low.label} выражена спокойнее остальных. Иногда это ресурс, а иногда место, где другие ждут от вас реакции, которой у вас просто меньше.`
    }
  ];

  elements.middleRecommendations.innerHTML = cards
    .map(
      (card) => `
        <article class="recommendation-card">
          <span>${card.title}</span>
          <p>${card.text}</p>
        </article>
      `
    )
    .join("");
}

function renderLifeMap(scores) {
  const top = scores.slice(0, 3);
  const byScale = Object.fromEntries(scores.map((item) => [item.scale, item]));
  const profile = classifyProfile(scores);
  const autonomy = byScale.S3?.score ?? 50;
  const emotion = byScale.S1?.score ?? 50;
  const clarity = byScale.S2?.score ?? 50;
  const analysis = byScale.S9?.score ?? 50;
  const control = byScale.S6?.score ?? 50;
  const initiative = byScale.S12?.score ?? 50;
  const sensitivity = byScale.S10?.score ?? 50;

  const blocks = [
    {
      title: "Личное",
      icon: "user-round",
      text: `Ваш базовый стиль — ${profile.primaryAccent.compact}. Это значит, что вы не просто "так реагируете", а повторяете устойчивый способ защищать себя и управлять близостью.`
    },
    {
      title: "Отношения",
      icon: "heart",
      text:
        clarity >= 60
          ? "В отношениях вы можете требовать ясности сильнее, чем признаете. Если человек молчит, психика быстро достраивает худший сценарий, и это может превращать обычную паузу в драму."
          : "В отношениях вы можете казаться самодостаточнее, чем есть внутри. Риск в том, что партнер видит дистанцию и перестает пытаться подойти ближе."
    },
    {
      title: "Конфликты",
      icon: "messages-square",
      text:
        emotion >= 60
          ? "В споре вы можете сначала ударить эмоцией, а потом объяснять себе, что вас вынудили. Главная задача — не доказывать боль, а вовремя остановить эскалацию."
          : "В конфликте вы можете выглядеть спокойным, но это не всегда зрелость. Иногда это способ не подпустить человека к тому, что реально задело."
    },
    {
      title: "Коммуникация",
      icon: "message-circle",
      text:
        sensitivity >= 60
          ? "С вами нельзя грубо и обобщенно: вы запоминаете тон, а не только смысл. Но вам важно не превращать каждое неудачное слово другого человека в доказательство отвержения."
          : "С вами лучше говорить прямо. Намеки, эмоциональные игры и пассивная агрессия быстро вызывают раздражение или холодную отстраненность."
    },
    {
      title: "Стресс",
      icon: "activity",
      text:
        analysis >= 60
          ? "Под стрессом вы можете думать вместо того, чтобы жить. Анализ дает иллюзию контроля, но если он не заканчивается действием, он становится клеткой."
          : "В стрессе вы быстрее уходите в действие или переключение. Это спасает от застревания, но может мешать честно признать, что вам больно или страшно."
    },
    {
      title: "Карьера",
      icon: "briefcase-business",
      text:
        control >= 60
          ? "В работе вы сильны там, где можно навести порядок и держать стандарт. Но если вы не делегируете, люди рядом начинают чувствовать себя не партнерами, а исполнителями."
          : "Вам нужна среда с воздухом, свободой и быстрыми циклами. Риск — бросать скучную часть раньше, чем она начинает приносить результат."
    },
    {
      title: "Совместимость",
      icon: "link",
      text:
        autonomy >= 60
          ? "Вам подходят люди, которые не ломятся в вашу закрытость и не требуют постоянного слияния. Но слишком похожий партнер может превратить пару в двух соседей."
          : "Вам подходят люди, которые дают тепло, ясность и регулярный контакт. Но если человек слишком доступен, вы можете начать проверять его на прочность."
    },
    {
      title: "Как со мной общаться",
      icon: "sparkles",
      text:
        initiative >= 60
          ? "С вами лучше не разговаривать как с ребенком. Дайте пространство для решения, признайте вклад и обсуждайте ограничения как договор, а не как контроль."
          : "Вам нужно время на обработку. Если вас торопят с реакцией, вы можете согласиться внешне, но внутренне закрыться и выйти из контакта."
    }
  ];

  elements.lifeMap.innerHTML = blocks
    .map(
      (block) => `
        <article class="life-card">
          <i data-lucide="${block.icon}" aria-hidden="true"></i>
          <div>
            <h5>${block.title}</h5>
            <p>${block.text}</p>
          </div>
        </article>
      `
    )
    .join("");

  if (window.lucide) window.lucide.createIcons();
}

function renderAnswerArchive() {
  const hasAnswers = state.answers.some(Boolean);
  if (!hasAnswers) {
    elements.answerList.innerHTML = `
      <p class="answer-empty">В этой ссылке нет сохраненных ответов на отдельные вопросы. Пройдите тест заново и скопируйте новую ссылку результата.</p>
    `;
    return;
  }

  elements.answerList.innerHTML = questions
    .map((question, index) => {
      const value = state.answers[index] || 0;
      const label = value ? answerLabels[value - 1] : "Нет ответа";
      return `
        <article class="answer-row">
          <span>${question.id}</span>
          <p>${question.text}</p>
          <strong>${value || "—"} · ${label}</strong>
        </article>
      `;
    })
    .join("");
}

function unlockReport(options = {}) {
  if (!state.latestScores.length) return;
  state.latestTier = "paid";

  renderPaidVerdict(state.latestScores);
  renderPassportShare(state.latestScores);
  renderAttachmentStyle(state.latestScores);
  renderDarkRadicals(state.latestScores);
  renderResultDecoder(state.latestScores);
  renderScoreList(state.latestScores);
  renderMiddleRecommendations(state.latestScores);
  renderLifeMap(state.latestScores);
  renderAnswerArchive();
  elements.middleReport.hidden = false;
  elements.upgrade.classList.add("is-unlocked");
  elements.upgrade.innerHTML = '<i data-lucide="check" aria-hidden="true"></i> Платный отчет открыт';

  elements.refLink.value = makeResultUrl(state.latestTier);
  if (options.submit !== false) submitResult("paid_unlock", state.latestTier);
  if (window.lucide) window.lucide.createIcons();
  if (options.scroll !== false) {
    elements.middleReport.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showResult() {
  const scores = calculateScores().sort((a, b) => b.score - a.score);
  state.latestScores = scores;
  state.latestTier = "basic";
  state.profileCode = makeProfileCode(scores);
  resetUnlockedReports();
  renderBasicResult(scores, state.profileCode);
  submitResult("result", state.latestTier);

  window.requestAnimationFrame(() => {
    elements.progressBar.style.width = "100%";
  });
}

function showSharedResultFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("result");
  if (!encoded) return;

  try {
    const payload = decodeResultPayload(encoded);
    const scores = hydrateScores(payload.scores || []);
    if (!scores.length) return;

    state.latestScores = scores;
    state.latestTier = payload.tier === "paid" || payload.tier === "middle" || payload.tier === "full" ? "paid" : "basic";
    state.profileCode = payload.code || makeProfileCode(scores);
    if (typeof payload.answers === "string") {
      state.answers = payload.answers
        .slice(0, questions.length)
        .split("")
        .map((value) => {
          const answer = Number(value);
          return answer >= 1 && answer <= 5 ? answer : null;
        });
      while (state.answers.length < questions.length) {
        state.answers.push(null);
      }
    }
    resetUnlockedReports();
    renderBasicResult(scores, state.profileCode);

    if (state.latestTier === "paid") {
      unlockReport({ scroll: false, submit: false });
    }

    document.querySelector("#test")?.scrollIntoView({ block: "start" });
  } catch (error) {
    console.warn("Could not load shared result", error);
  }
}

elements.leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(elements.leadForm);
  state.lead = Object.fromEntries(formData.entries());
  showQuiz();
});

elements.answers.addEventListener("click", (event) => {
  const button = event.target.closest("[data-value]");
  if (!button) return;
  state.answers[state.current] = Number(button.dataset.value);
  const answeredCount = state.answers.filter((answer) => answer !== null).length;
  renderLiveSignals();
  showTeaserToast(answeredCount);

  if (state.current === questions.length - 1) {
    showResult();
    return;
  }

  state.current += 1;
  renderQuestion();
});

elements.back.addEventListener("click", () => {
  if (state.current === 0) return;
  state.current -= 1;
  renderQuestion();
});

elements.reset.addEventListener("click", () => {
  state.current = 0;
  state.answers.fill(null);
  state.teasersShown.clear();
  elements.quizTeaser.hidden = true;
  elements.signalDock.hidden = true;
  elements.teaserToast.hidden = true;
  renderQuestion();
});

elements.copy.addEventListener("click", async () => {
  await navigator.clipboard.writeText(elements.refLink.value);
  elements.copy.innerHTML = '<i data-lucide="check" aria-hidden="true"></i>';
  if (window.lucide) window.lucide.createIcons();
  window.setTimeout(() => {
    elements.copy.innerHTML = '<i data-lucide="copy" aria-hidden="true"></i>';
    if (window.lucide) window.lucide.createIcons();
  }, 1600);
});

elements.upgrade.addEventListener("click", () => unlockReport());

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-download-passport]");
  if (!button) return;
  downloadPassportImage();
});

if (window.lucide) {
  window.lucide.createIcons();
}

showSharedResultFromUrl();
