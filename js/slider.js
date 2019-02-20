var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex +=n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-block__mySlides");
  var dots = document.getElementsByClassName("slider-block__dots");
  var img = document.getElementsByClassName("slider-block__image")
  var border = document.getElementsByClassName("slider-block__icon-border")

  if(n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for ( i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    img[i].style.display = "none";
    border[i].style.display = "none";

  }

  for ( i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  img[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.display = "block";
  border[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].className += " active";
}
