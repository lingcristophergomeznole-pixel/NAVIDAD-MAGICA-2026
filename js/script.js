// Cuenta regresiva para Navidad 2026
const christmas = new Date(2026, 11, 25, 0, 0, 0).getTime();
const $ = (id) => document.getElementById(id);

function updateCountdown() {
  const remaining = christmas - Date.now();
  if (remaining <= 0) {
    $("countdown").innerHTML = '<h2>🎄 ¡Feliz Navidad 2026! 🎅</h2>';
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  $("days").textContent = String(days).padStart(3, "0");
  $("hours").textContent = String(hours).padStart(2, "0");
  $("minutes").textContent = String(minutes).padStart(2, "0");
  $("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Ventana de mensajes
const modal = $("modal");
function showMessage(title, message, icon = "🎄") {
  $("modalTitle").textContent = title;
  $("modalText").textContent = message;
  $("modalIcon").textContent = icon;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
$("closeModal").addEventListener("click", closeModal);
$("modalOk").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });

document.querySelectorAll(".gift-btn").forEach(button => {
  button.addEventListener("click", () => showMessage("¡Tu regalo navideño!", button.dataset.message, "🎁"));
});
$("letterBtn").addEventListener("click", () => showMessage(
  "Una carta para ti",
  "En esta Navidad deseo que tu hogar se llene de paz, que nunca falte salud en tu familia y que cada nuevo día traiga esperanza. Gracias por compartir la magia. ¡Feliz Navidad! ❤️",
  "💌"
));
const wishes = [
  "Que la salud y la alegría acompañen a tu familia durante todo el año. ✨",
  "Que cada sueño encuentre un camino para hacerse realidad. ⭐",
  "Que nunca falten amor, unión y motivos para agradecer. ❤️",
  "Que la paz ilumine tu hogar hoy y siempre. 🕊️"
];
$("wishBtn").addEventListener("click", () => {
  const wish = wishes[Math.floor(Math.random() * wishes.length)];
  showMessage("Tu deseo mágico", wish, "🌟");
});

// Modo claro / oscuro
$("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  $("themeBtn").textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Música opcional: coloca tu archivo navidad.mp3 en la carpeta musica.
// El navegador necesita que el visitante pulse el botón para iniciar el audio.
const music = new Audio("musica/navidad.mp3");
music.loop = true;
music.volume = 0.45;
let musicPlaying = false;
$("musicBtn").addEventListener("click", async () => {
  if (!musicPlaying) {
    try {
      await music.play();
      musicPlaying = true;
      $("musicBtn").textContent = "🔇";
      $("musicBtn").title = "Silenciar música";
    } catch {
      showMessage("Falta agregar música", "Copia un archivo de audio llamado navidad.mp3 dentro de la carpeta musica para activar esta función.", "🎵");
    }
  } else {
    music.pause();
    musicPlaying = false;
    $("musicBtn").textContent = "🎵";
    $("musicBtn").title = "Activar música";
  }
});

// Nieve animada en canvas
const canvas = $("snow");
const ctx = canvas.getContext("2d");
let flakes = [];
let width = 0, height = 0;
function resizeSnow() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth; height = window.innerHeight;
  canvas.width = width * ratio; canvas.height = height * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  flakes = Array.from({length: Math.min(110, Math.floor(width / 9))}, () => ({
    x: Math.random() * width, y: Math.random() * height,
    r: Math.random() * 2.3 + .7, speed: Math.random() * 1.1 + .35,
    drift: Math.random() * .7 - .35
  }));
}
function drawSnow() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255,255,255,.85)";
  for (const flake of flakes) {
    ctx.beginPath(); ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2); ctx.fill();
    flake.y += flake.speed; flake.x += flake.drift;
    if (flake.y > height + 5) { flake.y = -5; flake.x = Math.random() * width; }
    if (flake.x > width + 5) flake.x = -5;
    if (flake.x < -5) flake.x = width + 5;
  }
  requestAnimationFrame(drawSnow);
}
window.addEventListener("resize", resizeSnow);
resizeSnow(); drawSnow();
