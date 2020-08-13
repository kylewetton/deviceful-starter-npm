import Deviceful from "deviceful";

// Check out deviceful.app for full documentation

/**
 * Laptop Example
 */

const laptop = new Deviceful({
  parent: ".laptop",
  device: "laptop",
  screenshot: "./public/redgarden.jpg",
  screenshotHeight: 2402,
});

const close = document.getElementById("close");
const open = document.getElementById("open");
const swivel = document.getElementById("swivel");
const center = document.getElementById("center");
const scrollDown = document.getElementById("scrollDown");
const scrollUp = document.getElementById("scrollUp");

close.addEventListener("click", () => laptop.close(), false);
open.addEventListener("click", () => laptop.open(), false);
swivel.addEventListener("click", () => laptop.swivel(), false);
center.addEventListener("click", () => laptop.swivel({ to: 0 }), false);
scrollDown.addEventListener("click", () => laptop.scroll(), false);
scrollUp.addEventListener(
  "click",
  () => laptop.scroll({ direction: "up" }),
  false
);

/**
 * Phone Example
 */

const phoneLoadAnim = [
  {
    object: "camera",
    move: "position",
    axis: "y",
    duration: 1500,
    to: -1,
  },
  {
    object: "model",
    move: "rotation",
    axis: "y",
    to: 45,
    duration: 4000,
    delay: 1000,
  },
];

const phone = new Deviceful({
  parent: ".phone",
  device: "phone",
  screenshot: "./public/redgarden_mobile.jpg",
  screenshotHeight: 2792,
  cameraDistance: 15,
  cameraHeight: 1,
  onLoadAnimation: phoneLoadAnim,
});

// Phones click animations

const phoneParent = document.querySelector(".phone");
let phoneFocusState = false;

phoneParent.addEventListener("click", function () {
  if (!phoneFocusState) {
    phone.swivel({ to: 0, duration: 1000 });
    phone.scroll({ duration: 3000 });
    phone.animate([
      {
        object: "camera",
        move: "position",
        axis: "z",
        to: 30,
        duration: 1000,
      },
      {
        object: "camera",
        move: "position",
        axis: "y",
        to: -2,
        duration: 1000,
      },
    ]);
    phoneFocusState = true;
  } else {
    phone.swivel({ to: 45, duration: 1000, easing: "easeOutQuad" });
    phone.scroll({ direction: "up", duration: 3000 });
    phone.animate([
      {
        object: "camera",
        move: "position",
        axis: "z",
        to: 15,
        duration: 1000,
      },
      {
        object: "camera",
        move: "position",
        axis: "y",
        to: -1,
        duration: 1000,
      },
    ]);
    phoneFocusState = false;
  }
});

// Mount your Deviceful instances to start them
phone.mount();
laptop.mount();
