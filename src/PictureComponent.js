import React from 'react'

class PictureComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="galleryDiv">
                <img className="galleryPicture" src={this.props.src}/>

            </div>
        )
    }
}

export default PictureComponent
