import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
    width: 170px;
    height: 32px;
    
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 1.4;
    cursor: pointer;

    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        width: 78px;
        height: 10px;
        background-color: ${theme.color.accent};
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        transition: ${theme.animation.transition};
    }
    
    &:hover {
        &::before {
            width: 100%;
            height: 100%;
        }
    }
`

