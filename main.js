window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".content__overlay");
    const navWrapper = document.querySelector(".nav__wrapper");

    gsap.set(menu, { opacity: 0 });

    let overlayVisible = false;

    document.querySelector(".hamburger").addEventListener("click", () => {
        gsap.to(menu, 0.025, {
            opacity: overlayVisible ? 0 : 1,
            visibility: overlayVisible ? "hidden" : "visible",
        });

        gsap.to(menu, {
            zIndex: overlayVisible ? -1 : 0,
        });

        overlayVisible = !overlayVisible;

        overlayVisible ? navWrapper.classList.add("active") : navWrapper.classList.remove("active");
    });
});