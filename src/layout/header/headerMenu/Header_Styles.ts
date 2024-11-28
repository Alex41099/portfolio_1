import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const Nav = styled.nav`
    
    ul {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin: 13px 0;
        z-index: 5;
    }
    
    @media ${theme.media.tablet} {
        ul {
            display: none;
        }
        
    }
`

// MobileMenu

const MobileNav = styled.nav<{ isOpen: boolean }>`

    display: none;
    
    ul {
        a {
            opacity: 0;
        }
        transform: translateY(-100%);
        transition: 1s;
    }

    @media ${theme.media.tablet} {
        display: block;
        height: 100px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            ul {
                a {
                    opacity: 1;
                }
                background-color: #1F1F20E5;
                z-index: 999;
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                transform: translateY(0%);
                

                li a {
                    color: ${theme.color.accent};
                    font-size: 1.5rem;
                }
        `}

    }
}
`

const BurgerStyled = styled.span<{isOpen: boolean}>`

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: none;

        @media ${theme.media.tablet} {
            display: block;
        }

        position: fixed;
        top: 10px;
        right: 50px;
        background-color: cornsilk;
        z-index: 9999;

        span {
            position: absolute;
            background-color: #FFFFFF;
            width: 36px;
            height: 2px;
            display: block;
            transform: rotate(-45deg);
            top: 20px;

        }

        

        &:after {
            position: absolute;
            content: "";
            background-color: #FFFFFF;
            width: 36px;
            height: 2px;
            top: 20px;
            left: 0;
            transform: rotate(45deg);
        }
    `}

    ${props => !props.isOpen && css<{ isOpen: boolean }>` 
        
        display: none;

        @media ${theme.media.tablet} {
            display: block;
        }

        position: fixed;
        top: 20px;
        right: 50px;
        background-color: cornsilk;
        z-index: 9999;

        span {
            position: absolute;
            background-color: #FFFFFF;
            width: 36px;
            height: 2px;
            display: block;
        }

        &:before {
            position: absolute;
            content: "";
            background-color: #FFFFFF;
            width: 36px;
            height: 2px;
            top: 10px;
        }

        &:after {
            position: absolute;
            content: "";
            background-color: #FFFFFF;
            width: 20px;
            height: 2px;
            top: 20px;
            left: 16px;
        }
    `}

`

const BurgerOnClick = styled.span`
    display: block;
    position: absolute;
    width: 70px;
    height: 68px;
    top: 2px;
    right: 0;
`

export const S = {
    Nav,

    MobileNav,
    BurgerStyled,
    BurgerOnClick,

}