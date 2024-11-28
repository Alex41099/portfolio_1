import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledH2} from "../../../components/SectionTitle";
import {theme} from "../../../styles/Theme";
import {LinkBefore} from "../../../components/LinkBefore";
import {Button} from "../../../components/Button";

const StyledSection = styled.section`
    position: relative;
    z-index: 1;
    
    ${FlexWrapper} {
        gap: 30px;
        
    }

    @media screen and (max-width: 768px) {
        ${FlexWrapper} {
            flex-wrap: wrap;
            justify-content: center;
        }
        
        ${StyledH2} {
            &::before {
                bottom: -20px;
            }
            margin-bottom: 74px;
        }
        
        padding: 72px 0 97px;
    }
    
    @media ${theme.media.mobile} {
        padding: 75px 0 72px;
    }
`

// Work

const StyledDiv = styled.div`
    min-width: 330px;

    max-width: 540px;
    width: 100%;

    background-color: ${theme.color.secondaryBg};

    ${LinkBefore} {
        padding: 10px 0;
        z-index: 0;

        & + ${LinkBefore} {
            margin-left: 20px;
        }

        &::before {
            width: 100%;
            left: 0;
            bottom: 5px;
            transform: translateX(-2%);
            z-index: -1;
        }
        
    }

}
`

const ImageWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.30);
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${theme.animation.transition};
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        transition: ${theme.animation.transition};

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    @media ${theme.media.tablet} {
        ${Button} {
            opacity: 1
        }

        &::before {
            opacity: 1;
        }
    }

`

const StyledImg = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    
`

const Description = styled.div`
    margin: 16px 20px 35px 20px;

    
`

const StyledH3 = styled.h3`
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;

`

const StyledP = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: normal;

    margin: 15px 0 12px;
    
`

const StyledA = styled.a`


`

export const S = {
    StyledSection,
    StyledDiv,
    ImageWrapper,
    StyledImg,
    Description,
    StyledH3,
    StyledP,
    StyledA,

}