import { memo, useCallback } from "react";
import Card from "./Card";
import Card1 from "./Card1";
import styles from "./LegumeSection.module.css";
const LegumeSection = memo(() => {
  const onCardClick = useCallback(() => {
    /* TODO: Cal API
       Make tick system
    */
  }, []);

  const onCard1Click = useCallback(() => {
    /* TODO: Cal API
       Make tick system
    */
  }, []);

  const onCard2Click1 = useCallback(() => {
    /* TODO: Cal API
       Make tick system
    */
  }, []);

  const onCard3Click = useCallback(() => {
    /* TODO: Cal API
       Make tick system
    */
  }, []);

  return (
    <div className={styles.cardParent}>
      <Card
        imageDimensions="/fruit@2x.png"
        componentTitle="Fruit"
        cardPosition="relative"
        cardCursor="pointer"
        cardBorder="none"
        cardPadding="0"
        cardBackgroundColor="transparent"
        cardMargin="unset"
        cardTop="unset"
        cardLeft="unset"
        cardZIndex="unset"
        cardBoxShadow="0px 15px 30px rgba(0, 0, 0, 0.15)"
        cardBackgroundImage="unset"
        cardBackgroundSize="unset"
        cardBackgroundRepeat="unset"
        cardBackgroundPosition="unset"
        cardWidth="300px"
        cardHeight="225px"
        titleLeft="calc(50% - 31px)"
        titleDisplay="inline-block"
        onCard6Click={onCardClick}
      />
      <Card1
        itemType="Vegetable"
        propBackgroundImage={`url("/vegetable@3x.png")`}
        propLeft="calc(50% - 62px)"
        onCard2Click={onCard1Click}
      />
      <Card1 itemType="Herb" onCard2Click={onCard2Click1} />
      <Card
        imageDimensions="/rectangle-131@2x.png"
        componentTitle="Legume"
        cardPosition="relative"
        cardCursor="pointer"
        cardBorder="none"
        cardPadding="0"
        cardBackgroundColor="transparent"
        cardMargin="unset"
        cardTop="unset"
        cardLeft="unset"
        cardZIndex="unset"
        cardBoxShadow="0px 15px 30px rgba(0, 0, 0, 0.15)"
        cardBackgroundImage="unset"
        cardBackgroundSize="unset"
        cardBackgroundRepeat="unset"
        cardBackgroundPosition="unset"
        cardWidth="300px"
        cardHeight="225px"
        titleLeft="calc(50% - 49px)"
        titleDisplay="inline-block"
        onCard6Click={onCard3Click}
      />
    </div>
  );
});

export default LegumeSection;
