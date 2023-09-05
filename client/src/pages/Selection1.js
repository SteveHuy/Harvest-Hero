import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import styles from "./Selection1.module.css";




const Selection1 = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const [message, setMessage] = useState('')

  const [selectedCard, setSelectedCard] = useState(null);

  const setType = async () => {
    try {
      const response = await fetch('/api/selection1', {
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

  const onCard1Click = () => {
    changeToBlack()
    setSelectedValue('Grain')
    setSelectedCard(1)
  };

  const onCard2Click = () => {
    changeToBlack()
    setSelectedValue('Nut/Seeds')
    setSelectedCard(2)

  };


  const onCard3Click = () => {
    changeToBlack()
    setSelectedValue('Spice')
    setSelectedCard(3)
  };

  const onCard4Click = () => {
    changeToBlack()
    setSelectedValue('Fruit')
    setSelectedCard(4)
  };

  const onCard5Click = () => {
    changeToBlack()
    setSelectedValue('Legume')
    setSelectedCard(5)
  };

  const onCard6Click = () => {
    changeToBlack()
    setSelectedValue('Vegetable')
    setSelectedCard(6)
  };

  const onCard7Click = () => {
    changeToBlack()
    setSelectedValue('Herb')
    setSelectedCard(7)
  };

  const NextButton = () => {
    navigate("/selection2");
    setType()
  };

  return (
    <div className={styles.main}>
      <b className={styles.typeOfPlant}>Type of Plant</b>
      <div className={styles.cardParent1}>
        <div id="1">
          <Card
            imageDimensions="/fruit1@2x.png"
            componentTitle="Grain"
            cardPosition="relative"
            cardCursor="pointer"
            cardBorder="none"
            cardPadding="0"
            cardBackgroundColor="transparent"
            cardZIndex="0"
            cardBoxShadow="0px 15px 30px black"
            cardWidth="300px"
            cardHeight="225px"
            titleLeft="calc(50% - 36px)"
            titleDisplay="inline-block"
            onCardClick={onCard1Click}
          />
        </div>
        <div id = "2">
          <Card
            imageDimensions="/fruit2@2x.png"
            componentTitle="Nut/Seeds"
            cardPosition="relative"
            cardCursor="pointer"
            cardBorder="none"
            cardPadding="0"
            cardBackgroundColor="transparent"
            cardZIndex="1"
            cardBoxShadow="0px 15px 30px black"
            cardWidth="300px"
            cardHeight="225px"
            titleLeft="calc(50% - 66px)"
            titleDisplay="inline-block"
            onCardClick={onCard2Click}
          />
        </div>
        <div id = "3">
          <Card
            imageDimensions="/fruit3@2x.png"
            componentTitle="Spice"
            cardPosition="relative"
            cardCursor="pointer"
            cardBorder="none"
            cardPadding="0"
            cardBackgroundColor="transparent"
            cardMargin="0 !important"
            cardZIndex="2"
            cardBoxShadow="0px 15px 30px black"
            cardWidth="300px"
            cardHeight="225px"
            titleLeft="calc(50% - 34px)"
            titleDisplay="inline-block"
            onCardClick={onCard3Click}
          />
        </div>
        <div id = "4">
          <Card
            imageDimensions="/fruit@2x.png"
            componentTitle="Fruit"
            cardPosition="relative"
            cardCursor="pointer"
            cardBorder="none"
            cardPadding="0"
            cardBackgroundColor="transparent"
            cardBoxShadow="0px 15px 30px black"
            cardWidth="300px"
            cardHeight="225px"
            titleLeft="calc(50% - 31px)"
            titleDisplay="inline-block"
            onCardClick={onCard4Click}
          />
        </div>
      </div>


      <div className={styles.cardParent2}>
        <div id = "5">
          <Card
            imageDimensions="/rectangle-131@2x.png"
            componentTitle="Legume"
            cardPosition="relative"
            cardCursor="pointer"
            cardBorder="none"
            cardPadding="0"
            cardBackgroundColor="transparent"
            cardZIndex="0"
            cardBoxShadow="0px 15px 30px black"
            cardWidth="300px"
            cardHeight="225px"
            titleLeft="calc(50% - 49px)"
            titleDisplay="inline-block"
            onCardClick={onCard5Click}
          />
        </div>
        <div id = "6">
          <Card
            imageDimensions="/vegetable@3x.png"
            componentTitle="Vegetable"
            cardPosition="relative"
            cardCursor="pointer"
            cardBorder="none"
            cardPadding="0"
            cardBackgroundColor="transparent"
            cardZIndex="1"
            cardBoxShadow="0px 15px 30px black"
            cardWidth="300px"
            cardHeight="225px"
            titleLeft="calc(50% - 62px)"
            titleDisplay="inline-block"
            onCardClick={onCard6Click}
          />
        </div>
        <div id = "7">
          <Card
            imageDimensions="/rectangle13@3x.png"
            componentTitle="Herb"
            cardPosition="relative"
            cardCursor="pointer"
            cardBorder="none"
            cardPadding="0"
            cardBackgroundColor="transparent"
            cardMargin="0 !important"
            cardZIndex="2"
            cardBoxShadow="0px 15px 30px black"
            cardWidth="300px"
            cardHeight="225px"
            titleLeft="calc(50% - 34px)"
            titleDisplay="inline-block"
            onCardClick={onCard7Click}
          />
        </div>
      </div>
      <Button
        buttonText="Next"
        buttonPosition="absolute"
        buttonCursor="pointer"
        buttonBorder="none"
        buttonPadding="0"
        buttonBackgroundColor="transparent"
        buttonTop="92%"
        buttonLeft="85%"
        buttonBoxShadow="0px 10px 20px rgba(0, 0, 0, 0.15)"
        rectangleDivBackgroundColor="unset"
        rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
        primaryButtonLeft="41.15%"
        primaryButtonDisplay="inline-block"
        onButtonClick={NextButton}
      />
    </div>
  );
};

export default Selection1;
