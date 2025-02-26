import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {LinkBefore} from "../../../components/LinkBefore";
import {Button} from "../../../components/Button";
import { S } from './Works_Styles';

type WorkPropsType = {
    photoProj: string
    title: string
    description: string
    href: string
    github: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    const [href, setHref] = useState<string>("")

    return (
        <S.StyledDiv>
            <S.ImageWrapper>
                <S.StyledImg src={props.photoProj}/>
                <Button><a href={props.href}>View Project</a></Button>
            </S.ImageWrapper>
            <S.Description>
                <S.StyledH3>{props.title}</S.StyledH3>
                <S.StyledP>{props.description}</S.StyledP>
                <S.Div>
                    <LinkBefore onClick={()=>setHref("Demo")} href={props.href}
                                active={href === "Demo"}>Demo</LinkBefore>
                    <LinkBefore onClick={()=>setHref("Code")} href={props.github}
                                active={href === "Code"}>Code</LinkBefore>
                </S.Div>
            </S.Description>
        </S.StyledDiv>
    );
};

