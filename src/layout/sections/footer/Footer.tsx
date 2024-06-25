import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import { S } from './Footer_Styles';

const styledA = [
    {
        href: "#",
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        iconId: "instagramSvg"
    },
    {
        href: "#",
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        iconId: "telegramSvg"
    },
    {
        href: "#",
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        iconId: "vkSvg"
    },
    {
        href: "#",
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        iconId: "linkedinSvg"
    }
]

export const Footer = () => {
    return (
        <S.StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.StyledH2>Svetlana</S.StyledH2>
                <S.StyledUl>
                    {styledA.map((s, index) => {
                        return <li>
                            <S.StyledA href={s.href}><Icon width={s.width} height={s.height} viewBox={s.viewBox}
                                                    iconId={s.iconId}/></S.StyledA>
                            </li>})}
                </S.StyledUl>
                <S.StyledCopyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.StyledCopyright>
            </FlexWrapper>
        </S.StyledFooter>
    );
};

