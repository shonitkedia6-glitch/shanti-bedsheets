document.addEventListener("DOMContentLoaded", () => {
    // Accordion execution engine logic
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        
        question.addEventListener("click", () => {
            // Close other currently active items for a smooth interaction pattern
            faqItems.forEach(idx => {
                if(idx !== item && idx.classList.contains("active")) {
                    idx.classList.remove("active");
                    idx.querySelector(".icon").textContent = "+";
                }
            });

            item.classList.toggle("active");
            
            const icon = question.querySelector(".icon");
            if (item.classList.contains("active")) {
                icon.textContent = "−";
            } else {
                icon.textContent = "+";
            }
        });
    });

    // Smooth return scroll execution link configuration
    const scrollTopBtn = document.querySelector(".scroll-top");
    if(scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
