import React from "react";
import { Button } from "@mui/material";

export interface Props {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
  size?: "small" | "medium" | "large";
  children:React.ReactNode;
  onClick?: ()=> void;
}

const ButtonComponent: React.FC<Props> = ({children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
}

export default ButtonComponent;

ButtonComponent.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "medium",
  children: "Button",
  onClick: () => console.log("Button Click"),
};
