//   bunu yazmayınca sayfayı yeniledimde tepeden başlamıyor
//   nerde yenilediysem orda kalıyor

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

/*  window.addEventListener bir JavaScript özelliğidir
    ve belirli olayları dinlemek için kullanılır.
    Bu yöntem, tarayıcıda meydana gelen olayları yakalamak 
    ve bu olaylara tepki vermek için kullanılır.
    window nesnesi, web tarayıcının penceresini temsil eder 
    ve bir dizi olayı dinlemek için kullanılabilir. */

/*  eventType: Dinlemek istediğiniz olay türünü belirtir. 
    Örneğin, click, keydown, scroll, resize, vb. gibi olay türleri olabilir.

    eventHandler: Olayın gerçekleştiğinde çalıştırılacak JavaScript işlevini (fonksiyonu) temsil eder. */

const navbar = document.getElementById("myNavbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    navbar.classList.add("golge"); // gölge classını ekledim
  } else {
    navbar.classList.remove("golge"); // gölge classını kaldırdım
  }
});

const path = window.location.pathname;
let indexLink = document.querySelector(".index-link");
let iletisimLink = document.querySelector(".iletisim-link");
let galeriLink = document.querySelector(".galeri-link");
let hakkimizdaLink = document.querySelector(".hakkimizda-link");



if (path.includes("index.html")) {
  indexLink.classList.add("active");
} else if (path.includes("iletisim.html")) {
  iletisimLink.classList.add("active");
}else if (path.includes("galeri.html")) {
  galeriLink.classList.add("active");
} else if(path.includes("hakkimizda.html")) {
  hakkimizdaLink.classList.add("active");
}

let currentIndex = 0;
const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;



let next = document.querySelector(".next-btn")
let prev = document.querySelector(".prev-btn")
let slide = document.querySelector(".resim");

if(slide){
  next.onclick = function(){
    if(slide.getAttribute("src")=="img/slider-1.jpg"){
      slide.setAttribute("src","img/slider-2.jpg");
    } else if(slide.getAttribute("src")=="img/slider-2.jpg"){
      slide.setAttribute("src","img/slider-3.jpg");
    } else {
      slide.setAttribute("src","img/slider-1.jpg");
    }
    
  }
  prev.onclick = function(){
    if(slide.getAttribute("src")=="img/slider-1.jpg"){
      slide.setAttribute("src","img/slider-3.jpg");
    } else if(slide.getAttribute("src")=="img/slider-2.jpg"){
      slide.setAttribute("src","img/slider-1.jpg");
    } else {
      slide.setAttribute("src","img/slider-2.jpg");
    }
    
  }
}



let menuIcon = document.getElementById("menu-icon");
let navResponsive = document.getElementById("nav-responsive");


  menuIcon.addEventListener("click", ()=> {
    
  
    if(navResponsive.style.display == "block"){
      navResponsive.style.display = "none"
    } else {
      navResponsive.style.display = "block"
    }
    
  });


