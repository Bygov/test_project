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



// ДЗ 6

const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const card = document.querySelector(".card");

const BASE_URL_TODOS = 'https://jsonplaceholder.typicode.com/todos/';

let currentId = 1; 
const TOTAL_TODOS = 200;

const renderCard = (borderColor, content) => {
  card.style.borderColor = borderColor;
  card.innerHTML = content;
};

const fetchTodos = async (id = currentId) => {
  try {
    const response = await fetch(`${BASE_URL_TODOS}${id}`);
    if (!response.ok) {
      throw new Error('Network error');
    }
    const { id: idCard, completed, title } = await response.json();
    const color = completed ? 'green' : 'red';
    renderCard(
      color,
      `
        <p>ID - ${idCard}</p>
        <p>${title}</p>
        <p style="color: ${color}">${completed ? 'Completed' : 'Not completed'}</p>
      `
    );
  } catch (error) {
    renderCard(
      'red',
      `<p style="color: red">${error.message}</p>`
    );
  }
};

const changeCard = (step) => {
  currentId += step;

  if (currentId > TOTAL_TODOS) {
    currentId = 1;
  } else if (currentId < 1) {
    currentId = TOTAL_TODOS;
  }

  fetchTodos(currentId);
};

btnNext.onclick = () => changeCard(1);
btnPrev.onclick = () => changeCard(-1);

fetchTodos(currentId);






const cityInput = document.querySelector('.cityName');
const searchBtn = document.querySelector('#search');
const cityName = document.querySelector('.city');
const tempName = document.querySelector('.temp');

const BASE_URL_WEATHER = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '83b3ebd39b878f8be8acd104821aa61a';

const fetchWeather = async () => {
  if (!cityInput.value.length) {
    cityName.textContent = 'Укажите город';
    tempName.textContent = '';
  } else {
    try {
      const response = await fetch(`${BASE_URL_WEATHER}?q=${cityInput.value}&units=metric&appid=${API_KEY}`);
      if (!response.ok) throw new Error('network error');
      const data = await response.json();
      const { name, main: { temp } } = data;
      cityName.textContent = name;
      tempName.textContent = `${temp} градусов`;
    } catch (error) {
      cityName.textContent = `${error.message}`;
      tempName.textContent = '';
    }
  }
};

searchBtn.addEventListener('click', fetchWeather);