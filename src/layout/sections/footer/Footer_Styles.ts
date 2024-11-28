import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const StyledFooter = styled.footer`
    position: relative;
    z-index: 1;
    
    padding: 40px 0 40px;
    background-color: ${theme.color.primaryBg};
    
`

const StyledH2 = styled.h2`
    ${font({family: '"Josefin Sans", sans-serif;', weight: 700, Fmax: 22, Fmin: 16})}
    
    letter-spacing: 3px;
`

const StyledUl = styled.ul`
    display: flex;
    padding: 0 0;
    margin: 30px 0 30px;
    gap: 20px;

`

const StyledA = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.10);
    color: ${theme.color.accent};
    transition: ${theme.animation.transition};
    
    &:hover {
        background-color: ${theme.color.accent};
        color: ${theme.color.secondaryBg};
        transform: translateY(-4px);
    }
    
`

const StyledCopyright = styled.span`
    color: rgba(255, 255, 255, 0.50);
    font-size: 12px;
    font-weight: 400;
    
`

export const S = {
    StyledFooter,
    StyledH2,
    StyledUl,
    StyledA,
    StyledCopyright,
}