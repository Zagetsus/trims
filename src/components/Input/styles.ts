import styled from "styled-components";

interface IError {
    error?: boolean
}

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const InputText = styled.input<IError>`
  width: 100%;
  height: 48px;
  border: ${({error, theme}) => error ? `2px solid ${theme.colors.error}` : `1px solid ${theme.colors.border}`};
  border-radius: 8px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 19px;

  color: ${props => props.theme.colors.text};
  
  &::placeholder {
    color: ${props => props.theme.colors.placeholder};
  }
  
  &:focus {
    border: ${({error, theme}) => error ? `2px solid ${theme.colors.error}` : `2px solid ${theme.colors.primary}`};
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  height: 17px;
  margin-top: 8px;
`;

export const Message = styled.p<IError>`
  font-size: 14px;
  line-height: 17px;
  color: ${({error, theme}) => error ? theme.colors.error : theme.colors.text };
`;
