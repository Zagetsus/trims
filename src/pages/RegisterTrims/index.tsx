import React, {useState} from 'react';
import {
    ButtonRows,
    ColorsButton,
    Container,
    Content, ContentRow,
    First,
    Form,
    FormColumn,
    FormRow,
    Second,
    SectionTitle,
    Subtitle,
    Title
} from "./styles";
import Input from "../../components/Input";
import DragDrop from "../../components/DragDrop";
import Button from "../../components/Button";

import {ReactComponent as IconRight} from "../../assets/svg/icons/icon-arrow-right.svg";
import {ReactComponent as IconLeft} from "../../assets/svg/icons/icon-cloud.svg";
import Modal from "../../components/Modal";

const RegisterTrims: React.FC = () => {
    const [open, setOpen] = useState(true);
    return (
        <Container>
            <Content>
                <ContentRow>
                    <First>
                        <div>
                            <Title>Cadastrar aviamentos</Title>
                            <Subtitle>Inclua os produtos no estoque.</Subtitle>
                        </div>

                        <Form>
                            <FormRow>
                                <FormColumn size={'sm'}>
                                    <Input title={'Código'} placeholder={'código do seu aviamento'}/>
                                </FormColumn>
                                <FormColumn size={'lg'}>
                                    <Input title={'Nome do aviamento'} placeholder={'Escolha um nome'}/>
                                </FormColumn>
                                <FormColumn size={'md'}>
                                    <Input title={'Marca'} placeholder={'Marca que produziu'}/>
                                </FormColumn>
                            </FormRow>

                            <FormRow>
                                <FormColumn size={'md'}>
                                    <Input placeholder={'Selecione'} title={'Tipo de Aviamento'}/>
                                </FormColumn>
                                <FormColumn size={'md'}>
                                    <Input placeholder={'Selecione'} error title={'Categoria'}/>
                                </FormColumn>
                                <FormColumn size={'md'}>
                                    <Input placeholder={'Selecione'} title={'Subcategoria'}/>
                                </FormColumn>
                            </FormRow>

                            <FormRow>
                                <FormColumn size={'sm'}>
                                    <Input placeholder={'Selecione'} title={'Material'}/>
                                </FormColumn>
                                <FormColumn size={'lg'}>
                                    <Input placeholder={'Composição da peça'} title={'Composição'}/>
                                </FormColumn>
                                <FormColumn size={'md'}>
                                    <Input placeholder={'A espessura do produto'} title={'Espessura'}/>
                                </FormColumn>
                            </FormRow>

                            <FormRow>
                                <FormColumn size={'md'}>
                                    <Input placeholder={'00,00'} title={'Preço (Atacado)'}/>
                                </FormColumn>
                                <FormColumn size={'md'}>
                                    <Input placeholder={'00,00'} title={'Preço (Varejo)'}/>
                                </FormColumn>
                                <FormColumn size={'md'}>
                                    <Input placeholder={'Preço em KG'} title={'Peso'}/>
                                </FormColumn>
                            </FormRow>

                            <FormRow>
                                <FormColumn size={'sm'}>
                                    <Input placeholder={'Selecione'} title={'Unidade de medida'}/>
                                </FormColumn>
                            </FormRow>

                            <div>
                                <SectionTitle>Cores</SectionTitle>
                                <ColorsButton>
                                    <Button iconRight={<IconRight />} expand>Adicionar cores</Button>
                                </ColorsButton>
                            </div>
                        </Form>
                    </First>
                    <Second>
                        <SectionTitle>Foto principal</SectionTitle>
                        <DragDrop/>
                    </Second>
                </ContentRow>

                <ButtonRows>
                    <Button iconLeft={<IconLeft />} iconRight={<IconRight />} outline expand>Salvar rascunho</Button>
                    <Button iconRight={<IconRight />} expand>Salvar produto</Button>
                </ButtonRows>
            </Content>

            <Modal open={open} onClose={() => setOpen(false)} />
        </Container>
    );
};

export default RegisterTrims;
