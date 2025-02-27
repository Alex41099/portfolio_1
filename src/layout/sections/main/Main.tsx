import React from 'react';
import photo from "../../../accets/images/avatar (1).png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Alikhan Talgat</span></S.Name>
                        {/*<S.MainTitle>A web developer.</S.MainTitle>*/}
                        <S.MainTitle>
                            <p>A web developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A web developer.', 'and react developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <Tilt
                            className="parallax-effect-img"
                            tiltMaxAngleX={40}
                            tiltMaxAngleY={40}
                            perspective={800}
                            transitionSpeed={1500}
                            gyroscope={true}>
                            <S.Photo src={photo}/>
                        </Tilt>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>

        </S.Main>
    );
};

