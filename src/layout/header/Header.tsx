import React from 'react';
import styled from "styled-components";
import {Menu} from "./menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const items = ["Home", "Skills", "Works",  "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <Menu array={items}/>
                    <MobileMenu array={items}/>
                </FlexWrapper>
            </Container>

        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: ${theme.color.primaryBg}
`