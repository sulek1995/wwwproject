import React from 'react'
import QuestionsComponent from '../src/QuestionsComponent'
import MainNavbar from '../src/MainNavbar'


class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <MainNavbar/>
                <div className="bgimg-1"/>

                <div id="portfolio" className="div1">
                    <h3 className="h3paral">Parallax Demo</h3>
                    <p></p>
                </div>

                <div className="bgimg-2"/>

                <div id="faq" style={{position: 'relative'}}>
                    <QuestionsComponent id="faq"/>
                </div>

                <div className="bgimg-3"/>

            </div>

        )
    }
}

export default Main