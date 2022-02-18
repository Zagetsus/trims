import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 701px;
  height: 640px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 16px;
  padding: 42px 40px;
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.theme.colors.primary};
`;

export const Content = styled.div`
  flex: 1;
  margin: 48px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  
  > button {
    width: 200px;
  }
`;
