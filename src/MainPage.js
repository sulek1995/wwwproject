import React from 'react'


class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <div  className="bgimg-1"/>

                <div id="portfolio" className="div1">
                    <h3 className="h3paral">Parallax Demo</h3>
                    <p> </p>
                </div>

                <div className="bgimg-3"/>

                <div style={{position:'relative'}}>
                    <div className="div3">
                        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                    </div>
                </div>

                <div className="bgimg-1"/>

            </div>

        )
    }
}

export default Main