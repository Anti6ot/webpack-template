console.log("Как интересно!");
const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

// добавляем заголовок в DOM
const root = document.querySelector('#root');
root.append(heading);