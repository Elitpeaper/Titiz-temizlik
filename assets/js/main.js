
$('.button-box').click(function () {
    $(this).find('.button-box').toggleClass("active");
    $(this).find('span').toggleClass("active");
    $(this).toggleClass('active');
    $('.navigation-menu').toggleClass('active');
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    lool:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper2= new Swiper(".BrandSwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    loop: 'true',
    thumbs: {
      swiper: swiper,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 2
      },
      600: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 6
      }
    },
  });


 
    

  var swiper3 = new Swiper(".Swiper3", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 2
      },
      600: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 6
      }
    },
  });

  var swiper3 = new Swiper(".ProductSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 2
      },
      600: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 3
      }
    },
  });