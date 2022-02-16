import styled from "styled-components";

interface Props {
    outline?: boolean;
    expand?: boolean;
}

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({expand}) => expand ? '100%' : 'auto'};

  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({outline, theme}) => outline ? 'transparent' : theme.colors.primary};
  border: 2px solid ${({theme}) => theme.colors.primary};

  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${({outline, theme}) => outline ? theme.colors.primary : theme.colors.white};

  cursor: pointer;

  svg {
    g {
      rect {
        fill: ${({outline, theme}) => outline ? theme.colors.primary : theme.colors.white};
      }
    }
  }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;

  width: 16px;
  height: 16px;
  
  &:first-child {
    margin-right: 8px;
  }
  
  &:last-child {
    margin-left: 8px;
  }
`
