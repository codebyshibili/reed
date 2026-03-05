document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".testimonial-slider-wrapper");
    const slides = document.querySelectorAll(".testimonial-slide");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const dots = document.querySelectorAll(".testimonial-nav-btn");

    let index = 0;
    const total = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    next.onclick = () => {
        index++;
        if (index >= total) index = 0;
        updateSlider();
    };

    prev.onclick = () => {
        index--;
        if (index < 0) index = total - 1;
        updateSlider();
    };

    dots.forEach((dot, i) => {
        dot.onclick = () => {
            index = i;
            updateSlider();
        };
    });

});