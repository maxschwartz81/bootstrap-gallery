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
    
    var tileMaker, maxColumnCount, rowCount, rowMaker, recipeCount, rowIndex;
    
    recipeCount = 30;
    maxColumnCount = 3;
    rowCount = recipeCount/maxColumnCount;

    tileMaker = function (row) {

        var recipe, link, portfolioitem, image, recipetitle, recipeauthor, textcontainer; 

        recipe = $("<div>", {class:"col-md-4"});
        portfolioitem = $("<div>", {class:"portfolio-item"});
        link = $("<a>", {href:"#"});
        image = $("<img>", {class:"img-responsive", src:"http://placekitten.com/600/600", alt:""});
        recipetitle = $("<h3>");
        recipeauthor = $("<p>");
        textcontainer = $("<div>", {class:"gallery-text"});

        recipetitle.html("Recipe Title");
        recipeauthor.html("by Max Schwartz");

        textcontainer.append(recipetitle);
        textcontainer.append(recipeauthor); 

        portfolioitem.append(image);
        portfolioitem.append(textcontainer);

        link.append(portfolioitem);

        recipe.append(link);

        row.append(recipe);

    };

    rowMaker = function() {
        var row;
        var columnIndex;

        row = $("<div>", {class:"row"});

        for(columnIndex = 0; columnIndex < maxColumnCount; columnIndex++){
            tileMaker(row);
        };

        $("#recipeGallery").append(row);

    };

    for(rowIndex = 0; rowIndex < rowCount; rowIndex++){
        rowMaker();
    };



 


})();