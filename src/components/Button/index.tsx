import React, {ButtonHTMLAttributes} from 'react';
import {Container, IconContainer} from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  expand?: boolean;
  outline?: boolean;
}

const Button: React.FC<Props> = ({children, iconLeft, iconRight, expand, outline, ...props}) => {

  return (
      <Container {...props} expand={expand} outline={outline}>
        <IconContainer>{iconLeft}</IconContainer>
        {children}
        <IconContainer>{iconRight}</IconContainer>
      </Container>
  );
};

export default Button;
