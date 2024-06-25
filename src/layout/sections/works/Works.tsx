import React from 'react';
import {DesktopMenu} from "../../header/headerMenu/desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./Work";
import photoProj1 from "../../../accets/images/proj-1.webp"
import photoProj2 from "../../../accets/images/proj-2.webp"
import styled from "styled-components";
import {SectionTitle, StyledH2} from "../../../components/SectionTitle";
import {TabMenu} from "../../tabmenu/TabMenu";
import {Container} from '../../../components/Container';
import {theme} from "../../../styles/Theme";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]

export const Works = () => {
    return (
        <StyledSection>
            <Container>
                <SectionTitle title={"My Works"}/>
                <TabMenu array={worksItems}/>

                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Work photoProj={photoProj1}
                          title={"Social Network"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                              "tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit" +
                              " amet, consectetur adipisicing elit."}/>
                    <Work photoProj={photoProj2}
                          title={"Timer"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                              "tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit " +
                              "amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim "}/>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

const StyledSection = styled.section`
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
