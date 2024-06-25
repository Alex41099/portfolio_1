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
import { S } from './Works_Styles';

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]

const work = [
    {
        photoProj: photoProj1,
        title: "Social Network",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit" +
            " amet, consectetur adipisicing elit."
    },
    {
        photoProj: photoProj2,
        title: "Timer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit " +
            "amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim "
    }
]

export const Works = () => {
    return (
        <S.StyledSection>
            <Container>
                <SectionTitle title={"My Works"}/>
                <TabMenu array={worksItems}/>

                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    {work.map((s, index) => {
                        return <Work photoProj={s.photoProj} title={s.title} description={s.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledSection>
    );
};

