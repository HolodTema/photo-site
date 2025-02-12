import React, {useContext, useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './styles/main.css'
import ButtonToTop from "./components/ButtonToTop";
import Toast from './components/Toast'
import * as ConstFile from './util/const'
import {AppContext} from "./contexts/AppContext";

export default function App() {
    console.log("render App")
    useContext(null)
    const [page, setPage] = useState(ConstFile.PAGE_PORTFOLIO)

    const checkoutAbout = () => {
        setPage(ConstFile.PAGE_ABOUT)
    }

    return (
        <AppContext.Provider
            value={{
                page,
                checkoutAbout
            }}>
            < div className="app_root">
                <ButtonToTop/>
                <Toast text="hello"/>
                <Header/>
                <Main id="main">
                </Main>
                <Footer/>
            </div>
        </AppContext.Provider>
    )
}
