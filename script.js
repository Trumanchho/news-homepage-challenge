const navList = document.getElementById("nav-list"),
      menu = document.getElementById("menu"),
      menuClose = document.getElementById("menu-close"),
      overlay = document.getElementById("overlay");

showMenu();

function showMenu() {
    menu.classList.toggle("hidden");
    menuClose.classList.toggle("hidden");
    if (overlay.style.opacity === "0") {
        overlay.style.opacity = "50%";
        overlay.style.display = "block";
        navList.style.right = "0";
    } else {
        overlay.style.opacity = "0";
        overlay.style.display = "none";
        navList.style.right = "-68vw";
    }
}
