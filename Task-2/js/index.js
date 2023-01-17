import { chooseCard } from "./chooseCard.js";

const cards = document.querySelectorAll('.block__product');

Array.from(cards).forEach((card) => {
    card.addEventListener('click', chooseCard);
})

