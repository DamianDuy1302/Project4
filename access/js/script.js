const nav_menu = document.querySelector(".navigation__menu2");
const nav_content = document.querySelector(".navigation__content");

const button = document.querySelector(".navigation__button")
button.addEventListener("click", function(){
    nav_menu.classList.toggle("showup");
})

const menu_sections = document.querySelectorAll(".navigation__section2");
menu_sections.forEach(function(item){
    item.addEventListener("click", function(){
        const current_section  = document.querySelector(".navigation__section2--active")
        current_section.classList.remove("navigation__section2--active");
        this.classList.add("navigation__section2--active");
        nav_menu.style.height = "0px";
        nav_menu.classList.remove("showup");
    })
})


var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {  
        767.98: {
          slidesPerView: 3,
          spaceBetween: 40,},
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });