// ===== Toggle Mobile Navigation Menu =====
const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

//  ==== Load More Logic =====
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".certification-card");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
  
    const maxVisible = 4;
    let currentVisible = maxVisible;
  
    // Show the first 4 cards
    cards.forEach((card, index) => {
      if (index < maxVisible) {
        card.classList.add("visible");
      }
    });
  
    // Load more logic
    loadMoreBtn.addEventListener("click", () => {
      for (let i = currentVisible; i < currentVisible + maxVisible; i++) {
        if (cards[i]) {
          cards[i].classList.add("visible");
        }
      }
  
      currentVisible += maxVisible;
  
      // If all cards are shown, hide the button
      if (currentVisible >= cards.length) {
        loadMoreBtn.style.display = "none";
      }
    });
  });

  //  ==== Show Less Logic =====
  
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".certification-card");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const showLessBtn = document.getElementById("showLessBtn");
  
    const batchSize = 4;
    let currentVisible = batchSize;
  
    function updateVisibility() {
      cards.forEach((card, index) => {
        card.style.display = index < currentVisible ? "block" : "none";
      });
  
      // Toggle button visibility
      loadMoreBtn.style.display = currentVisible < cards.length ? "inline-block" : "none";
      showLessBtn.style.display = currentVisible > batchSize ? "inline-block" : "none";
    }
  
    loadMoreBtn.addEventListener("click", () => {
      currentVisible += batchSize;
      updateVisibility();
    });
  
    showLessBtn.addEventListener("click", () => {
      currentVisible = batchSize;
      updateVisibility();
      window.scrollTo({ top: document.getElementById("certification").offsetTop - 50, behavior: "smooth" });
    });
  
    // Initial setup
    updateVisibility();
  });

// ===== Scroll to Top Button Logic =====
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});