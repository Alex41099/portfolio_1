import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./Skill";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles';
import {Slide} from "react-awesome-reveal";

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
        <S.StyledDiv id={"skills"}>
            <Container>
                <SectionTitle title={"My Skills"}/>
                <Slide>
                    <FlexWrapper wrap="wrap">
                        {skill.map((s, index) => {
                            return <Skill key={index} iconId={s.iconId} title={s.title} description={s.description}/>
                        })}
                    </FlexWrapper>
                </Slide>
            </Container>
        </S.StyledDiv>
    );
};

