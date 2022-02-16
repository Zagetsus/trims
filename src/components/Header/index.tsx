import React, {useContext} from 'react';
import ReactSwitch from "react-switch";
import {ThemeContext} from "styled-components";
import {Container, Content, HeaderColumn, Logo} from "./styles";

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
    const {colors, title} = useContext(ThemeContext);
    return (
        <Container>
            <Content>
                <HeaderColumn align={'flex-start'}/>
                <HeaderColumn align={'center'}>
                    <Logo />
                </HeaderColumn>
                <HeaderColumn align={'flex-end'}>
                    <ReactSwitch
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        offColor={colors.tertiary}
                        onColor={colors.primary}
                        onChange={toggleTheme}
                    />
                </HeaderColumn>
            </Content>
        </Container>
    );
};

export default Header;
