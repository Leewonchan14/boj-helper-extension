import { makeJsPySubmitButton } from "./share/makeJsPySubmitButton";

const searchParam = Object.fromEntries(
  new URLSearchParams(window.location.search).entries()
);

const main = () => {
  if (!searchParam["problem_id"]) return;
  const problemNumber = Number(searchParam["problem_id"]);
  makeJsPySubmitButton(problemNumber);
};

main();
