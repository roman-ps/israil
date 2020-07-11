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
const PREV_SLIDER = document.querySelector(".reviews__prev-page");
const NEXT_SLIDER = document.querySelector(".reviews__next-page");
const FAQ = document.querySelector(".faq__list");
const SLIDERS = document.querySelectorAll(".reviews__slider");
const ALL_SLIDERS = document.querySelector(".reviews__all-page");
const CURRENT_SLIDER = document.querySelector(".reviews__current-page");
let slider = 3;
ALL_SLIDERS.textContent = SLIDERS.length;
CURRENT_SLIDER.textContent = slider;

function openPopupRequest(evt) {
  evt.preventDefault;
  POPUP_REQUEST.classList.remove("hidden");
  POPUP_OVERLAY.classList.remove("hidden");
  BODY.classList.add("scroll-hidden");
}

function openPopupDone(evt) {
  evt.preventDefault;
  POPUP_DONE.classList.remove("hidden");
  POPUP_OVERLAY.classList.remove("hidden");
  BODY.classList.add("scroll-hidden");
}

function closePopupRequest(evt) {
  evt.preventDefault;
  POPUP_REQUEST.classList.add("hidden");
  POPUP_OVERLAY.classList.add("hidden");
  BODY.classList.remove("scroll-hidden");
}

function closePopupDone(evt) {
  evt.preventDefault;
  POPUP_DONE.classList.add("hidden");
}

function closePopup(evt) {
  evt.preventDefault;
  let child = evt.target;
  let parent = evt.currentTarget;
  if ((child.classList.contains("popup__close")) || (child.classList.contains("popup__btn")))  {
    parent.classList.toggle("hidden")
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

function opentabsFaqInset(evt) {
  evt.preventDefault;
  let child = evt.target;
  let parent = child.closest(".faq__list-item");
  if (child.classList.contains("faq__list-open")) {
     if (parent.classList.contains("faq__list-item--open")) {
      parent.classList.remove("faq__list-item--open");
    }
     else parent.classList.add("faq__list-item--open");
  }
}

function switchSlider(evt) {
  evt.preventDefault;
  let current;
  let next;
  for (let i = 0; i < SLIDERS.length; i++) {
    if (!SLIDERS[i].classList.contains("reviews__slider--hidden")) {
      current = i;
      if (current < 1) {
        next = SLIDERS.length - 1;
      } else {
        next = current - 1;
      }
    }
  }
  SLIDERS[current].classList.add("reviews__slider--hidden");
  SLIDERS[next].classList.remove("reviews__slider--hidden");
  CURRENT_SLIDER.textContent = (current > 0) ? current : 6;
}


function events() {
  BTN_CALLBACK.addEventListener("click", openPopupRequest);
  BTN_DRIVE.addEventListener("click", openPopupDone);
  BTN_CONTACTS.addEventListener("click", openPopupDone);
  POPUP_DONE.addEventListener("click", closePopup);
  POPUP_REQUEST.addEventListener("click", closePopup);
  window.addEventListener("keydown", closePopupBtn);
  FAQ.addEventListener("click", opentabsFaqInset);
  PREV_SLIDER.addEventListener("click", switchSlider);
  NEXT_SLIDER.addEventListener("click", switchSlider);
}

events();
