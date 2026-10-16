async function fetchRecipes() {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();

  const container = document.getElementById('recipes-container');

  data.recipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', fetchRecipes);
