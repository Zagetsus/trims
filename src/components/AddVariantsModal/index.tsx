import React from 'react';
import Modal from "../Modal";
import {AddLink, ButtonContainer, Container, Content, Exit, RowVariant, Title} from "./styles";
import Button from "../Button";
import VariantListCard from "./VariantListCard";
import {ReactComponent as Closed} from "../../assets/svg/icons/icon-close.svg";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddVariantsModal: React.FC<Props> = ({open, setOpen}) => {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Container>
                <Exit>
                    <Closed onClick={() => setOpen(false)} />
                </Exit>
                <Title>Adicionar cores disponíveis</Title>
                <Content>
                    <RowVariant>
                        <VariantListCard id={1}/>
                    </RowVariant>
                    <RowVariant>
                        <VariantListCard id={2}/>
                    </RowVariant>
                </Content>
                <AddLink>Adicionar cor</AddLink>
                <ButtonContainer>
                    <Button>Salvar quantidades</Button>
                </ButtonContainer>
            </Container>
        </Modal>
    );
};

export default AddVariantsModal;
