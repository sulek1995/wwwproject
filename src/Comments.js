import React from 'react'
import * as axios from 'axios'
import InfiniteScroll from '../node_modules/react-infinite-scroller/dist/InfiniteScroll'
import CommentComponent from "./CommentComponent";

var credentials = btoa("tomo" + ':' + "qwerty12");
var BasicAuth = 'Basic ' + credentials;

var config = {
    auth: {
        username: 'tomo',
        password: 'qwerty12'
    }
};

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            comment : "",
            adr: props.id,
            hasMoreItems: true,
            nextHref: null
        };
        this.commentChange = this.commentChange.bind(this);
        this.commentSend = this.commentSend.bind(this);
        this.refresh = this.refresh.bind(this);
        this.server = axios.create();
    }

    componentDidMount(){
        this.server.get(this.props.id + "comments/",
            config
        ).then(response => this.setState({comments: response.data.results}))

        let acc = document.getElementsByClassName("accordionComment");
        let i;

        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        }
    }

    refresh(){
        this.server.get(this.props.id + "comments/",
            config
        ).then(response => {
            this.setState({comments: response.data.results})
            let panels = document.getElementsByClassName("panel");
            let i;
            for (i = 0; i < panels.length; i++){
                panels[i].style.maxHeight = panels[i].scrollHeight + "px";
            }
        })
    }

    commentChange(event){
        this.setState({comment:event.target.value});
    }
    //
    commentSend(){
        console.log(this.state.adr);
        this.server.post(this.state.adr + "comments/", {text: this.state.comment}, config).then(this.refresh);
    }


    render() {
        var items = [];

        this.state.comments.map((com, i) => {
            items.push(
                <li><CommentComponent text={com.text} owner={com.owner}/></li>
            )
        });

        return (
        <div>
            <button className="accordionComment">Komentarze ...</button>
            <div className="panel" id="comcom">
                <input type="text" placeholder="Wpisz komentarz" onChange={this.commentChange}/>
                <button onClick={this.commentSend}>Dodaj komentarz</button>
                <ul>{items}</ul>
            </div>
        </div>

        )
    }
}
export default Comments