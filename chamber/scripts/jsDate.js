function toggleMenu() {
    document.getElementsByClassName("navigation").classList.toggle("open");
}

const x = document.getElementsById("hamButton")
x.onclick = toggleMenu;