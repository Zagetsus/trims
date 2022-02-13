import React from 'react';
import {Container, Icon, Text} from "./styles";

const DragDrop: React.FC = () => {
    return (
        <Container>
            <Icon />

            <Text>
                Jogue as imagens do aviamento
                aqui ou <span>clique para adicionar</span>{' '}
                do seu computador.
            </Text>
        </Container>
    );
};

export default DragDrop;
