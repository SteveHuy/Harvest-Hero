import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import styles from "./Recipes.module.css";
const Recipes = () => {
  const navigate = useNavigate();

  const BackButton = useCallback(() => {
    navigate("/result");
  }, [navigate]);

  return (

    <div className={styles.main}>
      <div className={styles.cardParent}>
        <Card
          imageDimensions="/plant@2x.png"
          componentTitle="Recipe Name"
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
          titleLeft="calc(50% - 80px)"
          titleDisplay="inline-block"
        />
        <div className={styles.description}>Description Text</div>
      </div>
      <Button
        buttonText="Back"
        buttonPosition="absolute"
        buttonCursor="pointer"
        buttonBorder="none"
        buttonPadding="0"
        buttonBackgroundColor="transparent"
        buttonTop="92%"
        buttonLeft="0.5%"
        buttonBoxShadow="0px 10px 20px rgba(0, 0, 0, 0.15)"
        rectangleDivBackgroundColor="unset"
        rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
        primaryButtonLeft="40.77%"
        primaryButtonDisplay="inline-block"
        onButtonClick={BackButton}
      />
    </div>
  );
};

export default Recipes;
