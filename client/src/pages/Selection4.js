import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import styles from "./Selection4.module.css";

// Shade
const Selection4 = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const [message, setMessage] = useState('')

  const [selectedCard, setSelectedCard] = useState(null);

  const setShade = async () => {
    try {
      const response = await fetch('/api/selection4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selectedValue })
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const responseData = await response.json();
      setMessage(responseData)
      console.log(message); // Log the response data
    } catch (error) {
      console.error(error); // Handle error if the request fails
    }
  };



  useEffect(() => {
    changeToGreen()
  }, [selectedCard]);



  const changeToGreen = () => {
    const element = document.getElementById(selectedCard);
    if (element) {
      element.style.boxShadow = `0px 15px 30px green`;
    }
  };

  const changeToBlack = () => {
    const element = document.getElementById(selectedCard);
    if (element) {
      element.style.boxShadow = `0px 0px 0px black`;
    }
  };

  const onCardClick = () => {
    changeToBlack()
    setSelectedValue(2)
    setSelectedCard(1)
  };

  const onCard1Click = () => {
    changeToBlack()
    setSelectedValue(1)
    setSelectedCard(2)
  };
  const onCard2Click = () => {
    changeToBlack()
    setSelectedValue(0)
    setSelectedCard(3)
  };


  const NextButton = () => {
    if (Number.isInteger(selectedValue)){
    setShade()
    navigate("/selection5");
    }
  };


  const BackButton = () => {
    navigate("/selection3");
  }

  return (
    <div className={styles.main}>
      <div className={styles.card_parent}>
        <div className={styles.flex_container}>
          <div id="1">
            <Card
              imageDimensions="/full.jpg"
              componentTitle="Shaded"
              cardPosition="relative"
              cardCursor="pointer"
              cardBorder="none"
              cardPadding="0"
              cardBackgroundColor="transparent"
              cardMargin="unset"
              cardTop="unset"
              cardLeft="unset"
              cardZIndex="unset"
              cardBoxShadow="0px 15px 30px black"
              cardBackgroundImage="unset"
              cardBackgroundSize="unset"
              cardBackgroundRepeat="unset"
              cardBackgroundPosition="unset"
              cardWidth="300px"
              cardHeight="225px"
              titleDisplay="inline-block"
              onCardClick={onCardClick}
            />
          </div>
          <div id="2">
            <Card
              imageDimensions="/partial.jpg"
              componentTitle="Partially"
              cardPosition="relative"
              cardCursor="pointer"
              cardBorder="none"
              cardPadding="0"
              cardBackgroundColor="transparent"
              cardMargin="unset"
              cardTop="unset"
              cardLeft="unset"
              cardZIndex="unset"
              cardBoxShadow="0px 15px 30px black"
              cardBackgroundImage="unset"
              cardBackgroundSize="unset"
              cardBackgroundRepeat="unset"
              cardBackgroundPosition="unset"
              cardWidth="300px"
              cardHeight="225px"
              titleDisplay="inline-block"
              onCardClick={onCard1Click}
            />
          </div>
          <div id="3">
            <Card
              imageDimensions="/noshade.jpg"
              componentTitle="None"
              cardPosition="relative"
              cardCursor="pointer"
              cardBorder="none"
              cardPadding="0"
              cardBackgroundColor="transparent"
              cardMargin="unset"
              cardTop="unset"
              cardLeft="unset"
              cardZIndex="unset"
              cardBoxShadow="0px 15px 30px black"
              cardBackgroundImage="unset"
              cardBackgroundSize="unset"
              cardBackgroundRepeat="unset"
              cardBackgroundPosition="unset"
              cardWidth="300px"
              cardHeight="225px"
              titleDisplay="inline-block"
              onCardClick={onCard2Click}
            />
          </div>
        </div>
        <div className={styles.inner_container}>
        <Button className = {styles.button}
          buttonText="Next"
          buttonPosition="absolute"
          buttonCursor="pointer"
          buttonBorder="none"
          buttonPadding="0"
          buttonBackgroundColor="transparent"
          buttonTop="103.95%"
          buttonLeft="92%"
          rectangleDivBackgroundColor="unset"
          rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
          primaryButtonLeft="41.15%"
          primaryButtonDisplay="inline-block"
          onButtonClick={NextButton}
        />
        <Button className = {styles.button}
          buttonText="Back"
          buttonPosition="absolute"
          buttonCursor="pointer"
          buttonBorder="none"
          buttonPadding="0"
          buttonBackgroundColor="transparent"
          buttonTop="103.95%"
          buttonLeft="-8%"
          rectangleDivBackgroundColor="unset"
          rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
          primaryButtonLeft="40.77%"
          primaryButtonDisplay="inline-block"
          onButtonClick={BackButton}
        />
        </div>
      </div>

      <b className={styles.shade}>Shade</b>

    </div>

  );
};

export default Selection4;
