import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ["Home", "Skills", "Works",  "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <Menu array={items}/>
                </FlexWrapper>
            </Container>

        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: #c9c9d5;
`