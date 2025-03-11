function handleAddAnnotation() {
  // Get the selected text
  const selectedText = window.getSelection().toString().trim();

  if (selectedText) {
    // Create a new annotation item
    const annotationItem = document.createElement("li");
    annotationItem.innerHTML = `
      <strong>"${selectedText}"</strong>: 
      <span class="mention">@user1</span> This is a comment.
    `;

    // Add the annotation to the list
    const annotationsList = document.getElementById("annotationsList");
    annotationsList.appendChild(annotationItem);

    // Clear the selection
    window.getSelection().removeAllRanges();

    // Optional: Show a success message
    alert("Annotation added successfully!");
  } else {
    // If no text is selected, show an error message
    alert("Please select some text to annotate!");
  }
}
