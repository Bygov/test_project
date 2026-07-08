const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regex = /^[a-z\d._]+@gmail\.com$/i;

gmailButton.addEventListener("click", () => {
    if (regex.test(gmailInput.value)) {
        gmailResult.textContent = "Gmail правильный";
        gmailResult.style.color = "green";
    } else {
        gmailResult.textContent = "Gmail неправильный";
        gmailResult.style.color = "red";
    }
});


const childBlock = document.querySelector(".child_block");

let position = 0;

const moveBlock = () => {
    position += 1;

    childBlock.style.left = position + "px";

    if (position < 449) {
        requestAnimationFrame(moveBlock);
    }
};

moveBlock();