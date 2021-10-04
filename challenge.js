// color change
const h1 = document.querySelector("div.hello:first-child h1");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleEnter: function () {
    h1.innerText = "The mouse is here!";
    h1.style.color = colors[0];
  },
  handleLeave: function () {
    h1.innerText = "The mouse is gone!";
    h1.style.color = colors[1];
  },
  handleResize: function () {
    h1.innerText = "You just resized!";
    h1.style.color = colors[2];
  },
  handleSelect: function () {
    h1.innerText = "You're selecting me!";
    h1.style.color = colors[3];
  },
  handleContext: function () {
    h1.innerHTML = "That was a right click!";
    h1.style.color = colors[4];
  },
};

h1.addEventListener("mouseenter", superEventHandler.handleEnter);
h1.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext);

// color change when window resized
const title = document.querySelector("body");

function handleTitleResize() {
  if (window.innerWidth < 900) {
    title.classList.add("A1");
    title.classList.remove("A3");
    title.classList.remove("A2");
  } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
    title.classList.add("A2");
    title.classList.remove("A1");
    title.classList.remove("A3");
  } else if (window.innerWidth > 1200) {
    title.classList.add("A3");
    title.classList.remove("A2");
    title.classList.remove("A1");
  }
}
window.addEventListener("resize", handleTitleResize);

// using toggle
const h2 = document.querySelector("h2");

function handleTitleClick() {
  h2.classList.toggle("active");
}

h2.addEventListener("click", handleTitleClick);

// function handleTitleClick() {
//   const clickedClass = "active";
//   if (h2.classList.contains(clickedClass)) {
//     h2.classList.remove(clickedClass);
//   } else {
//     h2.classList.add(clickedClass);
//   }
// }

// h2.addEventListener("click", handleTitleClick);
