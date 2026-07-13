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

let left = 0;
let topPosition = 0;

let direction = "right";

const moveBlock = () => {

    if (direction === "right") {
        left++;

        if (left >= 449) {
            direction = "down";
        }
    }
    else if (direction === "down") {
        topPosition++;

        if (topPosition >= 449) {
            direction = "left";
        }
    }
    else if (direction === "left") {
        left--;

        if (left <= 0) {
            direction = "up";
        }
    }
    else if (direction === "up") {
        topPosition--;

        if (topPosition <= 0) {
            direction = "right";
        }
    }

    childBlock.style.left = left + "px";
    childBlock.style.top = topPosition + "px";

    requestAnimationFrame(moveBlock);
};

moveBlock();



const seconds = document.querySelector("#seconds");

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let number = 0;
let timer = null;

start.addEventListener("click", () => {
    if (timer !== null) {
        return;
    }
    timer = setInterval(() => {
        number++;
        seconds.textContent = number;
    }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});


reset.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    number = 0;
    seconds.textContent = number;
});



const first = true;
const second = false;

new Promise((resolve, reject) => {
    if (first) {
        resolve("Первый промис выполнен");
    } else {
        reject("Первый промис отклонен");
    }
})
.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        if (second) {
            resolve("Второй промис выполнен");
        } else {
            reject("Второй промис отклонен");
        }
    });
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});