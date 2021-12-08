import { t } from "dictionaries/en";
import { Table } from "react-bootstrap";
import "./NutriDataTable.scss";
const NutriDataTable = (props) => {
  const { product } = props;

  function calculate(original_value, quantity) {
    var factor = quantity / 100;
    return round(original_value * factor);
  }
  function round(value) {
    return Number(value.toFixed(2));
  }

  return (
    <>
      {product.nutritionData ? (
        <Table striped bordered hover size="sm" className="indent_20">
          <thead className="bold center">
            <tr>
              <th>{t.Products.NutritionData.title}</th>
              <th>{t.Products.NutritionData.quantity}</th>
              <th>
                {product.quantity}
                {t.Products.NutritionData.unit_g}
                {product.quantity}
                {t.Products.NutritionData.unit_ml}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {t.Products.NutritionData.energy}</td>
              <td className="center">
                {round(product.nutritionData.energyKcal)}
              </td>
              <td className="center">
                {calculate(product.nutritionData.energyKcal, product.quantity)}
              </td>
            </tr>
            <tr>
              <td className="bold">{t.Products.NutritionData.fat}</td>
              <td className="center">{round(product.nutritionData.fat)}</td>
              <td className="center">
                {calculate(product.nutritionData.fat, product.quantity)}
              </td>
            </tr>
            <tr>
              <td className="indent_40">
                {t.Products.NutritionData.saturated}
              </td>
              <td className="center">
                {round(product.nutritionData.saturatedFat)}
              </td>
              <td className="center">
                {calculate(
                  product.nutritionData.saturatedFat,
                  product.quantity
                )}
              </td>
            </tr>
            <tr>
              <td className="bold">{t.Products.NutritionData.carbs}</td>
              <td className="center">
                {round(product.nutritionData.carbohydrates)}
              </td>
              <td className="center">
                {calculate(
                  product.nutritionData.carbohydrates,
                  product.quantity
                )}
              </td>
            </tr>
            <tr>
              <td className="indent_40">{t.Products.NutritionData.sugars}</td>
              <td className="center">{round(product.nutritionData.sugars)}</td>
              <td className="center">
                {calculate(product.nutritionData.sugars, product.quantity)}
              </td>
            </tr>
            <tr>
              <td>{t.Products.NutritionData.fiber}</td>
              <td className="center">{round(product.nutritionData.fiber)}</td>
              <td className="center">
                {calculate(product.nutritionData.fiber, product.quantity)}
              </td>
            </tr>
            <tr>
              <td>{t.Products.NutritionData.proteins}</td>
              <td className="center">
                {round(product.nutritionData.proteins)}
              </td>
              <td className="center">
                {calculate(product.nutritionData.proteins, product.quantity)}
              </td>
            </tr>
            <tr>
              <td>{t.Products.NutritionData.salt}</td>
              <td className="center">{round(product.nutritionData.salt)}</td>
              <td className="center">
                {calculate(product.nutritionData.salt, product.quantity)}
              </td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <div>{t.Products.NutritionData.missing}</div>
      )}
    </>
  );
};
export default NutriDataTable;
