import Card from "../components/Card";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from '../GlobalContext';
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import styles from "./YouCanGrow.module.css";
const YouCanGrow = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dataFound, setDataFound] = useState(Boolean);
  const [plantID, setPlantID] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const { setPlantData, recipeData, setRecipeData } = useContext(GlobalContext);


  useEffect(() => {
    fetch('/api/plant')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle the response data and update the state
        setDataFound(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('/api/plant/get')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle the response data and update the state
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [dataFound]);


  useEffect(() => {

    fetch('/api/plant/recipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plantID),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setRecipeData(responseData);
        console.log(responseData)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [plantID]);

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


  const setPlantButton = (e) => {
    changeToBlack()
    const id = e.currentTarget.id
    setPlantID(id)
    setSelectedCard(id)
  }


  useEffect(() => {
    setPlantData(data[plantID])
  }, [plantID]);

  const NextButton = () => {
    if (Array.isArray(recipeData)) {

      navigate("/result");
    }

  };

  const BackButton = () => {
    navigate("/selection5");
  };

  const RestartButton = () => {
    navigate("/selection1");
  };

  return (
    <div>
      {data.length === 0 ? (
        <div className={styles.main}>
          <b>You cannot make a plant with the options you have chosen</b>
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
        </div>
      ) : (
        <div className={styles.main}>
          <b className={styles.youCanGrow}>You Can Grow!</b>

          <div className={styles.card_parent}>
            <div className={styles.flex_container}>
              {data.map((data, index) => (
                <div key={index}>
                  <div id={data._id} onClick={setPlantButton}>
                    <Card
                      imageDimensions={`crops/${data.Crop.replace(/\s/g, '')}.jpg`}
                      componentTitle={data.Crop}
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
                    />
                  </div>

                </div>
              ))}
            </div>
            <div className={styles.inner_container}>


              <Button className={styles.button}
                buttonText="Next"
                buttonPosition="relative"
                buttonCursor="pointer"
                buttonBorder="none"
                buttonPadding="0"
                buttonBackgroundColor="transparent"
                buttonLeft="92%"
                rectangleDivBackgroundColor="unset"
                rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
                primaryButtonLeft="41.15%"
                primaryButtonDisplay="inline-block"
                onButtonClick={NextButton}
              />
              <Button
                buttonText="Restart"
                buttonPosition="absolute"
                buttonCursor="pointer"
                buttonBorder="none"
                buttonPadding="0"
                buttonLeft="42%"
                buttonBackgroundColor="transparent"
                rectangleDivBackgroundColor="unset"
                rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
                primaryButtonLeft="36%"
                primaryButtonDisplay="inline-block"
                onButtonClick={RestartButton}
              />
              <Button className={styles.button}
                buttonText="Back"
                buttonPosition="relative"
                buttonCursor="pointer"
                buttonBorder="none"
                buttonPadding="0"
                buttonBackgroundColor="transparent"
                buttonLeft="-24%"
                rectangleDivBackgroundColor="unset"
                rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
                primaryButtonLeft="40.77%"
                primaryButtonDisplay="inline-block"
                onButtonClick={BackButton}
              />
            </div>
          </div>
        </div>

      )}
    </div>

  );
};


export default YouCanGrow;
