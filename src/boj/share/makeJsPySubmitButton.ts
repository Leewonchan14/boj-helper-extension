export function makeJsPySubmitButton(problemNumber: number) {
  const submitButtonNode = document.querySelector(
    `a[href='/submit/${problemNumber}']`
  )?.parentElement;

  const cloneNode = submitButtonNode?.cloneNode(true) as HTMLElement;
  cloneNode?.classList.remove("active");

  let javascriptButton = cloneNode?.cloneNode(true);
  let pythonButton = cloneNode?.cloneNode(true);

  if (javascriptButton?.childNodes.length && pythonButton?.childNodes.length) {
    const anchorJs = javascriptButton.childNodes[0] as HTMLAnchorElement;
    const anchorPy = pythonButton.childNodes[0] as HTMLAnchorElement;

    anchorJs.href = HELPER_URL(problemNumber.toString(), "javascript");
    MakeButtonIMGText(anchorJs, "js제출");
    anchorJs.target = "_blank";

    anchorPy.href = HELPER_URL(problemNumber.toString(), "python");
    // anchorPy.innerHTML = "python 제출";
    MakeButtonIMGText(anchorPy, "py제출");
    anchorPy.target = "_blank";

    // submit 버튼 요소 앞에 java, python 버튼 추가
    submitButtonNode?.before(javascriptButton);
    submitButtonNode?.before(pythonButton);
  }
}

function HELPER_URL(pid: string, language: "javascript" | "python") {
  return `https://boj-helper.vercel.app/solve/${pid}?language=${language}&id=${pid}`;
}

function MakeButtonIMGText(container: HTMLElement, text: string) {
  container.innerHTML = "";

  const img = document.createElement("img");
  img.src =
    "https://github.com/user-attachments/assets/497e1481-7f30-435a-8b6f-e781bcfe3395";
  img.style.width = "16px";
  img.style.height = "16px";
  img.style.borderRadius = "50%";

  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.margin = "0 5px";
  container.style.gap = "5px";

  container.appendChild(img);
  container.appendChild(document.createTextNode(text));

  return container;
}
