function search() {
    let key = (document.getElementById("search").value).toUpperCase();
    let herosHTMLCollection = document.getElementById("card-container");
    console.log(herosHTMLCollection.childNodes)
    for (let i = 1; i < herosHTMLCollection.childNodes.length; i = i + 2) {
        if (!(herosHTMLCollection.childNodes[i].childNodes[3].innerHTML).match(key)) {
            herosHTMLCollection.childNodes[i].style.display = "none"
        } else {
            herosHTMLCollection.childNodes[i].style.display = ""
        }
    }
}

function sortByName() {
    let cardContainerIntems = document.getElementById("card-container");
    let cardsCollection = cardContainerIntems.children;
    let cards = [...cardsCollection];
    cards.sort((card1, card2) => {
        return card1.outerText > card2.outerText ? 1 : -1;
    })
    cards.forEach(card => {
        cardContainerIntems.appendChild(card);
    })
}