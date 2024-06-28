import React from 'react';
import { S } from '../Header_Styles';
import {Menu} from "../menu/Menu";

type MenuPropsType = {

}

export const DesktopMenu = (props: MenuPropsType) => {
    return (
        <S.Nav>
            <Menu/>
        </S.Nav>
    );
};

