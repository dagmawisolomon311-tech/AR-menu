function viewAR(model){

window.location.href =
"ar.html?model="+model;

}
// --- SCROLL SPY / AUTO-HIGHLIGHT NAV LINKS ---
document.addEventListener("DOMContentLoaded", () => {
    // Select all sections that have an ID
    const sections = document.querySelectorAll("body, section[id]");
    // Select all nav links in both desktop and mobile bars
    const allNavLinks = document.querySelectorAll(".nav-links a, .mobile-bottom-bar a");

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Triggers when section is near the middle of the screen
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");

                allNavLinks.forEach((link) => {
                    // Check if the link's href matches the section ID
                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    } else if (link.getAttribute("href").startsWith("#")) {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach((section) => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });
});
