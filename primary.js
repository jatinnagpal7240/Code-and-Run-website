const textElement = document.querySelector(".dynamic-text");
const phrases = ["Accessibility meets you!", "you learn to gain knowledge."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = phrases[phraseIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  textElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
}

document.addEventListener("DOMContentLoaded", typeEffect);

function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const menuOverlay = document.querySelector(".menu-overlay");

  menuIcon.classList.toggle("active");
  menuOverlay.classList.toggle("active");
}
