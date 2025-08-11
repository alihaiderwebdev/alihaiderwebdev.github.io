
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});


const animateOnScroll = () => {
  const elements = document.querySelectorAll('.project-card, .skill-card, .contact-btn');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  elements.forEach(el => {
    observer.observe(el);
  });
};


const typewriterTexts = [
  "Passionate Junior Developer",
  "Frontend Web Developer",
  "Learning Every Day"
];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById("typed");
function type() {
  const currentText = typewriterTexts[currentIndex];
  typedElement.textContent = currentText.substring(0, charIndex);
  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      currentIndex = (currentIndex + 1) % typewriterTexts.length;
    }
    setTimeout(type, 1000);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
  type();

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
});
