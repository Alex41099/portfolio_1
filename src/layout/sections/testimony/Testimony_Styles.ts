import styled from "styled-components";
import {IconWrapper} from "../skills/Skills_Styles";
import {theme} from "../../../styles/Theme";
import {StyledH2} from "../../../components/SectionTitle";

const StyledSection = styled.section`
    position: relative;
    z-index: 1;
    
    ${IconWrapper} {
        margin-top: 35px;
    }
    
    padding-bottom: 66px;

    @media ${theme.media.mobile} {
        padding: 80px 0 80px;
        
        ${StyledH2} {
            margin-bottom: 70px;
            
            &::before {
                bottom: -20px;
            }
        }
    }
`

export const S = {
    StyledSection,

}