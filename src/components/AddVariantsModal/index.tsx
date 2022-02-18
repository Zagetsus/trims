import React from 'react';
import Modal from "../Modal";
import {ButtonContainer, Container, Content, Title} from "./styles";
import Button from "../Button";
import Select from "../Select";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddVariantsModal: React.FC<Props> = ({open, setOpen}) => {
    const options = [
        { name: 'Opção 1', value: 1, color: '#000000' },
        { name: 'Opção 2', value: 2, color: '#00FF00' },
        { name: 'Opção 3', value: 3, color: '#0000FF' },
        { name: 'Opção 5', value: 4, color: '#FF0000' },
        { name: 'Opção 6', value: 4, color: '#FF0000' },
        { name: 'Opção 7', value: 4, color: '#FF0000' },
        { name: 'Opção 8', value: 4, color: '#FF0000' },
        { name: 'Opção 9', value: 4, color: '#FF0000' },
        { name: 'Opção 10', value: 4, color: '#FF0000' },
        { name: 'Opção 11', value: 4, color: '#FF0000' },
        { name: 'Opção 12', value: 4, color: '#FF0000' },
    ]

    return (
      <Modal open={open} onClose={() => setOpen(false)}>
          <Container>
              <Title>Adicionar cores disponíveis</Title>
              <Content>
                <Select title={'teste'} type={'text'} options={options} onChange={(item) => console.log(item)}/>
              </Content>
              <ButtonContainer>
                <Button>Salvar quantidades</Button>
              </ButtonContainer>
          </Container>
      </Modal>
  );
};

export default AddVariantsModal;
