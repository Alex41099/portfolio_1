import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./layout/sections/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/sections/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";
import React from "react";
import {LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "./app/store";


function App() {
    const snackbarStatus = useSelector<RootState, boolean>(state => state.app.statusSnackbar)

    return (
        // App
        <div className="App">
            {snackbarStatus &&
                <Div>
                    <LinearProgress/>
                </Div>}
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Footer/>
            <GoTopBtn/>

        </div>
    );
}

export default App;

const Div = styled.div`
    position: fixed;
    background-color: red;
    width: 100%;
    
    top: 53px;
    z-index: 9999;
`