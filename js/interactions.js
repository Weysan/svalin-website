/* Svalin — vanilla JS interactions (burger menu, FAQ accordion, cookie consent, scroll animations) */
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

  /* ── Scroll-triggered fade-up animations ─────────────────────── */
  function initScrollAnimations() {
    var els = document.querySelectorAll('[data-anim]');
    if (!els.length || !window.IntersectionObserver) {
      els.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var delay = e.target.getAttribute('data-anim-delay');
        if (delay) e.target.style.animationDelay = delay + 'ms';
        e.target.classList.add('anim-in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    els.forEach(function (el) {
      el.classList.add('anim-ready');
      io.observe(el);
    });
  }

  /* ── Animated counters ────────────────────────────────────────── */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length || !window.IntersectionObserver) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var duration = 1000;
        var start = null;
        function tick(now) {
          if (!start) start = now;
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { io.observe(el); });
  }

  /* ── Booking modal (intercepts all [href="/demo"] clicks) ────── */
  function initBookingWidget() {
    var GCAL_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1yL-YuI5VgWAKt4UikfstZso_R4BALLcTjlSOASef3o4ctqC4SI3POSp4gzacklz0-K4DMEM-0?gv=true';

    function openModal() {
      var overlay = document.createElement('div');
      overlay.className = 'gcal-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'Book a demo');
      overlay.innerHTML =
        '<div class="gcal-modal">' +
          '<button class="gcal-close" aria-label="Close">' +
            '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">' +
              '<line x1="2" y1="2" x2="14" y2="14"/><line x1="14" y1="2" x2="2" y2="14"/>' +
            '</svg>' +
          '</button>' +
          '<iframe src="' + GCAL_URL + '" title="Book a demo" allowfullscreen></iframe>' +
        '</div>';
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      function close() {
        overlay.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
      }
      function onKey(e) { if (e.key === 'Escape') close(); }

      overlay.querySelector('.gcal-close').addEventListener('click', close);
      overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
      document.addEventListener('keydown', onKey);
    }

    document.querySelectorAll('a[href="/demo"]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });
  }

  /* ── Capabilities section index (scrollspy) ──────────────────── */
  function initCapIndex() {
    var panels = document.querySelectorAll('.cap-panel');
    var items  = document.querySelectorAll('.cap-index-item');
    if (!panels.length || !items.length || !window.IntersectionObserver) return;

    function setActive(id) {
      items.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    panels.forEach(function (p) { io.observe(p); });

    /* smooth-scroll on index click */
    items.forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ── Capability detail modal (+ GA event on open) ────────────── */
  function initCapModal() {
    var btns = document.querySelectorAll('.cap-detail-btn');
    if (!btns.length) return;

    function openModal(panel, title, num) {
      var detail = panel.querySelector('.cap-detail');
      var hook   = panel.querySelector('.cap-hook');
      if (!detail) return;

      /* Google Analytics event */
      if (typeof gtag === 'function') {
        gtag('event', 'capability_detail_open', {
          capability: title,
          panel: num
        });
      }

      var overlay = document.createElement('div');
      overlay.className = 'cap-modal-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', title);
      overlay.innerHTML =
        '<div class="cap-modal">' +
          '<button class="cap-modal-close" aria-label="Close">' +
            '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">' +
              '<line x1="2" y1="2" x2="14" y2="14"/><line x1="14" y1="2" x2="2" y2="14"/>' +
            '</svg>' +
          '</button>' +
          '<h3 class="cap-modal-title">' + title + '</h3>' +
          '<p class="cap-modal-hook">' + hook.innerHTML + '</p>' +
          '<div class="cap-detail">' + detail.innerHTML + '</div>' +
        '</div>';
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      function close() {
        overlay.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
      }
      function onKey(e) { if (e.key === 'Escape') close(); }

      overlay.querySelector('.cap-modal-close').addEventListener('click', close);
      overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
      document.addEventListener('keydown', onKey);
    }

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panel = btn.closest('.cap-panel');
        if (!panel) return;
        openModal(panel, btn.getAttribute('data-cap-title'), btn.getAttribute('data-cap-num'));
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initCookies();
    initBurger();
    initFaq();
    initScrollAnimations();
    initCounters();
    initBookingWidget();
    initCapIndex();
    initCapModal();
  });
})();
