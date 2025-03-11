function handleLogout() {
  localStorage.removeItem("isLoggedIn");
  alert("Logged out successfully!");
  window.location.href = "login.html";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// On page load
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}
