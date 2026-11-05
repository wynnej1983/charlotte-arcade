(function () {
  const TEACHERS = [
    { name: 'Ms. Byte', subject: 'Coding', emoji: '👩‍💻', color: '#00ffff', pitch: 1.3, rate: 1.05, facts: [
      [['variable', 'let', 'const'], 'A variable is a labeled box that holds a value. Use const when it will not change, and let when it will.'],
      [['function'], 'A function is a reusable recipe. It takes inputs, runs steps, and returns an output.']
    ]},
    { name: 'Dr. Quark', subject: 'Physics', emoji: '🧑‍🔬', color: '#ff7a00', pitch: 0.9, rate: 0.95, facts: [
      [['gravity'], 'Gravity pulls objects with mass toward each other. On Earth it speeds falling objects up by about 9.8 meters per second every second.'],
      [['force', 'newton'], "Newton's second law says force equals mass times acceleration: F = m × a."]
    ]},
    { name: 'Prof. Flask', subject: 'Chemistry', emoji: '👩‍🔬', color: '#39ffb0', pitch: 1.15, rate: 1.0, facts: [
      [['atom'], 'An atom is the smallest unit of an element. It has protons and neutrons in the nucleus, with electrons around it.'],
      [['acid', 'base', 'ph'], 'The pH scale runs from 0 to 14. Below 7 is acidic, 7 is neutral, and above 7 is basic.']
    ]},
    { name: 'Dr. Fern', subject: 'Biology', emoji: '👨‍🔬', color: '#51cf66', pitch: 0.85, rate: 1.0, facts: [
      [['cell'], 'Cells are the basic building blocks of life. Plants and animals are made of trillions of them.'],
      [['photosynthesis', 'plant'], 'Photosynthesis is how plants turn sunlight, water, and carbon dioxide into sugar and oxygen.']
    ]},
    { name: 'Mr. Chronos', subject: 'History', emoji: '👨‍🏫', color: '#ffd93d', pitch: 0.75, rate: 0.9, facts: [
      [['rome', 'roman'], 'The Roman Republic became an empire in 27 BCE, when Augustus became its first emperor.'],
      [['world war', 'war'], 'World War II lasted from 1939 to 1945 and involved most of the world’s nations.']
    ]},
    { name: 'Ms. Atlas', subject: 'Geography', emoji: '👩‍🏫', color: '#4dabf7', pitch: 1.2, rate: 1.1, facts: [
      [['capital', 'country'], 'A capital city is where a country’s government is based. Ask me about a country and I will share what I know.'],
      [['ocean', 'sea'], 'Earth has five oceans: Pacific, Atlantic, Indian, Southern, and Arctic.']
    ]},
    { name: 'Prof. Nova', subject: 'Astronomy', emoji: '🧑‍🚀', color: '#845ef7', pitch: 0.95, rate: 0.9, facts: [
      [['star', 'sun'], 'Stars are giant balls of hot gas that make their own light through nuclear fusion. Our Sun is one of them.'],
      [['planet', 'mars', 'jupiter'], 'There are eight planets in our solar system. Jupiter is the largest and Mercury is the smallest.']
    ]},
    { name: 'Señora Luna', subject: 'Spanish', emoji: '👩‍🦰', color: '#ff6b6b', pitch: 1.25, rate: 1.0, facts: [
      [['hello', 'hola'], '¡Hola! “Hola” means “hello.” Try “¿Cómo estás?” which means “How are you?”'],
      [['thank', 'gracias'], '“Gracias” means “thank you.” You can answer “De nada,” which means “You’re welcome.”']
    ]},
    { name: 'Monsieur Bonjour', subject: 'French', emoji: '🧔', color: '#f06595', pitch: 0.8, rate: 0.95, facts: [
      [['hello', 'bonjour'], '“Bonjour” means “hello” and is used during the day. In the evening, say “bonsoir.”'],
      [['thank', 'merci'], '“Merci” means “thank you.” Add “beaucoup” for “thank you very much.”']
    ]},
    { name: 'Maestro Tempo', subject: 'Music', emoji: '🧑‍🎤', color: '#e599f7', pitch: 1.05, rate: 1.0, facts: [
      [['note', 'scale'], 'A major scale has seven notes: do, re, mi, fa, sol, la, ti, then back to do.'],
      [['rhythm', 'beat', 'tempo'], 'Tempo is how fast a piece is played. It is often measured in beats per minute, or BPM.']
    ]},
    { name: 'Ms. Palette', subject: 'Art', emoji: '👩‍🎨', color: '#ff8787', pitch: 1.35, rate: 1.05, facts: [
      [['color', 'colour'], 'The primary colors are red, yellow, and blue. Mixing them makes the secondary colors: orange, green, and purple.'],
      [['perspective'], 'Linear perspective makes things look smaller as they get farther away, and lines meet at a vanishing point.']
    ]},
    { name: 'Dr. Digit', subject: 'Math', emoji: '👨‍🦳', color: '#FAB005', pitch: 0.9, rate: 0.95, facts: [
      [['pythagor', 'triangle'], 'In a right triangle, a² + b² = c², where c is the longest side, called the hypotenuse.'],
      [['prime'], 'A prime number has exactly two factors: 1 and itself. The first few are 2, 3, 5, 7, and 11.']
    ]},
    { name: 'Mr. Logic', subject: 'Logic & Puzzles', emoji: '👨‍💻', color: '#22b8cf', pitch: 1.0, rate: 1.0, facts: [
      [['and', 'or', 'not', 'boolean'], 'In logic, AND is true only if both inputs are true. OR is true if at least one input is true. NOT flips the value.'],
      [['puzzle', 'riddle'], 'A good way to solve puzzles is to list what you know, then eliminate the options that break a rule.']
    ]},
    { name: 'Dr. Pulse', subject: 'Health & Anatomy', emoji: '👩‍⚕️', color: '#ff5a7a', pitch: 1.1, rate: 1.0, facts: [
      [['heart'], 'The human heart beats about 100,000 times a day and pumps roughly 7,500 liters of blood.'],
      [['sleep', 'brain'], 'Most adults need 7 to 9 hours of sleep a night. Sleep helps the brain store memories.']
    ]},
    { name: 'Ms. Sage', subject: 'Philosophy', emoji: '🧓', color: '#adb5bd', pitch: 0.7, rate: 0.85, facts: [
      [['truth', 'know'], 'Philosophers have long asked what we can truly know. Socrates said that knowing you do not know is a start.'],
      [['good', 'ethic', 'moral'], 'Ethics asks how we should act. Different schools of thought answer this differently.']
    ]},
    { name: 'Dr. Psyche', subject: 'Psychology', emoji: '🧑‍⚕️', color: '#b197fc', pitch: 1.0, rate: 0.95, facts: [
      [['habit'], 'Habits form through repetition. Doing a behavior in the same context again and again makes it automatic.'],
      [['memory', 'remember'], 'Spacing out study sessions helps memory more than cramming, because you practice recall over time.']
    ]},
    { name: 'Ms. Quill', subject: 'Writing', emoji: '👨‍🎨', color: '#fcc419', pitch: 1.2, rate: 1.1, facts: [
      [['essay', 'thesis'], 'A strong essay has a clear thesis, the main claim, and each paragraph supports it with evidence.'],
      [['story', 'plot'], 'Most stories have a setup, a conflict, a climax, and a resolution.']
    ]},
    { name: 'Mr. Terra', subject: 'Geology', emoji: '🧑‍🌾', color: '#a0522d', pitch: 0.8, rate: 0.9, facts: [
      [['rock', 'mineral'], 'There are three main rock types: igneous, sedimentary, and metamorphic. Each forms in a different way.'],
      [['volcano', 'earthquake'], 'Earthquakes and volcanoes mostly happen where tectonic plates meet, at their edges.']
    ]},
    { name: 'Grandmaster Rook', subject: 'Chess', emoji: '🧙', color: '#9775fa', pitch: 0.95, rate: 0.9, facts: [
      [['castle', 'rook'], 'A rook moves in straight lines, any number of squares horizontally or vertically. Castling moves your king to safety.'],
      [['opening', 'start'], 'In the opening, control the center, develop your knights and bishops, and castle early.']
    ]},
    { name: 'Mr. Ledger', subject: 'Economics', emoji: '👨‍💼', color: '#69db7c', pitch: 1.0, rate: 1.0, facts: [
      [['supply', 'demand', 'price'], 'When demand rises and supply stays the same, prices usually go up. When supply rises, prices tend to fall.'],
      [['interest', 'save', 'money'], 'Compound interest means you earn interest on your interest, so savings grow faster the longer they stay invested.']
    ]}
  ];

  const overlay = document.getElementById('tchOverlay');
  const grid = document.getElementById('tchGrid');
  const chat = document.getElementById('tchChat');
  const logEl = document.getElementById('tchLog');
  const faceEl = document.getElementById('tchFace');
  const nameEl = document.getElementById('tchName');
  const subEl = document.getElementById('tchSub');
  const callBtn = document.getElementById('tchCall');
  const form = document.getElementById('tchForm');
  const input = document.getElementById('tchInput');
  const camEl = document.getElementById('tchCam');
  const micEl = document.getElementById('tchMic');
  const callScreen = document.getElementById('callScreen');
  const csFace = document.getElementById('csFace');
  const csName = document.getElementById('csName');
  const csSub = document.getElementById('csSub');
  const csStatus = document.getElementById('csStatus');
  const csTimer = document.getElementById('csTimer');
  const csCam = document.getElementById('csCam');
  const csMic = document.getElementById('csMic');
  let micOff = false;
  let timerHandle = null;
  let callSeconds = 0;

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const GOOD_VOICE = /premium|enhanced|natural|neural|google|samantha|daniel|karen|moira|serena|tessa/i;

  let current = null;
  let onCall = false;
  let speaking = false;
  let voices = [];
  let recog = null;
  let camStream = null;

  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    const all = speechSynthesis.getVoices();
    const en = all.filter(v => /^en/i.test(v.lang));
    const good = en.filter(v => GOOD_VOICE.test(v.name));
    voices = (good.length ? good : en).concat(all.filter(v => !en.includes(v)));
  }
  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }

  function afterSpeech() {
    speaking = false;
    setMic(onCall);
    if (onCall) startListening();
  }

  function speak(text, t) {
    if (!('speechSynthesis' in window) || (window.Arcade && Arcade.isMuted())) {
      afterSpeech();
      return;
    }
    stopListening();
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const idx = TEACHERS.indexOf(t);
    if (voices.length) u.voice = voices[idx % voices.length];
    u.pitch = t.pitch;
    u.rate = t.rate;
    speaking = true;
    setMic(false, true);
    u.onend = afterSpeech;
    u.onerror = afterSpeech;
    speechSynthesis.speak(u);
  }

  function setMic(listening, talking) {
    if (!micEl) return;
    micEl.hidden = !onCall;
    micEl.textContent = talking ? '🔊 Teacher speaking…' : '🎤 Listening…';
    if (csStatus) {
      csStatus.textContent = !onCall ? '' : talking ? '🔊 Speaking…' : micOff ? 'Mic off — tap Mic on to talk' : '🎤 Listening…';
    }
  }

  function startListening() {
    if (!SR) {
      if (csStatus && onCall) csStatus.textContent = "This browser can't listen to speech. Try Chrome, Edge, or Safari.";
      return;
    }
    if (!onCall || speaking || micOff) return;
    if (!recog) {
      recog = new SR();
      recog.lang = 'en-US';
      recog.continuous = false;
      recog.interimResults = false;
      recog.onresult = (e) => {
        const text = e.results[0][0].transcript.trim();
        if (text) sendMessage(text, true);
      };
      recog.onend = () => {
        if (onCall && !speaking) setTimeout(startListening, 300);
      };
      recog.onerror = (e) => {
        const msgs = {
          'not-allowed': 'Mic blocked. Click the lock icon in the address bar and allow the microphone.',
          'service-not-allowed': 'Speech recognition is blocked by this browser. Try Chrome or Safari.',
          'no-speech': 'I did not hear anything. Tap Mic on and try again.',
          'audio-capture': 'No microphone found.',
          'network': 'Speech recognition needs an internet connection.'
        };
        if (csStatus && onCall) csStatus.textContent = msgs[e.error] || `Mic error: ${e.error}`;
      };
    }
    try { recog.start(); } catch (e) { /* already running */ }
  }

  function stopListening() {
    if (recog) {
      try { recog.onend = null; recog.abort(); } catch (e) { /* ignore */ }
      recog = null;
    }
  }

  async function startCam() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
    try {
      const mic = await navigator.mediaDevices.getUserMedia({ audio: true });
      mic.getTracks().forEach(t => t.stop());
    } catch (e) {
      if (csStatus) csStatus.textContent = 'Mic blocked. Allow the microphone for this site, then try again.';
    }
    try {
      camStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      camEl.srcObject = camStream;
      camEl.hidden = false;
      csCam.srcObject = camStream;
      csCam.hidden = false;
    } catch (e) {
      addBubble('them', "I can't see you yet because camera access was blocked. We can still talk!");
    }
  }

  function stopCam() {
    if (camStream) camStream.getTracks().forEach(t => t.stop());
    camStream = null;
    camEl.srcObject = null;
    camEl.hidden = true;
    csCam.srcObject = null;
    csCam.hidden = true;
  }

  function answer(t, text) {
    const q = text.toLowerCase();
    for (const [keys, reply] of t.facts) {
      if (keys.some(k => q.includes(k))) return reply;
    }
    const topics = t.facts.map(f => f[0][0]).join(', ');
    return `Good question! I teach ${t.subject}. Try asking me about: ${topics}.`;
  }

  function addBubble(who, text) {
    const div = document.createElement('div');
    div.className = 'tch-bubble ' + who;
    div.textContent = text;
    logEl.appendChild(div);
    logEl.scrollTop = logEl.scrollHeight;
  }

  function sendMessage(text, spoken) {
    if (!current) return;
    addBubble('me', text);
    const reply = answer(current, text);
    setTimeout(() => {
      addBubble('them', reply);
      if (onCall) speak(reply, current);
    }, 350);
  }

  function renderGrid() {
    grid.innerHTML = '';
    TEACHERS.forEach(t => {
      const card = document.createElement('button');
      card.className = 'tch-card';
      card.style.setProperty('--c', t.color);
      card.innerHTML = `<div class="tch-face-big">${t.emoji}</div><b></b><span></span>`;
      card.querySelector('b').textContent = t.name;
      card.querySelector('span').textContent = t.subject;
      card.addEventListener('click', () => openChat(t));
      grid.appendChild(card);
    });
  }

  function openChat(t) {
    current = t;
    endCall(false);
    grid.hidden = true;
    chat.hidden = false;
    faceEl.textContent = t.emoji;
    faceEl.style.setProperty('--c', t.color);
    nameEl.textContent = t.name;
    subEl.textContent = t.subject + ' teacher';
    logEl.innerHTML = '';
    addBubble('them', `Hi! I'm ${t.name}, your ${t.subject} teacher. Message me or hit Call to talk out loud.`);
    input.focus();
  }

  function closeChat() {
    endCall(false);
    chat.hidden = true;
    grid.hidden = false;
    current = null;
  }

  function startCall() {
    if (!current) return;
    onCall = true;
    micOff = false;
    csMic.textContent = '🎤 Mic on';
    callBtn.textContent = '📴 Hang up';
    callBtn.classList.add('live');
    csFace.textContent = current.emoji;
    csFace.style.setProperty('--c', current.color);
    csName.textContent = current.name;
    csSub.textContent = current.subject + ' teacher';
    callSeconds = 0;
    csTimer.textContent = '0:00';
    clearInterval(timerHandle);
    timerHandle = setInterval(() => {
      callSeconds++;
      csTimer.textContent = `${Math.floor(callSeconds / 60)}:${String(callSeconds % 60).padStart(2, '0')}`;
    }, 1000);
    callScreen.hidden = false;
    startCam();
    speak(`Hi! This is ${current.name}. I can hear you now, so ask me anything about ${current.subject}.`, current);
  }

  function endCall(speakBye) {
    if (!onCall) return;
    onCall = false;
    clearInterval(timerHandle);
    callScreen.hidden = true;
    callBtn.textContent = '📞 Call';
    callBtn.classList.remove('live');
    stopListening();
    stopCam();
    speaking = false;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    setMic(false);
    if (speakBye && current) addBubble('them', 'Call ended. Keep learning!');
  }

  callBtn.addEventListener('click', () => (onCall ? endCall(true) : startCall()));
  document.getElementById('csEnd').addEventListener('click', () => endCall(true));
  csMic.addEventListener('click', () => {
    micOff = !micOff;
    csMic.textContent = micOff ? '🔇 Mic off' : '🎤 Mic on';
    if (micOff) {
      stopListening();
      setMic(true);
    } else {
      setMic(true);
      startListening();
    }
  });
  document.getElementById('tchBack').addEventListener('click', closeChat);
  document.getElementById('tchClose').addEventListener('click', () => { closeChat(); overlay.hidden = true; });
  overlay.addEventListener('click', (e) => { if (e.target === overlay) { closeChat(); overlay.hidden = true; } });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) { closeChat(); overlay.hidden = true; } });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    sendMessage(text, false);
  });

  ['teachersBtn', 'teachersNav'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
      renderGrid();
      closeChat();
      overlay.hidden = false;
    });
  });
})();
