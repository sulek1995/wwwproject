import React from 'react'
import Question from '../src/Question'

class QuestionsComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Question quest="Kto kierową jest?" answer="Chorąży"/>
                <Question quest="Gdzie kluczyki są od czołgu?" answer="Wie chorąży"/>
                <Question quest="Gdzie ja teraz dostane taki błotnik?" answer="Takiego błotnika już nie dostane"/>
                <Question quest="Gdzie ja teraz dostane taki błotnik?" answer="Takiego błotnika już nie dostane"/>
            </div>
        )
    }
}

export default QuestionsComponent
