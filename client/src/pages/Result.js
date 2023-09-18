import { useCallback, useContext } from "react";
import { GlobalContext } from '../GlobalContext';

import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import styles from "./Result.module.css";
const Result = () => {

  const { plantData, recipeData } = useContext(GlobalContext);

  const navigate = useNavigate();

  const NextButton = () => {

      navigate("/recipes");

  

  };

  const BackButton = () => {
    navigate("/you-can-grow");
  };

  return (
    <div className={styles.main}>
      <b className={styles.crop_name}>{plantData.Crop}</b>
        <div className={styles.cardParent}>
          <Card
            imageDimensions={`crops/${plantData.Crop.replace(/\s/g, '')}.jpg`}
            cardPosition="relative"
            cardCursor="unset"
            cardBorder="unset"
            cardPadding="unset"
            cardBackgroundColor="unset"
            cardMargin="unset"
            cardTop="unset"
            cardLeft="unset"
            cardZIndex="unset"
            cardBoxShadow="0px 15px 30px rgba(0, 0, 0, 0.15)"
            cardBackgroundImage="unset"
            cardBackgroundSize="unset"
            cardBackgroundRepeat="unset"
            cardBackgroundPosition="unset"
            cardWidth="608px"
            cardHeight="344px"
            titleDisplay="inline-block"
          />
          <div className={styles.description}>
            {plantData.Desc}
          </div>
        </div>
        <Button
        buttonText="Recipes"
        buttonPosition="absolute"
        buttonCursor="pointer"
        buttonBorder="none"
        buttonPadding="0"
        buttonBackgroundColor="transparent"
        buttonTop="92%"
        buttonLeft="86%"
        rectangleDivBackgroundColor="unset"
        rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
        primaryButtonLeft="36%"
        primaryButtonDisplay="inline-block"
        onButtonClick={NextButton}
      />
      <Button
        buttonText="Back"
        buttonPosition="absolute"
        buttonCursor="pointer"
        buttonBorder="none"
        buttonPadding="0"
        buttonBackgroundColor="transparent"
        buttonTop="92%"
        buttonLeft="0.5%"
        rectangleDivBackgroundColor="unset"
        rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
        primaryButtonLeft="40.77%"
        primaryButtonDisplay="inline-block"
        onButtonClick={BackButton}
      />
      </div>
  );
};

export default Result;
