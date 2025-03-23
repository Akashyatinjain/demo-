document.getElementById("leftMenuToggle").addEventListener("click", function() {
  var leftMenu = document.getElementById("leftsidebox");
  leftMenu.classList.toggle("active");
});

document.getElementById("menuToggle").addEventListener("click", function() {
  document.body.classList.toggle("menu-active");
});
