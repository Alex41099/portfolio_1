import styled from "styled-components";
import {StyledH2} from "../../../components/SectionTitle";
import {theme} from "../../../styles/Theme";

const StyledSection = styled.section`
    position: relative;
    z-index: 1;
    
    text-align: center;
    padding-bottom: 93px;

    textarea {
        height: 155px;
        resize: none;
    }
    
    Button {
        margin-top: 10px;
    }
    
    ${StyledH2} {
        margin-bottom: 76px;
    }
    
    @media ${theme.media.mobile} {
        padding: 76px 0 80px;
        
        ${StyledH2} {
            margin-bottom: 57px;
            
            &::before {
                bottom: -20px;
            }
        }
    }
    
`

const StyledForm = styled.form`
    max-width: 540px;
    margin: 0 auto;
`

const StyledInput = styled.input`
    width: 100%;
    height: 32px;
    margin: 15px 0 0;
    padding: 7px 15px 7px;

    border: 1px solid ${theme.color.borderColor};
    background: ${theme.color.secondaryBg};
    
    color: ${theme.color.font};
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.6px;
    
    &::placeholder {
        color: ${theme.color.placeholder};
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.color.borderColor};
    }
    
`

export const S = {
    StyledSection,
    StyledForm,
    StyledInput,

}