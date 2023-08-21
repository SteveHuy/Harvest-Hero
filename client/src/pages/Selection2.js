import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import styles from "./Selection2.module.css";
const Selection2 = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const [message, setMessage] = useState('')

  const setRegion = async () => {
    try {
      const response = await fetch('/api/selection2', {
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

  const onCardClick = () => {
    setSelectedValue('Karratha')
    console.log(selectedValue);
  };

  const onCard1Click = () => {
    setSelectedValue('Onslow')
    console.log(selectedValue);
  };

  const onCard2Click = () => {
    setSelectedValue('Tom Price')
    console.log(selectedValue);
  };

  const onCard3Click = () => {
    setSelectedValue('Newman')
    console.log(selectedValue);
  };

  const onCard4Click = () => {
    setSelectedValue('Port Hedland')
    console.log(selectedValue);
  };

  const onCard5Click = () => {
    setSelectedValue('Marble Bar')
    console.log(selectedValue);
  };

  const onCard6Click = () => {
    setSelectedValue('Gibson Desert North')
    console.log(selectedValue);
  };

  const onCard7Click = () => {
    setSelectedValue('Telfer')
    console.log(selectedValue);
  };

  const NextButton = () => {
    setRegion()
    navigate("/selection3");
  };

  const BackButton = () => {
    setRegion()
    navigate("/selection1");
  };

  return (
    <div className={styles.main}>
      <div className={styles.cardParent1}>
        <Card
          imageDimensions="/karratha@2x.png"
          componentTitle="Karratha"
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
          titleLeft="calc(50% - 56px)"
          titleDisplay="inline-block"
          onCardClick={onCardClick}
        />
        <Card
          imageDimensions="/onslow@2x.png"
          componentTitle="Onslow"
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
          titleLeft="calc(50% - 47px)"
          titleDisplay="inline-block"
          onCardClick={onCard1Click}
        />
        <Card
          imageDimensions="/tom-price@2x.png"
          componentTitle="Tom Price"
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
          titleLeft="calc(50% - 63px)"
          titleDisplay="inline-block"
          onCardClick={onCard2Click}
        />
        <Card
          imageDimensions="/newman@2x.png"
          componentTitle="Newman"
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
          titleLeft="calc(50% - 54px)"
          titleDisplay="inline-block"
          onCardClick={onCard3Click}
        />
      </div>
      <div className={styles.cardParent2}>
        <Card
          imageDimensions="/port-hedland@2x.png"
          componentTitle="Port Hedland"
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
          titleLeft="calc(50% - 84px)"
          titleDisplay="inline-block"
          onCardClick={onCard4Click}
        />
        <Card
          imageDimensions="/marble-bar@2x.png"
          componentTitle="Marble Bar"
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
          titleLeft="calc(50% - 69px)"
          titleDisplay="inline-block"
          onCardClick={onCard5Click}
        />
        <Card
          imageDimensions="/gibson-desert-north@2x.png"
          componentTitle="Gibson Desert North"
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
          titleLeft="calc(50% - 128px)"
          titleDisplay="inline-block"
          onCardClick={onCard6Click}
        />
        <Card
          imageDimensions="/telfer@2x.png"
          componentTitle="Telfer"
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
          titleLeft="calc(50% - 37px)"
          titleDisplay="inline-block"
          onCardClick={onCard7Click}
        />
      </div>
      <b className={styles.region}>Region</b>
      <Button
        buttonText="Next"
        buttonPosition="absolute"
        buttonCursor="pointer"
        buttonBorder="none"
        buttonPadding="0"
        buttonBackgroundColor="transparent"
        buttonTop="92%"
        buttonLeft="86%"
        buttonBoxShadow="0px 10px 20px rgba(0, 0, 0, 0.15)"
        rectangleDivBackgroundColor="unset"
        rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
        primaryButtonLeft="41.15%"
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

export default Selection2;
