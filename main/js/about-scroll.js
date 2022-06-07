//gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/*gsap.from(".about-me",{
    scrollTrigger:".about-me",
    x: "-100%",
    opacity: 0,
    scale: 1,
    ease: "Power1.out",
    duration: 2,
    delay: 0.5
});*/

const a = document.querySelector(".about-me");
window.onscroll = () => {
    const pos = window.scrollY-window.innerHeight/2-120;
    if(pos<450){
        a.style.left=`${pos}px`;
    }
};

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        markers: true,
        start:"100px 550px",
        end:"bottom 700px",
    }
});

tl.from(".about-info",{
    opacity: 0,
    x: "20%",
    duration: 1.5,
    ease: "Power1.out",
});
