import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {LinkBefore} from "../../../components/LinkBefore";
import {Button} from "../../../components/Button";

type WorkPropsType = {
    photoProj: string
    title: string
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledDiv>
            <ImageWrapper>
                <StyledImg src={props.photoProj}/>
                <Button>View Project</Button>
            </ImageWrapper>
            <Description>
                <StyledH3>{props.title}</StyledH3>
                <StyledP>{props.description}</StyledP>
                <LinkBefore href={"#"}>Demo</LinkBefore>
                <LinkBefore href={"#"}>Code</LinkBefore>
            </Description>
        </StyledDiv>
    );
};

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
        backdrop-filter: blur(4px);

        opacity: 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

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