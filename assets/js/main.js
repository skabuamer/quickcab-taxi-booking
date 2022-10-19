let slider = tns({
    container: ".my-slider",
    autoplay: true,
    mouseDrag: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    gutter: 52,
});

$(function () {
    $(".datepicker").datepicker();
});

// PRELOADER ___________/\______
document.body.style.position = "fixed";

window.addEventListener("load", () => {
    document.querySelector(".preloader").style.display = "none";
    document.body.style.position = "";
});

// BACK TO TOP ___________/\______
const backToTop = document.querySelector(".back__to__top");

backToTop.addEventListener("click", () => window.scrollTo(0, 0));

// STICKY HEADER ___________/\______
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", scrollY >= 100);

    // back to top button hide/show
    backToTop.classList.toggle("active", scrollY >= 300);
});

// ANIMATION ON SCROLL
AOS.init({
    duration: 1000,
    once: true,
});
