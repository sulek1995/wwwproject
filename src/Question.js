import React from 'react'

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    changeDisplay() {
        if (this.state.display === false) {
            this.setState({display: true})
        } else {
            this.setState({display: false})
        }
    }

    render() {
        if (this.state.display) {
            return (
                <div>
                    <button onClick={this.changeDisplay} className="accordion">{this.props.quest}</button>
                    <p>{this.props.answer}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.changeDisplay} className="accordion">{this.props.quest}</button>
                </div>
            )
        }
    }

}

export default Question