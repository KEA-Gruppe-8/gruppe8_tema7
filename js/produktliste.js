let knapper = document.querySelector(".knapper");

const selectElement = document.querySelector("#selectElement");

function showProduct(event) {
  // console.log(event.target.value);
  let url;
  if (event) {
    if (event.target.value == "italian") {
      url = `https://dummyjson.com/recipes/tag/Italian`;
    } else if (event.target.value == "pakistani") {
      url = `https://dummyjson.com/recipes/tag/Pakistani`;
    } else {
      url = `https://dummyjson.com/recipes/`;
    }
  } else {
    url = `https://dummyjson.com/recipes/`;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => showList(data.recipes));
}

function showList(recipes) {
  console.log(recipes);

  const markup = recipes
    .map(
      (recipe) => `
         <div class="recipe-card">
        
             <div>   
            <img src="${recipe.image}" alt="${recipe.name}"></div>
            <div>
                    <p class="cuisine">${recipe.cuisine}</p>
                </div>
             <div class="knap">
                <a href="produkt.html?id=${recipe.id}">${recipe.name}</a>
            </div>
            
            </div>

      `
    )
    .join("");

  console.log(markup);
  knapper.innerHTML = markup;
}

selectElement.addEventListener("change", showProduct);

showProduct();
