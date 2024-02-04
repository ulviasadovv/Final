let control1 = false;
let control2 = false;
let control3 = false;
let control4 = false;
let control5 = false;
let control6 = false;
let control7 = false;

window.addEventListener("scroll", function(){
  console.log(scrollY)
  const myImg1 = document.querySelector("#img1");
  const myImg2 = document.querySelector("#img2");
  const myImg3 = document.querySelector("#img3");
  const myImg4 = document.querySelector("#img4");
  const myImg5 = document.querySelector("#img5");
  const myImg6 = document.querySelector("#img6");
  const myImg7 = document.querySelector("#img7");
  const myImg8 = document.querySelector("#img8");
  const myImg9 = document.querySelector("#img9");


if(window.scrollY > 75 && !control1){
  control1 = true;
  myImg1.style.animationPlayState = "running";
  myImg2.style.animationPlayState = "running";
  myImg3.style.animationPlayState = "running";
}

if(this.window.scrollY > 345 && !control2){
    control2 = true;
    myImg4.style.animationPlayState = "running";
}

if(this.window.scrollY > 475 && !control3){
    control3 = true;
    myImg5.style.animationPlayState = "running";
}

if(this.window.scrollY > 420 && !control4){
    control4 = true;
    myImg6.style.animationPlayState = "running";
}

if(this.window.scrollY > 695 && !control5){
    control5 = true;
    myImg7.style.animationPlayState = "running";
}

if(this.window.scrollY > 785 && !control6){
    control6 = true;
    myImg8.style.animationPlayState = "running";
}

if(this.window.scrollY > 855 && !control7){
    control7 = true;
    myImg9.style.animationPlayState = "running";
}

})