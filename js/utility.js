function searchHome() {
    let key = (document.getElementById("search").value).toUpperCase();
    let herosHTMLCollection = document.getElementById("card-container");
    let cardsCollection = herosHTMLCollection.children;
    let cards = [...cardsCollection];
    cards.forEach((card,cardIndex) => {
        if(!(card.innerText).match(key)) {
            herosHTMLCollection.children[cardIndex].style.display = "none";
        } else {
            herosHTMLCollection.children[cardIndex].style.display = "";
        }
    })
}

function searchPopular() {
    let key = (document.getElementById("search").value).toUpperCase();
    let herosHTMLCollection = document.getElementById("card-container");
    for (let i = 0; i < herosHTMLCollection.children.length; i++) {
        if (!(herosHTMLCollection.children[i].children[2].innerHTML).match(key)) {
            herosHTMLCollection.children[i].style.display = "none"
        } else {
            herosHTMLCollection.children[i].style.display = ""
        }
    }
}

function sortByName() {
    let cardContainerItems = document.getElementById("card-container");
    let cardsCollection = cardContainerItems.children;
    let cards = [...cardsCollection];
    // console.log(cards);
    cards.sort((card1, card2) => {
        return card1.innerText > card2.innerText ? 1 : -1;
    })
    cards.forEach(card => {
        cardContainerItems.appendChild(card);
    })
}