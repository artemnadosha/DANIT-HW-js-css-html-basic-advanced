import { fetchQuery } from "../tools/fetch.js";
import { URL_POSTS } from "../const.js";
import { createCard } from "./createCard.js";
import { createUsersCard } from "./renderUsers.js";
import { buttonAction } from "./buttonAction.js";

const rootElement = document.querySelector(".root");

export const formAction = () => {
  const form = document.querySelector("#form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const postData = [...e.target].map((item) => item.value);
    const obj = {
      title: postData[0],
      body: postData[2],
      userId: 1,
    };

    const newPost = await fetchQuery(URL_POSTS, "POST", obj);
    const userNow = createUsersCard.filter((item) => item.id === obj.userId);
    const { name, email } = userNow[0];

    const { body, id, title } = newPost.data;

    newPost.status &&
      rootElement.insertAdjacentHTML(
        "afterbegin",
        createCard(name, email, title, body, id)
      );

    const input = document.querySelectorAll(".input");

    input.forEach((item) => (item.value = ""));
  });
};
