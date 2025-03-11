function loadBooks() {
  const bookList = document.getElementById("bookList");
  const books = JSON.parse(localStorage.getItem("books")) || [];

  // Clear the existing list
  bookList.innerHTML = "";

  // Add each book to the list
  books.forEach((book, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <a href="${book.filePath}" target="_blank">${book.title}</a>
      <button onclick="deleteBook(${index})">Delete</button>
    `;
    bookList.appendChild(listItem);
  });
}

function deleteBook(index) {
  const books = JSON.parse(localStorage.getItem("books")) || [];

  // Remove the book at the specified index
  books.splice(index, 1);

  // Save the updated list back to localStorage
  localStorage.setItem("books", JSON.stringify(books));

  // Reload the books
  loadBooks();
}

// Load books when the page loads
window.onload = loadBooks;
