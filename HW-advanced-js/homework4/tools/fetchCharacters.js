import { fetchData } from "./fetchData.js";
import { data } from "./dataFilm.js";

const loaderModal = document.querySelector(".loader-modal");
export const charactersUrl = data.map((item) => ({
  episode: item.episodeId,
  characters: item.characters,
}));
export const charactersData = async (episode) => {
  const arr = charactersUrl[episode].characters.map((item) => fetchData(item));
  loaderModal.style.display = "block";
  return Promise.all(arr);
};
