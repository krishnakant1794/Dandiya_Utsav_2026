/* =====================================================
   DANDIYA UTSAV 2026
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn =
  document.querySelector(".menu-btn");

const nav =
  document.getElementById("nav");


if (menuBtn && nav) {

  menuBtn.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

  });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks =
  document.querySelectorAll("#nav a");


navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("mobile-open");

  });

});


/* =====================================================
   BOOKING MODAL
===================================================== */

const bookingModal =
  document.getElementById("bookingModal");


const modalClose =
  document.querySelector(".modal-close");


const modalCloseBtn =
  document.getElementById("modalCloseBtn");


const selectedTicket =
  document.getElementById("selectedTicket");


const selectedPrice =
  document.getElementById("selectedPrice");


/* =====================================================
   TICKET BUTTONS
===================================================== */

const ticketButtons =
  document.querySelectorAll(".ticket-btn");


ticketButtons.forEach((button) => {

  button.addEventListener("click", () => {


    const ticketName =
      button.dataset.ticket;


    const ticketPrice =
      button.dataset.price;


    selectedTicket.textContent =
      ticketName;


    selectedPrice.textContent =
      "₹" +
      Number(ticketPrice)
        .toLocaleString("en-IN");


    bookingModal.classList.add("active");


    bookingModal.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.style.overflow =
      "hidden";


  });

});


/* =====================================================
   CLOSE MODAL FUNCTION
===================================================== */

function closeModal() {

  bookingModal.classList.remove("active");


  bookingModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}


/* =====================================================
   CLOSE BUTTON
===================================================== */

if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeModal
  );

}


if (modalCloseBtn) {

  modalCloseBtn.addEventListener(
    "click",
    closeModal
  );

}


/* =====================================================
   CLOSE WHEN CLICKING OUTSIDE
===================================================== */

bookingModal.addEventListener(
  "click",
  (event) => {

    if (event.target === bookingModal) {

      closeModal();

    }

  }
);


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
  document.querySelector(".navbar");


window.addEventListener(
  "scroll",
  () => {

    if (!navbar) return;


    if (window.scrollY > 40) {

      navbar.classList.add("scrolled");

    } else {

      navbar.classList.remove("scrolled");

    }

  }
);


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
  "🎉 Dandiya Utsav 2026 website loaded successfully!"
);


console.log(
  "🎟️ Ticket status: Tickets Will Be Live Soon"
);
