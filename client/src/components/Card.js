import { memo, useMemo } from "react";
import styles from "./Card.module.css";
const Card = memo(
  ({
    imageDimensions,
    componentTitle,
    cardPosition,
    cardCursor,
    cardBorder,
    cardPadding,
    cardBackgroundColor,
    cardMargin,
    cardTop,
    cardLeft,
    cardZIndex,
    cardBoxShadow,
    cardBackgroundImage,
    cardBackgroundSize,
    cardBackgroundRepeat,
    cardBackgroundPosition,
    cardWidth,
    cardHeight,
    titleLeft,
    titleDisplay,
    onCard6Click,
  }) => {
    const cardStyle = useMemo(() => {
      return {
        position: cardPosition,
        cursor: cardCursor,
        border: cardBorder,
        padding: cardPadding,
        backgroundColor: cardBackgroundColor,
        margin: cardMargin,
        top: cardTop,
        left: cardLeft,
        zIndex: cardZIndex,
        boxShadow: cardBoxShadow,
        backgroundImage: cardBackgroundImage,
        backgroundSize: cardBackgroundSize,
        backgroundRepeat: cardBackgroundRepeat,
        backgroundPosition: cardBackgroundPosition,
        width: cardWidth,
        height: cardHeight,
      };
    }, [
      cardPosition,
      cardCursor,
      cardBorder,
      cardPadding,
      cardBackgroundColor,
      cardMargin,
      cardTop,
      cardLeft,
      cardZIndex,
      cardBoxShadow,
      cardBackgroundImage,
      cardBackgroundSize,
      cardBackgroundRepeat,
      cardBackgroundPosition,
      cardWidth,
      cardHeight,
    ]);

    const titleStyle = useMemo(() => {
      return {
        left: titleLeft,
        display: titleDisplay,
      };
    }, [titleLeft, titleDisplay]);

    return (
      <div className={styles.card} style={cardStyle} onClick={onCard6Click}>
        <img className={styles.cardChild} alt="" src={imageDimensions} />
        <b className={styles.title} style={titleStyle}>
          {componentTitle}
        </b>
      </div>
    );
  }
);

export default Card;
