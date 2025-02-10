import { makeJsPySubmitButton } from "./share/makeJsPySubmitButton";

const problemNumber = Number(window.location.pathname.split("/").at(-1)) || 0;

makeJsPySubmitButton(problemNumber);
