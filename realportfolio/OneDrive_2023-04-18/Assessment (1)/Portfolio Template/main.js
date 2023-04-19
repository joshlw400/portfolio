 
const containerEl = document.querySelector(".container");
//array to show text
const effect_text = ["Graphic Designer", "Web Developer", "3D Modeller"];
let effectIndex = 0;// starting point of readomh array
let characterIndex = 0;//reading charater
updateText();
//Function to keep updating the text
function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1> ${effect_text[effectIndex].slice(0, 1) === "" ? "" : ""}
${effect_text[effectIndex].slice(0, characterIndex)}</h1>`;
  //Keep reading the array unless characterindex becomes 0;
  if (characterIndex === effect_text[effectIndex].length) {
    effectIndex++;
    characterIndex = 0;
  }
  //If it reads all start reading from beginning
  if (effectIndex === effect_text.length) {
    effectIndex = 0;
  }
  setTimeout(updateText, 400);
}

 
 
 



//dark mode  and text change


const toggle = document.getElementById('darkmode');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
  this.classList.toggle('light');
  if (this.classList.toggle('dark')) {
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '2s';
    body.style.fontStyle = 'italic';
    body.style.transition = '0.5s';

  } else {
    body.style.background = 'white';
    body.style.color = '#3da9fc';
    body.style.transition = '2s';
    body.style.fontStyle = 'normal';
    body.style.transition = '0.5s';

  }
});



//navbar background change



 
const home2 = document.getElementById("home2");

home2.addEventListener("mouseover", () => {
    home2.style.background = 'black';
    home2.style.backgroundColor ='blue';
   
  
  });

  home2.addEventListener('mouseout', function handleMouseOut() {
    home2.style.backgroundColor = 'white';
 
  
  });
   
 
 


const contact2 = document.getElementById('contact2');

// 👇️ Change text color on mouseover
contact2.addEventListener('mouseover', function handleMouseOver() {
  contact2.style.backgroundColor = 'blue';
   

}

);

// 👇️ Change text color back on mouseout
contact2.addEventListener('mouseout', function handleMouseOut() {
  contact2.style.backgroundColor = 'white';
});



const services2 = document.getElementById('services2');

// 👇️ Change text color on mouseover
services2.addEventListener('mouseover', function handleMouseOver() {
  services2.style.backgroundColor = 'blue';
});

// 👇️ Change text color back on mouseout
services2.addEventListener('mouseout', function handleMouseOut() {
  services2.style.backgroundColor = 'white';
});

const portfolio1 = document.getElementById('portfolio1');

// 👇️ Change text color on mouseover
portfolio1.addEventListener('mouseover', function handleMouseOver() {
  portfolio1.style.backgroundColor = 'blue';
});

// 👇️ Change text color back on mouseout
portfolio1.addEventListener('mouseout', function handleMouseOut() {
  portfolio1.style.backgroundColor = 'white';
});

// 👇️ Change text color on mouseover
about2.addEventListener('mouseover', function handleMouseOver() {
  about2.style.backgroundColor = 'blue';


});


about2.addEventListener('mouseout', function handleMouseOut() {
  about2.style.backgroundColor = 'white';
});




//tilt effect jquery

$(document).ready(function () {

  $("#tilt").tilt({

    maxtilt: 60,

    perspective: 1000,

    maxglare: 4,

    scale: 1.2,

    speed: 300,

    
  })

});

 
//image gallery with modal popup (larger image)

function openModal() {
  document.getElementById("myModal").style.display = "flex";
}
            
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
            
var slideIndex = 1;
showSlides(slideIndex);
            
function plusSlides(n) {
  showSlides(slideIndex += n);
}
            
function currentSlide(n) {
  showSlides(slideIndex = n);
}
            
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

























































































































































































































































































































































































































































;



















































































































































