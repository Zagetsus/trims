import React from 'react';
import {Container, Content, First, Form, FormColumn, FormRow, Second, SectionTitle, Subtitle, Title} from "./styles";
import Input from "../../components/Input";
import DragDrop from "../../components/DragDrop";

const RegisterTrims: React.FC = () => {
    return (
        <Container>
            <Content>
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
                        </div>
                    </Form>
                </First>
                <Second>
                    <SectionTitle>Fotos</SectionTitle>
                    <DragDrop />
                </Second>
            </Content>
        </Container>
    );
};

export default RegisterTrims;
