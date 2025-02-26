import React from 'react';
import styled from "styled-components";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";

export const Header: React.FC = () => {
    // Переключение между mobileMenu и desktopMenu
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <StyledHeader>
            <Fixed>
            <Container>
                <Logo/>
                <FlexWrapper justify={"flex-end"}>
                    {width < breakpoint? <MobileMenu/>: <DesktopMenu/>}
                </FlexWrapper>
            </Container>
            </Fixed>
        </StyledHeader>
    );
};

const Fixed = styled.div`
    width: 100%;
    position: fixed;
    z-index: 99;
    background-color: ${theme.color.primaryBg};
`

const StyledHeader = styled.header`
    background-color: ${theme.color.primaryBg};
    height: 100px;
`