document.addEventListener("DOMContentLoaded", () => {
  // ===== Toggle Mobile Navigation Menu =====
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.getElementById('navbar');

  if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('show');
    });
  }

  // ===== Load More / Show Less Logic =====
  const cards = document.querySelectorAll(".certification-card");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const showLessBtn = document.getElementById("showLessBtn");

  const batchSize = 4;
  let currentVisible = batchSize;

  function updateVisibility() {
    cards.forEach((card, index) => {
      card.style.display = index < currentVisible ? "block" : "none";
    });

    if (loadMoreBtn) {
      loadMoreBtn.style.display = currentVisible < cards.length ? "inline-block" : "none";
    }

    if (showLessBtn) {
      showLessBtn.style.display = currentVisible > batchSize ? "inline-block" : "none";
    }
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      currentVisible += batchSize;
      updateVisibility();
    });
  }

  if (showLessBtn) {
    showLessBtn.addEventListener("click", () => {
      currentVisible = batchSize;
      updateVisibility();
      const certSection = document.getElementById("certification");
      if (certSection) {
        window.scrollTo({
          top: certSection.offsetTop - 50,
          behavior: "smooth"
        });
      }
    });
  }

  // Initial setup
  updateVisibility();

  // ===== Scroll to Top Button Logic =====
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (scrollToTopBtn) {
      scrollToTopBtn.style.display =
        document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
          ? "block"
          : "none";
    }
  });

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});