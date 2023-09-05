import { useState, useEffect, useContext  } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import styles from "./Selection3.module.css";
import { GlobalContext } from '../GlobalContext';



const Selection3 = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const [message, setMessage] = useState('')

  const [selectedCard, setSelectedCard] = useState(null);


  const { setPlacementVariable } = useContext(GlobalContext);

  const setPlacement = async () => {
    try {
      const response = await fetch('/api/selection3', {
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
    // Indoor
    changeToBlack()
    setSelectedValue(1)
    setSelectedCard(1)
  };

  const onCard1Click = () => {
    // Outdoor
    changeToBlack()
    setSelectedValue(2)
    setSelectedCard(2)
  };

  const NextButton = () => {
    setPlacementVariable(selectedValue)
    setPlacement() 
    if (selectedValue == 2){
      // go to the shade
      navigate("/selection4");
    }else{
      // go to the water
      navigate("/selection5"); 
    }
  };


  const BackButton = () => {
    setPlacement()
    navigate("/selection2");
  }

  return (

    <div className={styles.main}>
      <div className={styles.cardParent1}>
        <div id="1">
        <Card
          imageDimensions="/indoor@2x.png"
          componentTitle="Indoor"
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
          titleLeft="calc(50% - 43px)"
          titleDisplay="inline-block"
          onCardClick={onCardClick}
        />
        </div>
        <div id="2">
        <Card
          imageDimensions="/outdoor@2x.png"
          componentTitle="Outdoor"
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
          titleLeft="calc(50% - 53px)"
          titleDisplay="inline-block"
          onCardClick={onCard1Click}
        />
        </div>
      </div>
      <b className={styles.indooroutdoor}>Indoor/Outdoor</b>
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

export default Selection3;
