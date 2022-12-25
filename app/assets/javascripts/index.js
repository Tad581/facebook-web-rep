// For navbar menu
let navDiv;
let navMenu;

setTimeout(() => {
  navDiv = document.getElementById("nav-dialog");
  navMenu = document.getElementById("dialog-menu");
  navDiv.onclick = () => {
    if (navMenu.style.display !== "none") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "block";
    }
  };
}, 1);

// For input
