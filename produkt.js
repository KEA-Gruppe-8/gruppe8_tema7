// Hent ID fra URL'en
const myrecipe = new URLSearchParams(window.location.search).get("id");
let opskrifter = document.querySelector(".opskrifter");

if (!myrecipe) {
  opskrifter.innerHTML = "<p>Ingen opskrift valgt!</p>";
} else {
  fetch(`https://dummyjson.com/recipes/${myrecipe}`)
    .then((res) => res.json())
    .then((recipe) => {
      // Du kan evt. tjekke, om recipe har en fejlmeddelelse, før du kalder showRecipe
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
          <div><img src="${recipe.image}" alt="${recipe.name}"></div>
          <div>
              <p>Prepa ration time: ${recipe.prepTimeMinutes} min</p>
              <p>Cooking time: ${recipe.cookTimeMinutes} min</p>
              <p>Servings: ${recipe.servings}</p>
              <p>Difficulty: ${recipe.difficulty}</p>
              <p>Cuisine: ${recipe.cuisine}</p>
              <p>Calories per serving: ${recipe.caloriesPerServing}</p>
          </div>
      </div>
      <div class="opskrift">
          <div>
              <p class="title">Ingredients</p>
              <ul class="ingredients">
                  ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
              </ul>
          </div>
          <div>
              <p class="title">Instructions</p>
              <ul class="instructions">
                  ${recipe.instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
              </ul>
          </div>
      </div>`;
  opskrifter.innerHTML = markup;
}
