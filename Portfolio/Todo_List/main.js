const listInput = document.querySelector(".listInput");
const addBtn = document.querySelector(".addBtn");
const list = document.querySelector(".list");
const items = document.querySelectorAll("li");

listInput.focus();

listInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});

addBtn.addEventListener('mousedown', function () {
    addBtn.style.boxShadow = 'none';
    addBtn.style.transform = 'translateY(1px)';
});

window.addEventListener('mouseup', function () {
    addBtn.style.boxShadow = '-5px 5px 5px grey';
    addBtn.style.transform = 'translateY(0px)';
});

const charCount = document.querySelector('.charCount');

let num = 50;

charCount.innerText = `You have ${num} characters left`;

listInput.addEventListener('input', function () {
    num = 50 - listInput.value.length;
    charCount.innerText = `You have ${num} characters left`;
});

addBtn.addEventListener("click", function () {
    const redStar = document.createElement('img');
    const whiteStar = document.createElement('img');
    const newLi = document.createElement('li');
    const newLiBtns = document.createElement('div');
    const deleteBtn = document.createElement('img');

    redStar.classList.add('importantStyleRed');
    whiteStar.classList.add('importantStyleWhite');
    // deleteBtn.classList.add('importantStyleWhite');

    const red = document.querySelectorAll('.importantStyleRed');
    const white = document.querySelectorAll('.importantStyleWhite');

    if (listInput.value === "Easter egg") {
        red.forEach((item) => {
            item.src = 'img/egg.png';
        })
        white.forEach((item) => {
            item.src = 'img/white_egg.png';
        })
    } else {
        redStar.src = 'img/red_Star.png';
        whiteStar.src = 'img/white_Star.png'
    }

    newLi.innerText = `${listInput.value}`;
    newLi.classList.add('listItem');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.src = 'img/trash.png';

    if (listInput.value !== "Easter egg") {
        list.append(newLi);
    }

    newLi.prepend(redStar);
    newLi.prepend(whiteStar);
    newLi.append(newLiBtns);
    newLiBtns.append(deleteBtn);


    redStar.addEventListener('click', function () {
        whiteStar.style.display = 'block';
        redStar.style.display = 'none';
    });

    whiteStar.addEventListener('click', function () {
        whiteStar.style.display = 'none';
        redStar.style.display = 'block';
        redStar.style.position = 'relative';
    });


    listInput.value = "";
    listInput.focus();
    charCount.innerText = `You have 50 characters left`;

    deleteBtn.addEventListener("click", function () {
        newLi.remove();
    });
});