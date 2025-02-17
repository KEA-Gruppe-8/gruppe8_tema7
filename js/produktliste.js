let knapper = document.querySelector(".knapper");

const selectElement = document.querySelector("#selectElement");

function showProduct(event) {
  // console.log(event.target.value);
  let url;
  if (event) {
    if (event.target.value == "italian") {
      url = `https://dummyjson.com/recipes/tag/Italian`;
    } else if (event.target.value == "asian") {
      url = `https://dummyjson.com/recipes/tag/Asian`;
    } else if (event.target.value == "american") {
      url = `https://dummyjson.com/recipes/tag/American`;
    } else if (event.target.value == "mexican") {
      url = `https://dummyjson.com/recipes/tag/Mexican`;
    } else if (event.target.value == "mediterranean") {
      url = `https://dummyjson.com/recipes/tag/Mediterranean`;
    } else if (event.target.value == "pakistani") {
      url = `https://dummyjson.com/recipes/tag/Pakistani`;
    } else if (event.target.value == "moroccan") {
      url = `https://dummyjson.com/recipes/tag/Moroccan`;
    } else if (event.target.value == "japanese") {
      url = `https://dummyjson.com/recipes/tag/Japanese`;
    } else if (event.target.value == "korean") {
      url = `https://dummyjson.com/recipes/tag/Korean`;
    } else if (event.target.value == "greek") {
      url = `https://dummyjson.com/recipes/tag/Greek`;
    } else if (event.target.value == "thai") {
      url = `https://dummyjson.com/recipes/tag/Thai`;
    } else if (event.target.value == "indian") {
      url = `https://dummyjson.com/recipes/tag/Indian`;
    } else if (event.target.value == "turkish") {
      url = `https://dummyjson.com/recipes/tag/Turkish`;
    } else if (event.target.value == "russian") {
      url = `https://dummyjson.com/recipes/tag/Russian`;
    } else if (event.target.value == "lebanese") {
      url = `https://dummyjson.com/recipes/tag/Lebanese`;
    } else if (event.target.value == "brazilian") {
      url = `https://dummyjson.com/recipes/tag/Brazilian`;
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
