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
      nav.style.background = "rgba(5, 5, 5, 0.9)";
      nav.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.5)";
    } else {
      nav.style.background = "rgba(5, 5, 5, 0.7)";
      nav.style.boxShadow = "none";
    }
  });

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
