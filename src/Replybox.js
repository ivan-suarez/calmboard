import React from 'react';
import axios from 'axios';

export default class Replybox extends React.Component{
    state = {
        name: 'Anonymous',
        date: "01/01/19",
        hour: "23:04:23",
        number: 1,
        text: ""
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

    textCountAdd = () => {
        let num = this.state.number
        num++
        this.setState({number: num})
    }
    handleSubmit = event => {
        event.preventDefault();

        let time = new Date()
        let today = time.getUTCDay()+"/"+time.getUTCMonth() + "/" + time.getUTCFullYear()
        let now = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
        console.log(today)
        console.log(now)
        
        this.textCountAdd()
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
        <div>
            <h3>This is the Reply Box</h3>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" onChange={this.handleChangeName} />
                <input type="text" name="text" onChange={this.handleChangeText} />
                <button type="submit" onClick={this.handleSubmit}>Post</button>
            </form>
        </div>
    )
    }

}