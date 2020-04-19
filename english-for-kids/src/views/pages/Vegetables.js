import { categories } from "../../assets/cards";
import { createCards, getCards } from "../../services/GenerateCards";
import { playWord, startGame, flipCard } from "../../services/GameFunctions";


const Vegetables = {
  render: async () => {
    const cardsContent = await getCards(categories.vegetables);
    return createCards(cardsContent);
  }
  , after_render: async () => {
    playWord();
    flipCard();
    startGame();
  }
}
export default Vegetables;