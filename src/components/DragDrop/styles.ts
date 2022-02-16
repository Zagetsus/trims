import styled from "styled-components";
import { ReactComponent as SVGIcon } from "../../assets/svg/add-photo.svg";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 308px;
  height: 295px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.card};
  border: 3px dashed ${props => props.theme.colors.tertiary};
  cursor: pointer;
`;

export const Icon = styled(SVGIcon)`
  margin-bottom: 16px;
`;

export const Text = styled.p`
  max-width: 196px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${props => props.theme.colors.textTertiary};
  
  > span {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: ${props => props.theme.colors.primary};
  }
`;
