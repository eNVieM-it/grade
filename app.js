/**
 * Критерії оцінювання з математики (5–6 класи, онлайн-навчання)
 * Main Application Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Data: Detailed Criteria & Level-Up Advice (1-12) ---
  const criteriaData = {
    1: {
      score: 1,
      level: 'initial',
      levelName: 'Початковий рівень',
      title: '1 бал: Пасивна присутність',
      desc: 'Присутній(-ня) на занятті, але пасивний(-на); розпізнає лише окремі символи чи фігури; завдання виконує виключно за прямої підказки вчителя.',
      nextStep: {
        target: 2,
        title: 'Як піднятися до 2 балів:',
        advice: 'Почніть повторювати базові математичні правила (додавання, множення, назви фігур) та спробуйте виконати хоча б одне найпростіше завдання самостійно за зразком учителя.'
      }
    },
    2: {
      score: 2,
      level: 'initial',
      levelName: 'Початковий рівень',
      title: '2 бали: Дії за зразком',
      desc: 'Відтворює незначну частину правил; виконує найпростіші дії лише за зразком; у роботах на платформі — грубі системні помилки.',
      nextStep: {
        target: 3,
        title: 'Як піднятися до 3 балів:',
        advice: 'Вивчіть напам\'ять базові формули або таблицю множення, здайте на навчальну платформу хоча б 30% домашніх робіт і не бійтеся запитувати вчителя про допомогу.'
      }
    },
    3: {
      score: 3,
      level: 'initial',
      levelName: 'Початковий рівень',
      title: '3 бали: Окремі формули та 1 дія',
      desc: 'Знає окремі формули чи правила; розв’язує найпростіші вправи на одну дію з постійною допомогою; на платформі виконано менше третини завдань.',
      nextStep: {
        target: 4,
        title: 'Як перейти на Середній рівень (4 бали):',
        advice: 'Вивчіть базові алгоритми дій (порядок дій у виразах, правила ділення/дроби). Відповідайте на навідні запитання вчителя та регулярно завантажуйте домашні роботи на платформу.'
      }
    },
    4: {
      score: 4,
      level: 'average',
      levelName: 'Середній рівень',
      title: '4 бали: Базові алгоритми',
      desc: 'Знає базові алгоритми; розв\'язує типові вправи за навідними запитаннями; завдання на платформі виконує нерегулярно або з частими помилками.',
      nextStep: {
        target: 5,
        title: 'Як піднятися до 5 балів:',
        advice: 'Будьте уважнішими під час обчислень: перевіряйте чернетки, щоб уникнути механічних помилок. На уроці пробуйте пояснювати свої думки своїми словами.'
      }
    },
    5: {
      score: 5,
      level: 'average',
      levelName: 'Середній рівень',
      title: '5 балів: 1–2 дії за алгоритмом',
      desc: 'Виконує вправи на 1–2 дії за вивченим алгоритмом; правильно відповідає на уроці, але складно пояснює власні міркування; у тестах припускається помилок через неуважність.',
      nextStep: {
        target: 6,
        title: 'Як піднятися до 6 балів:',
        advice: 'Тренуйтеся розв\'язувати прості рівняння та вирази на кілька дій. Вчіться коротко пояснювати кожен крок («спочатку множимо, потім додаємо») і здавайте всі роботи вчасно.'
      }
    },
    6: {
      score: 6,
      level: 'average',
      levelName: 'Середній рівень',
      title: '6 балів: Стандартні рівняння',
      desc: 'Впевнено виконує стандартні обчислення та прості рівняння; коротко пояснює кроки; роботи здає вчасно, але з незначними похибками.',
      nextStep: {
        target: 7,
        title: 'Як перейти на Достатній рівень (7 балів):',
        advice: 'Переходьте до самостійного розв\'язування текстових задач на 2–3 дії! Активніше беріть участь в уроці (пишіть у чаті або піднімайте віртуальну руку) та самостійно виправляйте помічені неточності.'
      }
    },
    7: {
      score: 7,
      level: 'sufficient',
      levelName: 'Достатній рівень',
      title: '7 балів: Задачі на кілька дій',
      desc: 'Самостійно розв\'язує задачі на кілька дій; бере активну участь в уроці; самостійно виправляє помилки за вказівкою вчителя; письмові роботи оформлені послідовно.',
      nextStep: {
        target: 8,
        title: 'Як піднятися до 8 балів:',
        advice: 'Розвивайте навичку аргументації: вільно пояснюйте в мікрофон або письмово у чаті, ЧОМУ саме таку дію ви обрали. Намагайтеся писати самостійні роботи без помарок і арифметичних похибок.'
      }
    },
    8: {
      score: 8,
      level: 'sufficient',
      levelName: 'Достатній рівень',
      title: '8 балів: Вільна аргументація',
      desc: 'Без труднощів розв\'язує задачі на 2–3 дії; вільно аргументує хід дій голосом або письмово під час заняття; самостійні роботи виконує майже безпомилково.',
      nextStep: {
        target: 9,
        title: 'Як піднятися до 9 балів:',
        advice: 'Зверніть увагу на точність математичних термінів (ділене, дільник, чисельник, координата, многокутник). Завантажуйте всі роботи на платформу вчасно та в ідеальній якості оформлення.'
      }
    },
    9: {
      score: 9,
      level: 'sufficient',
      levelName: 'Достатній рівень',
      title: '9 балів: Грамотність та повне володіння',
      desc: 'Вільно володіє матеріалом програми; грамотно використовує математичні терміни; завдання на платформі завантажує вчасно, самостійно та якісно.',
      nextStep: {
        target: 10,
        title: 'Як перейти на Високий рівень (10 балів):',
        advice: 'Поглиблюйте розуміння теорії (не просто як рахувати, а чому працює правило). Беріться за задачі підвищеної складності (із зірочкою) та обґрунтовуйте кожен крок як маленький доведення!'
      }
    },
    10: {
      score: 10,
      level: 'high',
      levelName: 'Високий рівень',
      title: '10 балів: Глибоке розуміння теорії',
      desc: 'Глибоко розуміє теоретичний матеріал; безпомилково розв\'язує складні задачі з чітким обґрунтуванням кожного кроку; стабільно активний(-на) на заняттях.',
      nextStep: {
        target: 11,
        title: 'Як піднятися до 11 балів:',
        advice: 'Шукайте нестандартні та раціональні способи розв\'язку: як порахувати швидше, гарніше, елегантніше. Спробуйте олімпіадні та логічні задачі, допомагайте пояснювати розв\'язки однокласникам.'
      }
    },
    11: {
      score: 11,
      level: 'high',
      levelName: 'Високий рівень',
      title: '11 балів: Раціональні & олімпіадні задачі',
      desc: 'Знаходить раціональні та нестандартні способи розв\'язання; успішно виконує завдання підвищеної складності (олімпіадні, логічні); може пояснити розв\'язок однокласникам.',
      nextStep: {
        target: 12,
        title: 'Як здобути абсолютний максимум (12 балів):',
        advice: 'Проявляйте системний дослідницький інтерес до математики! Створюйте навчальні мініпроєкти, розв\'язуйте завдання кількома різними методами та будьте взірцем академічної доброчесності.'
      }
    },
    12: {
      score: 12,
      level: 'high',
      levelName: 'Високий рівень',
      title: '12 балів: Майстерність & творчість',
      desc: 'Проявляє системні знання та особливий інтерес до предмета; розв\'язує задачі різними методами; успішно виконує творчі завдання (мініпроєкти); зразково дотримується академічної доброчесності.',
      nextStep: null
    }
  };

  // --- Theme Management ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('math_theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('math_theme', theme);
  }

  // --- Print / PDF Export ---
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // --- Back to top button ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Level Navigation Tabs (All, Initial, Average, Sufficient, High) ---
  const levelNavCards = document.querySelectorAll('.level-nav-card');
  const levelGroups = document.querySelectorAll('.level-group');

  levelNavCards.forEach(card => {
    card.addEventListener('click', () => {
      levelNavCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const targetLevel = card.getAttribute('data-level');
      filterLevelGroups(targetLevel);
    });
  });

  // --- Smooth Scroll Helper (Prevents any header overlap) ---
  function scrollToElement(el, offset = 16) {
    if (!el) return;
    const header = document.querySelector('.header');
    let headerOffset = 0;
    if (header) {
      const pos = window.getComputedStyle(header).position;
      if (pos === 'sticky' || pos === 'fixed') {
        headerOffset = header.offsetHeight;
      }
    }
    const targetY = el.getBoundingClientRect().top + window.scrollY - headerOffset - offset;
    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: 'smooth'
    });
  }

  function filterLevelGroups(level) {
    if (level === 'all') {
      levelGroups.forEach(group => group.style.display = 'flex');
    } else {
      levelGroups.forEach(group => {
        const groupLevel = group.getAttribute('data-level-group');
        group.style.display = (groupLevel === level) ? 'flex' : 'none';
      });
      // Smoothly scroll to the filtered level group without menu overlap
      const targetGroup = document.querySelector(`.level-group[data-level-group="${level}"]`);
      if (targetGroup) {
        scrollToElement(targetGroup, 16);
      }
    }
  }

  // --- Score Step-bar (1 to 12) ---
  const scoreStepBtns = document.querySelectorAll('.score-step-btn');
  scoreStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const score = btn.getAttribute('data-score');
      scoreStepBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Ensure that group is visible if previously filtered
      const card = document.getElementById(`score-card-${score}`);
      if (card) {
        const parentGroup = card.closest('.level-group');
        if (parentGroup && parentGroup.style.display === 'none') {
          // Reset level filter to all
          levelNavCards.forEach(c => c.classList.remove('active'));
          document.querySelector('.level-nav-card[data-level="all"]').classList.add('active');
          levelGroups.forEach(group => group.style.display = 'flex');
        }

        // Highlight and scroll smoothly into view
        highlightCard(card);
      }
    });
  });

  function highlightCard(card) {
    document.querySelectorAll('.criterion-card').forEach(c => c.classList.remove('highlighted'));
    card.classList.add('highlighted');
    scrollToElement(card, 20);

    setTimeout(() => {
      card.classList.remove('highlighted');
    }, 2400);
  }

  // --- Modal Dialog for Level-Up Advice ---
  const levelUpBtns = document.querySelectorAll('.level-up-btn');
  const modal = document.getElementById('levelUpModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  levelUpBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetScore = parseInt(btn.getAttribute('data-target'), 10);
      openLevelUpModal(targetScore);
    });
  });

  function openLevelUpModal(targetScore) {
    const data = criteriaData[targetScore];
    const prevData = criteriaData[targetScore - 1];

    if (!data || !modal) return;

    modalTitle.innerHTML = `Сходинка вгору: від <strong>${targetScore - 1}</strong> до <strong>${targetScore} балів</strong>`;

    modalBody.innerHTML = `
      <div style="background: var(--bg-tertiary); padding: 14px; border-radius: var(--radius-md); border-left: 4px solid var(--brand-primary);">
        <h4 style="font-size: 15px; margin-bottom: 6px;">Вимоги на ${targetScore} балів (${data.levelName}):</h4>
        <p style="font-size: 13.5px; color: var(--text-secondary);">${data.desc}</p>
      </div>

      ${prevData && prevData.nextStep ? `
        <div style="background: var(--color-sufficient-bg); border: 1px solid var(--color-sufficient-border); padding: 14px; border-radius: var(--radius-md);">
          <strong style="color: var(--color-sufficient); font-size: 14px; display: block; margin-bottom: 4px;">🚀 Практична порада вчителя:</strong>
          <p style="font-size: 13.5px; color: var(--text-primary); line-height: 1.5;">${prevData.nextStep.advice}</p>
        </div>
      ` : ''}

      <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 8px;">
        <button id="modalGoToCardBtn" class="primary-action-btn" style="padding: 8px 16px; font-size: 13.5px;">
          Перейти до картки ${targetScore} балів
        </button>
      </div>
    `;

    modal.style.display = 'flex';

    document.getElementById('modalGoToCardBtn')?.addEventListener('click', () => {
      modal.style.display = 'none';
      const targetCard = document.getElementById(`score-card-${targetScore}`);
      if (targetCard) {
        highlightCard(targetCard);
      }
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });

  // --- Interactive Simulator Logic ---
  const simForm = document.getElementById('simulatorForm');
  const resScoreText = document.getElementById('resScoreText');
  const resLevelTitle = document.getElementById('resLevelTitle');
  const resMeterFill = document.getElementById('resMeterFill');
  const resAdviceText = document.getElementById('resAdviceText');
  const simScrollToLevelBtn = document.getElementById('simScrollToLevelBtn');

  if (simForm) {
    simForm.addEventListener('change', updateSimulation);
  }

  function updateSimulation() {
    const activity = parseInt(document.querySelector('input[name="activity"]:checked')?.value || '3', 10);
    const platform = parseInt(document.querySelector('input[name="platform"]:checked')?.value || '3', 10);
    const tasks = parseInt(document.querySelector('input[name="tasks"]:checked')?.value || '3', 10);
    const integrity = parseInt(document.querySelector('input[name="integrity"]:checked')?.value || '3', 10);

    // Score computation: values 1 to 4 each
    // Sum ranges from 4 to 16
    const totalPoints = activity + platform + tasks + integrity;

    let scoreRange = '';
    let levelName = '';
    let advice = '';
    let percentage = 0;
    let targetLevelGroup = 'sufficient';

    if (totalPoints <= 5) {
      scoreRange = '1–2 бали';
      levelName = 'Початковий рівень';
      percentage = 15;
      targetLevelGroup = 'initial';
      advice = 'Для швидкого росту почніть здавати хоча б частину домашніх завдань на платформу та повторіть правила й формули на одну дію. Запитуйте вчителя на уроці!';
    } else if (totalPoints <= 7) {
      scoreRange = '3–4 бали';
      levelName = 'Межа Початкового та Середнього';
      percentage = 30;
      targetLevelGroup = 'average';
      advice = 'Вивчіть типові алгоритми розв\'язання прикладів та регулярно завантажуйте завдання на платформу без запізнень.';
    } else if (totalPoints <= 9) {
      scoreRange = '5–6 балів';
      levelName = 'Середній рівень';
      percentage = 48;
      targetLevelGroup = 'average';
      advice = 'Тренуйтеся розв\'язувати рівняння та уважно перевіряйте розрахунки в тестах. Вчіться коментувати власні кроки.';
    } else if (totalPoints <= 11) {
      scoreRange = '7–8 балів';
      levelName = 'Достатній рівень';
      percentage = 68;
      targetLevelGroup = 'sufficient';
      advice = 'Чудовий результат! Щоб перейти у Високий рівень (10+ балів), переходьте до задач підвищеної складності та впевнено аргументуйте розв\'язки.';
    } else if (totalPoints <= 13) {
      scoreRange = '9–10 балів';
      levelName = 'Межа Достатнього та Високого';
      percentage = 82;
      targetLevelGroup = 'high';
      advice = 'Високий рівень знань! Використовуйте точну математичну термінологію, шукайте раціональні шляхи розв\'язання та допомагайте однокласникам.';
    } else {
      scoreRange = '11–12 балів';
      levelName = 'Високий рівень (Найвищий ступінь)';
      percentage = 98;
      targetLevelGroup = 'high';
      advice = 'Блискуче! Продовжуйте розв\'язувати нестандартні та олімпіадні задачі різними способами і готуйте авторські мініпроєкти з математики!';
    }

    if (resScoreText) resScoreText.textContent = scoreRange;
    if (resLevelTitle) resLevelTitle.textContent = levelName;
    if (resMeterFill) resMeterFill.style.width = `${percentage}%`;
    if (resAdviceText) resAdviceText.textContent = advice;

    if (simScrollToLevelBtn) {
      simScrollToLevelBtn.setAttribute('data-target-level', targetLevelGroup);
    }
  }

  if (simScrollToLevelBtn) {
    simScrollToLevelBtn.addEventListener('click', () => {
      const targetGroup = simScrollToLevelBtn.getAttribute('data-target-level') || 'sufficient';
      const el = document.getElementById(`level-${targetGroup}`);
      if (el) {
        // Ensure all levels are visible
        levelNavCards.forEach(c => c.classList.remove('active'));
        const matchingNav = document.querySelector(`.level-nav-card[data-level="${targetGroup}"]`);
        if (matchingNav) matchingNav.classList.add('active');
        filterLevelGroups(targetGroup);
      }
    });
  }

  // Initial simulator evaluation
  updateSimulation();
});
