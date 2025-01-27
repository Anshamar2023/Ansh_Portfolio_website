document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.querySelector("#Submit");

    if (submitButton) {
        submitButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission if it's a form button
            alert("Thank you for your message! I'll get back to you soon.");
        });
    } else {
        console.error("Submit button not found");
    }
});