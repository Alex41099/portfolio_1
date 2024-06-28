import styled from "styled-components";
import {theme} from "../styles/Theme";

export const LinkBefore = styled.a`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;

    position: relative;
    z-index: 0;

    &::before {
        content: "";
        display: inline-block;
        width: calc(100% + 20px);
        transform: translateX(-10px);
        background-color: ${theme.color.accent};
        position: absolute;
        bottom: -5px;
        left: 0;
        z-index: -1;
        transition: ${theme.animation.transition};
        height: 0px;
        
    }

    &:hover{
        &::before {
            height: 10px;
        }
    }
    
`

