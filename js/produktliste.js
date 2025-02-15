let knapper = document.querySelector(".knapper");

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => showList(data.recipes));

function showList(recipes) {
  console.log(recipes);
  const markup = recipes
    .map(
      (recipe) => `
         <div class="recipe-card">
        
             <div>   
            <img src="${recipe.image}" alt="${recipe.name}"></div>
             <div class="knap">
                <a href="opskrifter.html?id=${recipe.id}">${recipe.name}</a>
            </div>
            <div>
                    <p class="cuisine">${recipe.cuisine}</p>
                </div>
            </div>

      `
    )
    .join("");

  console.log(markup);
  knapper.innerHTML = markup;
}
