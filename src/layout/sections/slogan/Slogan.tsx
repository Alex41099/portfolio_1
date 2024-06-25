import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle, StyledH2} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";
import { S } from './Slogan_Styles';

export const Slogan = () => {
    return (
        <S.StyledSection>
            <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle title={"I Am Available For Freelance"}></SectionTitle>
                <Button>Hire me</Button>
            </FlexWrapper>
        </S.StyledSection>
    );
};


