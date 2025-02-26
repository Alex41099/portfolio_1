import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <StyledA onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={"codeSvg"}/>
        </StyledA>
    );
};

const StyledA = styled.a`
    position: fixed;
    z-index: 5;
`