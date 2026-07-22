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



// Дз 3

function delay(value, ms, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            shouldFail
                ? reject(new Error(`Ошибка при обработке: ${value}`))
                : resolve(value);
        }, ms);
    });
}

// 1

delay(1, 500)
    .then((result) => {
        console.log("Первый:", result);
        return delay(result + 1, 500, true);
    })
    .then((result) => {
        console.log("Второй:", result);
        return delay(result + 1, 500);
    })
    .then((result) => {
        console.log("Третий:", result);
    })
    .catch((error) => {
        console.log("Поймал ошибку:", error.message);
    })
    .finally(() => {
        console.log("Задание 1 завершено");
    });

// 2

async function task2() {
    console.log("Задание 2");

    try {
        let first = await delay(1, 500);
        console.log("Первый:", first);

        let second = await delay(first + 1, 500, true);
        console.log("Второй:", second);

        let third = await delay(second + 1, 500);
        console.log("Третий:", third);
    } catch (error) {
        console.log("Поймали ошибку:", error.message);
    } finally {
        console.log("Первая часть задания завершена");
    }

    const values = [10, 20, 30, 40];
    const result = [];

    for (let value of values) {
        try {
            const data = await delay(value, 500, Math.random() > 0.7);

            result.push({
                value: data,
                error: null
            });
        } catch (error) {
            result.push({
                value: value,
                error: error.message
            });
        }
    }

    console.log("Результат обработки массива:");
    console.log(result);
}

// 3

async function task3() {
    console.log("задание 3");

    try {
        const result = await Promise.all([
            delay("A", 1000),
            delay("B", 500),
            delay("C", 1500, true),
            delay("D", 700)
        ]);

        console.log(result);
    } catch (error) {
        console.log("Promise.all ошибка:", error.message);
    }

    console.log("Promise.allSettled");

    const settled = await Promise.allSettled([
        delay("A", 1000),
        delay("B", 500),
        delay("C", 1500, true),
        delay("D", 700)
    ]);

    const succeeded = settled.filter(item => item.status === "fulfilled");
    const failed = settled.filter(item => item.status === "rejected");

    console.log("Успешные:");
    console.log(succeeded);

    console.log("Ошибки:");
    console.log(failed);

    console.log("Promise.race");

    try {
        const race = await Promise.race([
            delay("Полезные данные", 2000),
            delay("Таймаут", 500, true)
        ]);

        console.log(race);
    } catch (error) {
        console.log("Promise.race ошибка:", error.message);
    }
}

async function main() {
    await task2();
    await task3();
}

main();


// Дз 4

// 3

const info = async () => {
    const response = await fetch('../data/bio.json');
    const data = await response.json();
    console.log(data);
}

info();