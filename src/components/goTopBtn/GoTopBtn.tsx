import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";


export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, []);

    return (
        <>
            {showBtn && <Btn onClick={() => {scroll.scrollToTop()}}>
                <Icon iconId={"goTop"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
            </Btn>}
        </>
    );
};

const Btn = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 10;
`

