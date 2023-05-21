import { gsap, Power4 } from "gsap";

export function sampleFunction() {
  console.log("sampleFunction working");
}

export function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

export function leaveAnimationReveal() {
  const pageContent = document.getElementsByClassName("mask");
  const tl = gsap.timeline();
  tl.fromTo(
    pageContent,
    { x: "-100%" },
    { x: "0%", duration: 0.6, ease: Power4.out }
  );
}

export function enterAnimationReveal() {
  const pageContent = document.getElementsByClassName("mask");
  const tl = gsap.timeline();
  tl.fromTo(
    pageContent,
    { x: "0%" },
    { x: "100%", duration: 0.6, ease: Power4.out }
  );
}

//   // ページを離れる時の上に消える動作
export function leaveAnimation() {
  const tl = gsap.timeline();
  tl.to(".container", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "Quart.easeOut",
  });
}

// // ページに入った時の下から出てくる動作
export function enterAnimation() {
  const tl = gsap.timeline();
  tl.from(".container", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "Quart.easeOut",
  });
}

export function leaveAnimationFade() {
  const tl = gsap.timeline();
  tl.to(".container", {
    duration: 1,
    autoAlpha: 0,
    scale: 1.5,
  });
}
export function enterAnimationFade() {
  const tl = gsap.timeline();
  tl.from(".container", {
    duration: 1,
    autoAlpha: 1,
    scale: 1,
    transformOrigin: "50% 50%",
  });
}
export function enterAnimationSlide() {
  const tl = gsap.timeline();
  tl.set(".container", {
    x: "100%",
    // x: window.innerWidth * 1.5,
    scale: 0.8,
    transformOrigin: "50% 50%",
  });
  tl.to(".container", {
    duration: 0.5,
    x: "0%",
    // x: 0,
    ease: Power4.easeOut,
  });
  tl.to(".container", {
    duration: 1,
    scale: 1,
    ease: Power4.easeOut,
  });
  console.log("leaveAnimationSlide");
}
export function leaveAnimationSlide() {
  const tl = gsap.timeline();
  tl.from(".container", {
    duration: 1,
    autoAlpha: 1,
    scale: 1,
    transformOrigin: "50% 50%",
  });
}

export function leaveAnimationFlipX() {
  const tl = gsap.timeline();
  tl.from(".container", {
    duration: 1,
    scale: 0,
    ease: Power4.easeOut,
  });
}
export function enterAnimationFlipX() {
  const tl = gsap.timeline();
  tl.set(".container", {
    autoAlpha: 0,
    rotationX: 90,
    transformOrigin: "50% 50%",
  });
  tl.to(".container", {
    duration: 1,
    autoAlpha: 1,
    rotationX: 0,
    ease: Power4.easeOut,
  });
}

export function leaveAnimationFlipY() {
  const tl = gsap.timeline();
  tl.from(".container", {
    duration: 1,
    scale: 0,
    ease: Power4.easeOut,
  });
}
export function enterAnimationFlipY() {
  const tl = gsap.timeline();
  tl.set(".container", {
    autoAlpha: 0,
    rotationY: 90,
    transformOrigin: "50% 50%",
  });
  tl.to(".container", {
    duration: 1,
    autoAlpha: 1,
    rotationY: 0,
    ease: Power4.easeOut,
  });
}

export function leaveAnimationSlideUp() {
  const tl = gsap.timeline();
  tl.from(".container", {
    duration: 1,
    y: window.innerHeight * -1.5,
    ease: Power4.easeOut,
  });
}
export function enterAnimationSlideUp() {
  const tl = gsap.timeline();
  tl.set(".container", {
    y: window.innerWidth * 1.5,
    scale: 0.8,
    transformOrigin: "50% 50%",
  });
  tl.to(".container", {
    duration: 0.5,
    y: 0,
    ease: Power4.easeOut,
  });
  tl.to(".container", {
    duration: 1,
    scale: 1,
    ease: Power4.easeOut,
  });
}

export function leaveAnimationZoom() {
  const tl = gsap.timeline();
  tl.from(".container", {
    duration: 1,
    scale: 0,
    ease: Power4.easeOut,
  });
}
export function enterAnimationZoom() {
  const tl = gsap.timeline();
  tl.set(".container", {
    autoAlpha: 0,
    scale: 2,
    transformOrigin: "50% 50%",
  });
  tl.to(".container", {
    duration: 1,
    autoAlpha: 1,
    scale: 1,
    ease: Power4.easeOut,
  });
}
