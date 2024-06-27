/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')


// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
}) 

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50
            sectionId = current.getAttrubute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
                document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
            }else{
                document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
            }
        })
    }

    const sr = ScrollReveal();

// Configurez les options d'animation
sr.reveal('.home .home__img ', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 200,  // Délai avant l'animation
});

sr.reveal('.home__title, .home__profession', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'left',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 300,  // Délai avant l'animation
});

sr.reveal('.home__social', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'right',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 500,  // Délai avant l'animation
});

sr.reveal('.home__button', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'bottom',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 700,  // Délai avant l'animation
});

sr.reveal('.about .section-subtitle', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '70px',  // Distance de déplacement
    delay: 200,  // Délai avant l'animation
});

sr.reveal('.about .section-title', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '70px',  // Distance de déplacement
    delay: 300,  // Délai avant l'animation
});


sr.reveal('.about__data ', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'left',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 500,  // Délai avant l'animation
});


sr.reveal('.about__information ', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 600,  // Délai avant l'animation
});

sr.reveal('.skills .section-subtitle ', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 700,  // Délai avant l'animation
});

sr.reveal('.skills .section-title ', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 700,  // Délai avant l'animation
});

sr.reveal('.skills__content ', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 800,  // Délai avant l'animation
});
// section 3

sr.reveal('.services .section-subtitle ', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 200,  // Délai avant l'animation
});

sr.reveal('.services .section-title ', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 200,  // Délai avant l'animation
});

sr.reveal('.services__container', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'bottom',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 500,  // Délai avant l'animation
});

sr.reveal('.project ', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 800,  // Délai avant l'animation
});

sr.reveal('.works .section-subtitle', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 300,  // Délai avant l'animation
});

sr.reveal('.works .section-title', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'top',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 300,  // Délai avant l'animation
});

sr.reveal('.works__container', {
    duration: 1000,  // Durée de l'animation en millisecondes
    origin: 'bottom',  // Point d'origine de l'animation
    distance: '50px',  // Distance de déplacement
    delay: 500,  // Délai avant l'animation
});




