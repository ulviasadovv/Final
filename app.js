let countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 14);


let x = setInterval(function () {
  
  let now = new Date().getTime();

  
  let distance = countDownDate - now;

  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("Countdown").innerHTML =
    "<div class='time'><h6>" +
    days +
    "</h6><span>days</span></div>" +
    "<div class='time'><h6>" +
    hours +
    "</h6><span>hours</span></div>" +
    "<div class='time'><h6>" +
    minutes +
    "</h6><span>minutes</span></div>" +
    "<div class='time'><h6>" +
    seconds +
    "</h6><span>seconds</span></div>";

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Countdown").innerHTML = "EXPIRED";
  }
}, 1000);



let firstanim = false;
let secondanim = false;

window.addEventListener("scroll", function() {
    const item1 = document.querySelectorAll(".items")[0];
    const item2 = document.querySelectorAll(".items")[1];
    const item3 = document.querySelectorAll(".items")[2];
    const item4 = document.querySelectorAll(".items")[3];
    const item5 = document.querySelectorAll(".second-items")[0];
    const item6 = document.querySelectorAll(".second-items")[1];
    const item7 = document.querySelectorAll(".second-items")[2];
    const item8 = document.querySelectorAll(".second-items")[3];

    if (window.scrollY > 3184 && !firstanim) {
        anim = true;
        item1.style.animationPlayState = "running";
        item2.style.animationPlayState = "running";
        item3.style.animationPlayState = "running";
        item4.style.animationPlayState = "running";
    }

    if(this.window.scrollY > 3691 && !secondanim){
      secondanim = true;
      item5.style.animationPlayState = "running";
      item6.style.animationPlayState = "running";
      item7.style.animationPlayState = "running";
      item8.style.animationPlayState = "running";
    }
});


const myImage = document.querySelector(".myImage");
const myFav = document.querySelector(".fav");

myImage.addEventListener("mouseenter", ()=>{
  myFav.style.animationPlayState = "running"
})

myImage.addEventListener("mouseout", ()=>{
  
})


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('#Carousel-slider');
  let currentIndex = 0;

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slider.children.length;
      updateSlider();
  }

  function updateSlider() {
      const translateValue = -currentIndex * 150 + "%";
      slider.style.transform = `translateX(${translateValue})`;
      
  }

  setInterval(nextSlide, 3000);

});





let favIcon;
let value;
let myArr = null;



let myProducts = [
    {
        id: 1,
        name: "Norwegg Chair",
        price: 40
    },
    {
        id: 2,
        name: "Book",
        price: 40
    },
    {
      id: 3,
      name: "Another Chair",
      price: 40
  },
  {
      id: 4,
      name: "Your new chair",
      price: 40
  },
  {
    id: 5,
    name: "Clock",
    price: 40
},
{
    id: 6,
    name: "Clock",
    price: 40
},
{
  id: 7,
  name: "Accessory box",
  price: 40
},
{
  id: 8,
  name: "Beige",
  price: 40
}
];



// window.onload  = myFunc();

// function myFunc(){
//   myArr = JSON.parse(localStorage.getItem("elem")) || [];
//   if(myArr == []){

//   }else{
//     favIcon.remove("fa-regular")
//     favIcon.add("fa-solid")
//   }
// }



document.addEventListener("click", (e) => {
    value = e.target.parentElement.parentElement.id;
    favIcon = e.target.classList;
    checkMatch();
});

const checkMatch = () => {
    myProducts.forEach(obj => {
        let myID = obj.id;

        if (value == myID) {
            myArr = JSON.parse(localStorage.getItem("elem")) || [];

            const existingindex = myArr.findIndex(storedObj => storedObj.id === myID);
            favIcon.remove("fa-regular")
            favIcon.add("fa-solid")

            if (existingindex !== -1) {
                myArr.splice(existingindex, 1)
                favIcon.remove("fa-solid")
                favIcon.add("fa-regular")
            }else{
                myArr.push(obj)
            }

            localStorage.setItem("elem", JSON.stringify(myArr))
        }
    });
};

