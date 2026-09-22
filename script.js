/* =====================================================
   DANDIYA UTSAV 2026
   FINAL JAVASCRIPT
===================================================== */


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    if (!loader) return;

    setTimeout(function () {

        loader.classList.add("hide");

    }, 700);

});



/* =====================================================
   ELEMENTS
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileDrawer =
    document.getElementById("mobileDrawer");

const mobileOverlay =
    document.getElementById("mobileOverlay");

const drawerClose =
    document.getElementById("drawerClose");

const drawerLinks =
    document.querySelectorAll(".drawer-link");



/* =====================================================
   MOBILE MENU
===================================================== */

function openMobileMenu() {

    if (!mobileDrawer) return;

    mobileDrawer.classList.add("active");

    mobileOverlay.classList.add("active");

    document.body.classList.add("menu-open");

    mobileDrawer.setAttribute(
        "aria-hidden",
        "false"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    menuButton.setAttribute(
        "aria-label",
        "Close menu"
    );

    /* Hamburger → X */

    menuButton.classList.add("is-open");

}



function closeMobileMenu() {

    if (!mobileDrawer) return;

    mobileDrawer.classList.remove("active");

    mobileOverlay.classList.remove("active");

    document.body.classList.remove("menu-open");

    mobileDrawer.setAttribute(
        "aria-hidden",
        "true"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "Open menu"
    );

    menuButton.classList.remove("is-open");

}



/* =====================================================
   MENU BUTTON
===================================================== */

if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                mobileDrawer.classList.contains(
                    "active"
                );

            if (isOpen) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );

}



/* =====================================================
   CLOSE BUTTON
===================================================== */

if (drawerClose) {

    drawerClose.addEventListener(
        "click",
        function () {

            closeMobileMenu();

        }
    );

}



/* =====================================================
   OVERLAY CLICK
===================================================== */

if (mobileOverlay) {

    mobileOverlay.addEventListener(
        "click",
        function () {

            closeMobileMenu();

        }
    );

}



/* =====================================================
   MOBILE NAVIGATION
===================================================== */

drawerLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetID =
                link.getAttribute("href");


            if (
                !targetID ||
                !targetID.startsWith("#")
            ) {
                return;
            }


            event.preventDefault();


            const target =
                document.querySelector(
                    targetID
                );


            closeMobileMenu();


            if (!target) return;


            setTimeout(
                function () {

                    const headerOffset =
                        window.innerWidth <= 650
                            ? 105
                            : 125;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerOffset;


                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                },
                100
            );

        }
    );

});



/* =====================================================
   ESC KEY
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
   RESIZE
===================================================== */

window.addEventListener(
    "resize",
    function () {

        /*
         * If user rotates phone or
         * changes viewport to desktop,
         * close mobile menu.
         */

        if (
            window.innerWidth > 1000
        ) {

            closeMobileMenu();

        }

    }
);



/* =====================================================
   COUNTDOWN
===================================================== */

const eventDate =
    new Date(
        "2026-10-16T18:00:00+05:30"
    ).getTime();



function updateCountdown() {

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {

        return;

    }


    const now =
        Date.now();


    const distance =
        eventDate - now;


    if (distance <= 0) {

        daysElement.textContent = "00";

        hoursElement.textContent = "00";

        minutesElement.textContent = "00";

        secondsElement.textContent = "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    daysElement.textContent =
        String(days).padStart(2, "0");


    hoursElement.textContent =
        String(hours).padStart(2, "0");


    minutesElement.textContent =
        String(minutes).padStart(2, "0");


    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);



/* =====================================================
   BOOKMYSHOW
===================================================== */

const BOOKMYSHOW_URL =
    "https://in.bookmyshow.com/activities/dandiya-utsav-2026/ET00518621";


document
    .querySelectorAll(
        'a[href*="bookmyshow.com"]'
    )
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                console.log(
                    "Opening BookMyShow:",
                    BOOKMYSHOW_URL
                );

            }
        );

    });
