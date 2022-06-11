const container = document.querySelector('.container');

const imgArray = [
    { imgSrc: 'img/turtle.jpg', name: 'turtle' },
    { imgSrc: 'img/dolphin.jpg', name: 'dolphin' },
    { imgSrc: 'img/fox.jpg', name: 'fox' },
    { imgSrc: 'img/penguin.jpg', name: 'penguin' },
    { imgSrc: 'img/bear.jpg', name: 'bear' },
    { imgSrc: 'img/butterfly.jpg', name: 'butterfly' },
    { imgSrc: 'img/hamster.jpg', name: 'hamster' },
    { imgSrc: 'img/frog.jpg', name: 'frog' },
    { imgSrc: 'img/turtle.jpg', name: 'turtle' },
    { imgSrc: 'img/dolphin.jpg', name: 'dolphin' },
    { imgSrc: 'img/fox.jpg', name: 'fox' },
    { imgSrc: 'img/penguin.jpg', name: 'penguin' },
    { imgSrc: 'img/bear.jpg', name: 'bear' },
    { imgSrc: 'img/butterfly.jpg', name: 'butterfly' },
    { imgSrc: 'img/hamster.jpg', name: 'hamster' },
    { imgSrc: 'img/frog.jpg', name: 'frog' }
]

const randomize = () => {
    imgArray.sort(() => Math.random() - 0.5);
    return imgArray;
}

function createCards() {
    const imgArray = randomize();
    imgArray.forEach((item) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');

        container.append(card);
        card.append(front);
        card.append(back);

        card.classList.add('card');
        front.classList.add('front');
        back.classList.add('back');

        front.src = item.imgSrc;

        card.setAttribute("name", item.name);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            card.style.pointerEvents = 'none';
            checkCards(e);
        })
    })
}

createCards();

let attemptsNum = 0;
const attempts = document.querySelector('.attempts');
attempts.innerText = `Attempts: ${attemptsNum}`;

highScoreNum = localStorage.getItem('value');
const highScore = document.querySelector(".highScore");

if (highScoreNum === null) {
    highScore.innerText = "High Score: N/A";
} else {
    highScore.innerText = `High Score: ${highScoreNum}`;
}

const trackers = document.querySelector('.trackers');

function checkCards(e) {
    e.currentTarget.classList.add('flipped');

    const flippedCards = document.querySelectorAll('.flipped');

    if (flippedCards.length === 2) {
        attemptsNum++;
        attempts.innerText = `Attempts: ${attemptsNum}`;

        if (flippedCards[0].getAttribute('name') !== flippedCards[1].getAttribute('name')) {
            flippedCards.forEach((item) => {
                setTimeout(() => {
                    item.classList.toggle('toggleCard');
                }, 1000)
                item.classList.remove('flipped');
                setTimeout(() => {
                    item.style.pointerEvents = 'auto';
                }, 2000)
            })
        } else {
            flippedCards.forEach((item) => {
                item.classList.remove('flipped');
            })
            const done = document.querySelectorAll(".toggleCard");
            if (done.length === 16) {
                const win = document.querySelector(".win");
                if (highScore.innerText === "High Score: N/A") {
                    highScore.innerText = `High Score: ${attemptsNum}`;
                    localStorage.setItem('value', attemptsNum);

                    win.style.display = "block";
                    attempts.style.marginRight = "0rem";
                    highScore.style.marginLeft = "0rem";
                    trackers.style.marginBottom = "2rem";
                } else if (attemptsNum < highScoreNum) {
                    highScore.innerText = `High Score: ${attemptsNum}`;
                    localStorage.setItem('value', attemptsNum);

                    win.innerText = "NEW HIGH SCORE!";
                    win.style.display = "block";
                    attempts.style.marginRight = "0rem";
                    highScore.style.marginLeft = "0rem";
                    trackers.style.marginBottom = "2rem";
                } else {
                    win.style.display = "block";
                    attempts.style.marginRight = "0rem";
                    highScore.style.marginLeft = "0rem";
                    trackers.style.marginBottom = "2rem";
                }
            }
        }
    }
}