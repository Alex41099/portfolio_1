import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle, StyledH2} from "../../../components/SectionTitle";
import {IconWrapper} from "../skills/Skill";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Testimony = () => {
    return (
        <StyledSection>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle title={"Testimony"}/>
                    <IconWrapper>
                        <Icon iconId={"quote"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    ${IconWrapper} {
        margin-top: 35px;
    }
    
    padding-bottom: 66px;

    @media ${theme.media.mobile} {
        padding: 80px 0 80px;
        
        ${StyledH2} {
            margin-bottom: 70px;
            
            &::before {
                bottom: -20px;
            }
        }
    }
`