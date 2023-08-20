import { memo, useMemo } from "react";
import styles from "./Button.module.css";
const Button = memo(
  ({
    buttonText,
    buttonPosition,
    buttonCursor,
    buttonBorder,
    buttonPadding,
    buttonBackgroundColor,
    buttonTop,
    buttonLeft,
    buttonBoxShadow,
    rectangleDivBackgroundColor,
    rectangleDivBackground,
    primaryButtonLeft,
    primaryButtonDisplay,
    onButtonClick,
  }) => {
    const buttonStyle = useMemo(() => {
      return {
        position: buttonPosition,
        cursor: buttonCursor,
        border: buttonBorder,
        padding: buttonPadding,
        backgroundColor: buttonBackgroundColor,
        top: buttonTop,
        left: buttonLeft,
        boxShadow: buttonBoxShadow,
      };
    }, [
      buttonPosition,
      buttonCursor,
      buttonBorder,
      buttonPadding,
      buttonBackgroundColor,
      buttonTop,
      buttonLeft,
      buttonBoxShadow,
    ]);

    const rectangleDivStyle = useMemo(() => {
      return {
        backgroundColor: rectangleDivBackgroundColor,
        background: rectangleDivBackground,
      };
    }, [rectangleDivBackgroundColor, rectangleDivBackground]);

    const primaryButtonStyle = useMemo(() => {
      return {
        left: primaryButtonLeft,
        display: primaryButtonDisplay,
      };
    }, [primaryButtonLeft, primaryButtonDisplay]);

    return (
      <div
        className={styles.button}
        style={buttonStyle}
        onClick={onButtonClick}
      >
        <div className={styles.buttonChild} style={rectangleDivStyle} />
        <b className={styles.primaryButton} style={primaryButtonStyle}>
          {buttonText}
        </b>
      </div>
    );
  }
);

export default Button;
