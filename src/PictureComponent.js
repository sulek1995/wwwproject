import React from 'react'

class PictureComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="whole">
                <div className="galleryDiv">
                    <center><h1 className="myH1">{this.props.title}</h1></center>
                    <img className="galleryPicture" src={this.props.src}/>
                </div>
            </div>
        )
    }
}

export default PictureComponent
