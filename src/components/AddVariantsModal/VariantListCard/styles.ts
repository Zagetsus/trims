import styled from "styled-components";

interface ISize {
    size: 'sm' | 'md'
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const IdList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.card};

  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.colors.primary};
  margin-right: 8px;
`

export const Column = styled.div<ISize>`
  width: ${({size}) => size === 'sm' ? '68px' : '200px'};
  margin-right: 8px;
`
