import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./SplashScreen.module.css";
const SplashScreen = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/selection1");
  }, [navigate]);

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <b className={styles.harvestHero}>Harvest Hero</b>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <Button
          buttonTop="68%"
          buttonText="Grow a Plant"
          buttonPosition="absolute"
          buttonCursor="pointer"
          buttonBorder="none"
          buttonPadding="0"
          buttonBackgroundColor="transparent"
          buttonBoxShadow="0px 10px 20px rgba(0, 0, 0, 0.15)"
          rectangleDivBackgroundColor="unset"
          rectangleDivBackground="linear-gradient(90deg, rgba(127, 202, 33, 0.8), #105200)"
          primaryButtonLeft="25.38%"
          primaryButtonDisplay="inline-block"
          onButtonClick={onButtonClick}
        />
      </div>

    </div>
  );
};

export default SplashScreen;
