import React from "react";

import "./custom-button.styles.css";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sing-in" : ""} ${
      inverted ? "inverted" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
