const myrecipe = new URLSearchParams(window.location.search).get("id");
let opskrifter = document.querySelector(".opskrifter");

if (!myrecipe) {
  opskrifter.innerHTML = "<p>Ingen opskrift valgt!</p>";
} else {
  fetch(`https://dummyjson.com/recipes/${myrecipe}`)
    .then((res) => res.json())
    .then((recipe) => {
      if (recipe.message) {
        opskrifter.innerHTML = `<p>${recipe.message}</p>`;
      } else {
        showRecipe(recipe);
      }
    })
    .catch((error) => console.error("Fejl ved hentning af opskrift:", error));
}

function showRecipe(recipe) {
  console.log(recipe);
  const markup = `
      <h1 class="produkt_overskrift">${recipe.name}</h1>
      <div class="produkt_billede_info">
          <div class="produkt_img"><img src="${recipe.image}" alt="${recipe.name}"></div>
          <div  class="produkt_info">
              <p>Preparation time: ${recipe.prepTimeMinutes} min</p>
              <p>Cooking time: ${recipe.cookTimeMinutes} min</p>
              <p>Servings: ${recipe.servings}</p>
              <p>Difficulty: ${recipe.difficulty}</p>
              <p>Cuisine: ${recipe.cuisine}</p>
              <p>Calories per serving: ${recipe.caloriesPerServing}</p>
          </div>
      </div>
      <div class="opskrift">
          <div>
                <div class="ingredients">
                <div class="ingredients_ul">
                <h2 class="title">Ingredients</h2>
              <ul>
                  ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
              </ul>
              </div>
              </div>
          </div>
          <div>
              <h2 class="title2">Instructions</h2>
              <ul class="instructions">
                  ${recipe.instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
              </ul>
          </div>
      </div>`;
  opskrifter.innerHTML = markup;
}
