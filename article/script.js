document.getElementById("leftMenuToggle").addEventListener("click", function() {
  var leftMenu = document.getElementById("leftsidebox");
  leftMenu.classList.toggle("active");
});

document.getElementById("menuToggle").addEventListener("click", function() {
  document.body.classList.toggle("menu-active");
});

// Set a flag in localStorage when the Login button is clicked
function setLoginFlag() {
  localStorage.setItem('loginPageVisited', 'true');
}

// Check if the login page has been visited
window.onload = function() {
  if (localStorage.getItem('loginPageVisited') === 'true') {
    // Remove the Login button
    document.getElementById('login').remove();
    // Clear the flag (optional, if you want to reset the state)
    localStorage.removeItem('loginPageVisited');
  }
};
