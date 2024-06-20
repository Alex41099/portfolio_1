import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledDiv>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
            </Text>
            <Name>@ivan ivanow</Name>
            <Pagination>
                <span> </span>
                <span className={"active"}> </span>
                <span> </span>
            </Pagination>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    max-width: 500px;
    text-align: center;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin: 72px 0 22px;
`

const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 42px;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;

        & + span {
            margin-left: 5px;
        }

        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.5);
    }

    & .active {
        width: 19px;
        background-color: ${theme.color.accent};
    }
    
`