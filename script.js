// Navbar scroll animation
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 60){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully 😊");
  e.target.reset();
});
