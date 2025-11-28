/* JavaScript Document

TemplateMo 602 Graph Page

https://templatemo.com/tm-602-graph-page

*/

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinksMobile = document.getElementById('navLinksMobile');
const mobileLinks = navLinksMobile.querySelectorAll('a');

hamburger.addEventListener('click', function () {
   hamburger.classList.toggle('active');
   navLinksMobile.classList.toggle('active');
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
   link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navLinksMobile.classList.remove('active');
   });
});

// Close mobile menu when scrolling
window.addEventListener('scroll', function () {
   hamburger.classList.remove('active');
   navLinksMobile.classList.remove('active');
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
   const navbar = document.getElementById('navbar');
   if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
   } else {
      navbar.classList.remove('scrolled');
   }
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const mobileNavLinks = document.querySelectorAll('.nav-links-mobile a');

function updateActiveNav() {
   const scrollY = window.pageYOffset;

   sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
               link.classList.add('active');
            }
         });

         mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
               link.classList.add('active');
            }
         });
      }
   });
}

window.addEventListener('scroll', updateActiveNav);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
         target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
   });
});




// Add slide up animation
const style = document.createElement('style');
style.textContent = `
            @keyframes slideUp {
                from {
                    transform: scaleY(0);
                    transform-origin: bottom;
                }
                to {
                    transform: scaleY(1);
                    transform-origin: bottom;
                }
            }
        `;
document.head.appendChild(style);

// Chart options interaction
document.querySelectorAll('.chart-options').forEach(optionGroup => {
   const options = optionGroup.querySelectorAll('.chart-option');
   options.forEach(option => {
      option.addEventListener('click', function () {
         options.forEach(opt => opt.classList.remove('active'));
         this.classList.add('active');
      });
   });
});

// Feedback Form Submission Handler
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.querySelector('.btnfeedback');

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validation - empty fields
    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "#ff6b6b";
        formMessage.textContent = "Please fill out all fields.";
        return;
    }

    // Validation - invalid email
    if (!isValidEmail(email)) {
        formMessage.style.color = "#ff6b6b";
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Success state
    formMessage.style.color = "#00ffcc";
    formMessage.textContent = "Thank you! Your feedback has been submitted.";

    const originalText = submitBtn.value;
    const originalBg = submitBtn.style.background;

    submitBtn.value = "Feedback Sent ✓";
    submitBtn.style.background = "linear-gradient(135deg, #4ade80, #22c55e)";

    // Clear form
    this.reset();

    // Restore button + clear message
    setTimeout(() => {
        submitBtn.value = originalText;
        submitBtn.style.background = originalBg;
        formMessage.textContent = "";
    }, 3000);
});



// Add hover effect to contact form inputs
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
   input.addEventListener('focus', function () {
      this.style.borderColor = 'rgba(0, 255, 204, 0.5)';
      this.style.background = 'rgba(255, 255, 255, 0.08)';
      this.style.boxShadow = '0 0 20px rgba(0, 255, 204, 0.1)';
   });

   input.addEventListener('blur', function () {
      this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      this.style.background = 'rgba(255, 255, 255, 0.05)';
      this.style.boxShadow = 'none';
   });
});

// Metrics animation on scroll
const metricsObserver = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         const metrics = entry.target.querySelectorAll('.metric-item');
         metrics.forEach((metric, index) => {
            setTimeout(() => {
               metric.style.transform = 'translateY(0)';
               metric.style.opacity = '1';
            }, index * 100);
         });
      }
   });
}, {
   threshold: 0.3
});

document.querySelectorAll('.metrics-grid').forEach(grid => {
   metricsObserver.observe(grid);
});

// Initialize metrics animation state
document.querySelectorAll('.metric-item').forEach(item => {
   item.style.transform = 'translateY(20px)';
   item.style.opacity = '0';
   item.style.transition = 'all 0.5s ease';
});



