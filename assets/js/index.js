var activateBurgerMenu = document.getElementById("burger_menu-active")
activateBurgerMenu.onclick = function () {
    var burgerMenuActivate = document.getElementById("burgerMenu");
    burgerMenuActivate.classList.toggle("burgermenu-disable");
}