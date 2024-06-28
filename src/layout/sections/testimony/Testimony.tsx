import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import { S } from './Testimony_Styles';
import {IconWrapper} from "../skills/Skills_Styles";

export const Testimony = () => {
    return (
        <S.StyledSection id={"testimony"}>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle title={"Testimony"}/>
                    <IconWrapper>
                        <Icon iconId={"quote"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </S.StyledSection>
    );
};

