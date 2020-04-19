import { categories } from "../../assets/cards";
import { createCards, getCards } from "../../services/GenerateCards";
import { playWord, startGame, flipCard } from "../../services/GameFunctions";

const ActionSetA = {
  render: async () => {
    const cardsContent = await getCards(categories.action_set_a);
    return createCards(cardsContent);
  },
  after_render: async () => {
    playWord();
    flipCard();
    startGame();
  },
};
export default ActionSetA;
