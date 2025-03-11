function markAsRead(button) {
  const listItem = button.parentElement;
  listItem.style.opacity = "0.6";
  button.disabled = true;
  button.textContent = "Read";
}

function handleLogout() {
  alert("Logged out successfully!");
  window.location.href = "login.html";
}
