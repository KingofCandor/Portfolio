const card = document.querySelector('.card');
const button = document.querySelector('button');
const standardBox = document.querySelector('.standardBox');
const tokenBox = document.querySelector('.tokenBox');
const allBox = document.querySelector('.allBox');

let cardFilter = '';

function filterCard() {
    fetch(`https://api.scryfall.com/cards/random${cardFilter}`)
        .then(res => res.json())
        .then((data) => {
            try {
                card.src = data.image_uris.png;
            } catch {
                card.src = data.card_faces[0].image_uris.png;
            }
            card.addEventListener('click', () => {
                try {
                    if (card.src === data.card_faces[0].image_uris.png) {
                        card.src = data.card_faces[1].image_uris.png;
                    } else if (card.src === data.card_faces[1].image_uris.png) {
                        card.src = data.card_faces[0].image_uris.png;
                    }
                } catch (e) {

                }
            })
        })
        .catch((e) => {
            console.log("Error", e);
        })
}

function getCard() {
    if (standardBox.checked) {
        cardFilter = '?q=f%3Astandard';
        filterCard();
    } else if (tokenBox.checked) {
        cardFilter = '?q=t%3Atoken';
        filterCard();
    } else if (allBox.checked) {
        cardFilter = '?q=-t%3Atoken';
        filterCard();
    } else {
        cardFilter = '';
        filterCard();
    }
}

getCard();

button.addEventListener('click', () => {
    getCard();
})