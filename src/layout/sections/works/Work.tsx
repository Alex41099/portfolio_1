import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {LinkBefore} from "../../../components/LinkBefore";
import {Button} from "../../../components/Button";
import { S } from './Works_Styles';

type WorkPropsType = {
    photoProj: string
    title: string
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <S.StyledDiv>
            <S.ImageWrapper>
                <S.StyledImg src={props.photoProj}/>
                <Button>View Project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.StyledH3>{props.title}</S.StyledH3>
                <S.StyledP>{props.description}</S.StyledP>
                <LinkBefore href={"#"}>Demo</LinkBefore>
                <LinkBefore href={"#"}>Code</LinkBefore>
            </S.Description>
        </S.StyledDiv>
    );
};

