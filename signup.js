function handleSignup() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name && phone && email && password) {
    const user = { name, phone, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Redirecting to Login Page...");
    window.location.href = "login.html";
  } else {
    alert("Please fill in all fields.");
  }
}
