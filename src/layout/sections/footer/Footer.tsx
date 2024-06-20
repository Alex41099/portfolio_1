import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <StyledH2>Svetlana</StyledH2>
                <StyledUl>
                    <li>
                        <StyledA href="#"><Icon width={"21"} height={"21"} viewBox={"0 0 21 21"} iconId={"instagramSvg"}/></StyledA>
                    </li>
                    <li>
                        <StyledA href="#"><Icon width={"21"} height={"21"} viewBox={"0 0 21 21"} iconId={"telegramSvg"}/></StyledA>
                    </li>
                    <li>
                        <StyledA href="#"><Icon width={"21"} height={"21"} viewBox={"0 0 21 21"} iconId={"vkSvg"}/></StyledA>
                    </li>
                    <li>
                        <StyledA href="#"><Icon width={"21"} height={"21"} viewBox={"0 0 21 21"} iconId={"linkedinSvg"}/></StyledA>
                    </li>
                </StyledUl>
                <StyledCopyright>© 2023 Svetlana Dyablo, All Rights Reserved.</StyledCopyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 40px 0 40px;
    background-color: ${theme.color.primaryBg};
    
`

const StyledH2 = styled.h2`
    font-family: "Josefin Sans", sans-serif;
    font-size: 22px;
    font-weight: 700;
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
