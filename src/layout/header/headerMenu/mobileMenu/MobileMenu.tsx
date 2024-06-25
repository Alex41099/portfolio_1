import React, {useState} from 'react';
import { S } from '../Header_Styles';
import {Menu} from "../menu/Menu";

type MobileMenuPropsType = {
    menuItems: Array<string>
}

export const MobileMenu = (props: MobileMenuPropsType) => {
    let [editOpen, setEditOpen] = useState(false)

    return (
        <S.MobileNav isOpen={editOpen}>
            <S.BurgerOnClick onClick={()=> {editOpen? setEditOpen(false): setEditOpen(true)}}>
                <S.BurgerStyled isOpen={editOpen}>
                    <span></span>
                </S.BurgerStyled>
            </S.BurgerOnClick>

            <Menu menuItems={props.menuItems}/>
        </S.MobileNav>
    );
};



