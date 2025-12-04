document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const fileInput = document.getElementById("fileInput");
    const preview = document.getElementById("preview");
    const previewImg = document.getElementById("preview-img");
    const changeBtn = document.getElementById("changeBtn");
    const removeBtn = document.getElementById("removeBtn");
    const uploadLabel = document.getElementById("upload-label");

    const nameInput = document.getElementById("myName");
    const emailInput = document.getElementById("email");
    const userInput = document.getElementById("user");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const userError = document.getElementById("userError");
    const avatarError = document.getElementById("avatarError");


    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImg.src = e.target.result;
                preview.style.display = "block";
                uploadLabel.style.display = "none";
                avatarError.style.display = "none"; 
            };
            reader.readAsDataURL(file);
        }
    });

    changeBtn.addEventListener("click", () => fileInput.click());

    removeBtn.addEventListener("click", () => {
        fileInput.value = "";
        previewImg.src = "";
        preview.style.display = "none";
        uploadLabel.style.display = "block";
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;

        [nameError, emailError, userError, avatarError].forEach(err => err.style.display = "none");
        [nameInput, emailInput, userInput].forEach(input => input.classList.remove("error"));

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Full name is required";
            nameError.style.display = "block";
            nameError.style.fontSize = "1rem"
            isValid = false;
        }

       else if (!emailInput.value.includes("@")) {
            emailError.textContent = "Please enter a valid email with @";
            emailError.style.display = "block";
            emailError.style.fontSize = "1rem"
            isValid = false;
        }

       else if (!userInput.value.startsWith("@")) {
            userError.textContent = "GitHub username must start with @";
            userError.style.display = "block";
            userError.style.fontSize = "1rem"
            isValid = false;
        }

       else if (!fileInput.files[0]) {
            avatarError.textContent = "Please upload your avatar";
            avatarError.style.display = "block";
            avatarError.style.fontSize = "1rem"
            isValid = false;
       }

        if (!isValid) return; 

        localStorage.setItem("confName", nameInput.value.trim());
        localStorage.setItem("confEmail", emailInput.value.trim());
        localStorage.setItem("confUser", userInput.value.trim());

        const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                localStorage.setItem("confAvatar", event.target.result);
                document.location = "./html/index2.html";
            };
            reader.readAsDataURL(file);
    });
});

