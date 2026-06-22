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

const growthLibrary = {
  S1: {
    title: "Эмоциональная регуляция",
    focus: "замечать всплеск до сообщения, решения или резкой фразы",
    practice: "ввести паузу 20 минут перед ответом в конфликте и возвращаться к разговору уже с формулировкой запроса",
    compat: "договариваться о паузах в конфликте, чтобы сильная эмоция не превращалась в угрозу отношениям"
  },
  S2: {
    title: "Ясность в близости",
    focus: "просить подтверждение прямо, а не считывать его по паузам и интонациям",
    practice: "заменять внутреннюю проверку коротким вопросом: что между нами сейчас важно прояснить?",
    compat: "делать контакт предсказуемым: короткие договоренности, статус отношений, понятные ожидания"
  },
  S3: {
    title: "Дозированная близость",
    focus: "объяснять потребность в пространстве без холодности и исчезновения",
    practice: "называть срок дистанции: мне нужен вечер одному, завтра вернусь к разговору",
    compat: "разводить любовь и постоянный контакт: близость не обязана быть круглосуточной"
  },
  S4: {
    title: "Устойчивая самооценка",
    focus: "не отдавать ощущение ценности полностью в руки внешней реакции",
    practice: "перед конфликтом отделять факт, интерпретацию и уязвленное достоинство",
    compat: "давать признание без соревнования и критиковать поведение, а не уровень человека"
  },
  S5: {
    title: "Проявленность без перегрева",
    focus: "оставаться ярким, не превращая каждую эмоцию в сцену",
    practice: "проверять: я сейчас хочу быть понятным или хочу усилить впечатление?",
    compat: "оставлять место для тихого партнера и не измерять любовь интенсивностью реакции"
  },
  S6: {
    title: "Гибкость контроля",
    focus: "различать важный порядок и попытку снизить тревогу через контроль",
    practice: "выбирать одну зону, где можно допустить несовершенство без немедленной правки",
    compat: "договариваться о правилах заранее, но оставлять право на живую корректировку"
  },
  S7: {
    title: "Доверие без слепоты",
    focus: "проверять факты, не превращая каждую неопределенность в подозрение",
    practice: "перед выводом задавать один прямой вопрос вместо серии внутренних проверок",
    compat: "создавать прозрачность: меньше игр, больше прямых намерений и последовательных поступков"
  },
  S8: {
    title: "Импульс через паузу",
    focus: "сохранять свободу, но не платить за нее последствиями",
    practice: "для денег, обещаний и сообщений в сильной эмоции использовать правило одной ночи",
    compat: "планировать пространство для спонтанности, чтобы свобода не ломала договоренности"
  },
  S9: {
    title: "Решение без бесконечного анализа",
    focus: "останавливать сценарии там, где точность уже не растет",
    practice: "заранее назначать критерий: какой информации достаточно, чтобы начать?",
    compat: "не давить скоростью на осторожного партнера и не превращать осторожность в торможение пары"
  },
  S10: {
    title: "Смелость под оценкой",
    focus: "выходить в контакт до ощущения полной безопасности",
    practice: "делать маленькое проявление раньше, чем появится идеальная уверенность",
    compat: "давать мягкий вход в сложные темы без стыда, сарказма и публичного давления"
  },
  S11: {
    title: "Сила без давления",
    focus: "оставаться эффективным, не превращая холодность в инструмент власти",
    practice: "перед жестким ходом проверять цену: что это сделает с доверием через месяц?",
    compat: "не использовать слабые места партнера как аргументы, даже если спор стал острым"
  },
  S12: {
    title: "Ритм без распыления",
    focus: "не путать энергию движения с реальным приоритетом",
    practice: "держать не больше трех активных направлений и закрывать цикл до нового старта",
    compat: "согласовывать темп пары: инициативность должна вести, а не тащить второго человека"
  }
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
  teaserTimer: null,
  feedbackTimer: null,
  activeCategoryIndex: 0,
  reportCategories: [],
  activeDashboardBlock: "",
  neuroBrainFrame: null,
  avatarPalette: null,
  avatarBatch: 0,
  avatarVariants: [],
  selectedAvatar: ""
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
  passportDossier: document.querySelector("[data-passport-dossier]"),
  passportShare: document.querySelector("[data-passport-share]"),
  attachmentStyle: document.querySelector("[data-attachment-style]"),
  darkRadicals: document.querySelector("[data-dark-radicals]"),
  resultDecoder: document.querySelector("[data-result-decoder]"),
  growthZones: document.querySelector("[data-growth-zones]"),
  scoreList: document.querySelector("[data-score-list]"),
  middleRecommendations: document.querySelector("[data-middle-recommendations]"),
  lifeMap: document.querySelector("[data-life-map]"),
  answerList: document.querySelector("[data-answer-list]"),
  avatarInput: document.querySelector("[data-avatar-input]"),
  avatarRegenerate: document.querySelector("[data-avatar-regenerate]"),
  avatarStatus: document.querySelector("[data-avatar-status]"),
  avatarVariants: document.querySelector("[data-avatar-variants]"),
  avatarPreview: document.querySelector("[data-avatar-selected-preview]"),
  compatibilityLink: document.querySelector("[data-compatibility-link]"),
  compareInput: document.querySelector("[data-compare-input]"),
  compareCheck: document.querySelector("[data-compare-check]"),
  compareOutput: document.querySelector("[data-compare-output]"),
  feedbackModal: document.querySelector("[data-feedback-modal]"),
  feedbackForm: document.querySelector("[data-feedback-form]"),
  feedbackClose: document.querySelectorAll("[data-feedback-close]"),
  feedbackSubmit: document.querySelector("[data-feedback-submit]"),
  feedbackThanks: document.querySelector("[data-feedback-thanks]"),
  reportModal: document.querySelector("[data-report-modal]"),
  reportModalEyebrow: document.querySelector("[data-report-modal-eyebrow]"),
  reportModalTitle: document.querySelector("[data-report-modal-title]"),
  reportModalBody: document.querySelector("[data-report-modal-body]"),
  reportModalClose: document.querySelectorAll("[data-report-modal-close]")
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
  document.body.classList.remove("has-passport-result");
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

function buildResultPayload(tier = state.latestTier) {
  return {
    v: 1,
    code: state.profileCode,
    tier,
    scores: state.latestScores.map((item) => [item.scale, item.score]),
    answers: state.answers.map((answer) => answer || 0).join("")
  };
}

function getCurrentLanguageParam() {
  const language = document.documentElement.lang || window.localStorage.getItem("whoami_language") || "";
  return ["en", "ar"].includes(language) ? language : "";
}

function makeResultUrl(tier = state.latestTier) {
  const url = new URL("./passport.html", window.location.href);
  const language = getCurrentLanguageParam();
  url.searchParams.delete("ref");
  if (language) url.searchParams.set("lang", language);
  url.searchParams.set("result", encodeResultPayload(buildResultPayload(tier)));
  url.hash = "test";
  return url.toString();
}

function makeCompatibilityUrl(tier = state.latestTier) {
  const url = new URL("./compatibility.html", window.location.href);
  const language = getCurrentLanguageParam();
  if (language) url.searchParams.set("lang", language);
  url.searchParams.set("self", encodeResultPayload(buildResultPayload(tier)));
  return url.toString();
}

function hashText(value) {
  let hash = 2166136261;
  const text = String(value || "");
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let next = value;
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function clampNumber(value, min = 0, max = 255) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function normalizeColor(color, fallback = { r: 186, g: 138, b: 69 }) {
  return {
    r: clampNumber(color?.r ?? fallback.r),
    g: clampNumber(color?.g ?? fallback.g),
    b: clampNumber(color?.b ?? fallback.b)
  };
}

function mixColors(color, target, amount = 0.5) {
  const source = normalizeColor(color);
  const destination = normalizeColor(target);
  const ratio = Math.max(0, Math.min(1, amount));
  return {
    r: clampNumber(source.r + (destination.r - source.r) * ratio),
    g: clampNumber(source.g + (destination.g - source.g) * ratio),
    b: clampNumber(source.b + (destination.b - source.b) * ratio)
  };
}

function shadeColor(color, amount = 0) {
  const target = amount >= 0 ? { r: 255, g: 253, b: 247 } : { r: 23, g: 24, b: 25 };
  return mixColors(color, target, Math.abs(amount));
}

function colorCss(color) {
  const value = normalizeColor(color);
  return `rgb(${value.r}, ${value.g}, ${value.b})`;
}

function alphaColorCss(color, alpha = 1) {
  const value = normalizeColor(color);
  return `rgba(${value.r}, ${value.g}, ${value.b}, ${alpha})`;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + height - safeRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  ctx.lineTo(x + safeRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
  ctx.closePath();
}

function averageImageRegion(imageData, width, height, region, fallback, filter) {
  const [x1, y1, x2, y2] = region;
  const startX = Math.max(0, Math.floor(width * x1));
  const startY = Math.max(0, Math.floor(height * y1));
  const endX = Math.min(width, Math.ceil(width * x2));
  const endY = Math.min(height, Math.ceil(height * y2));
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;

  for (let y = startY; y < endY; y += 1) {
    for (let x = startX; x < endX; x += 1) {
      const index = (y * width + x) * 4;
      const color = {
        r: imageData[index],
        g: imageData[index + 1],
        b: imageData[index + 2],
        a: imageData[index + 3]
      };

      if (color.a < 18) continue;
      if (filter && !filter(color)) continue;

      r += color.r;
      g += color.g;
      b += color.b;
      count += 1;
    }
  }

  if (!count && filter) {
    return averageImageRegion(imageData, width, height, region, fallback);
  }

  if (!count) return normalizeColor(fallback);
  return normalizeColor({ r: r / count, g: g / count, b: b / count }, fallback);
}

function loadAvatarImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("avatar image load failed"));
    };

    image.src = objectUrl;
  });
}

function drawImageCover(ctx, image, width, height) {
  const imageRatio = image.width / image.height;
  const canvasRatio = width / height;
  const sourceWidth = imageRatio > canvasRatio ? image.height * canvasRatio : image.width;
  const sourceHeight = imageRatio > canvasRatio ? image.height : image.width / canvasRatio;
  const sourceX = (image.width - sourceWidth) / 2;
  const sourceY = (image.height - sourceHeight) / 2;
  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, width, height);
}

function analyzeAvatarPhoto(image, file) {
  const canvas = document.createElement("canvas");
  const size = 96;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  drawImageCover(ctx, image, size, size);
  const { data } = ctx.getImageData(0, 0, size, size);
  const brandTeal = { r: 15, g: 106, b: 98 };
  const brandBurgundy = { r: 127, g: 46, b: 60 };
  const brandBrass = { r: 180, g: 138, b: 69 };
  const visiblePixel = (color) => color.r + color.g + color.b > 70 && color.r + color.g + color.b < 735;

  const face = averageImageRegion(data, size, size, [0.32, 0.26, 0.68, 0.68], { r: 218, g: 166, b: 130 }, visiblePixel);
  const hair = averageImageRegion(data, size, size, [0.24, 0.05, 0.76, 0.34], { r: 48, g: 39, b: 34 }, visiblePixel);
  const clothes = averageImageRegion(data, size, size, [0.2, 0.68, 0.8, 0.95], brandTeal, visiblePixel);
  const background = averageImageRegion(data, size, size, [0.02, 0.02, 0.98, 0.24], { r: 247, g: 242, b: 232 }, visiblePixel);
  const seed = hashText(
    `${state.profileCode}:${file.name}:${file.size}:${face.r}-${face.g}-${face.b}:${hair.r}-${hair.g}-${hair.b}:${clothes.r}-${clothes.g}-${clothes.b}`
  );

  return {
    seed,
    face: mixColors(face, { r: 238, g: 188, b: 151 }, 0.18),
    hair: shadeColor(mixColors(hair, { r: 42, g: 33, b: 30 }, 0.22), -0.06),
    clothes: mixColors(clothes, brandTeal, 0.32),
    background: mixColors(background, { r: 255, g: 253, b: 247 }, 0.35),
    accents: [brandTeal, brandBurgundy, brandBrass]
  };
}

function drawAvatarVariant(palette, variantIndex, batchIndex) {
  const canvas = document.createElement("canvas");
  const width = 512;
  const height = 512;
  const random = seededRandom(palette.seed + variantIndex * 997 + batchIndex * 7919);
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;

  const accent = palette.accents[(variantIndex + batchIndex) % palette.accents.length];
  const secondAccent = palette.accents[(variantIndex + batchIndex + 1) % palette.accents.length];
  const backgroundGradient = ctx.createLinearGradient(0, 0, width, height);
  backgroundGradient.addColorStop(0, colorCss(shadeColor(palette.background, 0.22)));
  backgroundGradient.addColorStop(0.5, colorCss(mixColors(palette.background, accent, 0.18)));
  backgroundGradient.addColorStop(1, colorCss(mixColors({ r: 255, g: 253, b: 247 }, secondAccent, 0.15)));
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = colorCss(secondAccent);
  ctx.lineWidth = 18;
  for (let i = -2; i < 7; i += 1) {
    ctx.beginPath();
    ctx.moveTo(-80, 90 + i * 82);
    ctx.lineTo(590, -10 + i * 82);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.fillStyle = colorCss(shadeColor(accent, 0.35));
  drawRoundedRect(ctx, 48, 56, 416, 392, 42);
  ctx.fill();
  ctx.restore();

  const centerX = width / 2;
  const headWidth = 190 + random() * 26;
  const headHeight = 224 + random() * 22;
  const headY = 126 + random() * 10;
  const skin = normalizeColor(palette.face);
  const hair = normalizeColor(palette.hair);
  const clothes = normalizeColor(palette.clothes);
  const shoulderY = 380;

  ctx.save();
  ctx.shadowColor = "rgba(23, 24, 25, 0.18)";
  ctx.shadowBlur = 26;
  ctx.shadowOffsetY = 16;

  ctx.fillStyle = colorCss(shadeColor(clothes, -0.08));
  ctx.beginPath();
  ctx.ellipse(centerX, 500, 168, 132, 0, Math.PI, 0, true);
  ctx.fill();

  ctx.fillStyle = colorCss(shadeColor(skin, -0.06));
  drawRoundedRect(ctx, centerX - 42, shoulderY - 48, 84, 88, 32);
  ctx.fill();

  ctx.fillStyle = colorCss(hair);
  ctx.beginPath();
  ctx.moveTo(centerX - headWidth * 0.56, headY + 120);
  ctx.bezierCurveTo(centerX - headWidth * 0.68, headY + 28, centerX - headWidth * 0.28, headY - 38, centerX + 4, headY - 30);
  ctx.bezierCurveTo(centerX + headWidth * 0.44, headY - 38, centerX + headWidth * 0.64, headY + 36, centerX + headWidth * 0.55, headY + 126);
  ctx.bezierCurveTo(centerX + headWidth * 0.48, headY + 194, centerX - headWidth * 0.48, headY + 198, centerX - headWidth * 0.56, headY + 120);
  ctx.fill();

  ctx.fillStyle = colorCss(shadeColor(skin, -0.02));
  ctx.beginPath();
  ctx.ellipse(centerX - headWidth * 0.51, headY + 122, 20, 28, -0.12, 0, Math.PI * 2);
  ctx.ellipse(centerX + headWidth * 0.51, headY + 122, 20, 28, 0.12, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = colorCss(skin);
  ctx.beginPath();
  ctx.ellipse(centerX, headY + 126, headWidth / 2, headHeight / 2, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = colorCss(hair);
  ctx.beginPath();
  ctx.moveTo(centerX - headWidth * 0.48, headY + 68);
  ctx.bezierCurveTo(centerX - headWidth * 0.36, headY + 8, centerX - headWidth * 0.1, headY - 34, centerX + headWidth * 0.28, headY + 8);
  ctx.bezierCurveTo(centerX + headWidth * 0.42, headY + 28, centerX + headWidth * 0.48, headY + 54, centerX + headWidth * 0.47, headY + 92);
  ctx.bezierCurveTo(centerX + headWidth * 0.12, headY + 76, centerX - headWidth * 0.22, headY + 76, centerX - headWidth * 0.48, headY + 68);
  ctx.fill();

  if (variantIndex === 1 || random() > 0.58) {
    ctx.fillStyle = colorCss(shadeColor(hair, 0.07));
    ctx.beginPath();
    ctx.moveTo(centerX - 16, headY + 6);
    ctx.bezierCurveTo(centerX - 64, headY + 46, centerX - 72, headY + 88, centerX - 78, headY + 148);
    ctx.bezierCurveTo(centerX - 44, headY + 100, centerX - 10, headY + 70, centerX + 14, headY + 22);
    ctx.fill();
  }

  const eyeY = headY + 130;
  const eyeGap = 48;
  ctx.strokeStyle = colorCss(shadeColor(hair, -0.1));
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(centerX - eyeGap - 16, eyeY - 28);
  ctx.quadraticCurveTo(centerX - eyeGap, eyeY - 35, centerX - eyeGap + 18, eyeY - 28);
  ctx.moveTo(centerX + eyeGap - 18, eyeY - 28);
  ctx.quadraticCurveTo(centerX + eyeGap, eyeY - 35, centerX + eyeGap + 16, eyeY - 28);
  ctx.stroke();

  ctx.fillStyle = "#171819";
  ctx.beginPath();
  ctx.ellipse(centerX - eyeGap, eyeY, 8, 10, 0, 0, Math.PI * 2);
  ctx.ellipse(centerX + eyeGap, eyeY, 8, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 253, 247, 0.82)";
  ctx.beginPath();
  ctx.ellipse(centerX - eyeGap + 3, eyeY - 4, 2.5, 3, 0, 0, Math.PI * 2);
  ctx.ellipse(centerX + eyeGap + 3, eyeY - 4, 2.5, 3, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = alphaColorCss(shadeColor(skin, -0.28), 0.78);
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(centerX + 3, eyeY + 14);
  ctx.quadraticCurveTo(centerX - 6, eyeY + 42, centerX + 15, eyeY + 45);
  ctx.stroke();

  ctx.fillStyle = alphaColorCss(mixColors(skin, { r: 234, g: 96, b: 101 }, 0.42), 0.32);
  ctx.beginPath();
  ctx.ellipse(centerX - 66, eyeY + 38, 22, 12, -0.08, 0, Math.PI * 2);
  ctx.ellipse(centerX + 66, eyeY + 38, 22, 12, 0.08, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = colorCss(secondAccent);
  ctx.lineWidth = 7;
  ctx.beginPath();
  const smile = variantIndex === 2 ? 18 : 10 + random() * 8;
  ctx.moveTo(centerX - 28, eyeY + 76);
  ctx.quadraticCurveTo(centerX, eyeY + 76 + smile, centerX + 28, eyeY + 76);
  ctx.stroke();

  if (variantIndex === 0 || random() > 0.68) {
    ctx.strokeStyle = alphaColorCss(shadeColor(hair, -0.12), 0.8);
    ctx.lineWidth = 4;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(centerX - 78, eyeY - 16, 52, 34, 12);
      ctx.roundRect(centerX + 26, eyeY - 16, 52, 34, 12);
    } else {
      drawRoundedRect(ctx, centerX - 78, eyeY - 16, 52, 34, 12);
      drawRoundedRect(ctx, centerX + 26, eyeY - 16, 52, 34, 12);
    }
    ctx.moveTo(centerX - 26, eyeY + 1);
    ctx.lineTo(centerX + 26, eyeY + 1);
    ctx.stroke();
  }

  ctx.strokeStyle = alphaColorCss(secondAccent, 0.88);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(centerX - 102, 405);
  ctx.quadraticCurveTo(centerX, 450 + random() * 12, centerX + 102, 405);
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = alphaColorCss({ r: 255, g: 253, b: 247 }, 0.76);
  drawRoundedRect(ctx, 168, 454, 176, 34, 17);
  ctx.fill();
  ctx.fillStyle = colorCss(shadeColor(secondAccent, -0.12));
  ctx.font = "600 14px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("WHOAMI AVATAR", centerX, 471);

  return canvas.toDataURL("image/png");
}

function getAvatarStorageKey() {
  return `whoami-avatar:${state.profileCode || "draft"}`;
}

function setAvatarStatus(message) {
  if (elements.avatarStatus) elements.avatarStatus.textContent = message;
}

function loadSavedAvatar() {
  try {
    if (state.profileCode) {
      const profileAvatar = window.localStorage.getItem(getAvatarStorageKey());
      if (profileAvatar) return profileAvatar;
    }
    return window.localStorage.getItem("whoami-avatar:draft") || "";
  } catch (error) {
    return "";
  }
}

function saveSelectedAvatar(value) {
  const key = getAvatarStorageKey();
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.warn("Could not save avatar", error);
  }
}

function renderAvatarPreview() {
  if (!elements.avatarPreview) return;
  if (!state.selectedAvatar) {
    elements.avatarPreview.innerHTML = `
      <div class="avatar-empty">
        <i data-lucide="sparkles" aria-hidden="true"></i>
      </div>
    `;
  } else {
    elements.avatarPreview.innerHTML = `<img src="${state.selectedAvatar}" alt="Выбранная AI-аватарка" />`;
  }
  if (window.lucide) window.lucide.createIcons();
}

function renderAvatarVariants() {
  if (!elements.avatarVariants) return;
  elements.avatarVariants.innerHTML = state.avatarVariants
    .map(
      (avatar, index) => `
        <button class="avatar-option${state.selectedAvatar === avatar ? " is-selected" : ""}" type="button" data-avatar-index="${index}">
          <img src="${avatar}" alt="Вариант аватарки ${index + 1}" />
          <span>
            Вариант ${index + 1}
            ${state.selectedAvatar === avatar ? '<i data-lucide="check" aria-hidden="true"></i>' : ""}
          </span>
        </button>
      `
    )
    .join("");
  if (window.lucide) window.lucide.createIcons();
}

function resetAvatarStudio() {
  state.avatarPalette = null;
  state.avatarBatch = 0;
  state.avatarVariants = [];
  state.selectedAvatar = loadSavedAvatar();
  if (state.selectedAvatar && state.profileCode) saveSelectedAvatar(state.selectedAvatar);
  renderAvatarPreview();
  renderAvatarVariants();
  if (elements.avatarRegenerate) elements.avatarRegenerate.hidden = true;
  setAvatarStatus(
    state.selectedAvatar
      ? state.profileCode
        ? "Аватарка уже сохранена в этом паспорте."
        : "Аватарка сохранена как черновик. После теста она привяжется к паспорту."
      : "Нажмите “Фото / селфи”: на телефоне откроется камера или галерея."
  );
}

function generateAvatarBatch() {
  if (!state.avatarPalette) return;
  state.avatarVariants = [0, 1, 2].map((index) => drawAvatarVariant(state.avatarPalette, index, state.avatarBatch));
  state.selectedAvatar = "";
  renderAvatarPreview();
  renderAvatarVariants();
  if (elements.avatarRegenerate) elements.avatarRegenerate.hidden = false;
  setAvatarStatus("Готово. Выберите вариант, который сохранить в паспорте.");
}

function scrollToAvatarStudio() {
  document.querySelector("[data-avatar-studio]")?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

async function handleAvatarInputChange(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    setAvatarStatus("Нужен файл изображения: фото или селфи.");
    return;
  }

  setAvatarStatus("Генерирую 3 варианта...");
  try {
    const image = await loadAvatarImage(file);
    state.avatarPalette = analyzeAvatarPhoto(image, file);
    state.avatarBatch = 0;
    generateAvatarBatch();
    window.requestAnimationFrame(scrollToAvatarStudio);
  } catch (error) {
    console.warn("Could not generate avatar", error);
    setAvatarStatus("Не получилось прочитать фото. Попробуйте другое изображение.");
  } finally {
    event.target.value = "";
  }
}

function handleAvatarRegenerate() {
  if (!state.avatarPalette) return;
  state.avatarBatch += 1;
  setAvatarStatus("Генерирую новые варианты...");
  window.requestAnimationFrame(generateAvatarBatch);
}

function handleAvatarVariantClick(event) {
  const option = event.target.closest("[data-avatar-index]");
  if (!option) return;
  const index = Number(option.dataset.avatarIndex);
  const selected = state.avatarVariants[index];
  if (!selected) return;
  state.selectedAvatar = selected;
  saveSelectedAvatar(selected);
  renderAvatarPreview();
  renderAvatarVariants();
  setAvatarStatus(
    state.profileCode
      ? "Сохранено. Эту аватарку можно использовать как avatar_url в профиле."
      : "Сохранено как черновик. После теста аватарка привяжется к паспорту."
  );
}

function cleanText(value) {
  const trimmed = String(value || "").trim();
  return trimmed || null;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[char];
  });
}

function openReportModal({ eyebrow = "WHOAMI", title = "Расшифровка", body = "" }) {
  if (!elements.reportModal || !elements.reportModalBody) return;

  elements.reportModalEyebrow.textContent = eyebrow;
  elements.reportModalTitle.textContent = title;
  elements.reportModalBody.innerHTML = body;
  elements.reportModal.hidden = false;
  document.body.classList.add("has-report-modal");
  if (window.lucide) window.lucide.createIcons();
  if (window.whoamiTranslate) window.whoamiTranslate(elements.reportModal);
}

function closeReportModal() {
  if (!elements.reportModal) return;
  elements.reportModal.hidden = true;
  document.body.classList.remove("has-report-modal");
}

function renderModalMetrics(metrics = []) {
  if (!metrics.length) return "";

  return `
    <div class="report-modal-metrics">
      ${metrics
        .map(
          (metric) => `
            <div>
              <span>${Math.round(metric.value)}%</span>
              <small>${escapeHtml(metric.title)}</small>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderModalDetails(details = []) {
  if (!details.length) return "";

  return `
    <div class="report-modal-detail-grid">
      ${details
        .map(
          (detail) => `
            <article>
              <span>${escapeHtml(detail.title)}</span>
              <p>${escapeHtml(detail.text)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
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

function normalizeScores(rawScores) {
  if (!Array.isArray(rawScores)) return [];

  if (Array.isArray(rawScores[0])) {
    return hydrateScores(rawScores);
  }

  return rawScores
    .map((item) => {
      const scale = item?.scale;
      return {
        scale,
        score: Number(item?.score),
        ...publicDimensions[scale]
      };
    })
    .filter((item) => item.label && Number.isFinite(item.score))
    .sort((a, b) => b.score - a.score);
}

function resetUnlockedReports() {
  elements.middleReport.hidden = true;
  stopNeuroBrain();
  state.activeCategoryIndex = 0;
  state.activeDashboardBlock = "";
  elements.paidVerdict.innerHTML = "";
  elements.passportDossier.innerHTML = "";
  elements.passportShare.innerHTML = "";
  elements.attachmentStyle.innerHTML = "";
  elements.darkRadicals.innerHTML = "";
  elements.resultDecoder.innerHTML = "";
  elements.growthZones.innerHTML = "";
  elements.scoreList.innerHTML = "";
  elements.middleRecommendations.innerHTML = "";
  elements.lifeMap.innerHTML = "";
  elements.answerList.innerHTML = "";
  elements.upgrade.classList.remove("is-unlocked");
  elements.upgrade.innerHTML = '<i data-lucide="lock-keyhole" aria-hidden="true"></i> Открыть паспорт за $40';
}

function renderBasicResult(scores, code) {
  const topScores = scores.slice(0, 3);
  const tone = resultTone(topScores);

  elements.leadScreen.hidden = true;
  elements.quizScreen.hidden = true;
  elements.resultScreen.hidden = false;
  document.body.classList.add("has-passport-result");
  elements.resultTitle.textContent = tone.title;
  elements.resultSummary.textContent = tone.summary;
  elements.profileCode.textContent = code;
  elements.refLink.value = makeResultUrl();
  if (elements.compatibilityLink) {
    elements.compatibilityLink.href = makeCompatibilityUrl();
  }
  if (elements.compareInput && elements.compareOutput) {
    elements.compareInput.value = "";
    elements.compareOutput.hidden = true;
    elements.compareOutput.innerHTML = "";
  }
  resetAvatarStudio();
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

function getPersonalityStructures(scores, profile = classifyProfile(scores)) {
  const attachment = getAttachmentProfile(scores);
  const leadingRadical = selectDarkRadicals(scores)[0];
  const primaryPattern = getPatternDeepCopy(profile.primaryPattern);

  return [
    {
      label: "Структура 1",
      title: "Ведущая акцентуация",
      value: profile.primaryAccent.compact,
      score: profile.primaryAccent.score,
      meta: `уверенность вывода: ${profile.confidence}`,
      icon: "fingerprint",
      text: profile.primaryAccent.sharp
    },
    {
      label: "Структура 2",
      title: "Личностный паттерн",
      value: profile.primaryPattern.compact,
      score: profile.primaryPattern.score,
      meta: `второй слой: ${profile.secondaryPattern.compact}`,
      icon: "route",
      text: primaryPattern.hook
    },
    {
      label: "Структура 3",
      title: "Стиль привязанности",
      value: attachment.compact,
      score: Math.round((attachment.anxiety + attachment.avoidance) / 2),
      meta: `тревога ${attachment.anxiety}% · избегание ${attachment.avoidance}%`,
      icon: "heart-handshake",
      text: attachment.summary
    },
    {
      label: "Структура 4",
      title: "Ведущий темный радикал",
      value: leadingRadical.title,
      score: leadingRadical.score,
      meta: darkRadicalLevel(leadingRadical.score),
      icon: "flame",
      text: leadingRadical.text
    }
  ];
}

function stopNeuroBrain() {
  if (!state.neuroBrainFrame) return;
  window.cancelAnimationFrame(state.neuroBrainFrame);
  state.neuroBrainFrame = null;
}

function neuroLevelName(score) {
  if (score >= 85) return "S-rank";
  if (score >= 70) return "A-rank";
  if (score >= 55) return "B-rank";
  if (score >= 40) return "C-rank";
  return "Base";
}

function renderNeuroMetric(title, value) {
  return `
    <div>
      <span>${escapeHtml(title)}</span>
      <strong>${Math.round(value)}%</strong>
    </div>
  `;
}

function getNeuroBlockDetails(block) {
  return block.details
    .map(
      (detail) => `
        <article>
          <span>${escapeHtml(detail.title)}</span>
          <p>${escapeHtml(detail.text)}</p>
        </article>
      `
    )
    .join("");
}

function buildNeuroDashboardData(scores) {
  const profile = classifyProfile(scores);
  const attachment = getAttachmentProfile(scores);
  const radicals = selectDarkRadicals(scores);
  const leadingRadical = radicals[0];
  const brandType = getBrandType(profile, radicals);
  const map = scoreMap(scores);
  const topScores = scores.slice(0, 5);
  const behaviorVectors = buildBehaviorVectors(scores).slice(0, 6);
  const topScore = topScores[0];
  const strongestGrowth = growthLibrary[topScore.scale];
  const attachmentScore = Math.round((attachment.anxiety + attachment.avoidance) / 2);
  const stressScore = modelScoreFromMap(map, [
    { scale: "S1", weight: 0.7 },
    { scale: "S6", weight: 0.45 },
    { scale: "S8", weight: 0.45 },
    { scale: "S9", weight: 0.7 },
    { scale: "S10", weight: 0.4 }
  ]);
  const socialScore = modelScoreFromMap(map, [
    { scale: "S4", weight: 0.45 },
    { scale: "S5", weight: 0.75 },
    { scale: "S10", weight: 0.25, inverse: true },
    { scale: "S12", weight: 0.55 }
  ]);
  const strategyScore = modelScoreFromMap(map, [
    { scale: "S6", weight: 0.65 },
    { scale: "S9", weight: 0.65 },
    { scale: "S8", weight: 0.3, inverse: true },
    { scale: "S11", weight: 0.35 }
  ]);
  const autonomyScore = scoreByScale(scores, "S3");

  const blocks = [
    {
      id: "core",
      side: "left",
      icon: "fingerprint",
      title: "Ядро",
      label: profile.primaryAccent.compact,
      score: profile.primaryAccent.score,
      summary: profile.headline,
      metrics: [
        getMetric("тип", profile.primaryAccent.score),
        getMetric("паттерн", profile.primaryPattern.score),
        getMetric("контраст", profile.range)
      ],
      details: [
        { title: "Акцентуация", text: profile.primaryAccent.sharp },
        { title: "Паттерн", text: getPatternDeepCopy(profile.primaryPattern).hook },
        { title: "Второй слой", text: `${profile.secondaryAccent.compact} + ${profile.secondaryPattern.compact}` }
      ]
    },
    {
      id: "signal",
      side: "left",
      icon: "activity",
      title: "Сигнал",
      label: topScore.label,
      score: topScore.score,
      summary: topScore.insight,
      metrics: topScores.slice(0, 3).map((item) => getMetric(item.label, item.score)),
      details: [
        { title: "Вывод", text: getScaleConclusion(topScore) },
        { title: "Уровень", text: `${levelLabel(topScore.score)} - ${topScore.score}%` },
        { title: "Практика", text: strongestGrowth.practice }
      ]
    },
    {
      id: "attachment",
      side: "left",
      icon: "heart-handshake",
      title: "Связь",
      label: attachment.compact,
      score: attachmentScore,
      summary: attachment.summary,
      metrics: [
        getMetric("тревога", attachment.anxiety),
        getMetric("избегание", attachment.avoidance),
        getMetric("ясность", scoreByScale(scores, "S2"))
      ],
      details: [
        { title: "Главный риск", text: attachment.risk },
        { title: "Что помогает", text: attachment.need },
        { title: "Контакт", text: growthLibrary.S2.compat }
      ]
    },
    {
      id: "autonomy",
      side: "left",
      icon: "orbit",
      title: "Границы",
      label: publicDimensions.S3.label,
      score: autonomyScore,
      summary: publicDimensions.S3.insight,
      metrics: [
        getMetric("автономность", autonomyScore),
        getMetric("ясность", scoreByScale(scores, "S2")),
        getMetric("доверие", scoreByScale(scores, "S7"))
      ],
      details: [
        { title: "Вывод", text: getScaleConclusion(scores.find((item) => item.scale === "S3") || { scale: "S3", score: autonomyScore, label: publicDimensions.S3.label }) },
        { title: "Фокус", text: growthLibrary.S3.focus },
        { title: "Практика", text: growthLibrary.S3.practice }
      ]
    },
    {
      id: "stress",
      side: "right",
      icon: "zap",
      title: "Стресс",
      label: "режим нагрузки",
      score: stressScore,
      summary: "Сводный индекс по эмоциональной динамике, анализу, контролю, импульсу и чувствительности к оценке.",
      metrics: [
        getMetric("эмоции", scoreByScale(scores, "S1")),
        getMetric("анализ", scoreByScale(scores, "S9")),
        getMetric("импульс", scoreByScale(scores, "S8"))
      ],
      details: [
        { title: "Что видно", text: behaviorVectors[0]?.detail || "Профиль лучше читать через сочетание ведущих шкал." },
        { title: "Что ухудшает", text: "Неопределенность, перегруз решений и отсутствие понятного следующего шага." },
        { title: "Что стабилизирует", text: "Пауза, короткий план, ясная граница и перевод тревоги в действие." }
      ]
    },
    {
      id: "growth",
      side: "right",
      icon: "trending-up",
      title: "Рост",
      label: strongestGrowth.title,
      score: topScore.score,
      summary: strongestGrowth.focus,
      metrics: [
        getMetric("главная зона", topScore.score),
        getMetric("структура", scoreByScale(scores, "S6")),
        getMetric("инициатива", scoreByScale(scores, "S12"))
      ],
      details: [
        { title: "Фокус", text: strongestGrowth.focus },
        { title: "Практика", text: strongestGrowth.practice },
        { title: "В совместимости", text: strongestGrowth.compat }
      ]
    },
    {
      id: "shadow",
      side: "right",
      icon: "flame",
      title: "Тень",
      label: leadingRadical.title,
      score: leadingRadical.score,
      summary: leadingRadical.text,
      metrics: radicals.slice(0, 3).map((item) => getMetric(item.compact, item.score)),
      details: [
        { title: "Что это значит", text: leadingRadical.decode },
        { title: "Как проявляется", text: leadingRadical.example },
        { title: "Главный риск", text: leadingRadical.risk }
      ]
    },
    {
      id: "strategy",
      side: "right",
      icon: "bar-chart-3",
      title: "Стратегия",
      label: "решения и фокус",
      score: strategyScore,
      summary: "Сводный индекс по структуре, анализу, контролю последствий и жесткости в достижении цели.",
      metrics: [
        getMetric("структура", scoreByScale(scores, "S6")),
        getMetric("анализ", scoreByScale(scores, "S9")),
        getMetric("жесткость", scoreByScale(scores, "S11"))
      ],
      details: [
        { title: "В работе", text: getCareerRoleHint(map) },
        { title: "Сильная сторона", text: behaviorVectors.find((item) => item.title === "Контроль и структура")?.detail || publicDimensions.S6.insight },
        { title: "Риск", text: getSelfSabotageSignal(map).text }
      ]
    }
  ];

  return {
    profile,
    attachment,
    radicals,
    brandType,
    topScores,
    behaviorVectors,
    blocks,
    kpis: [
      { title: "WHOAMI code", value: state.profileCode || "NP-DEMO" },
      { title: "Уровень ядра", value: `${profile.primaryAccent.score}%` },
      { title: "Полнота", value: `${portraitCompleteness()}%` },
      { title: "Социальный слой", value: `${socialScore}%` }
    ]
  };
}

function renderNeuroSkills(blocks, side, activeId) {
  return blocks
    .filter((block) => block.side === side)
    .map(
      (block) => `
        <button
          class="neuro-skill ${activeId === block.id ? "is-active" : ""}"
          type="button"
          data-dashboard-block="${block.id}"
          aria-expanded="${activeId === block.id ? "true" : "false"}"
        >
          <span>
            <i data-lucide="${block.icon}" aria-hidden="true"></i>
            ${escapeHtml(block.title)}
          </span>
          <strong>${Math.round(block.score)}%</strong>
        </button>
      `
    )
    .join("");
}

function renderNeuroBars(items) {
  return `
    <div class="neuro-bars" aria-label="Ведущие шкалы">
      ${items
        .map(
          (item) => `
            <div class="neuro-bar" style="--h: ${Math.max(6, item.score)}%" title="${escapeHtml(item.label)}">
              <span>${item.score}</span>
              <i></i>
              <small>${escapeHtml(item.label.split(" ")[0])}</small>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderNeuroWheel(items) {
  return `
    <div class="neuro-wheel" aria-label="Поведенческие векторы">
      <span class="neuro-wheel-core"></span>
      ${items
        .map((item, index) => {
          const angle = -90 + (index * 360) / items.length;
          const x = 50 + Math.cos((angle * Math.PI) / 180) * 38;
          const y = 50 + Math.sin((angle * Math.PI) / 180) * 38;
          return `
            <div class="neuro-wheel-node" style="left: ${x}%; top: ${y}%; --score: ${item.score}">
              <strong>${item.score}</strong>
              <small>${escapeHtml(item.title.split(" ")[0])}</small>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderNeuroHistogram(items) {
  return `
    <div class="neuro-histogram" aria-label="Skill points">
      ${items
        .map(
          (item) => `
            <div style="--h: ${Math.max(8, item.score)}%">
              <span>${item.score}</span>
              <i></i>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderNeuroDetail(activeBlock) {
  if (!activeBlock) {
    return `
      <section class="neuro-detail-empty" data-dashboard-detail>
        <span>Open block</span>
        <p>Нажмите на любой блок вокруг мозга, чтобы открыть подробную расшифровку без длинного списка на странице.</p>
      </section>
    `;
  }

  return `
    <section class="neuro-detail-panel" data-dashboard-detail>
      <div class="neuro-detail-head">
        <div>
          <span>${escapeHtml(activeBlock.title)}</span>
          <h4>${escapeHtml(activeBlock.label)}</h4>
        </div>
        <strong>${Math.round(activeBlock.score)}%</strong>
      </div>
      <p class="neuro-detail-summary">${escapeHtml(activeBlock.summary)}</p>
      <div class="neuro-detail-metrics">
        ${activeBlock.metrics.map((metric) => renderNeuroMetric(metric.title, metric.value)).join("")}
      </div>
      <div class="neuro-detail-grid">
        ${getNeuroBlockDetails(activeBlock)}
      </div>
    </section>
  `;
}

function drawNeuroBrainOutline(ctx, width, height, pulse) {
  const cx = width / 2;
  const cy = height / 2 + 2;
  const sx = width * 0.34;
  const sy = height * 0.32;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.lineWidth = 1.4 + pulse * 0.8;
  ctx.strokeStyle = `rgba(232, 128, 255, ${0.5 + pulse * 0.25})`;
  ctx.shadowColor = "rgba(207, 88, 255, 0.7)";
  ctx.shadowBlur = 18 + pulse * 16;
  ctx.beginPath();
  ctx.moveTo(-0.72 * sx, -0.04 * sy);
  ctx.bezierCurveTo(-0.86 * sx, -0.62 * sy, -0.38 * sx, -1.02 * sy, -0.04 * sx, -0.82 * sy);
  ctx.bezierCurveTo(0.22 * sx, -1.1 * sy, 0.84 * sx, -0.78 * sy, 0.78 * sx, -0.22 * sy);
  ctx.bezierCurveTo(1.02 * sx, 0.12 * sy, 0.76 * sx, 0.68 * sy, 0.36 * sx, 0.76 * sy);
  ctx.bezierCurveTo(0.12 * sx, 0.98 * sy, -0.38 * sx, 0.88 * sy, -0.48 * sx, 0.58 * sy);
  ctx.bezierCurveTo(-0.88 * sx, 0.54 * sy, -1.02 * sx, 0.18 * sy, -0.72 * sx, -0.04 * sy);
  ctx.stroke();

  ctx.shadowBlur = 10;
  ctx.strokeStyle = "rgba(97, 235, 255, 0.28)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 7; i += 1) {
    const y = (-0.58 + i * 0.18) * sy;
    ctx.beginPath();
    ctx.moveTo(-0.48 * sx, y);
    ctx.bezierCurveTo(-0.12 * sx, y - 0.14 * sy, 0.08 * sx, y + 0.12 * sy, 0.46 * sx, y - 0.04 * sy);
    ctx.stroke();
  }
  ctx.restore();
}

function startNeuroBrain(scores) {
  const canvas = elements.paidVerdict.querySelector("[data-neuro-brain]");
  if (!canvas) return;

  stopNeuroBrain();

  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(260, Math.round(rect.width));
  const height = Math.max(260, Math.round(rect.height));
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const random = seededRandom(hashText(`${state.profileCode}:${scores.map((item) => item.score).join(":")}`));
  const insideBrain = (x, y) => {
    const left = ((x + 0.24) / 0.58) ** 2 + ((y + 0.05) / 0.68) ** 2 < 1;
    const right = ((x - 0.24) / 0.58) ** 2 + ((y + 0.04) / 0.66) ** 2 < 1;
    const crown = (x / 0.54) ** 2 + ((y + 0.45) / 0.36) ** 2 < 1;
    const base = ((x + 0.02) / 0.7) ** 2 + ((y - 0.34) / 0.32) ** 2 < 1;
    const stem = Math.abs(x - 0.12) < 0.12 && y > 0.35 && y < 0.82;
    const fissure = Math.abs(x) < 0.025 && y < 0.42 && y > -0.72;
    return (left || right || crown || base || stem) && !fissure;
  };

  const particles = [];
  let guard = 0;
  while (particles.length < 330 && guard < 8000) {
    guard += 1;
    const x = random() * 2 - 1;
    const y = random() * 1.8 - 0.88;
    if (!insideBrain(x, y)) continue;
    particles.push({
      x: width / 2 + x * width * 0.34,
      y: height / 2 + y * height * 0.32,
      size: 0.7 + random() * 1.8,
      phase: random() * Math.PI * 2,
      drift: 0.25 + random() * 0.8,
      hue: random() > 0.68 ? "cyan" : "violet"
    });
  }

  const stars = Array.from({ length: 120 }, () => ({
    x: random() * width,
    y: random() * height,
    size: 0.4 + random() * 1.3,
    phase: random() * Math.PI * 2
  }));

  const draw = (time) => {
    const t = time / 1000;
    const pulse = (Math.sin(t * 1.8) + 1) / 2;
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, width * 0.55);
    gradient.addColorStop(0, "rgba(217, 89, 255, 0.2)");
    gradient.addColorStop(0.52, "rgba(81, 231, 255, 0.08)");
    gradient.addColorStop(1, "rgba(6, 4, 14, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    stars.forEach((star) => {
      const alpha = 0.18 + Math.sin(t * 1.3 + star.phase) * 0.12;
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.04, alpha)})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });

    drawNeuroBrainOutline(ctx, width, height, pulse);

    for (let i = 0; i < particles.length; i += 1) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j += 9) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 26) continue;
        ctx.strokeStyle = `rgba(183, 112, 255, ${0.08 * (1 - distance / 26)})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    particles.forEach((particle) => {
      const wobble = Math.sin(t * particle.drift + particle.phase);
      const x = particle.x + wobble * 1.1;
      const y = particle.y + Math.cos(t * particle.drift + particle.phase) * 0.8;
      const alpha = 0.45 + pulse * 0.25 + wobble * 0.12;
      ctx.fillStyle =
        particle.hue === "cyan"
          ? `rgba(111, 245, 255, ${Math.max(0.22, alpha)})`
          : `rgba(241, 150, 255, ${Math.max(0.2, alpha)})`;
      ctx.shadowColor = particle.hue === "cyan" ? "rgba(111, 245, 255, 0.6)" : "rgba(215, 99, 255, 0.65)";
      ctx.shadowBlur = 8 + pulse * 8;
      ctx.beginPath();
      ctx.arc(x, y, particle.size + pulse * 0.45, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.shadowBlur = 0;
    state.neuroBrainFrame = window.requestAnimationFrame(draw);
  };

  state.neuroBrainFrame = window.requestAnimationFrame(draw);
}

function renderPaidVerdict(scores) {
  const data = buildNeuroDashboardData(scores);
  const activeBlock = data.blocks.find((block) => block.id === state.activeDashboardBlock);
  const coreScore = data.profile.primaryAccent.score;
  const attachmentScore = Math.round((data.attachment.anxiety + data.attachment.avoidance) / 2);
  const flatWarning =
    data.profile.range < 10
      ? `<p class="neuro-warning">Ответы выглядят слишком ровными. Типологический вывод можно читать как предварительный.</p>`
      : "";

  stopNeuroBrain();

  elements.paidVerdict.innerHTML = `
    <article class="neuro-dashboard" data-neuro-dashboard>
      <div class="neuro-corner neuro-corner-tl"></div>
      <div class="neuro-corner neuro-corner-tr"></div>
      <div class="neuro-corner neuro-corner-bl"></div>
      <div class="neuro-corner neuro-corner-br"></div>

      <div class="neuro-titlebar">
        <div>
          <span>WHOAMI neural profile</span>
          <h3>${escapeHtml(data.brandType)}</h3>
          <p>${escapeHtml(data.profile.headline)}</p>
        </div>
        <div class="neuro-actions">
          <button class="ghost-button compact" type="button" data-open-verdict-modal>
            <i data-lucide="scan-text" aria-hidden="true"></i>
            Вердикт
          </button>
          <button class="price-button dark" type="button" data-download-passport-doc>
            <i data-lucide="file-down" aria-hidden="true"></i>
            Паспорт
          </button>
        </div>
      </div>

      <div class="neuro-kpi-row" aria-label="Ключевые показатели">
        ${data.kpis
          .map(
            (item) => `
              <div>
                <span>${escapeHtml(item.title)}</span>
                <strong>${escapeHtml(item.value)}</strong>
              </div>
            `
          )
          .join("")}
      </div>

      <section class="neuro-stage" aria-label="Карта блоков вокруг мозга">
        <div class="neuro-skill-column neuro-skill-column-left">
          ${renderNeuroSkills(data.blocks, "left", state.activeDashboardBlock)}
        </div>

        <div class="neuro-core">
          <div class="neuro-core-ring" style="--score: ${coreScore}">
            <canvas data-neuro-brain width="420" height="420" aria-label="Анимированный нейро-мозг профиля"></canvas>
            <div class="neuro-core-label">
              <span>${neuroLevelName(coreScore)}</span>
              <strong>${coreScore}%</strong>
            </div>
          </div>
          <div class="neuro-core-meta">
            <span>${escapeHtml(data.profile.primaryAccent.compact)}</span>
            <strong>${escapeHtml(state.profileCode || "NP-DEMO")}</strong>
          </div>
          <div class="neuro-scale">
            <small>0</small>
            <span><i style="width: ${coreScore}%"></i></span>
            <small>100</small>
          </div>
        </div>

        <div class="neuro-skill-column neuro-skill-column-right">
          ${renderNeuroSkills(data.blocks, "right", state.activeDashboardBlock)}
        </div>
      </section>

      ${flatWarning}

      <div class="neuro-divider" aria-hidden="true"><span></span></div>

      <section class="neuro-card-grid" aria-label="Дашборды профиля">
        <article class="neuro-card">
          <span>Top scales</span>
          <h4>Ведущие шкалы</h4>
          ${renderNeuroBars(data.topScores)}
        </article>
        <article class="neuro-card">
          <span>Behavior web</span>
          <h4>Векторы</h4>
          ${renderNeuroWheel(data.behaviorVectors)}
        </article>
        <article class="neuro-card neuro-card-wide">
          <span>Skill points</span>
          <h4>Поведенческий профиль</h4>
          ${renderNeuroHistogram(data.behaviorVectors)}
        </article>
        <article class="neuro-card neuro-card-compact">
          <span>Attachment</span>
          <h4>${escapeHtml(data.attachment.compact)}</h4>
          <div class="neuro-donut" style="--score: ${attachmentScore}">
            <strong>${attachmentScore}%</strong>
            <small>связь</small>
          </div>
        </article>
      </section>

      ${renderNeuroDetail(activeBlock)}
    </article>
  `;

  window.requestAnimationFrame(() => startNeuroBrain(scores));
}

function openVerdictModal() {
  if (!state.latestScores.length) return;
  const profile = classifyProfile(state.latestScores);
  const brandType = getBrandType(profile, selectDarkRadicals(state.latestScores));

  openReportModal({
    eyebrow: "Главный вердикт",
    title: brandType,
    body: renderDetailedVerdict(profile, state.latestScores)
  });
}

function openDashboardBlockModal(blockId) {
  if (!state.latestScores.length) return;
  const data = buildNeuroDashboardData(state.latestScores);
  const block = data.blocks.find((item) => item.id === blockId);
  if (!block) return;

  openReportModal({
    eyebrow: "WHOAMI neural profile",
    title: `${block.title}: ${block.label}`,
    body: `
      <p class="report-modal-summary">${escapeHtml(block.summary)}</p>
      ${renderModalMetrics(block.metrics)}
      ${renderModalDetails(block.details)}
    `
  });
}

function scoreByScale(scores, scale) {
  return scores.find((item) => item.scale === scale)?.score ?? 50;
}

function dossierBand(score) {
  if (score >= 85) return "доминирующая зона";
  if (score >= 70) return "сильная зона";
  if (score >= 55) return "рабочая зона";
  if (score >= 40) return "умеренная зона";
  return "фоновая зона";
}

function portraitCompleteness() {
  const answeredRatio = state.answers.filter((answer) => answer >= 1 && answer <= 5).length / questions.length;
  const corePassport = Math.round(answeredRatio * 42);
  const unlockedPassport = state.latestTier === "paid" ? 10 : 0;
  const uploadedContext = 0;
  const extraMaps = 0;
  return Math.min(99, corePassport + unlockedPassport + uploadedContext + extraMaps);
}

function portraitCompletenessLabel(percent) {
  if (percent >= 90) return "почти полный портрет";
  if (percent >= 70) return "глубокий портрет";
  if (percent >= 50) return "сильная база";
  if (percent >= 30) return "ядро собрано";
  return "начальный слой";
}

function getScaleConclusion(item) {
  const { scale, score, label } = item;
  const high = score >= 70;
  const mid = score >= 55 && score < 70;
  const low = score < 40;
  const prefix = `${label}: ${score}%.`;

  const conclusions = {
    S1: high
      ? "Реакции быстро набирают интенсивность; решения в конфликте лучше принимать после паузы."
      : mid
        ? "Эмоции заметны, но обычно не полностью управляют поведением."
        : low
          ? "Эмоциональный фон скорее ровный; резкие перепады не выглядят ведущим механизмом."
          : "Эмоциональная динамика присутствует, но не доминирует.",
    S2: high
      ? "Близость требует ясных сигналов; молчание и неопределенность могут быстро усиливать тревогу."
      : mid
        ? "Потребность в подтверждении контакта есть, особенно в значимых отношениях."
        : low
          ? "Контакт переносится устойчиво; постоянные подтверждения не являются главным условием безопасности."
          : "Потребность в ясности умеренная и зависит от контекста.",
    S3: high
      ? "Автономия является ключевым ресурсом; избыток контакта может ощущаться как давление."
      : mid
        ? "Нужно личное пространство, но без полного ухода из отношений или команды."
        : low
          ? "Профиль легче выдерживает частый контакт и совместность."
          : "Автономия важна, но не выглядит жестким требованием.",
    S4: high
      ? "Признание и уровень сильно влияют на мотивацию; игнор может считываться как обесценивание."
      : mid
        ? "Важна заметность вклада, особенно там, где человек много вложился."
        : low
          ? "Внешнее признание не выглядит главным источником устойчивости."
          : "Запрос на признание умеренный.",
    S5: high
      ? "Есть выраженная способность влиять через образ, эмоцию и подачу."
      : mid
        ? "Выразительность включается ситуативно, особенно в безопасной или выгодной среде."
        : low
          ? "Профиль скорее сдержанный; публичная выразительность не является естественным режимом."
          : "Выразительность проявляется умеренно.",
    S6: high
      ? "Порядок, правила и контроль качества являются базовой опорой; хаос быстро забирает ресурс."
      : mid
        ? "Структура помогает, но не должна превращаться в жесткую клетку."
        : low
          ? "Гибкость выше потребности в строгом порядке; импровизация переносится легче."
          : "Потребность в структуре умеренная.",
    S7: high
      ? "Доверие строится медленно; профиль ищет мотивы, выгоду и скрытые риски."
      : mid
        ? "Настороженность включается при слабой прозрачности или нарушенных договоренностях."
        : low
          ? "Базовое доверие выше, чем потребность проверять мотивы."
          : "Настороженность умеренная.",
    S8: high
      ? "Новизна и скорость заряжают; главный риск - действие раньше полного расчета последствий."
      : mid
        ? "Импульс есть, но его можно встроить в рамки и дедлайны."
        : low
          ? "Профиль осторожнее относится к риску и резкой смене курса."
          : "Потребность в новизне умеренная.",
    S9: high
      ? "Решения проходят через анализ рисков; возможны задержки старта из-за поиска точности."
      : mid
        ? "Осторожность помогает, если есть понятный критерий достаточной информации."
        : low
          ? "Решения принимаются легче; долгий анализ не выглядит ведущей привычкой."
          : "Аналитическая осторожность умеренная.",
    S10: high
      ? "Оценка и критика сильно влияют на проявленность; безопасная среда резко повышает смелость."
      : mid
        ? "Чувствительность к оценке заметна, но не всегда блокирует действие."
        : low
          ? "Социальная оценка не выглядит главным тормозом."
          : "Чувствительность к оценке умеренная.",
    S11: high
      ? "В достижении цели включается жесткость; важно следить, чтобы сила не становилась давлением."
      : mid
        ? "Прямота и холодная эффективность доступны, но не всегда доминируют."
        : low
          ? "Профиль чаще учитывает эмоциональную цену решений."
          : "Жесткость в целях умеренная.",
    S12: high
      ? "Много энергии движения, идей и контакта; важно не распыляться на слишком много направлений."
      : mid
        ? "Инициативность включается при понятной возможности и достаточном интересе."
        : low
          ? "Темп скорее спокойный; резкие старты и постоянная социальность могут утомлять."
          : "Инициативность умеренная."
  };

  return `${prefix} ${conclusions[scale]}`;
}

function buildBehaviorVectors(scores) {
  const map = scoreMap(scores);
  return [
    {
      title: "Контакт и близость",
      score: modelScoreFromMap(map, [
        { scale: "S2", weight: 1 },
        { scale: "S1", weight: 0.6 },
        { scale: "S10", weight: 0.4 },
        { scale: "S3", weight: 0.35, inverse: true }
      ]),
      detail: "Насколько отношения, ясность контакта и эмоциональная доступность влияют на устойчивость."
    },
    {
      title: "Автономия и личное пространство",
      score: modelScoreFromMap(map, [
        { scale: "S3", weight: 1 },
        { scale: "S7", weight: 0.35 },
        { scale: "S2", weight: 0.3, inverse: true }
      ]),
      detail: "Сколько свободы, дистанции и самостоятельной обработки опыта требуется профилю."
    },
    {
      title: "Контроль и структура",
      score: modelScoreFromMap(map, [
        { scale: "S6", weight: 1 },
        { scale: "S9", weight: 0.5 },
        { scale: "S8", weight: 0.25, inverse: true }
      ]),
      detail: "Насколько важны правила, предсказуемость, порядок и контроль качества."
    },
    {
      title: "Скорость и риск",
      score: modelScoreFromMap(map, [
        { scale: "S8", weight: 1 },
        { scale: "S12", weight: 0.75 },
        { scale: "S9", weight: 0.35, inverse: true }
      ]),
      detail: "Как быстро профиль готов входить в новое, рисковать и менять траекторию."
    },
    {
      title: "Социальная видимость",
      score: modelScoreFromMap(map, [
        { scale: "S5", weight: 1 },
        { scale: "S4", weight: 0.75 },
        { scale: "S10", weight: 0.25, inverse: true }
      ]),
      detail: "Насколько важны образ, признание, аудитория и эффект присутствия."
    },
    {
      title: "Жесткость в достижении цели",
      score: modelScoreFromMap(map, [
        { scale: "S11", weight: 1 },
        { scale: "S6", weight: 0.35 },
        { scale: "S2", weight: 0.25, inverse: true }
      ]),
      detail: "Насколько легко профиль становится прямым, холодным или давящим ради результата."
    }
  ].sort((a, b) => b.score - a.score);
}

function buildDossierData(scores) {
  const profile = classifyProfile(scores);
  const radicals = selectDarkRadicals(scores);
  const attachment = getAttachmentProfile(scores);
  const brandType = getBrandType(profile, radicals);
  const accentModels = rankModels(scores, getAccentuationModels()).slice(0, 5);
  const patternModels = rankModels(scores, getPatternModels()).slice(0, 5);
  const behaviorVectors = buildBehaviorVectors(scores);
  const topScores = scores.slice(0, 5);
  const lowScores = [...scores].sort((a, b) => a.score - b.score).slice(0, 3);
  const strongest = topScores[0];
  const second = topScores[1];
  const tension = Math.abs(strongest.score - second.score) <= 8 ? "профиль многовекторный" : "есть выраженный ведущий вектор";
  const completeness = portraitCompleteness();

  return {
    code: state.profileCode,
    date: new Date().toLocaleDateString("ru-RU"),
    completeness,
    completenessLabel: portraitCompletenessLabel(completeness),
    profile,
    radicals,
    attachment,
    brandType,
    accentModels,
    patternModels,
    behaviorVectors,
    topScores,
    lowScores,
    allScores: scores,
    summary: [
      `Полнота портрета: ${completeness}% (${portraitCompletenessLabel(completeness)}). Это не точность личности, а объем собранных данных.`,
      `Главный типологический слой: ${profile.primaryAccent.compact} (${profile.primaryAccent.score}%).`,
      `Основной защитный паттерн: ${profile.primaryPattern.compact} (${profile.primaryPattern.score}%).`,
      `Самая высокая шкала: ${strongest.label} (${strongest.score}%), вторая: ${second.label} (${second.score}%); ${tension}.`,
      `Стиль привязанности: ${attachment.compact}; тревога ${attachment.anxiety}%, избегание ${attachment.avoidance}%.`,
      `Ведущий жесткий слой: ${radicals[0].title} (${radicals[0].score}%, ${darkRadicalLevel(radicals[0].score)} уровень).`
    ]
  };
}

function renderDossierTable(rows, valueKey = "score") {
  return rows
    .map(
      (row) => `
        <div class="dossier-row">
          <div>
            <strong>${escapeHtml(row.title || row.label || row.compact)}</strong>
            <span>${escapeHtml(row.detail || row.meta || row.level || dossierBand(row[valueKey]))}</span>
          </div>
          <b>${Math.round(row[valueKey])}%</b>
        </div>
      `
    )
    .join("");
}

function renderPassportDossier(scores) {
  const data = buildDossierData(scores);

  elements.passportDossier.innerHTML = `
    <article class="dossier-card">
      <div class="dossier-head">
        <div>
          <span>WHOAMI Dossier</span>
          <h3>Паспорт личности в формате CV</h3>
          <p>Только расчетные выводы по вашему профилю: проценты, ведущие модели, сильные зоны, напряжения и практические ориентиры.</p>
        </div>
        <button class="price-button dark" type="button" data-download-passport-doc>
          <i data-lucide="file-down" aria-hidden="true"></i>
          Скачать документ
        </button>
      </div>

      <div class="dossier-id-grid">
        <div>
          <span>Serial</span>
          <strong>${escapeHtml(data.code)}</strong>
        </div>
        <div>
          <span>Архетип</span>
          <strong>${escapeHtml(data.brandType)}</strong>
        </div>
        <div>
          <span>Полнота</span>
          <strong>${data.completeness}%</strong>
        </div>
        <div>
          <span>Дата</span>
          <strong>${escapeHtml(data.date)}</strong>
        </div>
      </div>

      <section class="dossier-section">
        <h4>Executive summary</h4>
        <ul class="dossier-bullets">
          ${data.summary.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>

      <section class="dossier-section">
        <h4>Типологический профиль</h4>
        <div class="dossier-split">
          <div>
            <span class="dossier-label">Акцентуации</span>
            ${renderDossierTable(
              data.accentModels.map((item) => ({
                title: item.compact,
                score: item.score,
                detail: item === data.profile.primaryAccent ? "основной слой" : "дополнительный слой"
              }))
            )}
          </div>
          <div>
            <span class="dossier-label">Паттерны</span>
            ${renderDossierTable(
              data.patternModels.map((item) => ({
                title: item.compact,
                score: item.score,
                detail: item === data.profile.primaryPattern ? "основная защита" : "дополнительная защита"
              }))
            )}
          </div>
        </div>
      </section>

      <section class="dossier-section">
        <h4>12 шкал профиля</h4>
        <div class="dossier-scale-list">
          ${data.allScores
            .map(
              (item) => `
                <article class="dossier-scale">
                  <div class="dossier-scale-top">
                    <strong>${escapeHtml(item.label)}</strong>
                    <b>${item.score}%</b>
                  </div>
                  <div class="dossier-meter" aria-label="${escapeHtml(item.label)}: ${item.score}%">
                    <span style="width: ${item.score}%"></span>
                  </div>
                  <p>${escapeHtml(getScaleConclusion(item))}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="dossier-section">
        <h4>Поведенческие векторы</h4>
        <div class="dossier-grid">
          ${data.behaviorVectors
            .map(
              (item) => `
                <article class="dossier-mini">
                  <span>${escapeHtml(dossierBand(item.score))}</span>
                  <strong>${escapeHtml(item.title)}</strong>
                  <b>${item.score}%</b>
                  <p>${escapeHtml(item.detail)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="dossier-section">
        <h4>Привязанность и жесткие слои</h4>
        <div class="dossier-split">
          <div>
            <span class="dossier-label">${escapeHtml(data.attachment.compact)}</span>
            ${renderDossierTable([
              { title: "Тревога привязанности", score: data.attachment.anxiety, detail: "реакция на паузу, холод и неопределенность" },
              { title: "Избегание близости", score: data.attachment.avoidance, detail: "потребность в дистанции и контроле доступа" }
            ])}
          </div>
          <div>
            <span class="dossier-label">Темные радикалы</span>
            ${renderDossierTable(
              data.radicals.map((item) => ({
                title: item.title,
                score: item.score,
                detail: darkRadicalLevel(item.score)
              }))
            )}
          </div>
        </div>
      </section>

      <section class="dossier-section">
        <h4>Зоны роста по данным профиля</h4>
        <div class="dossier-grid">
          ${data.topScores
            .slice(0, 3)
            .map((item) => {
              const growth = growthLibrary[item.scale];
              return `
                <article class="dossier-mini">
                  <span>${item.score}% · ${escapeHtml(item.label)}</span>
                  <strong>${escapeHtml(growth.title)}</strong>
                  <p>${escapeHtml(growth.practice)}</p>
                </article>
              `;
            })
            .join("")}
          ${data.lowScores
            .slice(0, 1)
            .map(
              (item) => `
                <article class="dossier-mini">
                  <span>${item.score}% · низкая зона</span>
                  <strong>${escapeHtml(item.label)}</strong>
                  <p>Эта шкала выражена слабее остальных. В плюсе это может быть ресурсом, но в задачах, где нужна именно эта функция, потребуется внешняя опора или осознанная тренировка.</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    </article>
  `;
}

function renderPassportDocumentHtml(data) {
  const row = (label, value) => `
    <tr>
      <td>${escapeHtml(label)}</td>
      <td>${escapeHtml(value)}</td>
    </tr>
  `;
  const scoreRows = data.allScores
    .map((item) => row(`${item.label} (${item.scale})`, `${item.score}% — ${getScaleConclusion(item)}`))
    .join("");
  const vectorRows = data.behaviorVectors
    .map((item) => row(item.title, `${item.score}% — ${item.detail}`))
    .join("");
  const accentRows = data.accentModels.map((item) => row(item.compact, `${item.score}%`)).join("");
  const patternRows = data.patternModels.map((item) => row(item.compact, `${item.score}%`)).join("");
  const radicalRows = data.radicals
    .map((item) => row(item.title, `${item.score}% — ${darkRadicalLevel(item.score)}`))
    .join("");

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>WHOAMI ${escapeHtml(data.code)} dossier</title>
        <style>
          body { font-family: Arial, sans-serif; color: #171819; line-height: 1.45; }
          h1 { font-size: 28px; margin-bottom: 4px; }
          h2 { margin-top: 28px; font-size: 18px; }
          table { width: 100%; border-collapse: collapse; margin-top: 8px; }
          td, th { border: 1px solid #d9d4c9; padding: 8px; vertical-align: top; }
          th { background: #f7f2e8; text-align: left; }
          .meta { color: #626a6b; margin-bottom: 18px; }
          .summary li { margin-bottom: 6px; }
        </style>
      </head>
      <body>
        <h1>WHOAMI Personality Dossier</h1>
        <p class="meta">Serial ${escapeHtml(data.code)} · ${escapeHtml(data.date)} · ${escapeHtml(data.brandType)}</p>

        <h2>Executive summary</h2>
        <ul class="summary">
          ${data.summary.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>

        <h2>Идентификация профиля</h2>
        <table>
          ${row("WHOAMI-код", data.code)}
          ${row("Архетип", data.brandType)}
          ${row("Полнота портрета", `${data.completeness}% — ${data.completenessLabel}`)}
          ${row("Уверенность типологического вывода", data.profile.confidence)}
          ${row("Основная акцентуация", `${data.profile.primaryAccent.compact} — ${data.profile.primaryAccent.score}%`)}
          ${row("Основной паттерн", `${data.profile.primaryPattern.compact} — ${data.profile.primaryPattern.score}%`)}
          ${row("Стиль привязанности", `${data.attachment.compact}; тревога ${data.attachment.anxiety}%, избегание ${data.attachment.avoidance}%`)}
        </table>

        <h2>Акцентуации</h2>
        <table><tr><th>Модель</th><th>Процент</th></tr>${accentRows}</table>

        <h2>Личностные паттерны</h2>
        <table><tr><th>Модель</th><th>Процент</th></tr>${patternRows}</table>

        <h2>12 шкал профиля</h2>
        <table><tr><th>Шкала</th><th>Вывод</th></tr>${scoreRows}</table>

        <h2>Поведенческие векторы</h2>
        <table><tr><th>Вектор</th><th>Вывод</th></tr>${vectorRows}</table>

        <h2>Темные радикалы</h2>
        <table><tr><th>Радикал</th><th>Уровень</th></tr>${radicalRows}</table>

        <h2>Зоны роста</h2>
        <table>
          <tr><th>Зона</th><th>Практический фокус</th></tr>
          ${data.topScores
            .slice(0, 3)
            .map((item) => row(`${growthLibrary[item.scale].title} · ${item.score}%`, growthLibrary[item.scale].practice))
            .join("")}
        </table>

        <p class="meta">WHOAMI является самооценочным инструментом и не устанавливает медицинские или психиатрические диагнозы.</p>
      </body>
    </html>
  `;
}

function downloadPassportDocument() {
  if (!state.latestScores.length) return;
  const data = buildDossierData(state.latestScores);
  const html = renderPassportDocumentHtml(data);
  const blob = new Blob([html], { type: "application/msword;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${state.profileCode || "whoami"}-personality-dossier.doc`;
  link.click();
  URL.revokeObjectURL(link.href);
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
      <button class="price-button dark" type="button" data-open-avatar>
        <i data-lucide="camera" aria-hidden="true"></i>
        Добавить аватар
      </button>
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

function uniqueByTitle(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!item?.title || seen.has(item.title)) return false;
    seen.add(item.title);
    return true;
  });
}

function renderGrowthZones(scores) {
  const attachment = getAttachmentProfile(scores);
  const radicals = selectDarkRadicals(scores);
  const topZones = scores
    .slice(0, 3)
    .map((item) => ({
      scale: item.scale,
      score: item.score,
      ...growthLibrary[item.scale]
    }));
  const extraZones = [];

  if (attachment.anxiety >= attachment.avoidance + 14 && attachment.anxiety >= 58) {
    extraZones.push({
      title: "Безопасность без проверки",
      focus: "не превращать каждую паузу в сигнал отвержения",
      practice: "просить ясность одной прямой фразой, а не собирать доказательства через тревогу",
      score: attachment.anxiety
    });
  }

  if (attachment.avoidance >= attachment.anxiety + 14 && attachment.avoidance >= 58) {
    extraZones.push({
      title: "Близость без исчезновения",
      focus: "оставаться в контакте, даже когда нужно пространство",
      practice: "предупреждать о дистанции заранее и возвращаться в обещанный срок",
      score: attachment.avoidance
    });
  }

  if (radicals[0]?.score >= 70) {
    extraZones.push({
      title: "Жесткая сила без потери доверия",
      focus: "видеть момент, когда защита становится давлением",
      practice: "в споре запрещать себе удар по самому уязвимому месту другого человека",
      score: radicals[0].score
    });
  }

  const zones = uniqueByTitle([...topZones, ...extraZones]).slice(0, 4);

  elements.growthZones.innerHTML = `
    <article class="growth-card">
      <div class="growth-head">
        <span>Зоны роста</span>
        <h4>Что развивать, чтобы профиль работал в плюс</h4>
        <p>Здесь не "исправление личности", а практичные точки настройки: где сильная черта начинает создавать лишнее напряжение.</p>
      </div>
      <div class="growth-grid">
        ${zones
          .map(
            (zone) => `
              <article class="growth-item">
                <div class="growth-item-top">
                  <strong>${escapeHtml(zone.title)}</strong>
                  ${zone.score ? `<b>${Math.round(zone.score)}%</b>` : ""}
                </div>
                <p>${escapeHtml(zone.focus)}</p>
                <small>${escapeHtml(zone.practice)}</small>
              </article>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function parseStoredScores(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== "string") return [];

  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

function profileFromPayload(payload, source = "shared-link") {
  const scores = normalizeScores(payload?.scores || []);
  if (!scores.length) return null;

  return {
    code: cleanText(payload.code) || "SHARED",
    tier: cleanText(payload.tier) || "basic",
    scores,
    source
  };
}

function profileFromStoredRow(row) {
  const scores = normalizeScores(parseStoredScores(row?.scores));
  if (scores.length) {
    return {
      code: cleanText(row.profile_code) || "PUBLIC",
      tier: cleanText(row.tier) || "basic",
      scores,
      source: "public-code"
    };
  }

  const payload = parseResultPayload(row?.result_url || "");
  return payload ? profileFromPayload(payload, "public-code") : null;
}

function parseResultPayload(value) {
  const text = String(value || "").trim();
  if (!text) return null;

  try {
    const url = new URL(text, window.location.href);
    const encoded = url.searchParams.get("result");
    if (encoded) return decodeResultPayload(encoded);
  } catch {
    // Fall through to direct payload parsing.
  }

  const resultMatch = text.match(/(?:^|[?&])result=([^&#\s]+)/);
  if (resultMatch?.[1]) {
    return decodeResultPayload(resultMatch[1]);
  }

  if (/^[A-Za-z0-9_-]{24,}$/.test(text)) {
    return decodeResultPayload(text);
  }

  return null;
}

async function requestPublicProfileRows(code, withOrder = true) {
  const url = new URL(`${submissionsConfig.url}/rest/v1/${submissionsConfig.table}`);
  url.searchParams.set("select", "profile_code,scores,result_url,tier,event_type");
  url.searchParams.set("profile_code", `eq.${code}`);
  url.searchParams.set("limit", "5");
  if (withOrder) {
    url.searchParams.set("order", "created_at.desc");
  }

  const response = await fetch(url.toString(), {
    headers: {
      apikey: submissionsConfig.key,
      Authorization: `Bearer ${submissionsConfig.key}`
    }
  });

  if (!response.ok) {
    throw new Error(`public profile lookup failed: ${response.status}`);
  }

  return response.json();
}

async function fetchPublicProfileByCode(code) {
  const normalizedCode = code.trim().toUpperCase();
  let rows;

  try {
    rows = await requestPublicProfileRows(normalizedCode);
  } catch {
    rows = await requestPublicProfileRows(normalizedCode, false);
  }

  const profile = rows.map(profileFromStoredRow).find(Boolean);
  if (!profile) {
    throw new Error("Профиль с таким кодом не найден или закрыт для публичного чтения.");
  }

  return profile;
}

async function resolveComparisonProfile(value) {
  const text = cleanText(value);
  if (!text) {
    throw new Error("Вставьте WHOAMI-код или ссылку результата.");
  }

  const codeMatch = text.toUpperCase().match(/^NP-[A-Z0-9]{4,}$/);
  if (codeMatch) {
    return fetchPublicProfileByCode(codeMatch[0]);
  }

  const payload = parseResultPayload(text);
  const profile = profileFromPayload(payload, "shared-link");
  if (!profile) {
    throw new Error("Не получилось прочитать профиль. Лучше вставить полную ссылку результата WHOAMI.");
  }

  return profile;
}

function clampScore(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function compatibilityBand(score) {
  if (score >= 82) {
    return {
      title: "Мягкое совпадение",
      text: "Профили легко считывают друг друга: основные реакции и темп контакта близки, поэтому меньше энергии уходит на перевод с одного языка на другой."
    };
  }
  if (score >= 68) {
    return {
      title: "Сильная, но живая совместимость",
      text: "Есть хорошая база совпадений, но отдельные различия будут требовать договоренностей. Это не минус: такая пара может усиливать друг друга."
    };
  }
  if (score >= 52) {
    return {
      title: "Контрастная совместимость",
      text: "Между профилями есть притяжение через различия. Главный риск - считать стиль другого человека неправильным, а не просто другим."
    };
  }
  return {
    title: "Совместимость требует зрелых правил",
    text: "Профили могут цеплять друг друга в чувствительных местах. Здесь особенно важны ясные договоренности, паузы в конфликте и уважение к разному темпу."
  };
}

function buildCompatibilityReport(selfScores, partnerScores) {
  const selfMap = scoreMap(selfScores);
  const partnerMap = scoreMap(partnerScores);
  const rows = Object.keys(publicDimensions).map((scale) => {
    const self = selfMap[scale] || 0;
    const partner = partnerMap[scale] || 0;
    return {
      scale,
      label: publicDimensions[scale].label,
      self,
      partner,
      delta: Math.abs(self - partner),
      average: Math.round((self + partner) / 2),
      max: Math.max(self, partner)
    };
  });
  const averageDelta = rows.reduce((sum, item) => sum + item.delta, 0) / rows.length;
  const selfAttachment = getAttachmentProfile(selfScores);
  const partnerAttachment = getAttachmentProfile(partnerScores);
  const attachmentDelta =
    (Math.abs(selfAttachment.anxiety - partnerAttachment.anxiety) +
      Math.abs(selfAttachment.avoidance - partnerAttachment.avoidance)) /
    2;
  const baseFit = 100 - averageDelta;
  const attachmentFit = 100 - attachmentDelta;
  const index = clampScore(baseFit * 0.62 + attachmentFit * 0.38);
  const resonance = rows
    .filter((item) => item.average >= 52)
    .sort((a, b) => b.average - a.average || a.delta - b.delta)
    .slice(0, 3);
  const fallbackResonance = [...rows].sort((a, b) => a.delta - b.delta).slice(0, 3);
  const friction = rows
    .filter((item) => item.max >= 50)
    .sort((a, b) => b.delta - a.delta || b.max - a.max)
    .slice(0, 3);
  const band = compatibilityBand(index);

  return {
    index,
    band,
    resonance: resonance.length ? resonance : fallbackResonance,
    friction,
    selfAttachment,
    partnerAttachment,
    growth: friction.map((item) => ({
      title: growthLibrary[item.scale].title,
      text: growthLibrary[item.scale].compat,
      delta: item.delta
    }))
  };
}

function renderCompatibilityReport(partnerProfile) {
  const report = buildCompatibilityReport(state.latestScores, partnerProfile.scores);
  const sourceLabel =
    partnerProfile.source === "public-code"
      ? "публичный WHOAMI-код"
      : "ссылка результата";

  elements.compareOutput.hidden = false;
  elements.compareOutput.innerHTML = `
    <article class="compatibility-card">
      <div class="compatibility-score">
        <span>Индекс пары</span>
        <strong>${report.index}</strong>
        <small>${escapeHtml(report.band.title)}</small>
      </div>
      <div class="compatibility-summary">
        <span>${escapeHtml(sourceLabel)} · ${escapeHtml(partnerProfile.code)}</span>
        <h5>${escapeHtml(report.band.title)}</h5>
        <p>${escapeHtml(report.band.text)}</p>
      </div>
      <div class="compatibility-grid">
        <section>
          <h6>Где будет резонанс</h6>
          ${report.resonance
            .map(
              (item) => `
                <div class="compatibility-row">
                  <strong>${escapeHtml(item.label)}</strong>
                  <span>${item.self}% / ${item.partner}%</span>
                </div>
              `
            )
            .join("")}
        </section>
        <section>
          <h6>Где будет трение</h6>
          ${report.friction
            .map(
              (item) => `
                <div class="compatibility-row">
                  <strong>${escapeHtml(item.label)}</strong>
                  <span>разница ${item.delta}%</span>
                </div>
              `
            )
            .join("")}
        </section>
      </div>
      <div class="attachment-compare">
        <div>
          <span>Ваш стиль</span>
          <strong>${escapeHtml(report.selfAttachment.compact)}</strong>
          <small>тревога ${report.selfAttachment.anxiety}% · избегание ${report.selfAttachment.avoidance}%</small>
        </div>
        <div>
          <span>Другой профиль</span>
          <strong>${escapeHtml(report.partnerAttachment.compact)}</strong>
          <small>тревога ${report.partnerAttachment.anxiety}% · избегание ${report.partnerAttachment.avoidance}%</small>
        </div>
      </div>
      <div class="pair-growth">
        <h6>Зоны роста пары</h6>
        ${report.growth
          .map(
            (item) => `
              <article>
                <strong>${escapeHtml(item.title)}</strong>
                <p>${escapeHtml(item.text)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </article>
  `;

  if (window.lucide) window.lucide.createIcons();
}

async function handleCompatibilityCheck() {
  if (!state.latestScores.length) return;

  elements.compareCheck.disabled = true;
  elements.compareCheck.innerHTML = '<i data-lucide="loader-circle" aria-hidden="true"></i> Считаю';
  elements.compareOutput.hidden = false;
  elements.compareOutput.innerHTML = '<p class="compatibility-status">Собираю карту пары...</p>';
  if (window.lucide) window.lucide.createIcons();

  try {
    const partnerProfile = await resolveComparisonProfile(elements.compareInput.value);
    if (partnerProfile.code === state.profileCode) {
      throw new Error("Это ваш текущий профиль. Для сравнения нужен код или ссылка другого человека.");
    }
    renderCompatibilityReport(partnerProfile);
  } catch (error) {
    elements.compareOutput.innerHTML = `
      <p class="compatibility-status is-error">${escapeHtml(error.message)}</p>
      <p class="compatibility-help">Для честного MVP лучше отправить человеку ссылку на его результат и попросить вставить ее сюда. Один короткий код должен работать только как публичный профиль, а не как скрытый доступ к личным ответам.</p>
    `;
  } finally {
    elements.compareCheck.disabled = false;
    elements.compareCheck.innerHTML = '<i data-lucide="heart-handshake" aria-hidden="true"></i> Проверить';
    if (window.lucide) window.lucide.createIcons();
  }
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

function pickByScore(score, high, middle, low) {
  if (score >= 65) return high;
  if (score >= 45) return middle;
  return low;
}

function getMetric(title, value) {
  return {
    title,
    value: Math.round(value)
  };
}

function getCareerRoleHint(map) {
  const control = map.S6 ?? 50;
  const initiative = map.S12 ?? 50;
  const expression = map.S5 ?? 50;
  const analysis = map.S9 ?? 50;
  const hardness = map.S11 ?? 50;
  const impulse = map.S8 ?? 50;

  if (control >= 65 && hardness >= 55) return "операционное управление, кризисные задачи, контроль качества, руководящие роли с ясными правилами";
  if (initiative >= 65 && impulse >= 55) return "запуски, продажи, предпринимательство, медиа, проекты с быстрым циклом и живым контактом";
  if (analysis >= 65 && control >= 50) return "аналитика, стратегия, продукт, редактура, исследование, финансы или роли, где цена ошибки видна заранее";
  if (expression >= 65) return "личный бренд, коммуникации, контент, переговоры, публичные роли, где важна подача и считывание аудитории";
  return "среда с понятной задачей, автономией и возможностью постепенно наращивать ответственность";
}

function getSelfSabotageSignal(map) {
  const signals = [
    {
      title: "тревожный анализ",
      score: map.S9 ?? 50,
      text: "вы можете слишком долго искать правильный ответ и откладывать действие, пока уверенность не станет идеальной"
    },
    {
      title: "гиперконтроль",
      score: map.S6 ?? 50,
      text: "вы можете тратить слишком много сил на порядок, проверку и удержание людей в правильном контуре"
    },
    {
      title: "проверка близости",
      score: map.S2 ?? 50,
      text: "вы можете просить любви не напрямую, а через проверки, тревожные вопросы или подстройку"
    },
    {
      title: "импульсивный разворот",
      score: map.S8 ?? 50,
      text: "вы можете резко обещать, тратить, начинать или обрывать, а потом догонять последствия"
    },
    {
      title: "страх оценки",
      score: map.S10 ?? 50,
      text: "вы можете не выходить в видимость, пока не почувствуете, что вас точно примут"
    },
    {
      title: "статусное обесценивание",
      score: map.S4 ?? 50,
      text: "вы можете терять интерес к людям и проектам, если там не видят ваш уровень"
    }
  ];

  return signals.sort((a, b) => b.score - a.score)[0];
}

function renderLifeMap(scores) {
  const map = scoreMap(scores);
  const profile = classifyProfile(scores);
  const attachment = getAttachmentProfile(scores);
  const radicals = selectDarkRadicals(scores);
  const leadingRadical = radicals[0];
  const brandType = getBrandType(profile, radicals);
  const topScore = scores[0];
  const sabotage = getSelfSabotageSignal(map);
  const emotion = map.S1 ?? 50;
  const clarity = map.S2 ?? 50;
  const autonomy = map.S3 ?? 50;
  const recognition = map.S4 ?? 50;
  const expression = map.S5 ?? 50;
  const control = map.S6 ?? 50;
  const suspicion = map.S7 ?? 50;
  const impulse = map.S8 ?? 50;
  const analysis = map.S9 ?? 50;
  const sensitivity = map.S10 ?? 50;
  const hardness = map.S11 ?? 50;
  const initiative = map.S12 ?? 50;
  const categories = [
    {
      title: "Отношения",
      icon: "heart",
      score: modelScoreFromMap(map, [
        { scale: "S2", weight: 1.1 },
        { scale: "S1", weight: 0.8 },
        { scale: "S3", weight: 0.55 },
        { scale: "S7", weight: 0.45 },
        { scale: "S10", weight: 0.45 }
      ]),
      kicker: "как вы любите, ревнуете, сближаетесь и отдаляетесь",
      summary: attachment.summary,
      metrics: [getMetric("ясность контакта", clarity), getMetric("эмоции", emotion), getMetric("автономность", autonomy)],
      details: [
        {
          title: "Как вы любите",
          text:
            clarity >= 60
              ? "Через ясность, подтверждение и ощущение, что контакт живой. Молчание может переживаться громче, чем слова."
              : "Через пространство, спокойствие и право не быть постоянно эмоционально доступным человеком."
        },
        {
          title: "Где боль",
          text:
            emotion >= 60
              ? "Резкая смена тона, неопределенность и ощущение, что вас эмоционально оставили одного."
              : "Давление, навязчивая близость и попытка требовать реакцию быстрее, чем она созрела."
        },
        { title: "Что помогает", text: attachment.need }
      ]
    },
    {
      title: "Тип привязанности",
      icon: "heart-handshake",
      score: Math.round((attachment.anxiety + attachment.avoidance) / 2),
      kicker: "как вы держите близость, дистанцию и безопасность контакта",
      summary: `${attachment.name}: ${attachment.summary}`,
      metrics: [
        getMetric("тревога привязанности", attachment.anxiety),
        getMetric("избегание близости", attachment.avoidance),
        getMetric("потребность в ясности", clarity)
      ],
      details: [
        {
          title: "Главный риск",
          text: attachment.risk
        },
        {
          title: "Что помогает",
          text: attachment.need
        },
        {
          title: "Как проявляется",
          text:
            attachment.id === "secure"
              ? "В стабильной среде вы можете выдерживать паузы, говорить прямо и возвращаться к контакту без сильных проверок."
              : attachment.id === "avoidant"
                ? "Когда близость становится слишком плотной, психика может уходить в дистанцию, рациональность или молчаливое восстановление контроля."
                : attachment.id === "fearful"
                  ? "Важный человек одновременно притягивает и пугает: хочется ясности, но при сильном напряжении может включаться отстранение или давление."
                  : "Молчание, холодный тон и неопределенность могут быстро запускать поиск подтверждений, тревожный анализ или проверку контакта."
        }
      ]
    },
    {
      title: "Совместимость",
      icon: "link",
      score: modelScoreFromMap(map, [
        { scale: "S2", weight: 0.9 },
        { scale: "S3", weight: 0.8 },
        { scale: "S7", weight: 0.55 },
        { scale: "S6", weight: 0.35 },
        { scale: "S1", weight: 0.35 }
      ]),
      kicker: "с кем легко, с кем тянет, но ломает",
      summary:
        autonomy >= 60
          ? "Вам подходят люди, которые уважают дистанцию и не путают близость со слиянием."
          : "Вам подходят люди, которые дают тепло, регулярность и понятные сигналы заинтересованности.",
      metrics: [getMetric("тревога", attachment.anxiety), getMetric("избегание", attachment.avoidance), getMetric("проверка", suspicion)],
      details: [
        {
          title: "Кто подходит",
          text:
            control >= 60
              ? "Партнеры и команды, которые держат договоренности, не хаотичны и умеют говорить конкретно."
              : "Партнеры и команды, где есть воздух, гибкость и возможность обсуждать правила без давления."
        },
        {
          title: "С кем будет сложно",
          text:
            clarity >= 60
              ? "С холодными, исчезающими и двусмысленными людьми: они быстро включают тревогу и проверки."
              : "С людьми, которые требуют постоянной отчетности, эмоционального присутствия и немедленных объяснений."
        },
        { title: "Важно", text: "Точная совместимость появляется, когда есть два WHOAMI-профиля. Здесь показан ваш половинный рисунок совместимости." }
      ]
    },
    {
      title: "Карьера и сферы деятельности",
      icon: "briefcase-business",
      score: modelScoreFromMap(map, [
        { scale: "S6", weight: 0.75 },
        { scale: "S12", weight: 0.75 },
        { scale: "S9", weight: 0.55 },
        { scale: "S4", weight: 0.5 },
        { scale: "S8", weight: 0.45 }
      ]),
      kicker: "стиль работы, амбиции, роли и риск выгорания",
      summary: `Ваш рабочий профиль ближе к роли, где важны ${topScore.label.toLowerCase()} и ${profile.primaryAccent.compact}.`,
      metrics: [getMetric("структура", control), getMetric("инициатива", initiative), getMetric("анализ", analysis)],
      details: [
        { title: "Подходящие роли", text: getCareerRoleHint(map) },
        {
          title: "Как вы работаете",
          text:
            initiative >= 60
              ? "Включаетесь через движение, людей, вызов и ощущение, что можно быстро влиять на результат."
              : "Лучше раскрываетесь там, где можно спокойно понять задачу, выстроить качество и не жить в вечной срочности."
        },
        {
          title: "Риск выгорания",
          text:
            control >= 60
              ? "Перегруз начинается, когда все держится на вас, а делегирование кажется потерей качества."
              : "Перегруз начинается, когда пропадает смысл, свобода или видимая динамика результата."
        }
      ]
    },
    {
      title: "Деньги и риск",
      icon: "wallet-cards",
      score: modelScoreFromMap(map, [
        { scale: "S8", weight: 0.9 },
        { scale: "S6", weight: 0.65 },
        { scale: "S9", weight: 0.6 },
        { scale: "S4", weight: 0.45 },
        { scale: "S11", weight: 0.35 }
      ]),
      kicker: "как вы решаете, тратите, контролируете и боитесь ошибок",
      summary:
        impulse >= 60
          ? "Деньги могут включать азарт, скорость и желание действовать до полного расчета."
          : "Финансовые решения чаще проходят через контроль, осторожность и проверку последствий.",
      metrics: [getMetric("риск", impulse), getMetric("контроль", control), getMetric("страх ошибки", analysis)],
      details: [
        {
          title: "Финансовый импульс",
          text:
            impulse >= 60
              ? "В сильном состоянии вы можете тратить, обещать или входить в идею быстрее, чем успеваете проверить цену."
              : "Вы скорее тормозите решение, пока не появится ощущение достаточной надежности."
        },
        {
          title: "Статусный слой",
          text:
            recognition >= 60
              ? "Часть денежных решений может быть связана с уровнем, признанием и доказательством собственной ценности."
              : "Статус влияет меньше: важнее безопасность, смысл или практическая польза."
        },
        { title: "Правило безопасности", text: "Разделяйте деньги на контур риска и контур стабильности, чтобы азарт или тревога не управляли всем бюджетом." }
      ]
    },
    {
      title: "Конфликты",
      icon: "messages-square",
      score: modelScoreFromMap(map, [
        { scale: "S1", weight: 0.8 },
        { scale: "S6", weight: 0.65 },
        { scale: "S7", weight: 0.65 },
        { scale: "S11", weight: 0.65 },
        { scale: "S8", weight: 0.35 }
      ]),
      kicker: "как вы спорите, давите, молчите, доказываете или уходите",
      summary:
        hardness >= 60
          ? "В споре вы можете быстро переходить в жесткую позицию, особенно если видите слабость, хаос или несправедливость."
          : "В споре у вас сильнее включается внутренняя реакция: тревога, анализ, обида или дистанция.",
      metrics: [getMetric("эмоция", emotion), getMetric("жесткость", hardness), getMetric("подозрительность", suspicion)],
      details: [
        {
          title: "Первый автоматизм",
          text:
            emotion >= 60
              ? "Сначала эмоция, потом объяснение. Вы можете говорить резче, чем планировали, если боль уже включилась."
              : "Сначала контроль или дистанция. Снаружи может казаться, что вам все равно, хотя внутри идет обработка."
        },
        {
          title: "Что вас триггерит",
          text:
            suspicion >= 60
              ? "Скрытые мотивы, неуважение, нарушение договоренностей и ощущение, что вас пытаются провести."
              : "Грубый тон, давление, обесценивание или требование немедленно реагировать."
        },
        { title: "Как мириться", text: "Лучше работает конкретика: что случилось, что это значило для вас, что меняем дальше." }
      ]
    },
    {
      title: "Стресс и саморегуляция",
      icon: "activity",
      score: modelScoreFromMap(map, [
        { scale: "S1", weight: 0.75 },
        { scale: "S9", weight: 0.75 },
        { scale: "S6", weight: 0.55 },
        { scale: "S8", weight: 0.45 },
        { scale: "S10", weight: 0.35 }
      ]),
      kicker: "что происходит, когда психика перегружена",
      summary:
        analysis >= 60
          ? "Под нагрузкой вы можете уходить в сценарии, риски и попытку додумать все до безопасного финала."
          : "Под нагрузкой вы скорее уходите в действие, дистанцию или резкое переключение.",
      metrics: [getMetric("анализ", analysis), getMetric("эмоциональность", emotion), getMetric("импульс", impulse)],
      details: [
        {
          title: "Ваш стресс-режим",
          text: pickByScore(
            Math.max(analysis, control, impulse, emotion),
            analysis >= control && analysis >= impulse ? "думать до изнеможения" : control >= impulse ? "усиливать контроль" : "действовать быстрее, чем успеваете стабилизироваться",
            "сначала держаться, потом резко проседать, если напряжение не разрядилось",
            "сохранять ровность, пока не накопится усталость"
          )
        },
        { title: "Что ухудшает", text: "Неопределенность, слишком много открытых решений и люди, которые требуют реакции, не дав времени восстановиться." },
        { title: "Что стабилизирует", text: "Короткий план на ближайший шаг, телесная пауза, ясная граница и перевод тревоги в действие." }
      ]
    },
    {
      title: "Секс и интимность 18+",
      icon: "sparkles",
      score: modelScoreFromMap(map, [
        { scale: "S2", weight: 0.65 },
        { scale: "S3", weight: 0.65 },
        { scale: "S10", weight: 0.55 },
        { scale: "S6", weight: 0.35 },
        { scale: "S4", weight: 0.35 }
      ]),
      kicker: "близость, желание, стыд, контроль и подтверждение",
      summary: "Аккуратный 18+ блок: вывод строится по близости, стыду, контролю и дистанции, а не по прямым сексуальным вопросам.",
      metrics: [getMetric("подтверждение", clarity), getMetric("дистанция", autonomy), getMetric("стыд/оценка", sensitivity)],
      details: [
        {
          title: "Как включается близость",
          text:
            clarity >= 60
              ? "Через ощущение желанности, выбранности и понятного эмоционального контакта."
              : "Через безопасность, уважение границ и отсутствие давления на немедленную открытость."
        },
        {
          title: "Где зажим",
          text:
            sensitivity >= 60
              ? "Оценка, неловкость и страх быть не таким могут снижать спонтанность сильнее, чем вы показываете."
              : "Главный зажим чаще связан не со стыдом, а с контролем, скукой или потерей ощущения свободы."
        },
        { title: "Как говорить", text: "Без стыда и допроса: лучше через желания, границы и конкретные сигналы, чем через претензии или сравнение." }
      ]
    },
    {
      title: "Дружба и социальный круг",
      icon: "users-round",
      score: modelScoreFromMap(map, [
        { scale: "S3", weight: 0.55 },
        { scale: "S5", weight: 0.55 },
        { scale: "S7", weight: 0.45 },
        { scale: "S12", weight: 0.45 },
        { scale: "S10", weight: 0.35 }
      ]),
      kicker: "кого вы выбираете, кому доверяете и почему отдаляетесь",
      summary:
        expression >= 60 || initiative >= 60
          ? "Вы можете быстро создавать контакт, но качество доверия зависит от того, выдерживает ли человек ваш настоящий ритм."
          : "Вы выбираете круг осторожнее: меньше людей, больше смысла, выше ценность тишины и надежности.",
      metrics: [getMetric("социальная энергия", initiative), getMetric("выразительность", expression), getMetric("доверие", suspicion)],
      details: [
        { title: "Кого выбираете", text: suspicion >= 60 ? "Людей, которые подтверждают слова делами и не требуют доверия авансом." : "Людей, рядом с которыми можно быть живым, расслабленным и не играть роль сильнее, чем хочется." },
        { title: "Почему отдаляетесь", text: autonomy >= 60 ? "Из-за перегруза контактом, вторжения в личное пространство или ощущения, что от вас слишком много хотят." : "Из-за холода, неясности, конкуренции, обесценивания или чувства, что контакт стал односторонним." },
        { title: "Социальный риск", text: "Либо слишком долго проверять людей, либо слишком быстро включаться в сильный контакт. Баланс - скорость сближения плюс проверка реальностью." }
      ]
    },
    {
      title: "Семья",
      icon: "home",
      score: modelScoreFromMap(map, [
        { scale: "S2", weight: 0.55 },
        { scale: "S3", weight: 0.5 },
        { scale: "S6", weight: 0.55 },
        { scale: "S7", weight: 0.4 },
        { scale: "S10", weight: 0.4 }
      ]),
      kicker: "долг, вина, дистанция, контроль и границы",
      summary: "Семейный блок показывает перенос ваших базовых защит на родителей, детей и родственников.",
      metrics: [getMetric("долг/близость", clarity), getMetric("границы", autonomy), getMetric("контроль", control)],
      details: [
        { title: "Ваша роль", text: control >= 60 ? "Вы можете становиться тем, кто держит порядок, ответственность и стандарт, даже когда устал." : "Вы можете быть тем, кто либо сглаживает напряжение, либо уходит в дистанцию, когда система давит." },
        { title: "Где конфликт", text: sensitivity >= 60 ? "Вина, оценка и критика могут попадать глубже, чем обычные рабочие замечания." : "Конфликт чаще появляется вокруг свободы, правил, контроля и права жить не по чужому сценарию." },
        { title: "Здоровая граница", text: "Отделять любовь от обязанности быть удобным: семья важна, но не должна иметь полный доступ к вашей нервной системе." }
      ]
    },
    {
      title: "Лидерство",
      icon: "crown",
      score: modelScoreFromMap(map, [
        { scale: "S6", weight: 0.75 },
        { scale: "S11", weight: 0.75 },
        { scale: "S12", weight: 0.65 },
        { scale: "S4", weight: 0.45 },
        { scale: "S9", weight: 0.3 }
      ]),
      kicker: "как вы управляете, ведете, влияете и выдерживаете власть",
      summary:
        hardness >= 60 || control >= 60
          ? "Ваше лидерство может быть сильным, требовательным и системным."
          : "Ваше лидерство раскрывается через контакт, идею, энергию или тонкое считывание людей.",
      metrics: [getMetric("контроль", control), getMetric("доминирование", hardness), getMetric("инициатива", initiative)],
      details: [
        { title: "Сильная сторона", text: initiative >= 60 ? "Вы умеете запускать движение и заражать людей ощущением, что пора действовать." : "Вы умеете держать качество, видеть риски и не разваливаться, когда другим нужна опора." },
        { title: "Слепая зона", text: hardness >= 60 ? "Люди могут бояться ошибки и скрывать проблемы, если рядом слишком много давления." : "Вы можете слишком долго ждать готовности или согласия, хотя группе уже нужна ясная позиция." },
        { title: "Как управлять вами", text: "Через уважение, конкретику и взрослый договор. Давление сверху быстро включает сопротивление, холод или внутренний выход из контакта." }
      ]
    },
    {
      title: "Коммуникация",
      icon: "message-circle",
      score: modelScoreFromMap(map, [
        { scale: "S10", weight: 0.65 },
        { scale: "S7", weight: 0.55 },
        { scale: "S6", weight: 0.45 },
        { scale: "S3", weight: 0.35 },
        { scale: "S2", weight: 0.35 }
      ]),
      kicker: "как с вами говорить и что нельзя говорить",
      summary:
        sensitivity >= 60
          ? "Вам важен тон: вы слышите не только смысл, но и скрытое отношение."
          : "С вами лучше работает прямота, ясность и отсутствие эмоциональных игр.",
      metrics: [getMetric("оценка", sensitivity), getMetric("настороженность", suspicion), getMetric("структура", control)],
      details: [
        { title: "Как говорить", text: control >= 60 ? "Конкретно: факты, договоренности, последствия, зона ответственности." : "Живо и прямо: без намеков, пассивной агрессии и театральных проверок." },
        { title: "Что нельзя", text: sensitivity >= 60 ? "Грубые обобщения, публичное пристыжение и фразы, где критика звучит как отвержение." : "Манипулятивная неопределенность, нарушение договоренностей и попытка управлять вами через вину." },
        { title: "Как давать фидбек", text: "Сначала признать вклад, потом назвать конкретное поведение, затем договориться о следующем шаге." }
      ]
    },
    {
      title: "Темная сторона",
      icon: "flame",
      score: leadingRadical.score,
      kicker: "жесткие радикалы, давление, манипуляции и защита",
      summary: `${leadingRadical.title} сейчас самый заметный жесткий слой профиля: ${leadingRadical.score}%.`,
      metrics: radicals.slice(0, 3).map((item) => getMetric(item.compact, item.score)),
      details: [
        { title: "Что это значит", text: leadingRadical.decode },
        { title: "Как проявляется", text: leadingRadical.example },
        { title: "Главный риск", text: leadingRadical.risk }
      ]
    },
    {
      title: "Самосаботаж",
      icon: "ban",
      score: sabotage.score,
      kicker: "где вы сами себе мешаете",
      summary: `Главный самосаботаж сейчас похож на ${sabotage.title}: ${sabotage.text}.`,
      metrics: [getMetric("анализ", analysis), getMetric("контроль", control), getMetric("импульс", impulse)],
      details: [
        { title: "Как вы себя стопорите", text: sabotage.text },
        { title: "Как это маскируется", text: "Обычно это выглядит как здравый смысл: еще подготовиться, еще проверить, еще доказать или резко все обнулить." },
        { title: "Антидот", text: "Ставить маленький следующий шаг с ограничением по времени. Нужна не идеальная уверенность, а управляемый запуск." }
      ]
    },
    {
      title: "Как меня видят другие",
      icon: "eye",
      score: modelScoreFromMap(map, [
        { scale: "S4", weight: 0.55 },
        { scale: "S5", weight: 0.55 },
        { scale: "S11", weight: 0.45 },
        { scale: "S10", weight: 0.35 },
        { scale: "S3", weight: 0.35 }
      ]),
      kicker: "что люди чувствуют рядом с вами",
      summary:
        expression >= 60 || recognition >= 60
          ? "Люди могут считывать в вас заметность, уровень и сильное поле присутствия."
          : "Люди могут считывать в вас сдержанность, глубину и неочевидную внутреннюю сложность.",
      metrics: [getMetric("видимость", expression), getMetric("статус", recognition), getMetric("дистанция", autonomy)],
      details: [
        { title: "За что выбирают", text: initiative >= 60 ? "За энергию, движение, умение включаться и создавать ощущение возможности." : "За надежность, глубину, точность, вкус к качеству или способность не суетиться." },
        { title: "Чего могут бояться", text: hardness >= 60 ? "Вашей жесткости, оценки, холодного решения или способности давить, когда ставка высокая." : autonomy >= 60 ? "Вашей закрытости: человеку может быть непонятно, нужен он вам или уже нет." : "Вашей эмоциональной реакции, если контакт стал слишком неопределенным." },
        { title: "Что не видно сразу", text: "Снаружи люди видят поведение. Внутри чаще работает связка из защиты, потребности и страха потерять важный контроль." }
      ]
    },
    {
      title: "Личная инструкция",
      icon: "file-user",
      score: modelScoreFromMap(map, [
        { scale: "S2", weight: 0.45 },
        { scale: "S3", weight: 0.45 },
        { scale: "S6", weight: 0.45 },
        { scale: "S10", weight: 0.35 },
        { scale: "S11", weight: 0.35 }
      ]),
      kicker: "как меня любить, продавать, вести и с чем ко мне нельзя",
      summary: `Короткая инструкция к вам: учитывайте ${topScore.label.toLowerCase()}, не ломайте границы и говорите конкретно.`,
      metrics: [getMetric("границы", autonomy), getMetric("ясность", clarity), getMetric("фидбек", sensitivity)],
      details: [
        { title: "Как меня любить", text: attachment.id === "avoidant" ? "Давать тепло без вторжения: обозначать чувства, но уважать время, личное пространство и право на паузу." : "Давать ясность: словами, регулярностью, предсказуемостью и прямым подтверждением, что контакт живой." },
        { title: "Как мной управлять нельзя", text: hardness >= 60 || control >= 60 ? "Через хаос, унижение, давление авторитетом и требования без логики." : "Через холод, игнор, стыд и эмоциональную неопределенность." },
        { title: "Как мне продавать идею", text: recognition >= 60 ? "Показывать уровень, статус, пользу для образа и то, почему это достойно вашего внимания." : "Показывать смысл, безопасность, конкретный следующий шаг и отсутствие лишнего давления." }
      ]
    },
    {
      title: "Паспорт для сторис",
      icon: "badge-check",
      score: topScore.score,
      kicker: "что можно красиво показать наружу",
      summary: `Публичная формула профиля: ${brandType}. Это витринный слой без личных ответов и чувствительных деталей.`,
      metrics: [
        getMetric("главный сигнал", topScore.score),
        getMetric("темный слой", leadingRadical.score),
        getMetric("узнаваемость", modelScoreFromMap(map, [
          { scale: "S4", weight: 0.5 },
          { scale: "S5", weight: 0.5 }
        ]))
      ],
      details: [
        { title: "Что показывать", text: `Архетип ${brandType}, WHOAMI-код, 3 главные шкалы и ведущий стиль привязанности. Этого достаточно для вирусности.` },
        { title: "Что скрывать", text: "Ответы на вопросы, email, личные детали, семейные и интимные выводы. Публичная карточка должна быть статусной, не исповедальной." },
        { title: "Виральный крючок", text: "Лучше всего работают формулировки: «что люди чувствуют рядом со мной», «мой темный радикал» и «с кем я совместим(а)»." }
      ]
    }
  ];

  const activeIndex = Math.min(Math.max(state.activeCategoryIndex, 0), categories.length - 1);
  state.activeCategoryIndex = activeIndex;
  state.reportCategories = categories;

  elements.lifeMap.innerHTML = `
    <section class="domain-report" aria-label="Глубокие блоки отчета">
      <div class="domain-report-head">
        <div>
          <span>Глубокие сферы</span>
          <h4>Открывайте блоки в любом порядке</h4>
          <p>Каждый блок показывает одну область жизни. Выберите то, что сейчас важнее: отношения, деньги, карьеру, привязанность, темную сторону или личную инструкцию.</p>
        </div>
        <strong>${activeIndex + 1}/${categories.length}</strong>
      </div>
      <div class="category-tabs" aria-label="Быстрый выбор блока">
        ${categories
          .map(
            (category, index) => `
              <button class="${index === activeIndex ? "is-active" : ""}" type="button" data-category-toggle="${index}">
                ${String(index + 1).padStart(2, "0")}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="domain-category-list">
        ${categories
          .map((category, index) => {
            const isActive = index === activeIndex;
            const status = `${category.score}%`;

            return `
              <article class="category-panel is-available ${isActive ? "is-active" : ""}" data-category-panel="${index}">
                <button class="category-toggle" type="button" data-category-toggle="${index}">
                  <span class="category-icon">
                    <i data-lucide="${category.icon}" aria-hidden="true"></i>
                  </span>
                  <span class="category-title">
                    <small>${String(index + 1).padStart(2, "0")}</small>
                    <strong>${category.title}</strong>
                    <em>${category.kicker}</em>
                    <span class="category-preview">${category.summary}</span>
                  </span>
                  <b>${status}</b>
                  <i data-lucide="maximize-2" aria-hidden="true"></i>
                </button>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function openCategoryModal(index) {
  const category = state.reportCategories[index];
  if (!category) return;

  state.activeCategoryIndex = index;
  openReportModal({
    eyebrow: `Блок ${String(index + 1).padStart(2, "0")} · ${Math.round(category.score)}%`,
    title: category.title,
    body: `
      <p class="report-modal-kicker">${escapeHtml(category.kicker)}</p>
      <p class="report-modal-summary">${escapeHtml(category.summary)}</p>
      ${renderModalMetrics(category.metrics)}
      ${renderModalDetails(category.details)}
    `
  });
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
  renderPassportDossier(state.latestScores);
  renderPassportShare(state.latestScores);
  renderAttachmentStyle(state.latestScores);
  renderDarkRadicals(state.latestScores);
  renderResultDecoder(state.latestScores);
  renderGrowthZones(state.latestScores);
  renderScoreList(state.latestScores);
  renderMiddleRecommendations(state.latestScores);
  renderLifeMap(state.latestScores);
  renderAnswerArchive();
  elements.middleReport.hidden = false;
  elements.upgrade.classList.add("is-unlocked");
  elements.upgrade.innerHTML = '<i data-lucide="check" aria-hidden="true"></i> Платный отчет открыт';

  elements.refLink.value = makeResultUrl(state.latestTier);
  if (elements.compatibilityLink) {
    elements.compatibilityLink.href = makeCompatibilityUrl(state.latestTier);
  }
  if (options.submit !== false) submitResult("paid_unlock", state.latestTier);
  if (window.lucide) window.lucide.createIcons();
  if (options.scroll !== false) {
    elements.middleReport.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function feedbackStorageKey() {
  return `whoami_feedback_${state.profileCode || "latest"}`;
}

function getFeedbackRating(name) {
  return elements.feedbackForm?.querySelector(`input[name="${name}"]:checked`)?.value || "";
}

function updateFeedbackSubmitState() {
  if (!elements.feedbackSubmit) return;
  const hasDescription = Boolean(getFeedbackRating("description"));
  const hasRecommendations = Boolean(getFeedbackRating("recommendations"));
  elements.feedbackSubmit.disabled = !(hasDescription && hasRecommendations);
}

function openFeedbackPrompt() {
  if (!elements.feedbackModal || !state.profileCode) return;
  if (window.localStorage.getItem(feedbackStorageKey())) return;

  elements.feedbackModal.hidden = false;
  elements.feedbackThanks.hidden = true;
  updateFeedbackSubmitState();
  if (window.lucide) window.lucide.createIcons();
}

function closeFeedbackPrompt(saveDismiss = true) {
  if (!elements.feedbackModal) return;
  elements.feedbackModal.hidden = true;
  window.clearTimeout(state.feedbackTimer);

  if (saveDismiss && state.profileCode && !window.localStorage.getItem(feedbackStorageKey())) {
    window.localStorage.setItem(
      feedbackStorageKey(),
      JSON.stringify({
        status: "dismissed",
        profileCode: state.profileCode,
        createdAt: new Date().toISOString()
      })
    );
  }
}

function scheduleFeedbackPrompt() {
  if (!elements.feedbackModal) return;
  window.clearTimeout(state.feedbackTimer);
  state.feedbackTimer = window.setTimeout(openFeedbackPrompt, 900);
}

function handleFeedbackSubmit(event) {
  event.preventDefault();
  if (!state.profileCode) return;

  const payload = {
    status: "submitted",
    profileCode: state.profileCode,
    description: Number(getFeedbackRating("description")),
    recommendations: Number(getFeedbackRating("recommendations")),
    createdAt: new Date().toISOString()
  };

  window.localStorage.setItem(feedbackStorageKey(), JSON.stringify(payload));
  elements.feedbackThanks.hidden = false;
  elements.feedbackSubmit.disabled = true;
  window.setTimeout(() => closeFeedbackPrompt(false), 850);
}

function showResult() {
  const scores = calculateScores().sort((a, b) => b.score - a.score);
  state.latestScores = scores;
  state.latestTier = "basic";
  state.profileCode = makeProfileCode(scores);
  resetUnlockedReports();
  renderBasicResult(scores, state.profileCode);
  submitResult("result", state.latestTier);
  scheduleFeedbackPrompt();

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

    unlockReport({ scroll: false, submit: false });

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

elements.paidVerdict.addEventListener("click", (event) => {
  if (event.target.closest("[data-open-verdict-modal]")) {
    openVerdictModal();
    return;
  }

  const button = event.target.closest("[data-dashboard-block]");
  if (!button || !state.latestScores.length) return;

  openDashboardBlockModal(button.dataset.dashboardBlock);
});

if (elements.avatarInput) {
  elements.avatarInput.addEventListener("change", handleAvatarInputChange);
}

if (elements.avatarRegenerate) {
  elements.avatarRegenerate.addEventListener("click", handleAvatarRegenerate);
}

if (elements.avatarVariants) {
  elements.avatarVariants.addEventListener("click", handleAvatarVariantClick);
}

if (elements.feedbackForm) {
  elements.feedbackForm.addEventListener("change", updateFeedbackSubmitState);
  elements.feedbackForm.addEventListener("submit", handleFeedbackSubmit);
}

elements.feedbackClose.forEach((button) => {
  button.addEventListener("click", () => closeFeedbackPrompt(true));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && elements.feedbackModal && !elements.feedbackModal.hidden) {
    closeFeedbackPrompt(true);
  }
  if (event.key === "Escape" && elements.reportModal && !elements.reportModal.hidden) {
    closeReportModal();
  }
});

elements.reportModalClose.forEach((button) => {
  button.addEventListener("click", closeReportModal);
});

if (elements.compareCheck) {
  elements.compareCheck.addEventListener("click", handleCompatibilityCheck);
}

if (elements.compareInput) {
  elements.compareInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    handleCompatibilityCheck();
  });
}

elements.lifeMap.addEventListener("click", (event) => {
  const toggleButton = event.target.closest("[data-category-toggle]");

  if (!state.latestScores.length || !toggleButton) return;

  const index = Number(toggleButton.dataset.categoryToggle);
  if (!Number.isFinite(index)) return;

  openCategoryModal(index);
});

document.addEventListener("click", (event) => {
  const passportButton = event.target.closest("[data-download-passport]");
  const documentButton = event.target.closest("[data-download-passport-doc]");
  if (passportButton) {
    downloadPassportImage();
  }
  if (documentButton) {
    downloadPassportDocument();
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-avatar]");
  if (!button || !elements.avatarInput) return;
  scrollToAvatarStudio();
  elements.avatarInput.click();
});

if (window.lucide) {
  window.lucide.createIcons();
}

resetAvatarStudio();
showSharedResultFromUrl();
