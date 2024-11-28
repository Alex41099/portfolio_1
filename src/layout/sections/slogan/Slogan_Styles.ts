import styled from "styled-components";
import {StyledH2} from "../../../components/SectionTitle";
import {theme} from "../../../styles/Theme";

const StyledSection = styled.section`
    
    ${StyledH2} {
        margin-bottom: 78px;
    }

    @media ${theme.media.mobile} {
        padding: 68px 0 69px;
    }
`

export const S = {
    StyledSection,
}