'use strict';

const ESC_KEYCODE = 27;
const BTN_CALLBACK = document.querySelector(".header__callback");
const BTN_DONE = document.querySelector(".drive__btn");
const BTN_DONE_FORM = document.querySelector(".contacts__btn");
const POPUP = document.querySelector(".popup");
const POPUP_DONE = document.querySelector(".popup--done");
const POPUP_REQUEST = document.querySelector(".popup--request");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_OVERLAY = document.querySelector(".overlay");

function openPopupRequest(evt) {
  evt.preventDefault;
  POPUP_REQUEST.classList.remove("hidden");
  POPUP_OVERLAY.classList.remove("hidden");
}

function openPopupDone(evt) {
  evt.preventDefault;
  POPUP_DONE.classList.remove("hidden");
  POPUP_OVERLAY.classList.remove("hidden");
}

function closePopupRequest(evt) {
  evt.preventDefault;
  POPUP_REQUEST.classList.add("hidden");
  POPUP_OVERLAY.classList.add("hidden");
}

function closePopupDone(evt) {
  evt.preventDefault;
  POPUP_DONE.classList.add("hidden");
}

function closePopup(evt) {
  evt.preventDefault;
  let child = evt.target;
  let parent = evt.currentTarget;
  if (child.classList.contains("popup__close")) {
    parent.classList.toggle("hidden")
  }
  POPUP_OVERLAY.classList.add("hidden");
}

function events() {
  BTN_CALLBACK.addEventListener("click", openPopupRequest);
  BTN_DONE.addEventListener("click", openPopupDone);
  BTN_DONE_FORM.addEventListener("click", openPopupDone);
  POPUP.addEventListener("click", closePopup);
}

events();
