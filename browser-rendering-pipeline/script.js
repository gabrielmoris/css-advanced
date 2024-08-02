// HTML Parsing: The browser parses the HTML and creates the Document Object Model (DOM) tree.
// CSS Parsing: The browser parses the CSS in styles.css and creates the CSS Object Model (CSSOM).
// Render Tree Construction: The browser combines the DOM and CSSOM to create the Render Tree,
// which contains only the visible elements.
// Layout: The browser calculates the size and position of each visible element.
// Paint: The browser fills in the pixels for each visible element.
// Composite: If there are multiple layers, the browser composites them together
document.addEventListener("DOMContentLoaded", () => {
  const featuredContent = document.querySelector(".featured-content");
  const sidebar = document.querySelector(".sidebar");
  const logo = document.querySelector(".logo");

  // Change layout
  setTimeout(() => {
    const text = document.createElement("p");
    featuredContent.style.height = "400px";
    text.textContent = "1. Layout change: Featured content height increased";
    featuredContent.appendChild(text);
    console.log("Layout change: Featured content height increased");
  }, 2000);

  // Change paint
  setTimeout(() => {
    const text = document.createElement("p");
    sidebar.style.backgroundColor = "#ff9999";
    text.textContent = "2. Paint change: Sidebar color changed";
    sidebar.appendChild(text);
    console.log("Paint change: Sidebar color changed");
  }, 4000);

  // Change composite
  setTimeout(() => {
    const navbar = document.querySelector("header");
    const text = document.createElement("p");
    logo.style.transform = "scale(2)";
    text.textContent = "3. Composite change: Logo scaled up";
    navbar.append(text);
    console.log("Composite change: Logo scaled up");
  }, 6000);
});
