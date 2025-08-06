document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('animate__fadeInDown');
    const icon = mobileMenuButton.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('animate__fadeInDown');
          const icon = mobileMenuButton.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  });

  const viewMoreBtn = document.getElementById('view-more-btn');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function() {
      this.classList.add('animate__pulse');
      setTimeout(() => {
        this.classList.remove('animate__pulse');
      }, 1000);
    });
  }

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const submitButton = this.querySelector('button[type="submit"]');

    submitButton.classList.add("animate__animated", "animate__rubberBand");
    setTimeout(() => {
      submitButton.classList.remove("animate__animated", "animate__rubberBand");
    }, 1000);

    if (name === "" || email === "" || message === "") {
      showPopup("Please fill in all fields", false);
      return;
    }

    showPopup("Thank you, your message has been sent!", true);
    this.reset();
  });
}

function showPopup(text, success) {
  const popup = document.createElement("div");
  popup.textContent = text;
  popup.className = `fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white font-medium z-50 transition-opacity duration-300 ${
    success ? "bg-green-600" : "bg-red-600"
  }`;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 300);
  }, 3000);
}
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project-card, #about, #contact, .skill-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);

  const typed = new Typed('#typed-text', {
    strings: ["Full-stack Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Lover"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500
  });

  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
      header.style.backdropFilter = 'blur(5px)';
      header.style.backgroundColor = 'rgba(30, 27, 75, 0.95)';
    } else {
      header.style.boxShadow = 'none';
      header.style.backdropFilter = 'none';
      header.style.backgroundColor = 'rgb(30, 27, 75)';
    }
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
      this.style.boxShadow = '0 25px 50px -12px rgba(79, 70, 229, 0.25)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    });
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = '#a5b4fc';
    });
    link.addEventListener('mouseleave', function() {
      this.style.color = 'white';
    });
  });

  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 50}ms`;
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease-out';
  });

  setTimeout(() => {
    animateOnScroll();
  }, 300);
});

//updated