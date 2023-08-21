import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import styles from "./Selection1.module.css";
const Selection1 = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const [message, setMessage] = useState('')

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


  const onCard1Click = () => {
    setSelectedValue('Grain')
    console.log(selectedValue);
  };

  const onCard2Click = () => {
    setSelectedValue('Nut/Seeds')
    console.log(selectedValue);
  };


  const onCard3Click = () => {
    setSelectedValue('Spice')
    console.log(selectedValue);
  };

  const onCard4Click = () => {
    setSelectedValue('Fruit')
    console.log(selectedValue);
  };

  const onCard5Click = () => {
    setSelectedValue('Legume')
    console.log(selectedValue);
  };

  const onCard6Click = () => {
    setSelectedValue('Vegetable')
    console.log(selectedValue);
  };

  const onCard7Click = () => {
    setSelectedValue('Herb')
    console.log(selectedValue);
  };

  const NextButton = () => {
    navigate("/selection2");
    setType()
  };

  return (
    <div className={styles.main}>
      <b className={styles.typeOfPlant}>Type of Plant</b>
      <div className={styles.cardParent1}>
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


      <div className={styles.cardParent2}>
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
