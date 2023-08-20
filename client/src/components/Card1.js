import { memo, useMemo } from "react";
import styles from "./Card1.module.css";
const Card1 = memo(
  ({ itemType, propBackgroundImage, propLeft, onCard2Click }) => {
    const rectangleButtonStyle = useMemo(() => {
      return {
        backgroundImage: propBackgroundImage,
      };
    }, [propBackgroundImage]);

    const herbStyle = useMemo(() => {
      return {
        left: propLeft,
      };
    }, [propLeft]);

    return (
      <button className={styles.card} onClick={onCard2Click}>
        <button className={styles.cardChild} style={rectangleButtonStyle} />
        <b className={styles.herb} style={herbStyle}>
          {itemType}
        </b>
      </button>
    );
  }
);

export default Card1;
