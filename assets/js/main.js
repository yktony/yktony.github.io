// =========================
// GETPWND MAIN SCRIPT
// =========================

console.log("PWND site loaded successfully.");


// =========================
// CAPTCHA GATE
// =========================
const captchaGate = document.getElementById("captcha-gate");
const captchaBtn = document.getElementById("captcha-submit");

if (captchaBtn) {
  captchaBtn.addEventListener("click", () => {
    captchaGate.style.opacity = "0";
    setTimeout(() => captchaGate.style.display = "none", 300);
  });
}


// =========================
// MOBILE NAV MENU
// =========================
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const visible = navMenu.getAttribute("data-visible") === "true";
    navMenu.setAttribute("data-visible", !visible);
  });
}


// =========================
// THEME TOGGLE
// =========================
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
  });
}


// =========================
// TYPEWRITER EFFECT
// =========================
const typewriter = document.getElementById("typewriter");
const text = "PWND — Protecting Children Online.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

if (typewriter) typeEffect();


// =========================
// BY THE NUMBERS COUNTERS
// =========================
const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const speed = 200;

    const update = () => {
      const current = +counter.innerText;

      if (current < target) {
        const increment = Math.ceil(target / speed);
        counter.innerText = current + increment;
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
}

function checkCounters() {
  const section = document.getElementById("numbers");
  if (!section || countersStarted) return;

  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    countersStarted = true;
    animateCounters();
  }
}

window.addEventListener("scroll", checkCounters);
document.addEventListener("DOMContentLoaded", checkCounters);


// =========================
// CLEAR ALL DATA BUTTON
// =========================
const wipeBtn = document.getElementById("wipe");

if (wipeBtn) {
  wipeBtn.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    alert("All stored data has been cleared.");
  });
}


// =========================
// FAQ TOGGLE
// =========================
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("open");
  });
});
