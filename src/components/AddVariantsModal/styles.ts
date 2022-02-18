import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  width: 701px;
  height: 640px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 16px;
  padding: 42px 40px;
  
  overflow-y: auto;
`;

export const Exit = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`

export const Title = styled.h1`
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.theme.colors.primary};
`;

export const Content = styled.div`
  flex: 1;
  margin: 48px 0 39px;
`;

export const RowVariant = styled.div`
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  
  > button {
    width: 200px;
  }
`;

export const AddLink = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 48px;
  cursor: pointer;
`;
