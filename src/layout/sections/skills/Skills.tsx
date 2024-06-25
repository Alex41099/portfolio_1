import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./Skill";
import styled from "styled-components";
import {SectionTitle, StyledH2} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledDiv>
            <Container>
                <SectionTitle title={"My Skills"}/>

                <FlexWrapper wrap="wrap">
                    <Skill iconId={"codeSvg"}
                           title={"HTML5"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                               "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"css3Svg"}
                           title={"CSS3"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" +
                               " tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"reactSvg"}
                           title={"REACT"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                               "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"typescriptSvg"}
                           title={"TYPESCRIPT"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                               "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"styledComponentsSvg"}
                           title={"STYLED COMPONENTS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                               "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"figmaSvg"}
                           title={"WEB DESIGN"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                               "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                </FlexWrapper>
            </Container>
        </StyledDiv>
    );
};

const StyledDiv = styled.section`
    padding: 90px 0 70px;
    
    
    @media ${theme.media.mobile} {
        padding: 70px 0 17px;
        
        ${StyledH2} {
            
            &::before {
                bottom: -22px;
            }
        }
    }
`
