import React from 'react';
import { S } from '../Header_Styles';
import {Menu} from "../menu/Menu";

type MenuPropsType = {
    menuItems: Array<string>
}

export const DesktopMenu = (props: MenuPropsType) => {
    return (
        <S.Nav>
            <Menu menuItems={props.menuItems}/>
        </S.Nav>
    );
};

