import { createElementCharacters } from "./components/createElementCharacters.js";
import { createElementFilm } from "./components/createElementFilm.js";
import { charactersData } from "./tools/fetchCharacters.js";
import { data } from "./tools/dataFilm.js";

const root = document.querySelector("#root");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalContent = document.querySelector(".content");
const close = document.querySelector(".close");
const loaderModal = document.querySelector(".loader-modal");
const loader = document.querySelector(".wrapper-loader");
data.sort((a, b) => (a.episodeId > b.episodeId ? 1 : -1));

data.forEach((item) => (root.innerHTML += createElementFilm(item)));

loader.style.display = "none";

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) =>
  button.addEventListener("click", async (e) => {
    modalWrapper.style.display = "flex";
    document.body.style.overflowY = "hidden";

    const characters = charactersData(Number(e.target.dataset.id - 1));
    setTimeout(async () => {
      (await characters) && (loaderModal.style.display = "none");

      (await characters).forEach(
        (items) =>
          (modalContent.innerHTML += createElementCharacters(items.name))
      );
    }, 1000);
  })
);

close.addEventListener("click", (e) => {
  if (e.target) {
    modalWrapper.style.display = "none";
    document.body.style.overflowY = "scroll";
    modalContent.innerHTML = "";
  }
});
