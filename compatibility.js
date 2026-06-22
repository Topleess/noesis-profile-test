const publicDimensions = {
  S1: { label: "Эмоциональная динамика" },
  S2: { label: "Потребность в ясности контакта" },
  S3: { label: "Автономность" },
  S4: { label: "Запрос на признание" },
  S5: { label: "Выразительность" },
  S6: { label: "Структура и контроль" },
  S7: { label: "Настороженность к мотивам" },
  S8: { label: "Импульс и новизна" },
  S9: { label: "Аналитическая осторожность" },
  S10: { label: "Чувствительность к оценке" },
  S11: { label: "Жесткость в достижении цели" },
  S12: { label: "Инициативность" }
};

const growthLibrary = {
  S1: {
    title: "Эмоциональная регуляция",
    compat: "Договориться о паузе до резких сообщений и возвращаться к разговору уже с запросом, а не с атакой."
  },
  S2: {
    title: "Ясность в близости",
    compat: "Проговаривать статус, ожидания и планы. Для тревожного профиля неопределенность быстро становится шумом."
  },
  S3: {
    title: "Дозированная близость",
    compat: "Разделять любовь и постоянный контакт: пространство должно называться словами, а не исчезновением."
  },
  S4: {
    title: "Признание без соревнования",
    compat: "Давать уважение и обратную связь так, чтобы критика не звучала как обесценивание личности."
  },
  S5: {
    title: "Проявленность без перегрева",
    compat: "Оставлять место для разной интенсивности: один может выражать ярко, другой - тише, и это не равно равнодушию."
  },
  S6: {
    title: "Гибкость контроля",
    compat: "Договариваться о правилах заранее, но оставлять живой люфт, чтобы порядок не превращался в давление."
  },
  S7: {
    title: "Доверие без проверок",
    compat: "Создавать прозрачность поступками и задавать прямой вопрос раньше, чем запускается внутренняя проверка."
  },
  S8: {
    title: "Свобода без последствий",
    compat: "Планировать пространство для спонтанности, чтобы импульс не ломал договоренности и безопасность пары."
  },
  S9: {
    title: "Решение без застревания",
    compat: "Согласовать темп решений: осторожному профилю нужны критерии, быстрому - понятный дедлайн."
  },
  S10: {
    title: "Безопасность под оценкой",
    compat: "Сложные темы поднимать мягко, без сарказма, публичного давления и проверки на смелость."
  },
  S11: {
    title: "Сила без давления",
    compat: "Не использовать слабые места партнера как аргументы, даже если спор стал острым."
  },
  S12: {
    title: "Общий ритм",
    compat: "Инициативность должна вести, а не тащить. Паре нужен общий темп, а не победа самого быстрого."
  }
};

const scenarioGrowth = {
  couple: {
    S1: "Договориться о паузе до резких сообщений и возвращаться к разговору уже с запросом, а не с атакой.",
    S2: "Проговаривать статус, ожидания и планы. Для тревожного профиля неопределенность быстро становится шумом.",
    S3: "Разделять любовь и постоянный контакт: пространство должно называться словами, а не исчезновением.",
    S4: "Давать уважение и обратную связь так, чтобы критика не звучала как обесценивание личности.",
    S5: "Оставлять место для разной интенсивности: один может выражать ярко, другой - тише, и это не равно равнодушию.",
    S6: "Договариваться о правилах заранее, но оставлять живой люфт, чтобы порядок не превращался в давление.",
    S7: "Создавать прозрачность поступками и задавать прямой вопрос раньше, чем запускается внутренняя проверка.",
    S8: "Планировать пространство для спонтанности, чтобы импульс не ломал договоренности и безопасность пары.",
    S9: "Согласовать темп решений: осторожному профилю нужны критерии, быстрому - понятный дедлайн.",
    S10: "Сложные темы поднимать мягко, без сарказма, публичного давления и проверки на смелость.",
    S11: "Не использовать слабые места партнера как аргументы, даже если спор стал острым.",
    S12: "Инициативность должна вести, а не тащить. Паре нужен общий темп, а не победа самого быстрого."
  },
  friends: {
    S1: "Не превращать эмоциональные всплески в проверку дружбы. Лучше называть состояние и возвращаться к легкости после паузы.",
    S2: "Договориться, как часто нужен контакт: одному важны регулярные сигналы, другому достаточно редких, но надежных встреч.",
    S3: "Уважать автономность друга: дистанция не всегда означает холод, если она названа и не выглядит исчезновением.",
    S4: "Следить, чтобы признание не стало соревнованием. Дружба выдерживает успехи, когда в ней есть искренняя радость за другого.",
    S5: "Разрешить разный социальный объем: один может быть ярким центром, другой - тихой опорой, и это не конфликт ролей.",
    S6: "Не превращать дружбу в систему правил. Договоренности важны, но живой контакт не должен чувствоваться как отчетность.",
    S7: "Убирать скрытые проверки: если что-то задело, лучше спросить прямо, чем собирать доказательства в голове.",
    S8: "Оставить место для спонтанности, но не обещать больше, чем реально можно выдержать.",
    S9: "Не застревать в анализе каждого сообщения. Дружбе помогает простое уточнение смысла, а не длинное внутреннее расследование.",
    S10: "Критиковать бережно и наедине. Для чувствительного профиля публичная шутка может ощущаться как предательство.",
    S11: "Не мериться силой и правотой. В дружбе жесткость лучше переводить в честность без давления.",
    S12: "Согласовать инициативу: активный друг зовет и запускает, но не должен становиться единственным двигателем контакта."
  },
  team: {
    S1: "Высокую эмоциональность переводить в быстрые ретро и ясные статусы, чтобы рабочие решения не зависели от настроения момента.",
    S2: "Давать прозрачные ожидания: сроки, роль, критерий успеха. Неопределенность снижает рабочую устойчивость.",
    S3: "Оставлять автономию в способе выполнения задачи. Контроль результата важнее постоянного контроля процесса.",
    S4: "Настроить признание вклада: статус и видимость должны распределяться честно, иначе появляется скрытая конкуренция.",
    S5: "Использовать выразительность для презентаций и коммуникации, но фиксировать решения письменно, чтобы энергия не заменяла структуру.",
    S6: "Разделить зоны ответственности. Сильный контроль полезен в системе, но опасен, если блокирует делегирование.",
    S7: "Повышать прозрачность решений: кто отвечает, почему так, что считается риском. Это снижает подозрительность к мотивам.",
    S8: "Отделить эксперименты от стабильного контура. Новизна нужна команде, но не должна ломать обязательства.",
    S9: "Давать критерии решения и дедлайны на анализ, иначе осторожность может тормозить движение всей команды.",
    S10: "Обратную связь давать конкретно и без публичного стыда: иначе человек защищается, а не улучшает результат.",
    S11: "Силу и напор направлять в цели, а не в людей. Жесткий лидерский слой требует правил экологичного спора.",
    S12: "Инициативу закреплять владельцем задачи. Иначе быстрый человек запускает много процессов, но команда не успевает их довести."
  }
};

const compatibilityModes = {
  couple: {
    id: "couple",
    label: "Совместимость пары",
    shortLabel: "Пара",
    scoreLabel: "Индекс пары",
    loading: "Собираю карту пары...",
    outputKicker: "Романтический контекст",
    note: "В этом режиме сильнее учитываются привязанность, близость, ревность, дистанция и то, как два человека восстанавливают контакт после напряжения.",
    resonanceTitle: "Где будет близость",
    frictionTitle: "Где может болеть",
    growthKicker: "Зоны роста пары",
    growthTitle: "Что настроить в отношениях",
    growthIntro: "Это договоренности, которые защищают близость от тревоги, давления, молчания и взаимных проверок.",
    selfAttachmentLabel: "Ваш стиль привязанности",
    partnerAttachmentLabel: "Стиль привязанности партнера",
    attachmentWeight: 0.38,
    weights: { S1: 0.95, S2: 1.35, S3: 1.15, S4: 0.6, S5: 0.6, S6: 0.55, S7: 0.85, S8: 0.65, S9: 0.6, S10: 0.9, S11: 0.65, S12: 0.55 },
    bands: [
      ["Мягкое совпадение", "Профили легко считывают друг друга: основные реакции, темп близости и способы поддержки близки."],
      ["Сильная, но живая совместимость", "Есть хорошая база притяжения, а различия могут усиливать пару, если их проговаривать."],
      ["Контрастная совместимость", "Притяжение держится на различиях. Важно не считать стиль другого человека неправильным."],
      ["Нужны зрелые правила контакта", "Профили могут цеплять чувствительные места друг друга. Здесь особенно важны ясность, паузы и границы."]
    ]
  },
  friends: {
    id: "friends",
    label: "Совместимость друзей",
    shortLabel: "Друзья",
    scoreLabel: "Индекс дружбы",
    loading: "Собираю карту дружбы...",
    outputKicker: "Дружеский контекст",
    note: "В этом режиме сильнее учитываются доверие, социальный ритм, легкость, конкуренция, границы и способность сохранять контакт без постоянного подтверждения.",
    resonanceTitle: "Где будет легкость",
    frictionTitle: "Где дружба может уставать",
    growthKicker: "Зоны роста дружбы",
    growthTitle: "Что сохранить в контакте",
    growthIntro: "Это правила, которые помогают дружбе не превращаться в соревнование, долг, проверку или одностороннюю инициативу.",
    selfAttachmentLabel: "Ваш стиль контакта",
    partnerAttachmentLabel: "Стиль контакта друга",
    attachmentWeight: 0.22,
    weights: { S1: 0.8, S2: 0.75, S3: 1, S4: 0.75, S5: 1.15, S6: 0.6, S7: 1, S8: 0.85, S9: 0.65, S10: 0.8, S11: 0.55, S12: 0.85 },
    bands: [
      ["Легкая дружеская связка", "Профили хорошо выдерживают ритм друг друга: есть пространство, интерес и понятный способ поддерживать контакт."],
      ["Сильная дружба с разным темпом", "Есть хорошая база доверия, но важно не путать различия в активности с равнодушием."],
      ["Дружба на контрасте", "Контакт может быть интересным, но потребует честных границ, чтобы один не уставал, а другой не чувствовал отвержение."],
      ["Нужны ясные границы дружбы", "Профили могут запускать конкуренцию, обиды или проверки. Лучше заранее договориться о ритме и ожиданиях."]
    ]
  },
  team: {
    id: "team",
    label: "Совместимость рабочей команды",
    shortLabel: "Работа",
    scoreLabel: "Индекс команды",
    loading: "Собираю карту рабочей совместимости...",
    outputKicker: "Рабочий контекст",
    note: "В этом режиме сильнее учитываются роли, лидерство, контроль, скорость решений, риск, делегирование, обратная связь и устойчивость команды под нагрузкой.",
    resonanceTitle: "Где будет рабочая синергия",
    frictionTitle: "Где команда может буксовать",
    growthKicker: "Зоны роста команды",
    growthTitle: "Что настроить в совместной работе",
    growthIntro: "Это рабочие договоренности: роли, зоны ответственности, темп решений, формат фидбека и правила конфликта.",
    selfAttachmentLabel: "Ваш рабочий стиль контакта",
    partnerAttachmentLabel: "Рабочий стиль второго профиля",
    attachmentWeight: 0.12,
    weights: { S1: 0.65, S2: 0.55, S3: 0.75, S4: 0.85, S5: 0.7, S6: 1.3, S7: 0.9, S8: 0.85, S9: 1.15, S10: 0.7, S11: 1.05, S12: 1.1 },
    bands: [
      ["Сильная рабочая связка", "Профили хорошо распределяют роли, темп решений и ответственность. Такая команда может быстро создавать результат."],
      ["Рабочая совместимость с настройкой ролей", "База сильная, но эффективность зависит от того, насколько ясно разделены зоны ответственности."],
      ["Команда на контрасте", "Разные стили могут давать объем, но без правил будут спорить за темп, контроль или способ принятия решений."],
      ["Нужен жесткий рабочий протокол", "Профили могут тормозить или давить друг на друга. Нужны роли, дедлайны, критерии и правила фидбека."]
    ]
  }
};

const submissionsConfig = {
  url: "https://ooxuclhybyiapkhgekph.supabase.co",
  key: "sb_publishable_ldOiB6YjhLlwBUaDjNbW4A_6qdnmC47",
  table: "test_submissions"
};

const elements = {
  selfInput: document.querySelector("[data-self-input]"),
  partnerInput: document.querySelector("[data-partner-input]"),
  selfStatus: document.querySelector("[data-self-status]"),
  partnerStatus: document.querySelector("[data-partner-status]"),
  run: document.querySelector("[data-run-compatibility]"),
  modeInputs: document.querySelectorAll("[data-compat-mode]"),
  output: document.querySelector("[data-compatibility-output]")
};

const state = {
  preloadedSelf: null,
  latestSelf: null,
  latestPartner: null,
  mode: "couple"
};

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

function uiText(value) {
  return window.whoamiT ? window.whoamiT(value) : String(value ?? "");
}

function escapeUi(value) {
  return escapeHtml(uiText(value));
}

function requiredFieldMessage(label) {
  return `${uiText("Заполните поле")} "${uiText(label)}".`;
}

function unreadableFieldMessage(label) {
  return `${uiText("Не получилось прочитать поле")} "${uiText(label)}". ${uiText("Используйте полную ссылку результата или NP-код.")}`;
}

function decodeResultPayload(value) {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function parseResultPayload(value) {
  const text = String(value || "").trim();
  if (!text) return null;

  try {
    const url = new URL(text, window.location.href);
    const encoded = url.searchParams.get("result") || url.searchParams.get("self") || url.searchParams.get("partner");
    if (encoded) return decodeResultPayload(encoded);
  } catch {
    // Continue with relaxed parsing below.
  }

  const resultMatch = text.match(/(?:^|[?&])(result|self|partner)=([^&#\s]+)/);
  if (resultMatch?.[2]) return decodeResultPayload(resultMatch[2]);

  if (/^[A-Za-z0-9_-]{24,}$/.test(text)) return decodeResultPayload(text);

  return null;
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
  if (Array.isArray(rawScores[0])) return hydrateScores(rawScores);

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

async function requestPublicProfileRows(code, withOrder = true) {
  const url = new URL(`${submissionsConfig.url}/rest/v1/${submissionsConfig.table}`);
  url.searchParams.set("select", "profile_code,scores,result_url,tier,event_type");
  url.searchParams.set("profile_code", `eq.${code}`);
  url.searchParams.set("limit", "5");
  if (withOrder) url.searchParams.set("order", "created_at.desc");

  const response = await fetch(url.toString(), {
    headers: {
      apikey: submissionsConfig.key,
      Authorization: `Bearer ${submissionsConfig.key}`
    }
  });

  if (!response.ok) throw new Error(`public profile lookup failed: ${response.status}`);
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
    throw new Error(uiText("Профиль с таким кодом не найден или закрыт для публичного чтения."));
  }

  return profile;
}

async function resolveProfile(value, fallbackProfile, label) {
  const text = cleanText(value);
  if (!text && fallbackProfile) return fallbackProfile;
  if (!text) throw new Error(requiredFieldMessage(label));

  const codeMatch = text.toUpperCase().match(/^NP-[A-Z0-9]{4,}$/);
  if (codeMatch) return fetchPublicProfileByCode(codeMatch[0]);

  const payload = parseResultPayload(text);
  const profile = profileFromPayload(payload, "shared-link");
  if (!profile) {
    throw new Error(unreadableFieldMessage(label));
  }

  return profile;
}

function scoreMap(scores) {
  return Object.fromEntries(scores.map((item) => [item.scale, item.score]));
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
      compact: "тревожно-избегающий стиль",
      anxiety,
      avoidance,
      need: "медленная ясность, право на паузу и запрет на проверки через боль"
    };
  }
  if (highAnxiety) {
    return {
      compact: "тревожный стиль",
      anxiety,
      avoidance,
      need: "регулярные сигналы близости, прямые просьбы и ясный статус контакта"
    };
  }
  if (highAvoidance) {
    return {
      compact: "избегающий стиль",
      anxiety,
      avoidance,
      need: "границы, пространство и объясненная дистанция вместо молчания"
    };
  }
  return {
    compact: "надежный стиль",
    anxiety,
    avoidance,
    need: "честные договоренности и спокойная обратная связь без давления"
  };
}

function clampScore(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function compatibilityBand(score, mode) {
  const [high, good, contrast, low] = mode.bands;
  const [title, text] = score >= 82 ? high : score >= 68 ? good : score >= 52 ? contrast : low;
  return { title, text };
}

function getSelectedMode() {
  const selected = [...elements.modeInputs].find((input) => input.checked)?.value || state.mode;
  return compatibilityModes[selected] || compatibilityModes.couple;
}

function buildCompatibilityReport(selfScores, partnerScores, modeId = state.mode) {
  const mode = compatibilityModes[modeId] || compatibilityModes.couple;
  const selfMap = scoreMap(selfScores);
  const partnerMap = scoreMap(partnerScores);
  const rows = Object.keys(publicDimensions).map((scale) => {
    const self = selfMap[scale] || 0;
    const partner = partnerMap[scale] || 0;
    const weight = mode.weights[scale] || 1;
    const delta = Math.abs(self - partner);
    const max = Math.max(self, partner);
    return {
      scale,
      label: publicDimensions[scale].label,
      self,
      partner,
      delta,
      average: Math.round((self + partner) / 2),
      max,
      weight,
      impact: delta * weight + Math.max(max - 50, 0) * 0.18 * weight
    };
  });
  const totalWeight = rows.reduce((sum, item) => sum + item.weight, 0);
  const averageDelta = rows.reduce((sum, item) => sum + item.delta * item.weight, 0) / totalWeight;
  const selfAttachment = getAttachmentProfile(selfScores);
  const partnerAttachment = getAttachmentProfile(partnerScores);
  const attachmentDelta =
    (Math.abs(selfAttachment.anxiety - partnerAttachment.anxiety) +
      Math.abs(selfAttachment.avoidance - partnerAttachment.avoidance)) /
    2;
  const index = clampScore((100 - averageDelta) * (1 - mode.attachmentWeight) + (100 - attachmentDelta) * mode.attachmentWeight);
  const resonance =
    rows
      .filter((item) => item.average >= 52)
      .sort((a, b) => b.average * b.weight - a.average * a.weight || a.delta - b.delta)
      .slice(0, 3) || [];
  const fallbackResonance = [...rows].sort((a, b) => a.delta / a.weight - b.delta / b.weight).slice(0, 3);
  const friction = rows
    .filter((item) => item.max >= 50)
    .sort((a, b) => b.impact - a.impact || b.max - a.max)
    .slice(0, 4);

  return {
    index,
    mode,
    band: compatibilityBand(index, mode),
    resonance: resonance.length ? resonance : fallbackResonance,
    friction,
    selfAttachment,
    partnerAttachment,
    growth: friction.map((item) => ({
      title: growthLibrary[item.scale].title,
      text: scenarioGrowth[mode.id]?.[item.scale] || growthLibrary[item.scale].compat,
      delta: item.delta
    }))
  };
}

function renderProfileSummary(profile, label) {
  const top = profile.scores.slice(0, 3);
  return `
    <article class="compat-profile-summary">
      <span>${escapeUi(label)} · ${escapeHtml(profile.code)}</span>
      <strong>${escapeUi(top[0]?.label || "Профиль")}</strong>
      <p>${top.map((item) => `${escapeUi(item.label)} ${item.score}%`).join(" · ")}</p>
    </article>
  `;
}

function renderCompatibilityReport(selfProfile, partnerProfile, modeId = state.mode, shouldScroll = true) {
  const report = buildCompatibilityReport(selfProfile.scores, partnerProfile.scores, modeId);
  const { mode } = report;

  elements.output.hidden = false;
  elements.output.innerHTML = `
    <article class="compat-page-report" data-compat-report-mode="${mode.id}">
      <div class="compat-report-head">
        <div class="compatibility-score">
          <span>${escapeUi(mode.scoreLabel)}</span>
          <strong>${report.index}</strong>
          <small>${escapeUi(report.band.title)}</small>
        </div>
        <div>
          <span>${escapeUi(mode.outputKicker)}</span>
          <h2>${escapeUi(mode.label)}: ${escapeUi(report.band.title)}</h2>
          <p>${escapeUi(report.band.text)}</p>
          <p class="compat-context-note">${escapeUi(mode.note)}</p>
        </div>
      </div>

      <div class="compat-profile-grid">
        ${renderProfileSummary(selfProfile, "Ваш профиль")}
        ${renderProfileSummary(partnerProfile, "Другой профиль")}
      </div>

      <div class="compatibility-grid">
        <section>
          <h3>${escapeUi(mode.resonanceTitle)}</h3>
          ${report.resonance
            .map(
              (item) => `
                <div class="compatibility-row">
                  <strong>${escapeUi(item.label)}</strong>
                  <span>${item.self}% / ${item.partner}%</span>
                </div>
              `
            )
            .join("")}
        </section>
        <section>
          <h3>${escapeUi(mode.frictionTitle)}</h3>
          ${report.friction
            .map(
              (item) => `
                <div class="compatibility-row">
                  <strong>${escapeUi(item.label)}</strong>
                  <span>${escapeUi("разница")} ${item.delta}%</span>
                </div>
              `
            )
            .join("")}
        </section>
      </div>

      <div class="attachment-compare">
        <div>
          <span>${escapeUi(mode.selfAttachmentLabel)}</span>
          <strong>${escapeUi(report.selfAttachment.compact)}</strong>
          <small>${escapeUi("тревога")} ${report.selfAttachment.anxiety}% · ${escapeUi("избегание")} ${report.selfAttachment.avoidance}%</small>
          <p>${escapeUi(report.selfAttachment.need)}</p>
        </div>
        <div>
          <span>${escapeUi(mode.partnerAttachmentLabel)}</span>
          <strong>${escapeUi(report.partnerAttachment.compact)}</strong>
          <small>${escapeUi("тревога")} ${report.partnerAttachment.anxiety}% · ${escapeUi("избегание")} ${report.partnerAttachment.avoidance}%</small>
          <p>${escapeUi(report.partnerAttachment.need)}</p>
        </div>
      </div>

      <section class="pair-growth-section" aria-label="${escapeUi(mode.growthKicker)}">
        <div class="growth-head">
          <span>${escapeUi(mode.growthKicker)}</span>
          <h2>${escapeUi(mode.growthTitle)}</h2>
          <p>${escapeUi(mode.growthIntro)}</p>
        </div>
        <div class="growth-grid">
          ${report.growth
            .map(
              (item) => `
                <article class="growth-item">
                  <div class="growth-item-top">
                    <strong>${escapeUi(item.title)}</strong>
                    <b>${item.delta}%</b>
                  </div>
                  <p>${escapeUi(item.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    </article>
`;

  if (shouldScroll) elements.output.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showStatus(message, isError = false) {
  elements.output.hidden = false;
  elements.output.innerHTML = `
    <p class="compatibility-status ${isError ? "is-error" : ""}">${escapeUi(message)}</p>
    ${
      isError
        ? `<p class="compatibility-help">${escapeUi("Если NP-код не находится, это нормально для приватного режима. Вставьте полную ссылку результата второго человека.")}</p>`
        : ""
    }
  `;
}

async function runCompatibility() {
  const mode = getSelectedMode();
  state.mode = mode.id;
  elements.run.disabled = true;
  elements.run.innerHTML = `<i data-lucide="loader-circle" aria-hidden="true"></i> ${escapeUi("Считаю")}`;
  showStatus(mode.loading);
  if (window.lucide) window.lucide.createIcons();

  try {
    const selfProfile = await resolveProfile(elements.selfInput.value, state.preloadedSelf, "Ваш результат");
    const partnerProfile = await resolveProfile(elements.partnerInput.value, null, "Другой профиль");

    if (selfProfile.code === partnerProfile.code) {
      throw new Error(uiText("Это один и тот же профиль. Для сравнения нужен второй WHOAMI-результат."));
    }

    state.latestSelf = selfProfile;
    state.latestPartner = partnerProfile;
    renderCompatibilityReport(selfProfile, partnerProfile, state.mode);
  } catch (error) {
    showStatus(error.message, true);
  } finally {
    elements.run.disabled = false;
    elements.run.innerHTML = `<i data-lucide="heart-handshake" aria-hidden="true"></i> ${escapeUi("Рассчитать совместимость")}`;
    if (window.lucide) window.lucide.createIcons();
  }
}

function updateCompatibilityMode(modeId) {
  if (!compatibilityModes[modeId]) return;
  state.mode = modeId;

  if (state.latestSelf && state.latestPartner) {
    renderCompatibilityReport(state.latestSelf, state.latestPartner, state.mode);
  }
}

function hydrateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const selfPayload = params.get("self");
  const partnerPayload = params.get("partner");

  if (selfPayload) {
    try {
      state.preloadedSelf = profileFromPayload(decodeResultPayload(selfPayload), "current-result");
      if (state.preloadedSelf) {
        elements.selfStatus.textContent = `${uiText("Загружен профиль")} ${state.preloadedSelf.code} ${uiText("со страницы результата.")}`;
        elements.selfInput.placeholder = uiText("Профиль уже загружен. Вставьте другой результат, чтобы заменить.");
      }
    } catch {
      elements.selfStatus.textContent = uiText("Не получилось загрузить профиль из ссылки.");
    }
  }

  if (partnerPayload) {
    elements.partnerInput.value = partnerPayload;
  }
}

elements.run.addEventListener("click", runCompatibility);

elements.partnerInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  runCompatibility();
});

elements.selfInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  runCompatibility();
});

elements.modeInputs.forEach((input) => {
  input.addEventListener("change", () => updateCompatibilityMode(input.value));
});

window.addEventListener("whoami:languagechange", () => {
  if (!elements.run.disabled) {
    elements.run.innerHTML = `<i data-lucide="heart-handshake" aria-hidden="true"></i> ${escapeUi("Рассчитать совместимость")}`;
  }

  if (state.preloadedSelf) {
    elements.selfStatus.textContent = `${uiText("Загружен профиль")} ${state.preloadedSelf.code} ${uiText("со страницы результата.")}`;
    elements.selfInput.placeholder = uiText("Профиль уже загружен. Вставьте другой результат, чтобы заменить.");
  }

  if (state.latestSelf && state.latestPartner) {
    renderCompatibilityReport(state.latestSelf, state.latestPartner, state.mode, false);
  }

  if (window.lucide) window.lucide.createIcons();
});

hydrateFromUrl();

if (window.lucide) {
  window.lucide.createIcons();
}
