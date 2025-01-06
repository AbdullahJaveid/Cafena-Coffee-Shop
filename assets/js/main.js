// Element Selection
const search = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const responsiveNavbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const scrollProgress = document.getElementById("progress");

// Utility Function to Remove Active Classes
const removeActiveClasses = () => {
  search.classList.remove("active");
  cartItem.classList.remove("active");
  responsiveNavbar.classList.remove("active");
};

// Toggle Search Form
document.getElementById("search-btn").addEventListener("click", () => {
  search.classList.toggle("active");
  removeActiveClasses();
  search.classList.add("active"); // Re-add for search
});

// Toggle Cart Items
document.getElementById("cart-btn").addEventListener("click", () => {
  cartItem.classList.toggle("active");
  removeActiveClasses();
  cartItem.classList.add("active");
});

// Toggle Responsive Navbar
document.getElementById("menu-btn").addEventListener("click", () => {
  responsiveNavbar.classList.toggle("active");
  removeActiveClasses();
  responsiveNavbar.classList.add("active");
});

// Sticky Header on Scroll
document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Scroll-to-Top Button Functionality
const calcScrollValue = () => {
  const pos = document.documentElement.scrollTop;
  const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.display = pos > 100 ? "flex" : "none";
};

scrollProgress.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optimized Scroll Event Handling
window.addEventListener("scroll", calcScrollValue);
window.addEventListener("load", calcScrollValue);

// Initialize AOS Animation
AOS.init();
