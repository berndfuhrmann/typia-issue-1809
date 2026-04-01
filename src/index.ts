import { assert } from "typia";

console.log("Hello Typia");

const rawJSON = JSON.parse('{"alpha": 5}');
const checked = assert<{alpha:number}>(rawJSON);
console.log(checked.alpha);