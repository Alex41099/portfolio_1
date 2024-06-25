import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";

const Main = styled.section`
    min-height: 97vh;
    background-color: #fff5e7;
    display: flex;
    padding-top: 35px;


    @media ${theme.media.mobile} {
        min-height: 88vh;
        padding-bottom: 80px;
    }

    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            flex-wrap: wrap;
            justify-content: center;
            gap: 0;
        }
    }

    ${FlexWrapper} {
        gap: 30px;
    }
`

const PhotoWrapper = styled.span`
    position: relative;
    z-index: 0;
    margin-right: 20px;

    &::before {
        content: "";
        position: absolute;
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.color.accent};
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -20px;
            left: 17px;
        }

    }
`

const Photo = styled.img`
    width: 350px;
    min-height: 430px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        width: 310px;
        min-height: 380px;
        
    }
`

const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;
`

const Name = styled.h2`
    ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36
})} //font-family: "Josefin Sans", sans-serif;
            //font-size: 50px;
            //font-weight: 700;
    letter-spacing: 2.5px;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.color.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;

        }
    }

    @media ${theme.media.mobile} {
        span {
            &::before {
                bottom: -7px;
            }
        }
        
        margin: 15px 0 25px;
    }
`

const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})}

    {
        @media screen and (max-width: 891px) {
            padding-bottom: 34px;
        }
    }
`

export const S = {
    Main,
    PhotoWrapper,
    Photo,
    SmallText,
    Name,
    MainTitle,
}