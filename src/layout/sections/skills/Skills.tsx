import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./Skill";
import styled from "styled-components";
import {SectionTitle, StyledH2} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import { S } from './Skills_Styles';

const skill = [
    {
        iconId: "codeSvg",
        title: "HTML5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "css3Svg",
        title: "CSS3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "reactSvg",
        title: "react",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "typescriptSvg",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "styledComponentsSvg",
        title: "STYLED COMPONENTS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "figmaSvg",
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
]

export const Skills = () => {
    return (
        <S.StyledDiv>
            <Container>
                <SectionTitle title={"My Skills"}/>

                <FlexWrapper wrap="wrap">
                    {skill.map((s, index) => {
                        return <Skill key={index} iconId={s.iconId} title={s.title} description={s.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledDiv>
    );
};

