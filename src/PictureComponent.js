import React from 'react'
import CommentComponent from '../src/CommentComponent'
import Comments from '../src/Comments'

class PictureComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="whole">
                <div className="galleryDiv">
                    <center><h1 className="myH1">{this.props.title}</h1></center>
                    <img className="galleryPicture" src={this.props.src} href={this.props.src}/>
                    <Comments id={this.props.id}/>
                </div>
            </div>
        )
    }
}

export default PictureComponent
