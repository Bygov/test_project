const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regax = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;``

gmailButton.addEventListener("click", () => {

    if (regex.test(gmailInput.value)) {
        gmailResult.textContent = "Gmail правильный";
        gmailResult.style.color = "green";
    } else {
        gmailResult.textContent = "Gmail неправильный";
        gmailResult.style.color = "red";
    }
});