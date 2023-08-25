import { fetchQuery } from "./fetch.js";
import { URL_POSTS, URL_USER } from "../const.js";

const [users, posts] = await Promise.all([
  fetchQuery(URL_USER),
  fetchQuery(URL_POSTS),
]);

const { data: userData } = users;
const { data: postsData } = posts;

export const data = userData.map((user) => {
  const userPost = postsData.filter(({ userId }) => user.id === userId);
  return { user, userPost };
});
