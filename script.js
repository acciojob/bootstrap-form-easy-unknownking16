//your code here
 const form = document.getElementById("internship-form");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
        } else {
            alert("Form submitted successfully!");
            form.reset();
            form.classList.remove("was-validated");
        }

    });