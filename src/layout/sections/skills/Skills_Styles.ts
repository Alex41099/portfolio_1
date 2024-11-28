import styled from "styled-components";
import {StyledH2} from "../../../components/SectionTitle";
import {theme} from "../../../styles/Theme";

// Skills

const StyledDiv = styled.section`
    padding: 90px 0 70px;

    position: relative;
    z-index: 1;

    @media ${theme.media.mobile} {
        padding: 70px 0 17px;

        ${StyledH2} {

            &::before {
                bottom: -22px;
            }
        }
    }
`

// Skill

const Div = styled.div`
    min-width: 330px;
    flex-grow: 1;
    min-height: 340px;
    
    margin: 30px 0 -30px;

    @media ${theme.media.mobile} {
        min-height: 280px;
        margin: 10px 0 50px;
    }

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

export const S = {
    StyledDiv,
    Div,
    StyledH3,
    StyledP,
    IconWrapper,
}