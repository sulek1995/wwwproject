import React from 'react'
import FileInput from 'react-file-input'

class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.sendPicture = this.sendPicture.bind(this);
        this.state = {
            picture: null
        }
    }

    sendPicture(){

    }

    handleChange(event){
        console.log('Selected file:', event.target.files[0]);
        this.setState({picture:event.target.files[0]});
    }

    render(){
        return(

            <form>
                <center><FileInput name="myImage"
                                   accept=".png,.gif"
                                   placeholder="My Image"
                                   className="inputClass"
                                   onChange={this.handleChange} /></center>
                <center><button>Send picture</button></center>
            </form>
        )
    }
}

export default InputForm
