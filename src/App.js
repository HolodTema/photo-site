import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './styles/main.css'
import ButtonToTop from "./components/ButtonToTop";


export default function App() {
    console.log('App render')

    return (
        <div className="app_root">
            <ButtonToTop/>
            <Header/>
            <Main id="main">
            </Main>
            <Footer/>
        </div>

    )
}
