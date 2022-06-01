const navSlide = () => {
    const burger = document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // links animation
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.6}s`
            }
    });
    // burger animation
    burger.classList.toggle('toggle');

    });
}

const app = () => {
    navSlide();
}

app();