import React from 'react';

interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number; // Fixed spelling
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: string; // Fixed spelling
  tags: string[];
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const Page = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();

  const recipes: IRecipe[] = data.recipes;

  return (
    <div className='items-center font-bold text-center text-[60px] py-5'>
      <h1>Recipes</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5  bg-orange-300">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="flex flex-col gap-3 border border-black p-4 rounded-lg shadow-lg"
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-90 object-cover rounded-lg"
          />
          <h2 className="font-bold text-lg text-center text-[30px] py-3">{recipe.name}</h2>
          <p className="text-black text-center text-sm">
            <strong>Cuisine:</strong> {recipe.cuisine} | <strong>Difficulty:</strong> {recipe.difficulty}
          </p>
          <p className="text-black text-sm text-center">
            <strong>Prep Time:</strong> {recipe.prepTimeMinutes} min | <strong>Cook Time:</strong> {recipe.cookTimeMinutes} min
          </p>
          <p className="text-black text-center text-sm">
            <strong>Servings:</strong> {recipe.servings} | <strong>Calories:</strong> {recipe.caloriesPerServing} kcal
          </p>
          <p className="text-center text-sm">
            <strong>Rating:</strong> {recipe.rating} ⭐ ({recipe.reviewCount} reviews)
          </p>

          <div>
            <h3 className="font-bold mt-3 text-[30px] py-3">Ingredients:</h3>
            <ul className="list-disc list-inside text-black text-sm">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mt-3 text-[30px] py-3">Instructions:</h3>
            <ol className="list-decimal list-inside text-black text-sm">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="mt-3 text-sm text-gray-800">
            <strong>Meal Type:</strong> {recipe.mealType.join(", ")}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Page;
