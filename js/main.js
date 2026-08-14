/* =========================================================
   Paws & Hope Animal Shelter — main.js
   Handles:
   - Active nav link highlighting
   - Hamburger menu toggle (mobile/tablet navigation)
   - Homepage hero image crossfade (alternates every 10s)
   - Basic client-side form validation
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  // ---------------------------------------------------------
  // Active nav link highlighting
  // ---------------------------------------------------------
  var navLinks = document.querySelectorAll(".main-nav a");
  var currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // ---------------------------------------------------------
  // Hamburger menu toggle (works the same across all pages)
  // ---------------------------------------------------------
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu automatically when a link is tapped (mobile UX)
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------------------------------------------------------
  // Homepage hero crossfade — alternates between two images
  // every 10 seconds with a smooth CSS opacity transition.
  // ---------------------------------------------------------
  var heroSlides = document.querySelectorAll(".hero-slide");
  if (heroSlides.length > 1) {
    var currentSlide = 0;
    setInterval(function () {
      heroSlides[currentSlide].classList.remove("is-visible");
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add("is-visible");
    }, 10000);
  }

  // ---------------------------------------------------------
  // Enquiry form validation
  // ---------------------------------------------------------
  var enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var message = document.getElementById("message");
      var isValid = true;

      if (!name.value.trim()) {
        isValid = false;
        name.setAttribute("aria-invalid", "true");
      } else {
        name.removeAttribute("aria-invalid");
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        email.setAttribute("aria-invalid", "true");
      } else {
        email.removeAttribute("aria-invalid");
      }

      if (!message.value.trim()) {
        isValid = false;
        message.setAttribute("aria-invalid", "true");
      } else {
        message.removeAttribute("aria-invalid");
      }

      if (!isValid) {
        event.preventDefault();
        alert("Please fill in your name, a valid email address, and a message before submitting.");
      }
    });
  }

  // ---------------------------------------------------------
  // Contact form validation
  // ---------------------------------------------------------
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      var name = document.getElementById("contact-name");
      var email = document.getElementById("contact-email");

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name.value.trim() || !emailPattern.test(email.value.trim())) {
        event.preventDefault();
        alert("Please enter your name and a valid email address.");
      }
    });
  }
});
