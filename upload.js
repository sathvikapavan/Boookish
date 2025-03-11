function handleUpload() {
  const fileInput = document.getElementById("fileInput");
  const bookTitleInput = document.getElementById("bookTitle");
  const uploadStatus = document.getElementById("uploadStatus");

  const file = fileInput.files[0];
  const bookTitle = bookTitleInput.value.trim();

  if (!file || !bookTitle) {
    alert("Please select a file and enter a book title.");
    return;
  }

  setTimeout(() => {
    const book = {
      title: bookTitle,
      filePath: URL.createObjectURL(file),
    };

    const existingBooks = JSON.parse(localStorage.getItem("books")) || [];
    existingBooks.push(book);
    localStorage.setItem("books", JSON.stringify(existingBooks));

    uploadStatus.style.display = "block";
    uploadStatus.textContent = `"${bookTitle}" uploaded successfully!`;

    fileInput.value = "";
    bookTitleInput.value = "";
  }, 1000);
}
