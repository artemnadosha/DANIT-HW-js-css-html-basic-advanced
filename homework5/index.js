import { formAction } from "./components/formAction.js";
import { buttonAction } from "./components/buttonAction.js";
import { renderUsers } from "./components/renderUsers.js";

renderUsers();

await buttonAction();

await formAction();
