//gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

/*gsap.from(".about-me",{
    scrollTrigger:".about-me",
    x: "-100%",
    opacity: 0,
    scale: 1,
    ease: "Power1.out",
    duration: 2,
    delay: 0.5
});*/

/*const a = document.querySelector(".about-me");
window.onscroll = () => {
    const pos = window.scrollY-window.innerHeight/2-120;
    if(pos<450){
        a.style.left=`${pos}px`;
    }
};*/

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        markers: false,
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



const aboutMe = document.querySelector(".about-me");

const aboutMeTimeline = new ScrollTimeline({
    scrollOffsets: [
        { target: aboutMe, edge: "end", threshold: "0.5"},
        { target: aboutMe, edge: "start", threshold: "0"},
    ],
});

aboutMe.animate(
    {   
        transform: ['translateX(-30%)', 'translateX(100%)'],
    },
    {
        duration: 1,
        easing: "linear",
        timeline: aboutMeTimeline,
    },
);
