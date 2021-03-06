import styled from "styled-components";
import {ReactComponent as LogoSVG} from "../../assets/svg/logo.svg";

interface IAlign {
    align: 'flex-start' | 'center' | 'flex-end'
}

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  
  display: flex;
  align-items: center;

  width: 100%;
  height: 84px;
  
  background-color: ${props => props.theme.colors.backgroundSecondary};
  border-bottom: 1px solid #BDBDBD;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--container);
  margin: 0 auto;
`;

export const HeaderColumn = styled.div<IAlign>`
  display: flex;
  flex: 1;
  justify-content: ${({align}) => align};
`;

export const Logo = styled(LogoSVG)`
`;
