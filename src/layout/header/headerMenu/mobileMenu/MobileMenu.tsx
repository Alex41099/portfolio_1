import React, {useState} from 'react';
import { S } from '../Header_Styles';
import {Menu} from "../menu/Menu";

type MobileMenuPropsType = {

}

export const MobileMenu = (props: MobileMenuPropsType) => {
    let [editOpen, setEditOpen] = useState(false)

    return (
        <S.MobileNav isOpen={editOpen} onClick={() => setEditOpen(!editOpen)}>
            <S.BurgerOnClick onClick={()=> setEditOpen(!editOpen)}>
                <S.BurgerStyled isOpen={editOpen}>
                    <span></span>
                </S.BurgerStyled>
            </S.BurgerOnClick>

            <Menu/>
        </S.MobileNav>
    );
};



