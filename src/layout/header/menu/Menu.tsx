import React from 'react';
import styled from "styled-components";

type MenuPropsType = {
    array: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledNav>
            <ul>
                {props.array.map((item, index) => {
                    return <li key={index}>
                        <a href="#">{item}</a>
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
        gap: 30px;
        margin: 13px 0;
    }
    
    @media screen and (max-width: 768px) {
        ul {
            display: none;
        }
        
    }
`

