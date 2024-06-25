import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle, StyledH2} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";

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
    
    ${StyledH2} {
        margin-bottom: 78px;
    }

    @media ${theme.media.mobile} {
        padding: 68px 0 69px;
    }
`

