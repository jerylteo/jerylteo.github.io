/* Progressive enhancement: mobile nav, scroll-spy, reveal-on-scroll, footer year. */
(function () {
    "use strict";

    /* ----- Mobile navigation ----- */
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.getElementById("nav-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            var open = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", String(!open));
            menu.classList.toggle("is-open", !open);
        });

        menu.addEventListener("click", function (e) {
            if (e.target.closest("a")) {
                toggle.setAttribute("aria-expanded", "false");
                menu.classList.remove("is-open");
            }
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && menu.classList.contains("is-open")) {
                toggle.setAttribute("aria-expanded", "false");
                menu.classList.remove("is-open");
                toggle.focus();
            }
        });
    }

    /* ----- Scroll-spy: highlight the section currently in view ----- */
    var navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    var sections = [];
    navLinks.forEach(function (link) {
        var section = document.getElementById(link.getAttribute("href").slice(1));
        if (section) sections.push({ link: link, section: section });
    });

    if ("IntersectionObserver" in window && sections.length) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                sections.forEach(function (s) {
                    s.link.setAttribute("aria-current", String(s.section === entry.target));
                });
            });
        }, { rootMargin: "-40% 0px -55% 0px" });

        sections.forEach(function (s) { spy.observe(s.section); });
    }

    /* ----- Reveal on scroll (skipped for reduced-motion users via CSS) ----- */
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
        var revealer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach(function (el) { revealer.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ----- Footer year ----- */
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
})();
