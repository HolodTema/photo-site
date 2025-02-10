import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './styles/main.css'
import ButtonToTop from "./components/ButtonToTop";
import Toast from './components/Toast'

class App extends React.Component {
    render() {
        return (
            <div className="app_root">
                <ButtonToTop/>
                <Toast text="hello"/>
                <Header/>
                <Main>
                </Main>
                <Footer/>
            </div>
        )
    }
}

export default App