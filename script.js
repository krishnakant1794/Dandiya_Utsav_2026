// =============================
// DANDIYA UTSAV 2026
// Replace this URL with the public Vihaya checkout/event URL.
// Example: https://events.vihaya.app/events/your-event-slug
// =============================
const VIHAYA_CHECKOUT_URL = "PASTE_YOUR_VIHAYA_EVENT_URL_HERE";

const modal = document.getElementById("bookingModal");
const selectedTicket = document.getElementById("selectedTicket");
const selectedPrice = document.getElementById("selectedPrice");
const vihayaLink = document.getElementById("vihayaLink");

document.querySelectorAll(".ticket-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedTicket.textContent = btn.dataset.ticket;
    selectedPrice.textContent = "₹" + Number(btn.dataset.price).toLocaleString("en-IN");

    if (VIHAYA_CHECKOUT_URL.startsWith("http")) {
      vihayaLink.href = VIHAYA_CHECKOUT_URL;
      vihayaLink.textContent = "Continue to Ticket Checkout →";
      vihayaLink.style.opacity = "1";
      vihayaLink.style.pointerEvents = "auto";
    } else {
      vihayaLink.href = "#";
      vihayaLink.textContent = "Add Vihaya Link in script.js";
      vihayaLink.style.opacity = ".55";
      vihayaLink.style.pointerEvents = "none";
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.querySelector(".modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => document.querySelector(".navbar").classList.remove("open"));
});
