// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component{
    constructor(){
        super()
        this.state = {
            mood: "happy"
        }
    }
    moodSwing = () => {
        let newMood = ""
        if (this.state.mood == "happy"){
            newMood = "sad"
        }
        else if (this.state.mood == "sad"){
            newMood = "happy"
        }
        this.setState({
            mood: newMood
        })
    }
    render(){
        return(
            <div onClick={this.moodSwing}>{this.state.mood}</div>
        )    
    }
}