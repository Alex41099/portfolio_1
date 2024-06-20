import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";

type SectionTitlePropsType = {
    title: string
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledH2>
            {props.title}
        </StyledH2>
    );
};


const StyledH2 = styled.h2`
    text-align: center;
    margin-bottom: 90px;

    font-family: "Josefin Sans", sans-serif;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 5px;
    
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.color.accent};
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        
    }  
`