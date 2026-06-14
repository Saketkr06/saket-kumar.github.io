// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for scroll animations
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // Sticky Nav behavior on scroll
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Theme Toggle
  const MOON_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  const SUN_SVG  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const applyTheme = (isLight) => {
      if (isLight) {
        document.body.classList.add("light-theme");
        themeToggle.innerHTML = SUN_SVG;
      } else {
        document.body.classList.remove("light-theme");
        themeToggle.innerHTML = MOON_SVG;
      }
    };

    // Apply saved preference on load
    const saved = localStorage.getItem("theme");
    applyTheme(saved === "light");

    themeToggle.addEventListener("click", () => {
      const isLight = !document.body.classList.contains("light-theme");
      applyTheme(isLight);
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
