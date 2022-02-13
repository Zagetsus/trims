import styled from "styled-components";

interface IColumn {
    size: 'sm' | 'md' | 'lg'
}

export const Container = styled.section`
  margin: 40px 0 94px;
`;

export const Content = styled.section`
  display: flex;
  max-width: var(--container);
  margin: 0 auto 80px;
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

export const Form = styled.form`
  margin-top: 40px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const FormColumn = styled.div<IColumn>`
  width: ${({size}) => size === 'sm' ? '200px' : size === 'md' ? '307px' : '416px'};
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 24px;
`;
