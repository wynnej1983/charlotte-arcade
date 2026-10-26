// Shared fx (particles) + sound helpers used across the arcade.
const Arcade = (function () {
  const PARTICLE_COLORS = ['#ff3d7f', '#7b2ff7', '#00e5ff', '#39ffb0', '#ffd93d'];
  let canvas, ctx, particles = [];

  function initFx() {
    canvas = document.getElementById('fx');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
    requestAnimationFrame(loop);
  }

  function loop() {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter(p => p.life > 0 && p.y < canvas.height + 40);
      for (const p of particles) {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.rotation !== undefined) p.rotation += p.vr;

        ctx.save();
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = p.color;
        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation || 0);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.6);
        }
        ctx.restore();
      }
    }
    requestAnimationFrame(loop);
  }

  function spawnBurst(x, y) {
    if (!ctx) return;
    for (let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 * i) / 16 + Math.random() * 0.3;
      const speed = 2 + Math.random() * 3;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 3,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        life: 1,
        decay: 0.02 + Math.random() * 0.015,
        gravity: 0.05,
        shape: 'circle'
      });
    }
  }

  function spawnConfetti() {
    if (!ctx) return;
    for (let i = 0; i < 140; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 100,
        vx: (Math.random() - 0.5) * 2,
        vy: 2 + Math.random() * 3,
        size: 5 + Math.random() * 5,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        life: 1,
        decay: 0.004 + Math.random() * 0.003,
        gravity: 0.03,
        rotation: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.2,
        shape: 'rect'
      });
    }
  }

  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function isMuted() {
    return localStorage.getItem('arcade-muted') === '1';
  }

  function setMuted(val) {
    localStorage.setItem('arcade-muted', val ? '1' : '0');
  }

  function playTone(freq, duration, type = 'sine', gainVal = 0.08, delay = 0) {
    if (isMuted()) return;
    const ac = getAudioCtx();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = gainVal;
    osc.connect(gain);
    gain.connect(ac.destination);
    const startAt = ac.currentTime + delay;
    gain.gain.setValueAtTime(gainVal, startAt);
    gain.gain.exponentialRampToValueAtTime(0.001, startAt + duration);
    osc.start(startAt);
    osc.stop(startAt + duration);
  }

  function sfxFlip() { playTone(380, 0.08, 'triangle', 0.06); }
  function sfxMatch(comboLevel) {
    const base = 520 + (comboLevel || 0) * 60;
    playTone(base, 0.12, 'sine', 0.09);
    playTone(base * 1.5, 0.14, 'sine', 0.07, 0.06);
  }
  function sfxMiss() { playTone(140, 0.25, 'sawtooth', 0.05); }
  function sfxBlip() { playTone(300, 0.05, 'square', 0.04); }
  function sfxHit() { playTone(220, 0.08, 'square', 0.06); }
  function sfxGameOver() {
    [0, 0.12, 0.24].forEach((d, i) => playTone(260 - i * 60, 0.3, 'sawtooth', 0.06, d));
  }
  function sfxWin() {
    [0, 0.12, 0.24, 0.36].forEach((d, i) => playTone(440 + i * 110, 0.3, 'triangle', 0.08, d));
  }

  function setupMuteButton(btn) {
    if (!btn) return;
    const refresh = () => { btn.textContent = isMuted() ? '🔇' : '🔊'; };
    btn.addEventListener('click', () => {
      setMuted(!isMuted());
      refresh();
    });
    refresh();
  }

  document.addEventListener('DOMContentLoaded', initFx);

  return {
    spawnBurst, spawnConfetti,
    sfxFlip, sfxMatch, sfxMiss, sfxBlip, sfxHit, sfxGameOver, sfxWin,
    isMuted, setMuted, setupMuteButton
  };
})();
