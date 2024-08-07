const parent = document.querySelector(".grid");
let resizeTimeout;

Array.from(parent.children).forEach((child) => {
  // I apply random colors because Yes.
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  child.style.backgroundColor = randomColor;
});
