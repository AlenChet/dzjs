document.addEventListener("DOMContentLoaded", function () {
  const editor = document.getElementById("editor");
  const clearButton = createClearButton();

  editor.value = localStorage.getItem("editorText") || "";

  editor.addEventListener("input", function () {
    localStorage.setItem("editorText", editor.value);
  });

  document.body.appendChild(clearButton);

  clearButton.addEventListener("click", function () {
    editor.value = "";
    localStorage.removeItem("editorText");
  });

  function createClearButton() {
    const button = document.createElement("button");
    button.textContent = "Очистить содержимое";
    button.style.marginTop = "10px";
    return button;
  }
});
