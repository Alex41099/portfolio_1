import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledSection>
            <Container>
                <SectionTitle title={"Contact"}/>
                <StyledForm>
                    <StyledInput placeholder={"Name"}/>
                    <StyledInput placeholder={"Name"}/>
                    <StyledInput placeholder={"Message"} as={"textarea"}/>
                    <Button>Send Message</Button>
                </StyledForm>
            </Container>

        </StyledSection>
    );
};

const StyledSection = styled.section`
    text-align: center;

    textarea {
        height: 155px;
        resize: none;
    }
    
    button {
        margin-top: 10px;
    }
`

const StyledForm = styled.form`
    max-width: 540px;
    margin: 0 auto;
`

const StyledInput = styled.input`
    width: 100%;
    height: 32px;
    margin: 15px 0 0;
    padding: 7px 15px 7px;

    border: 1px solid ${theme.color.borderColor};
    background: ${theme.color.secondaryBg};
    
    color: ${theme.color.font};
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.6px;
    
    &::placeholder {
        color: ${theme.color.placeholder};
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.color.borderColor};
    }
    
`