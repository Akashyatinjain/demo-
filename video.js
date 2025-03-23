function toggleNavigation() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
  } else {
      navLinks.style.display = "flex";
  }
}
document.getElementById("leftMenuToggle").addEventListener("click", function() {
  var leftMenu = document.getElementById("leftsidebox");
  leftMenu.classList.toggle("active");
});

document.getElementById("menuToggle").addEventListener("click", function() {
  document.body.classList.toggle("menu-active");
});
