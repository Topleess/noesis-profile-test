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
  profileCode: ""
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
  back: document.querySelector("[data-back]"),
  reset: document.querySelector("[data-reset]"),
  resultTitle: document.querySelector("[data-result-title]"),
  resultSummary: document.querySelector("[data-result-summary]"),
  profileCode: document.querySelector("[data-profile-code]"),
  basicInsights: document.querySelector("[data-basic-insights]"),
  refLink: document.querySelector("[data-ref-link]"),
  copy: document.querySelector("[data-copy]"),
  upgrade: document.querySelector("[data-upgrade]"),
  extended: document.querySelector("[data-extended]"),
  middleReport: document.querySelector("[data-middle-report]"),
  fullReport: document.querySelector("[data-full-report]"),
  scoreList: document.querySelector("[data-score-list]"),
  middleRecommendations: document.querySelector("[data-middle-recommendations]"),
  lifeMap: document.querySelector("[data-life-map]")
};

function renderQuestion() {
  const question = questions[state.current];
  const answered = state.answers[state.current];
  elements.stepLabel.textContent = `Шаг ${state.current + 1}`;
  elements.questionText.textContent = question.text;
  elements.progressBar.style.width = `${(state.current / questions.length) * 100}%`;
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
    scores: state.latestScores.map((item) => [item.scale, item.score])
  };

  url.searchParams.delete("ref");
  url.searchParams.set("result", encodeResultPayload(payload));
  url.hash = "test";
  return url.toString();
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
  elements.fullReport.hidden = true;
  elements.scoreList.innerHTML = "";
  elements.middleRecommendations.innerHTML = "";
  elements.lifeMap.innerHTML = "";
  elements.upgrade.classList.remove("is-unlocked");
  elements.extended.classList.remove("is-unlocked");
  elements.upgrade.innerHTML = '<i data-lucide="lock-keyhole" aria-hidden="true"></i> Открыть за $40';
  elements.extended.innerHTML = '<i data-lucide="plus" aria-hidden="true"></i> Открыть за $80';
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
        "Одна динамика заметно сильнее остальных, поэтому в стрессовых и важных ситуациях она может определять ваш способ реагирования. Полный отчет покажет, где это становится преимуществом, а где создает трение."
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

function renderScoreList(scores) {
  elements.scoreList.innerHTML = scores
    .map(
      (item) => `
        <article class="score-row">
          <div>
            <strong>${item.label}</strong>
            <span>${levelLabel(item.score)}</span>
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
  const cards = [
    {
      title: "Главный ресурс",
      text: `${top[0].label}: ${top[0].insight}`
    },
    {
      title: "Зона внимания",
      text: `${top[1].label}: эта линия поведения может включаться сильнее в близости, стрессе или ситуации оценки.`
    },
    {
      title: "Баланс",
      text: `${low.label} выражена спокойнее остальных. Это может быть точкой устойчивости или зоной, которую стоит развивать осознанно.`
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
      text: `Ваш профиль сильнее всего строится вокруг "${top[0].label}". Это дает узнаваемый внутренний стиль: вы быстрее замечаете именно эту сторону жизни и чаще опираетесь на нее в решениях.`
    },
    {
      title: "Отношения",
      icon: "heart",
      text:
        clarity >= 60
          ? "В близости вам особенно важны ясность, регулярность контакта и понятные сигналы надежности. Молчание или неопределенность лучше проговаривать раньше, чем копить напряжение."
          : "В отношениях вы можете сохранять больше самостоятельности и не требовать постоянных подтверждений. Важно объяснять это партнеру, чтобы дистанция не считывалась как холодность."
    },
    {
      title: "Конфликты",
      icon: "messages-square",
      text:
        emotion >= 60
          ? "В споре эмоция может включаться быстрее логики. Помогает пауза, короткое обозначение состояния и возвращение к разговору после снижения накала."
          : "В конфликте вы, вероятно, стараетесь держать форму и смысл. Следите, чтобы спокойный тон не превращался в недоступность для другого человека."
    },
    {
      title: "Коммуникация",
      icon: "message-circle",
      text:
        sensitivity >= 60
          ? "С вами лучше говорить бережно и конкретно: меньше обобщений, больше фактов и признания намерений. Резкая критика может закрывать контакт."
          : "В коммуникации вам подходят прямые формулировки и ясные договоренности. Слишком размытые намеки могут быстрее раздражать, чем помогать."
    },
    {
      title: "Стресс",
      icon: "activity",
      text:
        analysis >= 60
          ? "Под давлением вы можете уходить в просчет сценариев. Это полезно для рисков, но восстановление требует телесного режима, сна и ограничения бесконечного анализа."
          : "В стрессе вам помогает действие и смена состояния. Важно не перескакивать слишком быстро через чувства, если ситуация требует проживания."
    },
    {
      title: "Карьера",
      icon: "briefcase-business",
      text:
        control >= 60
          ? "В работе вам подходят роли, где есть ответственность, структура и право улучшать систему. Хаос без полномочий будет быстро забирать ресурс."
          : "Вам может быть комфортнее среда с гибкостью, быстрыми циклами и свободой выбора. Слишком жесткая регламентация снижает интерес."
    },
    {
      title: "Совместимость",
      icon: "link",
      text:
        autonomy >= 60
          ? "Лучше подходят люди, которые уважают личное пространство и не воспринимают паузы как отвержение. Совместимость держится на ясных границах."
          : "Лучше подходят люди, которые умеют давать эмоциональную включенность и не исчезают в неопределенность. Совместимость держится на регулярном контакте."
    },
    {
      title: "Как со мной общаться",
      icon: "sparkles",
      text:
        initiative >= 60
          ? "Давайте пространство для инициативы, признавайте вклад и обсуждайте ограничения как договоренности, а не как контроль."
          : "Давайте время на обработку, не торопите с реакцией и фиксируйте договоренности письменно, если тема важная."
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

function unlockReport(type, options = {}) {
  if (!state.latestScores.length) return;
  const tier = type === "full" ? "full" : state.latestTier === "full" ? "full" : "middle";
  state.latestTier = tier;

  renderScoreList(state.latestScores);
  renderMiddleRecommendations(state.latestScores);
  elements.middleReport.hidden = false;
  elements.upgrade.classList.add("is-unlocked");
  elements.upgrade.innerHTML = '<i data-lucide="check" aria-hidden="true"></i> Средний отчет открыт';

  if (type === "full") {
    renderLifeMap(state.latestScores);
    elements.fullReport.hidden = false;
    elements.extended.classList.add("is-unlocked");
    elements.extended.innerHTML = '<i data-lucide="check" aria-hidden="true"></i> Полный отчет открыт';
  }

  elements.refLink.value = makeResultUrl(state.latestTier);
  if (window.lucide) window.lucide.createIcons();
  const target = type === "full" ? elements.fullReport : elements.middleReport;
  if (options.scroll !== false) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showResult() {
  const scores = calculateScores().sort((a, b) => b.score - a.score);
  state.latestScores = scores;
  state.latestTier = "basic";
  state.profileCode = makeProfileCode(scores);
  resetUnlockedReports();
  renderBasicResult(scores, state.profileCode);

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
    state.latestTier = payload.tier === "full" || payload.tier === "middle" ? payload.tier : "basic";
    state.profileCode = payload.code || makeProfileCode(scores);
    resetUnlockedReports();
    renderBasicResult(scores, state.profileCode);

    if (state.latestTier === "middle") {
      unlockReport("middle", { scroll: false });
    }

    if (state.latestTier === "full") {
      unlockReport("full", { scroll: false });
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

[elements.upgrade, elements.extended].forEach((button) => {
  button.addEventListener("click", () => unlockReport(button === elements.extended ? "full" : "middle"));
});

if (window.lucide) {
  window.lucide.createIcons();
}

showSharedResultFromUrl();
