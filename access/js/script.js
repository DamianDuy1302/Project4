const navIconOpen = document.querySelector(".navigation__menuIconOpen");
const navIconClose = document.querySelector(".navigation__menuIconClose");
console.log(navIconOpen);
console.log(navIconClose);
navIconOpen.addEventListener("click", function(){
    const nav_menu = document.querySelector(".navigation__menu");
    const nav_content = document.querySelector(".navigation__content");
    nav_content.style.borderRadius = "45px";
    nav_content.style.padding = "30px 30px 10px 30px";
    nav_menu.style.display = "block";
    navIconOpen.classList.add("hidden");
    navIconClose.classList.remove("hidden");
})

function closeNav(){
    const nav_menu = document.querySelector(".navigation__menu");
    const nav_content = document.querySelector(".navigation__content");
    nav_content.style.padding = "30px 30px 30px 30px";
    nav_menu.style.display = "none";
    navIconOpen.classList.remove("hidden");
    navIconClose.classList.add("hidden");
}

navIconClose.addEventListener("click", closeNav())



const menu_sections = document.querySelectorAll(".navigation__section");
console.log(menu_sections)
menu_sections.forEach(function(item){
    item.addEventListener("click", function(){
        const current_section  = document.querySelector(".navigation__section--active")
        current_section.classList.remove("navigation__section--active");
        this.classList.add("navigation__section--active");
        closeNav();
    })
})


