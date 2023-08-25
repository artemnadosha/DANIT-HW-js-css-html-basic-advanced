import { fetchQuery } from "../tools/fetch.js";
import { URL_POSTS } from "../const.js";

export const buttonAction = async () => {
  const buttonDelete = document.querySelectorAll(".delete");

  buttonDelete.forEach((button) =>
    button.addEventListener("click", async (e) => {
      const postId = Number(e.currentTarget.dataset.post);
      const response = await fetchQuery(`${URL_POSTS}/${postId}`, "DELETE");

      const deleteElement = document.querySelector(`[data-id='${postId}']`);
      response.status && deleteElement.remove();
    })
  );
};
