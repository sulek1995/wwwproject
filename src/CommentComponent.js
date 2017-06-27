import React from 'react'
import * as axios from 'axios'

var config = {
    auth: {
        username: 'tomo',
        password: 'qwerty12'
    }
};

class CommentComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
        this.server = axios.create();
    }

    componentDidMount(){
        this.server.get(this.props.owner,
            config
        ).then(response => this.setState({username: response.data.username}));
    }

    render(){
        return(
            <div>
                <div className="comment">
                    <h1 className="username">{this.state.username}</h1>
                    <p className="commentText">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default CommentComponent
