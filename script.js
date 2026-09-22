/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    if (loader) {
      loader.classList.add("hide");
    }
  }, 900);
});


/* ==========================================
   BOOKMYSHOW
========================================== */

const BOOKMYSHOW_URL =
  "https://in.bookmyshow.com/activities/dandiya-utsav-2026/ET00518621";


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const mobileMenu = document.getElementById("mobileMenu");
const nav = document.getElementById("nav");

if (mobileMenu && nav) {

  mobileMenu.addEventListener("click", () => {
    nav.classList.toggle("mobile-open");

    const isOpen = nav.classList.contains("mobile-open");

    mobileMenu.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    mobileMenu.textContent = isOpen ? "✕" : "☰";
  });


  /*
    IMPORTANT:
    Navigation links close the menu AFTER
    the browser starts scrolling to the section.
  */

  nav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      nav.classList.remove("mobile-open");

      mobileMenu.textContent = "☰";

      mobileMenu.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* ==========================================
   COUNTDOWN
========================================== */

const eventDate =
  new Date("2026-10-16T18:00:00+05:30").getTime();


function updateCountdown() {

  const now = Date.now();

  const distance = eventDate - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
    return;
  }


  if (distance <= 0) {

    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";

    return;
  }


  const days =
    Math.floor(
      distance / (1000 * 60 * 60 * 24)
    );


  const hours =
    Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );


  const minutes =
    Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );


  const seconds =
    Math.floor(
      (distance % (1000 * 60)) /
      1000
    );


  daysEl.textContent =
    String(days).padStart(2, "0");

  hoursEl.textContent =
    String(hours).padStart(2, "0");

  minutesEl.textContent =
    String(minutes).padStart(2, "0");

  secondsEl.textContent =
    String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
  document.querySelectorAll(
    ".section, .ticket, .experience-card, .venue-card"
  );


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {

  element.classList.add("reveal");

  observer.observe(element);

});


/* ==========================================
   BOOKMYSHOW LINK TRACKING
========================================== */

document
  .querySelectorAll('a[href*="bookmyshow.com"]')
  .forEach((button) => {

    button.addEventListener("click", () => {

      console.log(
        "Opening BookMyShow:",
        BOOKMYSHOW_URL
      );

    });

  });
