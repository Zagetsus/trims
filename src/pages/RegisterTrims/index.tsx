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
    Second, Section,
    SectionTitle,
    Subtitle,
    Title
} from "./styles";
import Input from "../../components/Input";
import DragDrop from "../../components/DragDrop";
import Button from "../../components/Button";

import {ReactComponent as IconRight} from "../../assets/svg/icons/icon-arrow-right.svg";
import {ReactComponent as IconLeft} from "../../assets/svg/icons/icon-cloud.svg";
import AddVariantsModal from "../../components/AddVariantsModal";
import Select from "../../components/Select";

const RegisterTrims: React.FC = () => {
    const [addColorsModal, setAddColorsModal] = useState(false);

    const options = [
        {name: 'Opção 1', value: 1, color: '#000000'},
        {name: 'Opção 2', value: 2, color: '#00FF00'},
        {name: 'Opção 3', value: 3, color: '#0000FF'},
        {name: 'Opção 5', value: 4, color: '#FF0000'},
        {name: 'Opção 6', value: 4, color: '#FF0000'},
        {name: 'Opção 7', value: 4, color: '#FF0000'},
        {name: 'Opção 8', value: 4, color: '#FF0000'},
        {name: 'Opção 9', value: 4, color: '#FF0000'},
        {name: 'Opção 10', value: 4, color: '#FF0000'},
        {name: 'Opção 11', value: 4, color: '#FF0000'},
        {name: 'Opção 12', value: 4, color: '#FF0000'},
    ]


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
                                    <Select title={'Tipo de Aviamento'} type={'text'} options={options}
                                            onChange={(item) => console.log(item)}/>
                                </FormColumn>
                                <FormColumn size={'md'}>
                                    <Select title={'Categoria'} type={'text'} options={options}
                                            onChange={(item) => console.log(item)}/>
                                </FormColumn>
                                <FormColumn size={'md'}>
                                    <Select title={'Subcategoria'} type={'text'} options={options}
                                            onChange={(item) => console.log(item)}/>
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
                                    <Select title={'Unidade de medida'} options={options}
                                            onChange={(item) => console.log(item)}/>
                                </FormColumn>
                                <FormColumn size={'sm'}>
                                    <Input title={'Quantidade por embalagem'}/>
                                </FormColumn>
                                <FormColumn size={'sm'}>
                                    <Button outline expand>Configurar embalagem</Button>
                                </FormColumn>
                            </FormRow>

                        </Form>
                    </First>
                    <Second>
                        <Section>
                            <SectionTitle>Foto principal</SectionTitle>
                            <DragDrop/>
                        </Section>

                        <Section>
                            <SectionTitle>Cores</SectionTitle>
                            <ColorsButton>
                                <Button onClick={() => setAddColorsModal(true)} iconRight={<IconRight/>} expand>Adicionar cores</Button>
                            </ColorsButton>
                        </Section>
                    </Second>
                </ContentRow>

                <ButtonRows>
                    <Button iconLeft={<IconLeft/>} iconRight={<IconRight/>} outline expand>Salvar rascunho</Button>
                    <Button iconRight={<IconRight/>} expand>Salvar produto</Button>
                </ButtonRows>
            </Content>

            <AddVariantsModal open={addColorsModal} setOpen={setAddColorsModal}/>
        </Container>
    );
};

export default RegisterTrims;
