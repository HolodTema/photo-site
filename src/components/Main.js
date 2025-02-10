import React from 'react';
import Container from './Container';
import SectionHome from './SectionHome'
import SectionContacts from './SectionContacts'
import SectionAbout from "./SectionAbout";
import SectionPrice from "./SectionPrice";

class Main extends React.Component {
    render() {
        return (
            <main>
                {/*<SectionPrice/>*/}
                <SectionAbout/>
                {/*<SectionHome/>*/}
            </main>
        )
    }
}

export default Main