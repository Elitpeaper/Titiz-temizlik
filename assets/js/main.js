
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


let constrain = 75;
let mouseOverContainer1 = document.getElementById("ex1");
let ex1Layer1 = document.getElementById("ex1-layer");

let mouseOverContainer2 = document.getElementById("ex2");
let ex1Layer2 = document.getElementById("ex2-layer");

let mouseOverContainer3 = document.getElementById("ex3");
let ex1Layer3 = document.getElementById("ex3-layer");

let mouseOverContainer4 = document.getElementById("ex4");
let ex1Layer4 = document.getElementById("ex4-layer");

let mouseOverContainer5 = document.getElementById("ex5");
let ex1Layer5 = document.getElementById("ex5-layer");

let mouseOverContainer6 = document.getElementById("ex6");
let ex1Layer6 = document.getElementById("ex6-layer");


2
function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(x - box.x - (box.height / 2)) / constrain;
  let calcY = (y - box.y - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcY +"deg) "
    + "   rotateY("+ calcX +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer1.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer1]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer1, position);
  });
};



function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(x - box.x - (box.height / 2)) / constrain;
  let calcY = (y - box.y - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcY +"deg) "
    + "   rotateY("+ calcX +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer2.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer2]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer2, position);
  });
};







function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(x - box.x - (box.height / 2)) / constrain;
  let calcY = (y - box.y - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcY +"deg) "
    + "   rotateY("+ calcX +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer3.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer3]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer3, position);
  });
};







function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(x - box.x - (box.height / 2)) / constrain;
  let calcY = (y - box.y - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcY +"deg) "
    + "   rotateY("+ calcX +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer4.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer4]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer4, position);
  });
};






function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(x - box.x - (box.height / 2)) / constrain;
  let calcY = (y - box.y - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcY +"deg) "
    + "   rotateY("+ calcX +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer5.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer5]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer5, position);
  });
};






function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(x - box.x - (box.height / 2)) / constrain;
  let calcY = (y - box.y - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcY +"deg) "
    + "   rotateY("+ calcX +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer6.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer6]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer6, position);
  });
};
