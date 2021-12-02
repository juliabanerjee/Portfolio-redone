// getting burger menu working for mobile
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const burgerMenuContainer = document.querySelector("burgermenu__container")
const closeMenuIcon = document.querySelector("#close")
const menuIcon = document.querySelector("#menu-icon")


function toggleMenu() {
  if(menu.classList.contains("showMenu")){
    menu.classList.remove("showMenu");
    closeMenuIcon.style.display = "none";
    menuIcon.style.display = "block";
  }
  else{
    menu.classList.add("showMenu");
    closeMenuIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
menuIcon.addEventListener("click", toggleMenu)
closeMenuIcon.addEventListener("click", toggleMenu)

menuItems.forEach(
  function(menuItem){
    menuItem.addEventListener("click", toggleMenu);
  }
);