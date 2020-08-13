'use strict';

const ESC_KEYCODE = 27;
const BODY = document.querySelector("body");
const FORM_POPUP = document.querySelector(".popup__form");
const FORM_DRIVE = document.querySelector(".drive__form");
const FORM_CONTACTS = document.querySelector(".contacts__form");
const BTN_CALLBACK = document.querySelector(".header__callback");
const PHONE_DRIVE = document.querySelector("#drive-phone");
const PHONE_CONTACTS = document.querySelector("#contact-phone");
const PHONE_POPUP = document.querySelector("#popup__form-phone");
const POPUP = document.querySelector(".popup");
const POPUP_DONE = document.querySelector(".popup--done");
const POPUP_REQUEST = document.querySelector(".popup--request");
const OVERLAY = document.querySelector(".overlay");
const SLIDER_PREV = document.querySelector(".reviews__prev-page");
const SLIDER_NEXT = document.querySelector(".reviews__next-page");
const FAQ = document.querySelector(".faq__list");
const SLIDERS = document.querySelectorAll(".reviews__slider");
const ALL_SLIDERS = document.querySelector(".reviews__all-page");
const CURRENT_SLIDER = document.querySelector(".reviews__current-page");
const SWIPER = document.querySelector(".swiper-container");
const DEFAULT_SLIDER = 3;
ALL_SLIDERS.textContent = SLIDERS.length;
CURRENT_SLIDER.textContent = DEFAULT_SLIDER;
let mySwiper;

function masking(item) {
  let maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  let mask = new IMask(item, maskOptions);
}

function openPopup(evt) {
  evt.preventDefault();
  POPUP_REQUEST.classList.remove("hidden");
  OVERLAY.classList.remove("hidden");
  BODY.classList.add("scroll-hidden");
}

function closePopup(evt) {
  let child = evt.target;
  let parent = evt.currentTarget;
  if ((child.classList.contains("popup__close")) || (child.classList.contains("popup__btn--ok")))  {
    parent.classList.toggle("hidden");
    OVERLAY.classList.add("hidden");
    BODY.classList.remove("scroll-hidden");
  }
}

function closePopupBtn(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (!POPUP_REQUEST.classList.contains("hidden")) POPUP_REQUEST.classList.toggle("hidden");
    if (!POPUP_DONE.classList.contains("hidden")) POPUP_DONE.classList.toggle("hidden");
    OVERLAY.classList.add("hidden");
    BODY.classList.remove("scroll-hidden");
  }
}

function switchSliderLeft(evt) {
  evt.preventDefault();
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
  evt.preventDefault();
  let current;
  let next;
  for (let i = 0; i < SLIDERS.length; i++) {
    if (!SLIDERS[i].classList.contains("reviews__slider--hidden")) {
      current = i;
      next = (current > 4) ? 0 : current + 1;
    }
  }
  showAndHideSliders(current, next);
  CURRENT_SLIDER.textContent = (current < 5) ? next + 1 : 1;
}

function showAndHideSliders(current, next) {
  SLIDERS[current].classList.add("reviews__slider--hidden");
  SLIDERS[next].classList.remove("reviews__slider--hidden");
}

function openFaqItems(evt) {
  let child = evt.target;
  let parent = evt.currentTarget;
  if (child != parent) { child.closest(".faq__list-item").classList.toggle("faq__list-item--open") }
}

function submitForm(evt) {
  evt.preventDefault();
  POPUP_DONE.classList.remove("hidden");
  OVERLAY.classList.remove("hidden");
  BODY.classList.add("scroll-hidden");
  if (evt.target.classList.contains("popup__form")) POPUP_REQUEST.classList.add("hidden");
}

function allEvents() {
  BTN_CALLBACK.addEventListener("click", openPopup);
  FORM_POPUP.addEventListener("submit", submitForm);
  FORM_DRIVE.addEventListener("submit", submitForm);
  FORM_CONTACTS.addEventListener("submit", submitForm);
  POPUP_DONE.addEventListener("click", closePopup);
  POPUP_REQUEST.addEventListener("click", closePopup);
  window.addEventListener("keydown", closePopupBtn);
  SLIDER_PREV.addEventListener("click", switchSliderLeft);
  SLIDER_NEXT.addEventListener("click", switchSliderRight);
  window.addEventListener("resize", initSwipe);
  FAQ.addEventListener("click", openFaqItems);
  PHONE_CONTACTS.addEventListener("focus", masking(PHONE_CONTACTS));
  PHONE_DRIVE.addEventListener("focus", masking(PHONE_DRIVE));
  PHONE_POPUP.addEventListener("focus", masking(PHONE_POPUP));
}

function initSwipe() {
  let screenWidth = screen.width;
  if (screenWidth <= 767 && SWIPER.dataset.mobile == 'false') {
    mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      freeMode: true,
      slideClass: 'tabs__item-label',
    });
    SWIPER.dataset.mobile = 'true';
  }
  if (screenWidth > 767) {
    SWIPER.dataset.mobile = 'false';
    if (SWIPER.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

allEvents();
