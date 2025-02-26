import React, {ElementRef, useRef} from 'react';
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import { S } from './Contact_Styles';
import emailjs from '@emailjs/browser';
import Snackbar, {SnackbarCloseReason} from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./snackbar.css"
import {useDispatch} from "react-redux";
import {setStatusSnackbarAC} from "../../../app/app-reducer";


export const Contact = () => {
    const dispatch = useDispatch()
    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        dispatch(setStatusSnackbarAC(true))
        emailjs
            .sendForm('service_1j7bj3v', 'template_0zr8fx1', form.current, {
                publicKey: 'I6maFEUjoBxQfG-cx',
            })
            .then(
                () => {
                    dispatch(setStatusSnackbarAC(false))
                    setOpen(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    const [open, setOpen] = React.useState(false);

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <S.StyledSection id={"contact"}>
            <Container>
                <SectionTitle title={"Contact"}/>
                <S.StyledForm ref={form} onSubmit={sendEmail}>
                    <S.StyledInput required placeholder={"Name"} name={"user_name"}/>
                    <S.StyledInput required placeholder={"email"} name={"email"}/>
                    <S.StyledInput required placeholder={"Subject"} name={"subject"}/>
                    <S.StyledInput required placeholder={"Message"} as={"textarea"} name={"message"}/>
                    <Button>Send Message</Button>
                </S.StyledForm>
                <div>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert
                            onClose={handleClose}
                            severity="success"
                            variant="filled"
                            sx={{width: '100%'}}
                        >
                            message delivered!
                        </Alert>
                    </Snackbar>
                </div>
            </Container>

        </S.StyledSection>
    );
};

