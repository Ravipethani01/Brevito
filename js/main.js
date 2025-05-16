/**
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

function mobileNavToggle() {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  mobileNavToggleBtn.classList.toggle("fa-bars");
  mobileNavToggleBtn.classList.toggle("fa-times");
}
mobileNavToggleBtn.addEventListener("click", mobileNavToggle);

/**
 * Initiate glightbox
 */
const lightbox = GLightbox({
  selector: ".glightbox",
});

/**
 * Navmenu Scrollspy
 */
let navmenulinks = document.querySelectorAll(".navmenu a");

function navmenuScrollspy() {
  navmenulinks.forEach((navmenulink) => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      document
        .querySelectorAll(".navmenu a.active")
        .forEach((link) => link.classList.remove("active"));
      navmenulink.classList.add("active");
    } else {
      navmenulink.classList.remove("active");
    }
  });
}
window.addEventListener("load", navmenuScrollspy);
document.addEventListener("scroll", navmenuScrollspy);

/**
 * Apply .scrolled class to the body as the page is scrolled down
 */
function toggleScrolled() {
  const selectBody = document.querySelector("body");
  const selectHeader = document.querySelector("#header");

  // Debugging: Check if #header exists
  if (!selectHeader) {
    console.warn("Header (#header) not found in the document!");
    return;
  }

  // Debugging: Check #header classes
  console.log("Header classes:", selectHeader.classList);

  // Check if header has sticky classes
  const isSticky =
    selectHeader.classList.contains("scroll-up-sticky") ||
    selectHeader.classList.contains("sticky-top") ||
    selectHeader.classList.contains("fixed-top");

  if (!isSticky) {
    console.warn("Header does not have a sticky class.");
    return;
  }

  // Toggle 'scrolled' class on body
  if (window.scrollY > 100) {
    selectBody.classList.add("scrolled");
    console.log("Body class 'scrolled' added");
  } else {
    selectBody.classList.remove("scrolled");
    console.log("Body class 'scrolled' removed");
  }
}

// Run function when scrolling and on page load
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);
});
