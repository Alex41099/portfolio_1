import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {IconWrapper} from "../skills/Skill";

export const Testimony = () => {
    return (
        <StyledSection>
            <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle title={"Testimony"}/>
                <IconWrapper>
                    <Icon iconId={"quote"}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    ${IconWrapper} {
        margin-top: 50px;
    }
`