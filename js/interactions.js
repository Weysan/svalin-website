/* Svalin — vanilla JS interactions (burger menu, FAQ accordion, cookie consent) */
(function () {
  'use strict';

  /* ── Cookie consent ───────────────────────────────────────────── */
  function initCookies() {
    var bar = document.getElementById('cookie-bar');
    if (!bar) return;
    try {
      if (localStorage.getItem('svalin_consent')) return;
    } catch (e) {}
    bar.classList.add('visible');

    bar.querySelector('.js-accept').addEventListener('click', function () {
      try { localStorage.setItem('svalin_consent', 'granted'); } catch (e) {}
      if (typeof gtag === 'function') {
        gtag('consent', 'update', { analytics_storage: 'granted' });
      }
      bar.classList.remove('visible');
    });

    bar.querySelector('.js-decline').addEventListener('click', function () {
      try { localStorage.setItem('svalin_consent', 'denied'); } catch (e) {}
      bar.classList.remove('visible');
    });
  }

  /* ── Burger menu ──────────────────────────────────────────────── */
  function initBurger() {
    var btn  = document.getElementById('burger-btn');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    var iconOpen  = btn.querySelector('.icon-burger');
    var iconClose = btn.querySelector('.icon-close');

    btn.addEventListener('click', function () {
      var opening = !menu.classList.contains('open');
      menu.classList.toggle('open', opening);
      btn.setAttribute('aria-expanded', String(opening));
      btn.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
      if (iconOpen)  iconOpen.hidden  = opening;
      if (iconClose) iconClose.hidden = !opening;
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Open navigation');
        if (iconOpen)  iconOpen.hidden  = false;
        if (iconClose) iconClose.hidden = true;
      });
    });
  }

  /* ── FAQ accordion ────────────────────────────────────────────── */
  function initFaq() {
    var items = document.querySelectorAll('.faq-accordion-item');
    if (!items.length) return;

    items.forEach(function (item) {
      var btn     = item.querySelector('.faq-accordion-btn');
      var chevron = item.querySelector('.faq-chevron');
      if (!btn) return;

      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        /* close all */
        items.forEach(function (i) {
          i.classList.remove('open');
          var b = i.querySelector('.faq-accordion-btn');
          var c = i.querySelector('.faq-chevron');
          if (b) b.setAttribute('aria-expanded', 'false');
          if (c) c.classList.remove('faq-chevron--open');
        });

        /* open this one if it was closed */
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          if (chevron) chevron.classList.add('faq-chevron--open');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initCookies();
    initBurger();
    initFaq();
  });
})();
