/* eslint-disable consistent-return */
export const getCards = async (cards) => {
  try {
    const cardsData = cards;
    return cardsData;
  }

  catch (err) {
    throw new Error('Error to get cards data', err);
  }
  
}

export function createCards (arr) {
  let cardContainer = '';
  cardContainer += /* html */`<div class="rating none"></div>`
  for(let i = 0; i < arr.length; i += 1) {
    cardContainer += /* html */`
    <div class="card-container">
        <div class="card card-cover">
          <div class="front" style="background-image: url(../../assets${arr[i].image});">
            <div class="card-header ">${arr[i].word}</div>
          </div>
          <div class="back" style="background-image: url(../../assets${arr[i].image});">
            <div class="card-header ">${arr[i].translation}</div>
          </div>
          <div class="rotate"></div>
        </div>
      </div>
    `
    // class "none" for hide content inside card
  }

  cardContainer += /* html */ `
    <div class="btns">
      <button class="btn none">Start Game</button>
    </div>
    <audio class="audio" src=""></audio>
    <audio class="soundEffects"></audio>
    `

  return cardContainer;
}