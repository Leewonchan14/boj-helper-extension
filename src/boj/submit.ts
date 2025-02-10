import { makeJsPySubmitButton } from "./share/makeJsPySubmitButton";

const problemNumber =
  Number(window.location.pathname.slice(1).split("/")[1]) || 0;

console.log("🚀 ~ problemNumber:", problemNumber);

makeJsPySubmitButton(problemNumber);
