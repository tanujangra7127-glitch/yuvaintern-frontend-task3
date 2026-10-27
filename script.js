
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const themeBtn = document.getElementById("themeBtn");
const helloBtn = document.getElementById("helloBtn");
const helloMessage = document.getElementById("helloMessage");
const status = document.getElementById("status");
const updateBtn = document.getElementById("updateBtn");
const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");
const year = document.getElementById("year");

// Show current year
if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile navigation menu
if (menuBtn && nav) {
  function setupMenu() {
    if (window.innerWidth <= 750) {
      nav.style.display = "none";
    } else {
      nav.style.display = "";
    }
  }

  setupMenu();
  window.addEventListener("resize", setupMenu);

  menuBtn.addEventListener("click", function () {
    if (window.innerWidth <= 750) {
      nav.style.display =
        nav.style.display === "none" ? "flex" : "none";
    }
  });
}

// Dark mode toggle
if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    themeBtn.textContent = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
}

// Welcome button
if (helloBtn && helloMessage) {
  helloBtn.addEventListener("click", function () {
    helloMessage.textContent =
      "Welcome to FlexTech! Thanks for visiting our website.";
  });
}

// Update status and counter
let count = 0;

if (updateBtn && status) {
  updateBtn.addEventListener("click", function () {
    count++;
    status.textContent = "You clicked the button " + count + " time(s)!";
  });
}

// Contact form validation
if (contactForm && formResult) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formResult.textContent = "Please fill in all fields.";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      formResult.textContent = "Please enter a valid email address.";
      return;
    }

    formResult.textContent =
      "Thank you, " + name + "! Your form has been validated successfully.";

    contactForm.reset();
  });
}
