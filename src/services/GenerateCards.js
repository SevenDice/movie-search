/* eslint-disable consistent-return */
import { gameEnv } from "./Variables";

export const getCards = async (cards) => {
  try {
    const cardsData = cards;
    return cardsData;
  } catch (err) {
    throw new Error("Error to get cards data", err);
  }
};

export function createCards(arr) {
  let cardContainer = "";
  cardContainer += /* html */ `<div class="rating none"></div>`;
  for (let i = 0; i < arr.length; i += 1) {
    if (gameEnv.gameMode === false) {
      cardContainer += /* html */ `
      <div class="card-container">
          <div class="card">
            <div class="front" style="background-image: url(../../assets${arr[i].image});">
            <div class="card-header">${arr[i].word}</div>
            </div>
            <div class="back" style="background-image: url(../../assets${arr[i].image});">
              <div class="card-header">${arr[i].translation}</div>
            </div>
            <div class="rotate"></div>
            <audio id="audio-src" class="audioword">
            <source id="audio-source" src="${arr[i].audioSrc}" type="audio/mpeg">
            </audio>
          </div>
        </div>
      `;
    } else {
      cardContainer += /* html */ `
      <div class="card-container">
          <div class="card card-cover">
            <div class="front" style="background-image: url(../../assets${arr[i].image});">
            <div class="card-header none">${arr[i].word}</div>
            </div>
            <div class="back" style="background-image: url(../../assets${arr[i].image});">
              <div class="card-header none">${arr[i].translation}</div>
            </div>
            <div class="rotate none"></div>
            <audio id="audio-src" class="audioword">
            <source id="audio-source" src="${arr[i].audioSrc}" type="audio/mpeg">
            </audio>
          </div>
        </div>
      `;
    }
  }

  if (gameEnv.gameMode === false) {
    cardContainer += /* html */ `
      <div class="btns">
        <button id="btn-start" class="btn none">Start Game</button>
      </div>
      <audio id="audio-correct" class="soundEffects">
        <source src="../../assets/audio/correct.mp3" type="audio/mpeg">
      </audio>
      <audio id="audio-error" class="soundEffects">
        <source src="../../assets/audio/error.mp3" type="audio/mpeg">
      </audio>
      <audio id="audio-success" class="soundEffects">
        <source src="../../assets/audio/success.mp3" type="audio/mpeg">
      </audio>
      <audio id="audio-failure" class="soundEffects">
        <source src="../../assets/audio/failure.mp3" type="audio/mpeg">
      </audio>
      `;
  } else {
    cardContainer += /* html */ `
    <div class="btns">
      <button id="btn-start" class="btn">Start Game</button>
    </div>
    <audio id="audio-correct" class="soundEffects">
      <source src="../../assets/audio/correct.mp3" type="audio/mpeg">
    </audio>
    <audio id="audio-error" class="soundEffects">
      <source src="../../assets/audio/error.mp3" type="audio/mpeg">
    </audio>
    <audio id="audio-success" class="soundEffects">
      <source src="../../assets/audio/success.mp3" type="audio/mpeg">
    </audio>
    <audio id="audio-failure" class="soundEffects">
      <source src="../../assets/audio/failure.mp3" type="audio/mpeg">
    </audio>
    `;
  }

  return cardContainer;
}
