const parent = document.querySelector(".parent");
let resizeTimeout;

Array.from(parent.children).forEach((child) => {
  // I apply random colors because Yes.
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  child.style.backgroundColor = randomColor;

  // Clickable Element that uses the requestAnimationFrame to make the animation smooth
  child.addEventListener("click", () => {
    const currentHeight = child.offsetHeight;
    if (currentHeight > 1000) {
      child.style.height = Math.floor(Math.random() * 100) + "px";
      return;
    }
    const newHeight = currentHeight * 5;

    function animateHeight() {
      child.style.height = newHeight + "px";
    }

    requestAnimationFrame(animateHeight);
  });
});
