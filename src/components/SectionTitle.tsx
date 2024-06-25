import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

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


export const StyledH2 = styled.h2`
    text-align: center;
    margin-bottom: 90px;
    
    ${font({family: '"Josefin Sans", sans-serif;', weight: 600, Fmax: 36, Fmin: 30})}
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