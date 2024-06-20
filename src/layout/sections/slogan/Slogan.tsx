import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSection>
            <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle title={"I Am Available For Freelance"}></SectionTitle>
                <Button>Hire me</Button>
            </FlexWrapper>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    
`

