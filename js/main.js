fetch('../data/heros.json').
    then(response => response.json()).
    then(data => {
        let rawTemplate = document.getElementById('hero-card-template').innerHTML;
        let compiledTemplate = Handlebars.compile(rawTemplate);
        let generatedHTML = compiledTemplate(data);
        let cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = generatedHTML;
    });
let userName = localStorage.getItem("email");
document.getElementById("user-name").innerHTML = "Welcome "+userName;

