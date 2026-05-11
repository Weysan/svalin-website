/* Svalin — Main JS */

(function () {
  'use strict';

  // --- Nav scroll shadow ---
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // --- Mobile nav toggle ---
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });

    // Close mobile nav on link click
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        links.classList.remove('open');
      });
    });
  }

  // --- Scroll fade-in animations ---
  var fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything if no IntersectionObserver
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Active nav link on scroll (scroll spy) ---
  var navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    var sections = [];
    navLinks.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var section = document.getElementById(id);
      if (section) sections.push({ el: section, link: link });
    });

    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var match = sections.find(function (s) { return s.el === entry.target; });
        if (match) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove('active'); });
            match.link.classList.add('active');
          }
        }
      });
    }, {
      threshold: 0,
      rootMargin: '-30% 0px -60% 0px'
    });

    sections.forEach(function (s) {
      spyObserver.observe(s.el);
    });
  }

  // --- FAQ accordion ---
  document.querySelectorAll('.faq__question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq__item');
      var isOpen = item.classList.contains('open');

      // Close all items in the same list
      item.parentElement.querySelectorAll('.faq__item').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      // Toggle the clicked one
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- Subnav scroll spy ---
  var subnav = document.querySelector('.subnav');
  var subnavLinks = document.querySelectorAll('.subnav__link');
  if (subnav && subnavLinks.length && 'IntersectionObserver' in window) {
    var subSections = [];
    subnavLinks.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var section = document.getElementById(id);
      if (section) subSections.push({ el: section, link: link });
    });

    var subSpyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          subnavLinks.forEach(function (l) { l.classList.remove('active'); });
          var match = subSections.find(function (s) { return s.el === entry.target; });
          if (match) match.link.classList.add('active');
        }
      });
    }, {
      threshold: 0,
      rootMargin: '-20% 0px -75% 0px'
    });

    subSections.forEach(function (s) { subSpyObserver.observe(s.el); });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var subnavEl = document.querySelector('.subnav');
        var offset = (nav ? nav.offsetHeight : 64) + (subnavEl ? subnavEl.offsetHeight : 0) + 8;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // --- Cookie consent banner ---
  (function () {
    var CONSENT_KEY = 'svalin_cookie_consent';

    function updateGA(granted) {
      if (typeof gtag === 'function') {
        gtag('consent', 'update', {
          'analytics_storage': granted ? 'granted' : 'denied'
        });
      }
    }

    function dismissBanner(banner) {
      banner.classList.remove('visible');
      setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 400);
    }

    // Only show if visitor hasn't chosen yet
    if (!localStorage.getItem(CONSENT_KEY)) {
      var banner = document.createElement('div');
      banner.className = 'cookie-banner';
      banner.setAttribute('role', 'dialog');
      banner.setAttribute('aria-label', 'Cookie consent');
      banner.innerHTML =
        '<p class="cookie-banner__text">We use <strong>Google Analytics</strong> to understand how visitors use this site — page views and basic navigation data only. No personal data is sold or shared. <a href="/privacy">Privacy Policy</a></p>' +
        '<div class="cookie-banner__actions">' +
          '<button class="btn btn--secondary" id="cookieDecline">Decline</button>' +
          '<button class="btn btn--primary" id="cookieAccept">Accept Analytics</button>' +
        '</div>';

      document.body.appendChild(banner);

      // Trigger slide-in on next frame
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          banner.classList.add('visible');
        });
      });

      document.getElementById('cookieAccept').addEventListener('click', function () {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        updateGA(true);
        dismissBanner(banner);
      });

      document.getElementById('cookieDecline').addEventListener('click', function () {
        localStorage.setItem(CONSENT_KEY, 'declined');
        updateGA(false);
        dismissBanner(banner);
      });
    }
  })();

})();
