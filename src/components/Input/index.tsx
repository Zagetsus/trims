import React, {InputHTMLAttributes} from 'react';
import {Container, InputText, Message, MessageContainer, Title} from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    error?: boolean;
    title: string;
    message?: string;
}

const Input: React.FC<Props> = ({error, title, message, ...props}) => {

    return (
        <Container>
            <Title>{title}</Title>
            <InputText error={error} {...props} />
            <MessageContainer>
                <Message error={error}>{message}</Message>
            </MessageContainer>
        </Container>
    );
};

export default Input;
