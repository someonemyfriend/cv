

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



  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.center'
  });
//   $('.slider-nav').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     arrows: false,
//     focusOnSelect: true
//   });



  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });