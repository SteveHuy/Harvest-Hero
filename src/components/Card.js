import { memo, useMemo } from "react";
import styles from "./Card.module.css";
const Card = (
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
    onCardClick,
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
      <div className={styles.card} style={cardStyle} onClick={onCardClick}>
        <img className={styles.cardChild} alt="" src={imageDimensions} />
        <b className={styles.title} style={titleStyle}>
          {componentTitle}
        </b>
      </div>
    );
  }
);

export default Card;
