/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import Swiper from "swiper";

import swiperParametrs from "./SwiperParametrs";

function createCard() {
  for (let i = 0; i < 10; i += 1) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("swiper-slide");

    const cardHeader = document.createElement("a");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    card.appendChild(cardFooter);

    const cardImbd = document.createElement("div");
    cardImbd.classList.add("card-imbd");

    const span = document.createElement("span");
    cardImbd.appendChild(span);
    card.appendChild(cardImbd);

    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.appendChild(card);
  }
}

function addCardContent(arr) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    const cardHeader = card.querySelector(".card-header");
    const cardBody = card.querySelector(".card-body");
    const cardFooter = card.querySelector(".card-footer");
    const cardImbdSpan = card.querySelector(".card-imbd span");

    cardHeader.textContent = arr[index].Title;
    cardHeader.dataset.raiting = arr[index].imdbID;
    cardBody.style.backgroundImage =
      arr[index].Poster === "N/A"
        ? "url('assets/img/poster.png')"
        : `url(${arr[index].Poster})`;
    cardFooter.textContent = arr[index].Year;
    cardImbdSpan.dataset.raiting = arr[index].imdbID;
  });
}

function getRating() {
  const span = document.querySelectorAll(".card-imbd span");
  span.forEach((el) => {
    const url = `https://www.omdbapi.com/?i=${el.dataset.raiting}&apikey=d0b3ce4d`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        el.textContent = data.imdbRating;
      });
  });
  const cardHeader = document.querySelectorAll(".card-header");
  cardHeader.forEach((el) => {
    el.href = `https://www.imdb.com/title/${el.dataset.raiting}/videogallery`;
    el.target = "_blank";
  });
}

export async function getMovieData(value) {
  const url = `https://www.omdbapi.com/?s=${value}&apikey=d0b3ce4d`;
  const res = await fetch(url);
  const data = await res.json();
  const info = document.querySelector(".info");
  if (!data.Search) {
    info.textContent = `No results for "${value}"`;
    return;
  }
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  swiperWrapper.innerHTML = "";
  createCard();
  addCardContent(data.Search);
  getRating();

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => (card.style.marginRight = "0px"));
  const swiper = new Swiper(".swiper-container", swiperParametrs);
  const mySwiper = document.querySelector(".swiper-container").swiper;
}

const swiperBtns = document.querySelectorAll(".swiper-btn");
swiperBtns.forEach((el) => {
  const input = document.querySelector(".search-input");
  el.addEventListener("click", () => getRating(input.value));
});

async function valueTranslate() {
  const input = document.querySelector(".search-input");
  const {value} = input;
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200420T144130Z.82846c83fbaf563a.91c4b9c7868cb0d1cb752acf1f210c5c6cd51481&text=${value}&lang=ru-en`;
  const res = await fetch(url);
  const data = await res.json();
  const translation = data.text[0].replace(/^The /gi, "");

  const url1 = `https://www.omdbapi.com/?s=${translation}&apikey=d0b3ce4d`;
  const res1 = await fetch(url1);
  const data1 = await res1.json();
  const info = document.querySelector(".info");
  if (data1.Search && data1.Search.length > 9) {
    const mySwiper = document.querySelector(".swiper-container").swiper;
    mySwiper.destroy();
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => (card.style.marginRight = "80px"));
    getMovieData(translation);
    info.textContent = `Showing results for "${translation}"`;
  } else {
    info.textContent = `No results for "${value}"`;
  }
}

export async function search() {
  const input = document.querySelector(".search-input");
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=d0b3ce4d`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.Search && data.Search.length > 9) {
    const mySwiper = document.querySelector(".swiper-container").swiper;
    mySwiper.destroy();
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => (card.style.marginRight = "80px"));
    const info = document.querySelector(".info");
    getMovieData(input.value);
    info.textContent = "";
  } else {
    valueTranslate();
  }
}

