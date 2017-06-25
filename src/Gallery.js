import React from 'react'
import QuestionsComponent from '../src/QuestionsComponent'
import PictureComponent from '../src/PictureComponent'

class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <PictureComponent src="http://www.uniwallpaper.com/static/images/eiffel-tower-wallpaper-18_fRZLW4V.jpg"/>
                <PictureComponent src="https://www.planwallpaper.com/static/images/general-night-golden-gate-bridge-hd-wallpapers-golden-gate-bridge-wallpaper.jpg"/>
                <PictureComponent src="http://www.uniwallpaper.com/static/images/flat-mountains-wallpaper_uLhbABA.jpg"/>
            </div>

        )
    }
}

export default Main