import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../layout/sections/testimony/Slider.css"

const items = [
    <div className="item" data-value="1" style={{cursor: "pointer"}} >
      My goal is to create not just working websites, but intuitive and aesthetic interfaces that benefit users. I believe that high-quality code and attention to detail are the key to a successful project.

    </div>,
    <div className="item" data-value="1" style={{cursor: "pointer"}}>
      I strive to become an expert in front-end development and create innovative web applications. I am interested in new technologies and constantly explore new approaches to development.

    </div>,
    <div className="item" data-value="1" style={{cursor: "pointer"}}>
      During my work, I successfully implemented several large projects, including the development of an online store and a social network. I constantly improve my skills and keep up with new technologies.

    </div>,
];

export const Slider = () => (
    <StyledDiv>
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
        />
    </StyledDiv>
);

const StyledDiv = styled.div`
    max-width: 500px;
    width: 100%;
    text-align: center;
    margin-top: 65px;
`
