import { fetchData } from "./fetchData.js";
import { API_URL } from "./const.js";

export const data = await fetchData(API_URL);
