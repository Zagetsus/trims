import React from 'react';
import {Column, Container, IdList} from "./styles";
import Select from "../../Select";
import Input from "../../Input";

interface Props {
    id: number
}

const VariantListCard: React.FC<Props> = ({id}) => {
    const options = [
        {name: 'Preto', value: 1, color: '#000000'},
        {name: 'Verde', value: 2, color: '#00FF00'},
        {name: 'Azul', value: 3, color: '#0000FF'},
        {name: 'Vermelho', value: 4, color: '#FF0000'},
        {name: 'Vermelho 2', value: 4, color: '#FF0000'},
        {name: 'Vermelho 3', value: 4, color: '#FF0000'},
        {name: 'Vermelho 4', value: 4, color: '#FF0000'},
        {name: 'Vermelho 5', value: 4, color: '#FF0000'},
        {name: 'Vermelho 6', value: 4, color: '#FF0000'},
        {name: 'Vermelho 7', value: 4, color: '#FF0000'},
        {name: 'Vermelho 8', value: 4, color: '#FF0000'},
    ]

    return (
        <Container>
            <IdList>{id}</IdList>
            <Column size={'md'}>
                <Select title={'Selecione a cor'} type={'color'} options={options} onChange={(item) => console.log(item)} />
            </Column>
            <Column size={'md'}>
                <Input title={'Código de cor'} />
            </Column>
            <Column size={'sm'}>
                <Input title={'Qtd.'} />
            </Column>
        </Container>
    );
};

export default VariantListCard;
