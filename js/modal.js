var modal = document.getElementById("modal")
var modalContent = document.getElementsByClassName("modal-content")[0]
var btn = document.getElementsByClassName("slider-block__button")[0]
var span = document.getElementsByClassName("modal-close")[0]
var submit = document.getElementsByClassName("form-button")[0]


btn.onclick = function() {
  modal.style.display = "block";
}

submit.onclick = function() {
  modal.style.display = "none";
}

document.onclick = function(event) {
  if(event.target == modal ) modal.style.display = "none";
}