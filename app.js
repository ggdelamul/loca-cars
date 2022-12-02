const iconeBurger = document.querySelector(".icone-burger");
console.log(iconeBurger);
const navBar = document.querySelector(".nav-bar");
console.log(navBar);
iconeBurger.addEventListener("click", function(){
    console.log("icone cliqué");
    navBar.classList.toggle("display-nav-bar");
})
