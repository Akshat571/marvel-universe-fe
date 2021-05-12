function search() {
    let key = (document.getElementById("search").value).toUpperCase();
    let herosHTMLCollection = document.getElementById("card-container");
    console.log(herosHTMLCollection.childNodes)
    for (let i = 1; i < herosHTMLCollection.childNodes.length; i = i + 2) {
        if (!(herosHTMLCollection.childNodes[i].childNodes[3].innerHTML).match(key)) {
            console.log((herosHTMLCollection.childNodes[i].childNodes[3].innerHTML));
            herosHTMLCollection.childNodes[i].style.display = "none"
        } else {
            herosHTMLCollection.childNodes[i].style.display = ""
        }
    }
}