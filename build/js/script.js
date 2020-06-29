'use strict';

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
  if (child.classList.contains("popup__close")) {
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

function events() {
  BTN_CALLBACK.addEventListener("click", openPopupRequest);
  BTN_DRIVE.addEventListener("click", openPopupDone);
  BTN_CONTACTS.addEventListener("click", openPopupDone);
  POPUP_DONE.addEventListener("click", closePopup);
  POPUP_REQUEST.addEventListener("click", closePopup);
  window.addEventListener("keydown", closePopupBtn);
  window.addEventListener("keydown", closePopupBtn);
}

events();
