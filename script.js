document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (entry.isIntersecting) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the section is visible
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
