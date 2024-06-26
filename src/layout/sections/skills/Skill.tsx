import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledDiv>
            <FlexWrapper direction ={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <StyledH3>{props.title}</StyledH3>
                <StyledP>{props.description}</StyledP>
            </FlexWrapper>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    width: 380px;
    min-height: 340px;

`

export const IconWrapper = styled.span`
    position: relative;
    z-index: 0;
    
    &::before{
        content: "";
        width: 80px;
        height: 80px;
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -55%) rotate(45deg);
        background-color: rgba(255, 255, 255, 0.10);
        z-index: -1;
    }
`

const StyledH3 = styled.h3`
    margin: 70px 0 15px;

    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;

`

const StyledP = styled.p`
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    
    max-width: 340px;

`