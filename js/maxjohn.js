// // garbage
// <div class="col-md-4">
//                <a href="#">
//                      <div class="portfolio-item">
//                     
//                         <img class="img-responsive" src="http://placehold.it/600x600" alt="">
//                     
//                         <div class="gallery-text">
//                              <h3>Recipe Title</h3>
//                         <p>by Max Schwartz</p>
//                     </div>
//                 </div></a>
// </div>


(function (){
    var recipe, link, portfolioitem, image, recipetitle, recipeauthor, textcontainer; 

    recipe = $("<div>", {class:"col-md-4"});
    portfolioitem = $("<div>", {class:"portfolio-item"});
    link = $("<a>", {href:"#"});
    image = $("<img>", {class:"img-responsive", src:"http://placehold.it/600x600", alt:""});
    recipetitle = $("<h3>");
    recipeauthor = $("<p>");
    textcontainer = $("<div>", {class:"gallery-text"});

    recipetitle.html("Recipe Title");
    recipeauthor.html("by Max Schwartz");

    textcontainer.append(recipetitle);
    textcontainer.append(recipeauthor); 

    // link.append(recipetitle);
    // link.append(recipeauthor);

    portfolioitem.append(image);
    portfolioitem.append(textcontainer);

    link.append(portfolioitem);

    recipe.append(link);

    $("#dynarow").append(recipe);


})();