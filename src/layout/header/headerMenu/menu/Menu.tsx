import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "react-scroll";

// const items = ["Home", "Skills", "Works",  "Testimony", "Contact"]
const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Works",
        href: "works"
    },
    {
        title: "Testimony",
        href: "testimony"
    },
    {
        title: "Contact",
        href: "contact"
    },

]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <li key={index}>
                    <StyledA  // на базе библиотеки react-scroll!
                        activeClass={"active"}
                        spy={true}
                        to={item.href}
                        smooth={true}
                    >
                        {item.title}
                    </StyledA>
                </li>
            })}
        </ul>
    );
};

const StyledA = styled(Link)` // библиотека react-scroll
    position: relative;
    
    &::before {
        position: absolute;
        content: "";
        width: calc(100% + 16px);
        bottom: -4px;
        transform: translateX(-8px);
        background-color: ${theme.color.accent};
        transition: ${theme.animation.transition};
        height: 0px;
    }
    
    &:hover, &.active {
        &::before {
            height: 10px;
        }
    }
`