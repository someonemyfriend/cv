function normalImg(x){
    const takeThisBoxe = document.getElementById("containerImg");
    takeThisBoxe.style.zIndex = "-3";
}

function normalImgSecond(x){
    const takeThisBoxs = document.getElementById("template");
    takeThisBoxs.style.zIndex = "-3";
}

function outThird(x){
    const takeThisBoxs = document.getElementById("templateThird");
    takeThisBoxs.style.zIndex = "-3";
}

function outForth(x){
    const takeThisBoxs = document.getElementById("templateForth");
    takeThisBoxs.style.zIndex = "-3";
}

function changeImg(x){

    const takeThisBox = document.getElementById("containerImg");
    takeThisBox.classList.add("secondStyle");
    takeThisBox.style.zIndex = "-2";
}

function changeSecondImg(x){
    const takeBox = document.getElementById("template");
    takeBox.classList.add("mystyle");
    takeBox.style.zIndex = "-2";
}

function third(x){
    const takeBox = document.getElementById("templateThird");
    takeBox.classList.add("mystyle");
    takeBox.style.zIndex = "-2";
}

function forth(x){
    const takeBox = document.getElementById("templateForth");
    takeBox.classList.add("mystyle");
    takeBox.style.zIndex = "-2";
}



// Cursor animation
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX -10) + "px;" )
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// Hamburger 
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})

// Button for .pdf
function openPDF () {
    window.open('assets/img/cv.pdf');
}

// Slick 
$(document).ready(function(){
    $('.your-class').slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        //autoplay: true,
        //autoplaySpeed: 4000,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
  });


        