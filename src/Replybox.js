import React from 'react';
import axios from 'axios';
import "./Replybox.css"

export default class Replybox extends React.Component{

    constructor(){
        super()
        this.state = {
            name: 'Anonymous',
            date: "01/01/19",
            hour: "23:04:23",
            number: 1,
            text: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   

    handleChangeName = event => {
        let nameVar = event.target.value
        if(nameVar === "")
            nameVar = "Anonymous"
        this.setState({name: nameVar});
    }
    handleChangeText = event => {
        this.setState({text: event.target.value});
    }

    
    handleSubmit = event => {
        event.preventDefault();

        let time = new Date()
        let today = time.getUTCDay()+"/"+time.getUTCMonth() + "/" + time.getUTCFullYear()
        let now = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
       
        console.log(this.state.number)
        this.setState({number: this.state.number+1})
        console.log(this.state.number)
        console.log(this.state.number+1)

        const post = {
            name: this.state.name,
            date: today,
            hour: now,
            number: this.state.number,
            text: this.state.text,
            
        };
        axios.post("http://localhost:8001/posts", post).then(
            res => {
            console.log(post)
            console.log(res);
            console.log(res.data);
        })
    }
    
    

    render(){
    return(
        <div class="replyBox">
            <form onSubmit={this.handleSubmit}>
                <div class="reply__header">
                <span>Name: </span>
                <input type="text" name="name" maxlength="15" onChange={this.handleChangeName} />
                <button type="submit" onClick={this.handleSubmit}>Post</button>
                </div>
                <div>
                <textarea type="text" name="text" maxlength="240" onChange={this.handleChangeText} />
                </div>
                
            </form>
        </div>
    )
    }

}