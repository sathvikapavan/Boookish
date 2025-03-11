function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    alert("Login successful! Redirecting to Home Page...");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "home.html";
  } else {
    alert("Please enter both email and password.");
  }
}
