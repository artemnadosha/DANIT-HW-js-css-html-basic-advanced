import { data } from "../tools/fetchData.js";
import { Card } from "../classes/Card.js";
import { createCard } from "./createCard.js";

const rootElement = document.querySelector(".root");

export const createUsersCard = await data.map((item) => new Card(item));

export const renderUsers = () => {
  createUsersCard.forEach(({ name, email, post }) =>
    post.forEach(({ title, body, id }) => {
      rootElement.innerHTML += createCard(name, email, title, body, id);
    })
  );
};
