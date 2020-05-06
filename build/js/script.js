'use strict';

const CALLBACK = document.querySelector(".header__callback");
const POPUP_DONE = document.querySelector(".popup--done");
const POPUP_REQUEST = document.querySelector(".popup--request");
const POPUP_CLOSE = document.querySelector(".popup__close");

function openPopupRequest(evt) {
  evt.preventDefault();
  if (POPUP_REQUEST.classList.contains("hidden")) {
    POPUP_REQUEST.classList.remove("hidden");
    document.body.style.opacity = "0.95";
    document.body.style.background = "#EBEBEB";
  }
}

function hidden(evt) {
  evt.preventDefault();
  evt.currentTarget.classList.toggle("hidden");
}

function closePopup(evt) {
  evt.preventDefault();
  let child = evt.target;
  let parent = evt.currentTarget;
  console.log(child);
  console.log(parent);
  /* if (child != parent) {
    if (child.classList.contains)
  } */
}

CALLBACK.addEventListener("click", openPopupRequest);
POPUP_REQUEST.addEventListener("click", closePopup);
