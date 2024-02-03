
gsap.from(".content", { opacity: 0, x: -100, duration: 1, delay: 0.5 });
gsap.from(".tombol-lonte", { opacity: 0, x: -100, duration: 1, delay: 0.5 });

const imageTimeline = gsap.timeline({ repeat: -1 });
imageTimeline.to(".images img:nth-child(1)", { opacity: 1, x: 0, duration: 1, delay: 1 });
imageTimeline.to(".images img:nth-child(1)", { opacity: 0, x: -50, duration: 1, delay: 1 });
imageTimeline.to(".images img:nth-child(2)", { opacity: 1, x: 0, duration: 1, delay: 0.5 });
imageTimeline.to(".images img:nth-child(2)", { opacity: 0, x: -50, duration: 1, delay: 1 });
imageTimeline.to(".images img:nth-child(3)", { opacity: 1, x: 0, duration: 1, delay: 0.5 });
imageTimeline.to(".images img:nth-child(3)", { opacity: 0, x: -50, duration: 1, delay: 1 });


gsap.set(".images img", { opacity: 0, x: -50 });


imageTimeline.play();
