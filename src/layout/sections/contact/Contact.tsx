import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {SectionTitle, StyledH2} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import { S } from './Contact_Styles';

export const Contact = () => {
    return (
        <S.StyledSection>
            <Container>
                <SectionTitle title={"Contact"}/>
                <S.StyledForm>
                    <S.StyledInput placeholder={"Name"}/>
                    <S.StyledInput placeholder={"Name"}/>
                    <S.StyledInput placeholder={"Message"} as={"textarea"}/>
                    <Button>Send Message</Button>
                </S.StyledForm>
            </Container>

        </S.StyledSection>
    );
};

