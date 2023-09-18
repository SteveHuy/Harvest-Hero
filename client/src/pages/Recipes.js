import { useCallback, useContext } from "react";
import { GlobalContext } from '../GlobalContext';

import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import styles from "./Recipes.module.css";
const Recipes = () => {

  const { recipeData } = useContext(GlobalContext);

  const navigate = useNavigate();

  const BackButton = () => {
    navigate("/result");
  };

  const RestartButton = () => {
    navigate("/selection1");
  };

  return (

    <div>

      {recipeData.length === 0 ? (
        <div className={styles.main}>
          <b>There are no recipes for the plant</b>
          <Button
            buttonTop="68%"
            buttonText="Restart"
            buttonPosition="absolute"
            buttonCursor="pointer"
            buttonBorder="none"
            buttonPadding="0"
            buttonBackgroundColor="transparent"
            rectangleDivBackgroundColor="unset"
            rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
            primaryButtonLeft="36%"
            primaryButtonDisplay="inline-block"
            onButtonClick={RestartButton}
          />
          <Button
            buttonText="Back"
            buttonTop="80%"
            buttonPosition="absolute"
            buttonCursor="pointer"
            buttonBorder="none"
            buttonPadding="0"
            buttonBackgroundColor="transparent"
            rectangleDivBackgroundColor="unset"
            rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
            primaryButtonLeft="40.77%"
            primaryButtonDisplay="inline-block"
            onButtonClick={BackButton}
          />
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.recipe_list}>
            {recipeData.map((recipe, index) => (
              <div key={index}>
                <b className={styles.name}>{recipe.Name}</b>
                <h2>Description</h2>
                <p className={styles.description}>{recipe.Description}</p>
                <h2>Ingredients</h2>
                <div className={styles.text_container}>
                  {recipe.Ingredients.map((ingredients_data, ingredients_index) => (
                    <li className={styles.list_item} key={ingredients_index}>{ingredients_data}</li>
                  ))}
                </div>
                <h2>Method</h2>
                <div className={styles.text_container}>
                  <ol>
                    {recipe.Method.map((method_data, method_index) => (
                      <li className={styles.list_item} key={method_index}>{method_data}</li>
                    ))}
                  </ol>
                </div>
                <h3>URL</h3>
                <a href={recipe.url}>{recipe.url}</a>



              </div>

            ))}
            <Button className={styles.button}
              buttonText="Back"
              buttonPosition="relative"
              buttonCursor="pointer"
              buttonBorder="none"
              buttonPadding="0"
              buttonBackgroundColor="transparent"
              buttonLeft="-37%"
              rectangleDivBackgroundColor="unset"
              rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
              primaryButtonLeft="40.77%"
              primaryButtonDisplay="inline-block"
              onButtonClick={BackButton}
            />

          </div>

        </div>

      )}
    </div>
  );
};

export default Recipes;
