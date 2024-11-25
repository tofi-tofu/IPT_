
const setupSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};


const setupSlideshow = () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('input[name="slide"]');

   
    const changeSlide = () => {
        if (slides.length > 0) {
            slides[slideIndex].checked = true;
            slideIndex = (slideIndex + 1) % slides.length;
        }
    };


    const slideInterval = setInterval(changeSlide, 3000);

   
    slides.forEach(slide => {
        slide.addEventListener('click', () => clearInterval(slideInterval));
    });
};


const setupRevealAnimations = () => {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); 
                } else {
                    entry.target.classList.remove('visible'); 
                }
            });
        },
        { threshold: 0.1 } 
    );

    document.querySelectorAll('section, .wrapper, #CONTACTS').forEach(el => {
        el.classList.add('hidden'); 
        observer.observe(el); 
    });
};


const init = () => {
    setupSmoothScrolling();
    setupSlideshow();
    setupRevealAnimations();
};


document.addEventListener('DOMContentLoaded', init);
