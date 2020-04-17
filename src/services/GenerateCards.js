/* eslint-disable func-names */
/* eslint-disable consistent-return */
export const gameMode = {
  state: false
};

export const getCards = async (cards) => {
  try {
    const cardsData = cards;
    return cardsData;
  }

  catch (err) {
    throw new Error('Error to get cards data', err);
  }
}

export function playWord() {
  const container = document.getElementById('page_container');
  container.onclick = function (event) {
    if (event.target.className !== 'front') {
      return
    }
    const card = event.target.closest('.card');
    const el = card.querySelector('#audio-src');
    el.play();
  }
}

export function flipCard() {
  const container = document.getElementById('page_container');
  container.onclick = function (event) {
    if (event.target.className !== 'rotate') {
      return
    }
    const card = event.target.closest('.card-container');
    const el = card.querySelector('#card-element');
    el.classList.toggle('translate')
    if (el.classList.contains('translate')) {
      setTimeout(() => el.classList.toggle('translate'), 1500);
    }
  }
}

export function createCards(arr) {
  let cardContainer = '';
  cardContainer += /* html */`<div class="rating none"></div>`
  for (let i = 0; i < arr.length; i += 1) {
    cardContainer += /* html */`
    <div class="card-container">
        <div id="card-element" class="card">
          <div class="front" style="background-image: url(../../assets${arr[i].image});">
            <div class="card-header ">${arr[i].word}</div>
          </div>
          <div class="back" style="background-image: url(../../assets${arr[i].image});">
            <div class="card-header ">${arr[i].translation}</div>
          </div>
          <div id="btn-rotate" class="rotate"></div>
          <audio id="audio-src" class="audio">
            <source id="audio-source" src="${arr[i].audioSrc}" type="audio/mpeg">
          </audio>
        </div>
      </div>
    `
    // card-header, rotate сюда none
    // class "none" for hide content inside card
  }

  cardContainer += /* html */ `
    <div class="btns">
      <button id="btn-start" class="btn none">Start Game</button>
    </div>
    <audio class="soundEffects"></audio>
    `

  return cardContainer;
}