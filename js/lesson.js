const tabBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParents = document.querySelector(".tab_content_items");

const hideBlocks = () => {
    tabs.forEach((item) => {
        item.classList.remove("tab_content_item_active");
    });
    tabBlocks.forEach((item) => {
        item.classList.remove("tab_content_block_active");
    });
};

const showBlock = (index = 0) => {
    tabs[index].classList.add("tab_content_item_active");
    tabBlocks[index].classList.add("tab_content_block_active");
};

let currentIndex = 0;

hideBlocks();

showBlock(currentIndex);

setInterval(() => {
    currentIndex++;
    if (currentIndex >= 5) {
        currentIndex = 0;
    }
    hideBlocks();
    showBlock(currentIndex);
}, 3000);