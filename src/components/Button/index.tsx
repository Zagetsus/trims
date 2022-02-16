import React from 'react';
import {Container, IconContainer} from "./styles";

interface Props {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  expand?: boolean;
  outline?: boolean;
}

const Button: React.FC<Props> = ({children, iconLeft, iconRight, expand, outline}) => {

  return (
      <Container expand={expand} outline={outline}>
        <IconContainer>{iconLeft}</IconContainer>
        {children}
        <IconContainer>{iconRight}</IconContainer>
      </Container>
  );
};

export default Button;
