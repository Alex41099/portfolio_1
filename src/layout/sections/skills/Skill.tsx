import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { S } from './Skills_Styles';

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Div>
            <FlexWrapper direction ={"column"} align={"center"}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>
                <S.StyledH3>{props.title}</S.StyledH3>
                <S.StyledP>{props.description}</S.StyledP>
            </FlexWrapper>
        </S.Div>
    );
};

