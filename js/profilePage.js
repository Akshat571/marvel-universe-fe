const url = new URL(window.location.href);
const heroName = url.searchParams.get("name");
fetch('../data/heros.json').
    then(response => response.json()).
    then(data => {
        let heroProfile = data.heros.find((hero) => hero.name === heroName);
        
        Handlebars.registerHelper("list", function(heroProfileFeatures, options) {
            var ret = "<ul>";
            for (let i = 0; i < heroProfileFeatures.length; i++) {
              ret = ret + "<li>" + heroProfileFeatures[i] + "</li>";
            }
            return ret + "</ul>";
          });
        let rawTemplate = document.getElementById('handlebars-profile-template').innerHTML;
        let compiledTemplate = Handlebars.compile(rawTemplate);
        //console.log(compiledTemplate);
        let generatedHTML = compiledTemplate(heroProfile);
        let body = document.getElementsByTagName('body');
        console.log(body);
        body[0].innerHTML= generatedHTML;
 })

