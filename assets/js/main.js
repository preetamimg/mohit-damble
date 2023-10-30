{/* <script> */}
var swiper = new Swiper(".liveWins", {
  breakpoints: {
    360: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 11,
      spaceBetween: 10,
    },
     1300: {
      slidesPerView: 11,
      spaceBetween: 10,
    },
  },
});
{/* </script> */}
var swiper = new Swiper(".cardslider", {
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

var swiper = new Swiper(".playslider2", {
  breakpoints: {
    360: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    575:{
      slidesPerView:4,
      spaceBetween:5,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

let sidebarToggle = document.querySelector('#sidebarToggle')

sidebarToggle.addEventListener('click', ()=> {
  document.body.classList.toggle('sidebarOpen')
})