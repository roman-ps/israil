'use strict';

let maskContact = document.getElementById('contact-phone');
let maskDrive = document.getElementById('drive-phone');
let maskForm = document.getElementById('popup__form-phone');
let maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false
};
let mask = new IMask(maskContact, maskOptions);
let mask2 = new IMask(maskDrive, maskOptions);
let mask3 = new IMask(maskForm, maskOptions);

const ESC_KEYCODE = 27;
const BODY = document.querySelector("body");
const BTN_CALLBACK = document.querySelector(".header__callback");
const BTN_DRIVE = document.querySelector(".drive__btn");
const BTN_CONTACTS = document.querySelector(".contacts__btn");
const POPUP = document.querySelector(".popup");
const POPUP_DONE = document.querySelector(".popup--done");
const POPUP_REQUEST = document.querySelector(".popup--request");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_OVERLAY = document.querySelector(".overlay");
const POPUP_FORM = document.querySelector(".popup__form");
const POPUP_INPUTS = POPUP_FORM.querySelectorAll(".popup__form-input");
const PREV_SLIDER = document.querySelector(".reviews__prev-page");
const NEXT_SLIDER = document.querySelector(".reviews__next-page");
const FAQ = document.querySelector(".faq__list");
const SLIDERS = document.querySelectorAll(".reviews__slider");
const ALL_SLIDERS = document.querySelector(".reviews__all-page");
const CURRENT_SLIDER = document.querySelector(".reviews__current-page");
let defaultSlider = 3;
ALL_SLIDERS.textContent = SLIDERS.length;
CURRENT_SLIDER.textContent = defaultSlider;
console.log(POPUP_INPUTS);
console.log(POPUP_FORM);

const openPopup = (item) => (evt) => {
  evt.preventDefault;
  item.classList.remove("hidden");
  POPUP_OVERLAY.classList.remove("hidden");
  BODY.classList.add("scroll-hidden");
}

function closePopup(evt) {
  evt.preventDefault;
  let child = evt.target;
  let parent = evt.currentTarget;
  if ((child.classList.contains("popup__close")) || (child.classList.contains("popup__btn--ok")))  {
    parent.classList.toggle("hidden");
    POPUP_OVERLAY.classList.add("hidden");
    BODY.classList.remove("scroll-hidden");
  }
}

function closePopupBtn(evt) {
  evt.preventDefault;
  if (evt.keyCode == ESC_KEYCODE) {
    if (!POPUP_REQUEST.classList.contains("hidden")) POPUP_REQUEST.classList.toggle("hidden");
    if (!POPUP_DONE.classList.contains("hidden")) POPUP_DONE.classList.toggle("hidden");
    POPUP_OVERLAY.classList.add("hidden");
    BODY.classList.remove("scroll-hidden");
  }
}

function openTabsFaq(evt) {
  evt.preventDefault;
  let child = evt.target;
  let parent = child.closest(".faq__list-item");
  if (child.classList.contains("faq__list-open")) parent.classList.toggle("faq__list-item--open");
}

function switchSliderLeft(evt) {
  evt.preventDefault;
  let current;
  let next;
  for (let i = 0; i < SLIDERS.length; i++) {
    if (!SLIDERS[i].classList.contains("reviews__slider--hidden")) {
      current = i;
      next = (current < 1) ? SLIDERS.length - 1 : current - 1;
    }
  }
  showAndHideSliders(current, next);
  CURRENT_SLIDER.textContent = (current > 0) ? current : 6;
}

function switchSliderRight(evt) {
  evt.preventDefault;
  let current;
  let next;
  for (let i = 0; i < SLIDERS.length; i++) {
    if (!SLIDERS[i].classList.contains("reviews__slider--hidden")) {
      current = i;
      next = (current > 4) ? 0 : current + 1;
    }
  }
  showAndHideSliders(current, next);
  CURRENT_SLIDER.textContent = (current < 5) ? next+1 : 1;
}

function showAndHideSliders(current, next) {
  SLIDERS[current].classList.add("reviews__slider--hidden");
  SLIDERS[next].classList.remove("reviews__slider--hidden");
}

function sendForm(evt) {
  console.log(POPUP_INPUTS);
  for (let i = 0; i < POPUP_INPUTS.length; i++) {
    console.log(POPUP_INPUTS[i].value);
    if (!POPUP_INPUTS[i].value) {
      evt.preventDefault();
      console.log("Noooooooooooooooooooo");
    }
  }
}

function events() {
  BTN_CALLBACK.addEventListener("click", openPopup(POPUP_REQUEST));
  BTN_DRIVE.addEventListener("click", openPopup(POPUP_DONE));
  BTN_CONTACTS.addEventListener("click", openPopup(POPUP_DONE));
  POPUP_DONE.addEventListener("click", closePopup);
  POPUP_REQUEST.addEventListener("click", closePopup);
  window.addEventListener("keydown", closePopupBtn);
  FAQ.addEventListener("click", openTabsFaq);
  PREV_SLIDER.addEventListener("click", switchSliderLeft);
  NEXT_SLIDER.addEventListener("click", switchSliderRight);
  POPUP_FORM.addEventListener("submit", sendForm);
}

events();
