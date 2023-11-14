"use strict";

const theme = document.querySelector("#theme");
const themeCircle = document.querySelector("#theme__circle");
const navigation = document.querySelector("#main-nav");
const footer = document.querySelector("#main-footer");
const links = document.querySelectorAll("a");
const logo = document.querySelector(".logo");
const body = document.querySelector("body");
const headings = document.querySelectorAll("h1");
const paras = document.querySelectorAll("p");
const contactBtn = document.querySelector(".btn-color-1");
const downloadBtn = document.querySelector(".btn-color-2");
const specialParagraph = document.querySelectorAll(".special-paragraph");

// console.log(specialParagraph);

/* DARK MODE LIGHT MODE TOGGLER */

window.addEventListener("load", () => {
  themeCircle.classList.add("theme__light-mode-circle");
  theme.classList.add("theme-light-mode");
  navigation.classList.add("main-nav-light");
  footer.classList.add("main-footer-light");
  links.forEach((link) => link.classList.add("links-light"));
  body.classList.add("body__light");
  headings.forEach((heading) => heading.classList.add("headings__light"));
  paras.forEach((para) => para.classList.add("paragraphs__light"));
  contactBtn.classList.add("btn-color-1-light");
  downloadBtn.classList.add("btn-color-2-light");
  specialParagraph.forEach((special) =>
    special.classList.add("special-paragraph-light")
  );
});

theme.addEventListener("click", () => {
  if (themeCircle.classList.contains("theme__light-mode-circle")) {
    themeCircle.classList.add("theme__dark-mode-circle");
    themeCircle.classList.remove("theme__light-mode-circle");
    theme.classList.add("theme-dark-mode");
    navigation.classList.add("main-nav-dark");
    footer.classList.add("main-footer-dark");
    links.forEach((link) => link.classList.add("links-dark"));
    body.classList.add("body__dark");
    headings.forEach((heading) => heading.classList.add("headings__dark"));
    paras.forEach((para) => para.classList.add("paragraphs__dark"));
    contactBtn.classList.add("btn-color-1-dark");
    downloadBtn.classList.add("btn-color-2-dark");
    specialParagraph.forEach((special) =>
      special.classList.add("special-paragraph-dark")
    );
  } else {
    themeCircle.classList.add("theme__light-mode-circle");
    themeCircle.classList.remove("theme__dark-mode-circle");
    theme.classList.remove("theme-dark-mode");
    navigation.classList.remove("main-nav-dark");
    footer.classList.remove("main-footer-dark");
    links.forEach((link) => link.classList.remove("links-dark"));
    body.classList.remove("body__dark");
    headings.forEach((heading) => heading.classList.remove("headings__dark"));
    paras.forEach((para) => para.classList.remove("paragraphs__dark"));
    contactBtn.classList.remove("btn-color-1-dark");
    downloadBtn.classList.remove("btn-color-2-dark");
    specialParagraph.forEach((special) =>
      special.classList.remove("special-paragraph-dark")
    );
  }
});

// FIRST CHECK IF the navigator.geolocation GLOBAL OBJECT IS SUPPORTED BY THE USER'S BROWSER
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const coordinates = [latitude, longitude];

      const map = L.map("map").setView(coordinates, 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coordinates)
        .addTo(map)
        .bindPopup("Your current location")
        .openPopup();
    },
    () => {
      alert("Could not get your position");
    }
  );
}
