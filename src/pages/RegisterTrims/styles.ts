import styled from "styled-components";

interface IColumn {
    size: 'sm' | 'md' | 'lg'
}

export const Container = styled.section`
  padding: 40px 0 94px;
`;

export const Content = styled.section`
  max-width: var(--container);
  margin: 0 auto 80px;
`;

export const ContentRow = styled.section`
  display: flex;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  color: ${props => props.theme.colors.primary};
`;

export const Subtitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 19.2px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const First = styled.div`
  flex: 1;
  margin-right: 16px;
`;

export const Second = styled(First)`
  padding-top: 60px;
  max-width: 308px;
  margin-right: 0;
`

export const Form = styled.div`
  margin: 40px 0 80px;
`;

export const FormRow = styled.div`
  display: flex;

  margin-bottom: 32px;
`;

export const FormColumn = styled.div<IColumn>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  width: ${({size}) => size === 'sm' ? '200px' : size === 'md' ? '307px' : '416px'};
  
  &:not(:last-child){
    margin-right: 16px;
  }
`;

export const Section = styled.div`
  margin-bottom: 32px;
`;


export const SectionTitle = styled.h2`
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 24px;
`;

export const ColorsButton = styled.div`
  max-width: 318px;
`;

export const ButtonRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  
  > button {
    max-width: 200px;
    
    &:first-child {
      margin-right: 16px;
    }
  }
`;
