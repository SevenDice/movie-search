import { categories } from "../../assets/cards";
import { createCards, getCards } from "../../services/GenerateCards";
import { playWord, startGame, flipCard } from "../../services/GameFunctions";


const ActionSetB = {
  render: async () => {
    const cardsContent = await getCards(categories.action_set_b);
    return createCards(cardsContent);
  }
  , after_render: async () => {
    playWord();
    flipCard();
    startGame();
  }
}
export default ActionSetB;