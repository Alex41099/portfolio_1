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
        description: "Crafting semantic, accessible markup for cross-browser compatible and high-performance web pages"
    },
    {
        iconId: "css3Svg",
        title: "CSS3",
        description: "Advanced styling techniques including Flexbox to create responsive and visually appealing user interfaces"
    },
    {
        iconId: "reactSvg",
        title: "react",
        description: "Developing scalable and interactive user interfaces with a component-based approach and state management"
    },
    {
        iconId: "typescriptSvg",
        title: "typescript",
        description: "Enhancing code reliability and maintainability through strict typing and modern language features"
    },
    {
        iconId: "styledComponentsSvg",
        title: "STYLED COMPONENTS",
        description: "Building styled components with CSS-in-JS for streamlined styling in React applications"
    },
    {
        iconId: "figmaSvg",
        title: "Web Design",
        description: "Design analysis, extraction of specifications, resources for accurate UI implementation!"
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

