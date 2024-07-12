import { useState, useEffect } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="md:text-7xl font-bold mb-4 text-[#C98A40] text-center">
        RECIPES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20">
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="bg-white shadow-md rounded-lg overflow-hidden md:w-96 mx-auto"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-[#C98A40]">
                {recipe.strMeal}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt accusantium quod sequi voluptatibus, optio quo
                reiciendis veritatis dolor minus assumenda? Non voluptatum,
                mollitia fugiat ex odit error vel pariatur cum!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#FDBA10] py-2 mt-4 px-4 rounded-full text-white font-bold">
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default Recipes;
