import { nutriScore } from "nutri-score";
export function getNutriScore(nutriData, category) {
  console.log(category.name);
  var food_type = "solid";
  if (category.name === "Beverages") {
    food_type = "beverage";
  }
  const nutriScoreResult = nutriScore.calculateClass(
    {
      energy: nutriData.energyKcal,
      fibers: nutriData.fiber,
      fruit_percentage: nutriData.fruitVegetablesNuts,
      proteins: nutriData.proteins,
      saturated_fats: nutriData.saturatedFat,
      sodium: nutriData.sodium,
      sugar: nutriData.sugars,
    },
    food_type
  );

  return nutriScoreResult.toLocaleLowerCase();
}
