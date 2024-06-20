import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {LinkBefore} from "../../components/LinkBefore";

type TabMenuPropsType = {
    array: Array<string>
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledNav>
            <ul>
                {props.array.map((item, index) => {
                    return <li key={index}>
                        <LinkBefore href="#">{item}</LinkBefore>
                    </li>
                })}
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    ul {
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-bottom: 50px ;
    }
`
