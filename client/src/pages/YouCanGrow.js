import Card from "../components/Card";
import { useState, useEffect } from "react";

import styles from "./YouCanGrow.module.css";
const YouCanGrow = () => {
  const [data, setData] = useState([]);

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
}, []);



  return (
    <div className={styles.main}>
      <b className={styles.youCanGrow1}>You Can Grow!</b>
      <div className={styles.cardParent1}>
      <div >
 
      </div>

    </div>
    </div>
  );
};

export default YouCanGrow;
