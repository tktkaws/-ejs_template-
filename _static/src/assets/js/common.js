import barba from "@barba/core";
import { gsap, Power4 } from "gsap";
import {
  delay,
  leaveAnimation,
  enterAnimation,
  leaveAnimationFade,
  enterAnimationFade,
  leaveAnimationSlide,
  enterAnimationSlide,
  leaveAnimationFlipX,
  enterAnimationFlipX,
  leaveAnimationFlipY,
  enterAnimationFlipY,
  leaveAnimationSlideUp,
  enterAnimationSlideUp,
  leaveAnimationZoom,
  enterAnimationZoom,
} from "./modules/transitions";

// barba設定
barba.init({
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        leaveAnimationFade();
        done();
      },
      async enter(data) {
        await delay(600);
      },
    },
  ],
  views: [
    {
      namespace: "001",
      async afterEnter(data) {
        await delay(600);
        enterAnimation();
      },
      afterLeave(data) {},
    },
    {
      namespace: "002",
      async afterEnter(data) {
        await delay(600);
        enterAnimationSlide();
      },
      afterLeave(data) {},
    },
    {
      namespace: "003",
      async afterEnter(data) {
        await delay(600);
        enterAnimationFlipX();
      },
      afterLeave(data) {},
    },
    {
      namespace: "004",
      async afterEnter(data) {
        await delay(600);
        enterAnimationFlipY();
      },
      afterLeave(data) {},
    },
    {
      namespace: "005",
      async afterEnter(data) {
        await delay(600);
        enterAnimationSlideUp();
      },
      afterLeave(data) {},
    },
    {
      namespace: "006",
      async afterEnter(data) {
        await delay(600);
        enterAnimationZoom();
      },
      afterLeave(data) {},
    },
  ],
});
