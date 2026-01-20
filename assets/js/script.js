'use strict';
/* ================= THEME (FIXED) ================= */
document.body.classList.add('dark-theme');
const themeBtn = document.querySelectorAll('.theme-btn');

function syncThemeButtons() {
  const isDark = document.body.classList.contains('dark-theme');

  themeBtn.forEach(btn => {
    btn.classList.toggle('dark', isDark);
    btn.classList.toggle('light', !isDark);
  });
}

syncThemeButtons();

themeBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    syncThemeButtons();
  });
});

/* ================= NAVBAR ================= */

const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

const navToggleFunc = () => nav.classList.toggle('active');

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

/* ================= SCROLL UP ================= */

const scrollUpBtn = document.querySelector('.scroll-up-btn');

window.onscroll = () => {
  scrollUpBtn.classList.toggle('show', window.scrollY > 400);
};

function scrollToTop() {
  const start = window.pageYOffset;
  const duration = 1000; 
  let startTime = null;

  function animation(time) {
    if (!startTime) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);

    window.scrollTo(0, start * (1 - easeInOut(progress)));

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOut(t) {
    return t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  requestAnimationFrame(animation);
}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length <= 1) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + start - 140;
    const duration = 1200;
    let startTime = null;

    function scrollAnimation(time) {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      window.scrollTo(0, start + (end - start) * ease(progress));

      if (progress < 1) requestAnimationFrame(scrollAnimation);
    }

    const ease = t =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    requestAnimationFrame(scrollAnimation);
  });
});

