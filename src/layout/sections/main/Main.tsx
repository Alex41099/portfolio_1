import React from 'react';
import photo from "../../../accets/images/photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Main_Styles';

export const Main = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle>A web developer.</S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo}/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>

        </S.Main>
    );
};

