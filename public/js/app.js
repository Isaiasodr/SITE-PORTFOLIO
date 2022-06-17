const hamburguer = document.querySelector('.header .nav-bar .nav-list .hamburguer');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburguer.addEventListener('click',()=>{
    hamburguer.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scrollPosition=window.scrollY;
    if(scrollPosition>250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
})