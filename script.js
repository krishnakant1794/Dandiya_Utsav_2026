/* =====================================================
   DANDIYA UTSAV 2026
   JAVASCRIPT
===================================================== */


/* ================= LOADER ================= */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    setTimeout(function () {

        if (loader) {

            loader.classList.add("hide");

        }

    }, 500);

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileDrawer =
    document.getElementById("mobileDrawer");

const mobileOverlay =
    document.getElementById("mobileOverlay");


/* ================= OPEN MENU ================= */

function openMobileMenu() {

    if (!mobileDrawer || !mobileOverlay || !menuButton) {
        return;
    }


    mobileDrawer.classList.add("active");

    mobileOverlay.classList.add("active");

    document.body.classList.add("menu-open");


    menuButton.classList.add("is-open");


    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );


    menuButton.setAttribute(
        "aria-label",
        "Close menu"
    );


    mobileDrawer.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* ================= CLOSE MENU ================= */

function closeMobileMenu() {

    if (!mobileDrawer || !mobileOverlay || !menuButton) {
        return;
    }


    mobileDrawer.classList.remove("active");

    mobileOverlay.classList.remove("active");

    document.body.classList.remove("menu-open");


    menuButton.classList.remove("is-open");


    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );


    menuButton.setAttribute(
        "aria-label",
        "Open menu"
    );


    mobileDrawer.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* ================= TOGGLE ================= */

if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                mobileDrawer.classList.contains("active");


            if (isOpen) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );

}


/* ================= OVERLAY CLOSE ================= */

if (mobileOverlay) {

    mobileOverlay.addEventListener(
        "click",
        function () {

            closeMobileMenu();

        }
    );

}


/* =====================================================
   MOBILE LINKS
===================================================== */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-link, .mobile-ticket-btn"
    );


mobileLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            closeMobileMenu();

        }
    );

});


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    }
);


/* =====================================================
   WINDOW RESIZE
===================================================== */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 1000) {

            closeMobileMenu();

        }

    }
);


/* =====================================================
   COUNTDOWN
===================================================== */

/*
   Event:
   16 October 2026
   6:00 PM
   India Standard Time
*/


const eventDate =
    new Date(
        "2026-10-16T18:00:00+05:30"
    );


function updateCountdown() {

    const now =
        new Date();


    const difference =
        eventDate.getTime()
        -
        now.getTime();


    /* EVENT STARTED */

    if (difference <= 0) {

        const days =
            document.getElementById("days");

        const hours =
            document.getElementById("hours");

        const minutes =
            document.getElementById("minutes");

        const seconds =
            document.getElementById("seconds");


        if (days) {
            days.textContent = "00";
        }


        if (hours) {
            hours.textContent = "00";
        }


        if (minutes) {
            minutes.textContent = "00";
        }


        if (seconds) {
            seconds.textContent = "00";
        }


        return;

    }


    /* CALCULATE */

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                difference /
                (1000 * 60 * 60)
            ) % 24
        );


    const minutes =
        Math.floor(
            (
                difference /
                (1000 * 60)
            ) % 60
        );


    const seconds =
        Math.floor(
            (
                difference /
                1000
            ) % 60
        );


    /* DISPLAY */

    const daysElement =
        document.getElementById("days");


    const hoursElement =
        document.getElementById("hours");


    const minutesElement =
        document.getElementById("minutes");


    const secondsElement =
        document.getElementById("seconds");


    if (daysElement) {

        daysElement.textContent =
            String(days)
            .padStart(2, "0");

    }


    if (hoursElement) {

        hoursElement.textContent =
            String(hours)
            .padStart(2, "0");

    }


    if (minutesElement) {

        minutesElement.textContent =
            String(minutes)
            .padStart(2, "0");

    }


    if (secondsElement) {

        secondsElement.textContent =
            String(seconds)
            .padStart(2, "0");

    }

}


/* RUN IMMEDIATELY */

updateCountdown();


/* UPDATE EVERY SECOND */

setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   SMOOTH SCROLL
===================================================== */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {

                return;

            }


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});


/* =====================================================
   BOOKING BUTTON TRACKING
===================================================== */

const bookingButtons =
    document.querySelectorAll(
        ".booking-btn"
    );


bookingButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            console.log(
                "Ticket booking platform selected:",
                this.href
            );

        }
    );

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const desktopLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


function updateActiveNav() {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    desktopLinks.forEach(function (link) {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (
            href === "#" +
            currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();
