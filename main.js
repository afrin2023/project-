const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY > 100);
})
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}