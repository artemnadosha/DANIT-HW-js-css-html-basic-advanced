import { newClineBase } from "./taskOne.js";
import {charactersShortInfo} from "./taskTwo.js";
import {isAdmin, name, years} from "./taskThree.js";
import {fullProfile} from "./taskFour.js";
import {newBooks} from "./taskFive.js";
import {newObjectEmployee} from "./taskSix.js";
import {taskSeven} from "./taskSeven.js";

console.log('taskOne', newClineBase());
console.log('taskTwo', charactersShortInfo)
console.log('taskThree', name, years, isAdmin)
console.log('taskFour', fullProfile);
console.log('taskFive', newBooks);
console.log('taskSix', newObjectEmployee);
console.log('taskSeven', taskSeven);

taskSeven()