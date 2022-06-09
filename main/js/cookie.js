
const tl = gsap.timeline({defaults: {duration: 1, ease: "Power1.out"}})

tl.fromTo('.cookie-container', {scale:0},{scale:1,ease: Bounce.easeOut, duration:1.5})
tl.fromTo('.cookie-text', {x: 150,opacity:-1, },{x: 0,opacity:1},'<60%')
tl.fromTo('.cookie', {opacity:0, x:-100, rotation:'-75deg'},{opacity:1,x:0,rotation:'0'}, '<')

tl.fromTo('.cookie',{y:10,rotation:'0deg'},{y:-20,rotation:'-10deg', duration:1, yoyo:true,repeat:-1})

const button=document.querySelector('.cookie-button');

button.addEventListener("click", () => {
    gsap.to('.cookie-container', {opacity:0,y:150, duration:0.75, ease: 'power1.out'})
})



