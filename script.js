// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form Validation and Alert on Submission
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(
      "Thank you for your message, " +
        name +
        ". We will get back to you shortly."
    );
    form.reset();
  } else {
    alert("Please fill out all fields.");
  }
});

// Portfolio Button Scroll
document
  .getElementById("portfolioButton")
  .addEventListener("click", function () {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const reviews = document.querySelectorAll(".review");
    let currentReview = 0;

    function showNextReview() {
      reviews[currentReview].classList.remove("active");
      currentReview = (currentReview + 1) % reviews.length;
      reviews[currentReview].classList.add("active");
    }

    // Change review every 5 seconds
    setInterval(showNextReview, 5000);
  });
