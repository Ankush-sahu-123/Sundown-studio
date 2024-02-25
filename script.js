const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function menub(){
  const h4Elements = document.querySelectorAll('.hover-effect');
  h4Elements.forEach(h4Element => {
  h4Element.addEventListener('mouseenter', function() {
    const anchorTag = this.querySelector('a');
    anchorTag.style.color = 'white';
  });
  h4Element.addEventListener('mouseleave', function() {
    const anchorTag = this.querySelector('a');
    anchorTag.style.color = '';
  });
});
}
menub()

function toggleDisplay() {
  var y = document.getElementById("cover")
  var x = document.getElementById("navham");
  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";

    } else {
      x.style.display = "none";
      y.style.display = "none";
  }
}



function feature(){
  var elemc = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-img")
elemc.addEventListener("mouseenter",function(){
  fixed.style.display="block";
})
elemc.addEventListener("mouseleave",function(){
  fixed.style.display="none";
})
var elems=document.querySelectorAll("#elem")
elems.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image")
    fixed.style.backgroundImage =`url(${image})`
  })
})
}
feature()

function page4(){
  document.addEventListener('DOMContentLoaded', function() {
    var h1Elements = document.querySelectorAll('.clickable');
    h1Elements.forEach(function(h1) {
      h1.addEventListener('click', function() {
        var imageUrl = this.getAttribute('data-image');
        var imageBox = document.getElementById('img-right');
        imageBox.style.backgroundImage = 'url(' + imageUrl + ')';
        imageBox.style.backgroundSize = 'cover';
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var h1Elements = document.querySelectorAll('.clickable');
    
    h1Elements.forEach(function(h1) {
      h1.addEventListener('click', function() {
        h1Elements.forEach(function(element) {
          element.classList.remove('clicked');
        });
        this.classList.add('clicked');
      });
    });
  });
  
}
page4()




function swiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
  });
}
swiperAnimation()