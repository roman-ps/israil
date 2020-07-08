'use strict';

var element = document.getElementById('contact-phone');
var element2 = document.getElementById('drive-phone');
var element3 = document.getElementById('popup__form-tel');
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false
};
var mask = new IMask(element, maskOptions);
var mask2 = new IMask(element2, maskOptions);
var mask3 = new IMask(element3, maskOptions);

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
let faq = document.querySelector(".faq__list");
let faqList = document.querySelectorAll(".faq__list");
let faqItems = [];

for (let i = 0; i < faqList.length; i++) {
  console.log(faqList[i]);
}

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

function openInset(evt) {
  evt.preventDefault;
  let child = evt.target;
  //let parent = evt.currentTarget;
  let parent = child.closest(".faq__list-item");
  console.log("child: ",  child);
  console.log("parent: ", parent);
  if (child.classList.contains("faq__list-open")) {
     if (parent.classList.contains("faq__list-item--open")) {
      parent.classList.remove("faq__list-item--open");
    }
     else parent.classList.add("faq__list-item--open");
  }
}


function events() {
  BTN_CALLBACK.addEventListener("click", openPopupRequest);
  BTN_DRIVE.addEventListener("click", openPopupDone);
  BTN_CONTACTS.addEventListener("click", openPopupDone);
  POPUP_DONE.addEventListener("click", closePopup);
  POPUP_REQUEST.addEventListener("click", closePopup);
  window.addEventListener("keydown", closePopupBtn);
  faq.addEventListener("click", openInset);
}

events();
