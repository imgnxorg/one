async function hydrateCanvas(event) {
  const content = document.querySelector("#nl-highlight-canvas").innerText;
  const response = await fetch("https://english.edward.io/parse", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `text=${encodeURIComponent(content)}`,
  });
  const responseText = await response.text();
  document.querySelector("#container").innerText = responseText;
}

function highlight() {
  colors.forEach((color) => {
    const elements = document.querySelectorAll(color);
    elements.forEach((element) => {
      if (highlights) {
        element.classList.remove("!highlights");
        element.classList.add("!textcolor");
      } else {
        element.classList.add("!highlights");
        element.classList.remove("!textcolor");
      }
    });
  });
}

const colors = [
  ".mtk00",
  ".mtk01",
  ".mtk02",
  ".mtk03",
  ".mtk04",
  ".mtk05",
  ".mtk06",
  ".mtk07",
  ".mtk08",
  ".mtk09",
  ".mtk0A",
  ".mtk0B",
  ".mtk0C",
  ".mtk0D",
  ".mtk0E",
  ".mtk0F",
];

var highlights = false;

var input = document
  .querySelector(".canvas")
  .addEventListener("change", hydrateCanvas);

document.querySelectorAll(".example").forEach((el) => {
  el.addEventListener("click", (e) => {
    {
      var target = e.target,
        color = target.data("color");
      document.querySelector(`.${color}`).toggleClass("highlights");
    }
  });
});

document.getElementById("#toggle-highlights").click(function () {
  highlights = !highlights;
  highlight();
});
