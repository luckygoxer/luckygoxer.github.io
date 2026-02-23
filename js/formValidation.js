document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");
    const btn = form.querySelector("button");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]+$/;

    const fields = form.querySelectorAll("input, textarea");

    // Live check (GEEN shake)
    fields.forEach(field => {
        field.addEventListener("input", () => validateField(field, false));
        field.addEventListener("blur", () => validateField(field, true)); // shake bij verlaten veld
    });

    form.addEventListener("submit", function(e) {

        let valid = true;

        fields.forEach(field => {
            if (!validateField(field, true)) valid = false;
        });

        if (!valid) {
            e.preventDefault();
            return;
        }

        btn.classList.add("loading");
        successMsg.textContent = "Message sent successfully!";
        successMsg.classList.add("show");
    });


    function validateField(field, doShake) {

        const error = field.parentElement.querySelector(".error");
        field.classList.remove("errorBorder", "valid");
        error.classList.remove("show");
        error.textContent = "";

        if (field.name === "name" && field.value.trim() === "") {
            return showError(field, "Name is required", doShake);
        }

        if (field.name === "email") {
            if (!emailPattern.test(field.value.trim())) {
                return showError(field, "Email address should have a @ and a .", doShake);
            }
        }

        if (field.name === "phone" && field.value.trim() !== "") {
            if (!phonePattern.test(field.value.trim())) {
                return showError(field, "Only numbers and optionally a +", doShake);
            }
        }

        if (field.name === "message" && field.value.trim() === "") {
            return showError(field, "Message is required", doShake);
        }

        field.classList.add("valid");
        return true;
    }


    function showError(field, msg, doShake) {
        field.classList.add("errorBorder");

        if (doShake) {
            field.classList.add("shake");
            setTimeout(() => field.classList.remove("shake"), 250);
        }

        const err = field.parentElement.querySelector(".error");
        err.textContent = msg;
        err.classList.add("show");

        return false;
    }

});