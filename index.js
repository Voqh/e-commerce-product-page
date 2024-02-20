window.onload = function (){
function menu(){
  const menuBtn =document.getElementById("hamburger-menu");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const imgSec = document.getElementById("img-sec");
  menuBtn.innerHTML = `<img src="./images/icon-menu.svg" alt="hamburger menu">`;
  imgSec.innerHTML = ` <button id="left-arrow"><img src="./images/icon-previous.svg" alt=""></button>
  <button id="right-arrow"><img src="./images/icon-next.svg" alt=""></button>`
}
if(window.innerWidth <= 375){
  menu();
}
}