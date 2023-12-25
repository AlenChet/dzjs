document.addEventListener("DOMContentLoaded", function () {
    const progress = document.getElementById("progress");
    const form = document.getElementById("form");
    const fileInput = document.getElementById("file");
    const sendButton = document.getElementById("send");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
  
      xhr.upload.addEventListener("progress", function (event) {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          progress.value = percentComplete; 
        }
      });

      xhr.addEventListener("load", function () {
        console.log("Загрузка завершена");
      });
  
      xhr.addEventListener("error", function () {
        console.error("Ошибка при загрузке файла");
      });
  

      xhr.open("POST", form.action, true);
      xhr.send(formData);
    });
  
    fileInput.addEventListener("change", function () {
      const fileName = fileInput.files[0].name;
      const labelDesc = form.querySelector(".input__wrapper-desc");
      labelDesc.textContent = fileName; 
    });
  });
  