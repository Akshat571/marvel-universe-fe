fetch('../data/heros.json').
    then(response => response.json()).
    then(data => {
        let rawTemplate = document.getElementById('hero-card-template').innerHTML;
        let compiledTemplate = Handlebars.compile(rawTemplate);
        let generatedHTML = compiledTemplate(data);
        let cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = generatedHTML;
        console.log("html generated");
    });
let urlString = window.location.href;
let url = new URL(urlString);
var email = url.searchParams.get("email");
let userName = localStorage.getItem(email);
console.log("hello");
document.getElementById("user-name").innerHTML = userName;

