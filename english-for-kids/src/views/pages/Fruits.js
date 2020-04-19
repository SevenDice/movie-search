import { categories } from "../../assets/cards";
import { createCards, getCards } from "../../services/GenerateCards";
import { playWord, startGame, flipCard } from "../../services/GameFunctions";


const Fruits = {
  render: async () => {
    const cardsContent = await getCards(categories.fruits);
    return createCards(cardsContent);
  }
  , after_render: async () => {
    playWord();
    flipCard();
    startGame();
  }
}
export default Fruits;