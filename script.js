gsap.registerPlugin(ScrollTrigger);

gsap.from(".about", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 100%",
    end: "bottom 10%",
    toggleActions: "play none none none",
    markers: false,
  },
  y: 100,
  opacity: 0,
});

gsap.to(".about", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 100%",
    end: "bottom 10%",
    toggleActions: "play none none none",
    markers: false,
  },
  y: 0,
  opacity: 1,
  duration: 1.1,
  ease: "power2.out",
});

gsap.from(".navbar-outer", {
  y: -70,
  duration: 1.1,
  ease: "power2.out",
});
gsap.from(".herosection-wrapper", {
  y: 70,
  opacity: 0,
  duration: 1.1,
  ease: "power2.out",
});

gsap.from(".herosection", {
  y: 70,
  opacity: 0,
  delay: 0.5,
  duration: 1.1,
  ease: "power2.out",
});

// section animation

gsap.from(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
    markers: false,
  },
  y: 100,
  opacity: 0,
});
gsap.to(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 90%",
    end: "bottom 20%",
    toggleActions: "play none none none",
    markers: false,
  },
  y: 0,
  opacity: 1,
  duration: 1.1,
  ease: "power2.out",
});

// footer animation

gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
    markers: false,
  },
  y: 100,
  opacity: 0,
});
gsap.to(".footer", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 30%",
    end: "bottom 20%",
    toggleActions: "play none none none",
    markers: false,
  },
  y: 0,
  opacity: 1,
  duration: 1.1,
  ease: "power2.out",
});

// contact us page

gsap.from(".contact-content", {
  y: 50,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".contact-form", {
  y: 50,
  delay: 0.5,
  opacity: 0,
  ease: "power2.out",
});

//
