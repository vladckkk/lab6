let box = document.querySelector(".form .box");

let horLeft = document.querySelector(".regulation .horisontaly-left");
let horCenter = document.querySelector(".regulation .horisontaly-center");
let horRight = document.querySelector(".regulation .horisontaly-right");
let widthAdd = document.querySelector(".regulation .width-add");
let widthSub = document.querySelector(".regulation .width-substruct");
let heightAdd = document.querySelector(".regulation .height-add");
let heightSub = document.querySelector(".regulation .heigth-substruct")

horLeft.addEventListener('click', ()=> box.classList = ("box left"))

horRight.addEventListener('click', () =>box.classList = ("box right"))

horCenter.addEventListener('click', () => box.classList = ("box center"))

let myWidth = 150;
widthAdd.addEventListener("click", function(){
    box.style.width = `${myWidth + 10}px ` 
    myWidth = myWidth + 20;
})

widthSub.addEventListener("click", function(){
    box.style.width = `${myWidth - 10}px`;
    myWidth -= 20;
})

let myHeight = 80;

heightSub.addEventListener("click", function(){
    box.style.height = `${myHeight - 10}px`;
    myHeight -= 20;
})

heightAdd.addEventListener("click", function(){
    box.style.height = `${myHeight + 10}px`;
    myHeight += 20;
})