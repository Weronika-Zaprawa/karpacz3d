function initialize() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  addScrollDownFunctionality();
  shuffleLoadingSpinnerText();
  runOnWindowLoad();
}

function getScrollDownArrows() {
  const downArrows = document.getElementsByClassName("scroll-down");
  return downArrows[0];
}

function getLoadingSpinner() {
  const loadingSpinner = document.getElementsByClassName("loading-spinner");
  return loadingSpinner[0];
}

function getLoadingSpinnerText() {
  const loadingSpinnerText = document.getElementById("loadingSpinnerText");
  return loadingSpinnerText;
}

function scrollToFirstSection() {
  const section = document.getElementById("first-section");
  section.scrollIntoView();
}

function addScrollDownFunctionality() {
  getScrollDownArrows().setAttribute("onclick", "scrollToFirstSection()");
}

function replaceLoadingSpinnerWithScrollDown() {
  getLoadingSpinner().remove();
  getScrollDownArrows().classList.remove("hidden");
}

function allowPageScroll() {
  document.body.classList.add("allow-scrolling");
}

function runOnWindowLoad() {
  window.onload = function () {
    replaceLoadingSpinnerWithScrollDown();
    allowPageScroll();
  };
}

function shuffleLoadingSpinnerText() {
  const loadingTexts = [
    "Ładowanie map",
    "Renderowanie modeli",
    "Generowanie wizualizacji",
    "Ładowanie wizualizacji",
    "Renderowanie wizualizacji",
  ];
  let loadingSpinnerText = getLoadingSpinnerText();
  loadingSpinnerText.innerText = loadingTexts[0];
  let counter = 1;
  const interval = setInterval(() => {
    if (loadingSpinnerText) {
      loadingSpinnerText.innerText = loadingTexts[counter % 5];
      counter++;
    } else {
      clearInterval(interval);
    }
  }, 2000);
}
