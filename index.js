const HELPER_URL = (pid, language) => {
  return `https://boj-helper.vercel.app/solve/${pid}?language=${language}&id=${pid}`;
};

const problemNumber = Number(window.location.pathname.split("/").at(-1)) || 0;

const submitButtonNode = document.querySelector(
  `a[href='/submit/${problemNumber}']`
)?.parentElement;

const javascriptButton = submitButtonNode.cloneNode(true);
const pythonButton = submitButtonNode.cloneNode(true);

javascriptButton.childNodes[0].innerHTML = "js 헬퍼";
javascriptButton.childNodes[0].href = HELPER_URL(problemNumber, "javascript");

pythonButton.childNodes[0].innerHTML = "python 헬퍼";
pythonButton.childNodes[0].href = HELPER_URL(problemNumber, "python");

// submit 버튼 요소 앞에 java, python 버튼 추가
submitButtonNode.before(javascriptButton);
submitButtonNode.before(pythonButton);
