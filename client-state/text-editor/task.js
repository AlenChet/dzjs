document.addEventListener("DOMContentLoaded", function () {
    const editor = document.getElementById("editor");
    const clearButton = createClearButton();
    const savedText = localStorage.getItem("editorText");
    if (savedText) {
      editor.value = savedText;
    }
  
    editor.addEventListener("input", function () {
      const text = editor.value;
      localStorage.setItem("editorText", text);
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
  