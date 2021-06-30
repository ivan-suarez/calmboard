import React from 'react';
import axios from 'axios';

export default class Replybox extends React.Component{
    state = {
        name: 'anonymous',
        date: "01/01/19",
        hour: "23:04:23",
        number: 1,
        text: ""
    }

    handleChangeName = event => {
        this.setState({name: event.target.value});
    }
    handleChangeText = event => {
        this.setState({text: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        const post = {
            name: this.state.name,
            date: this.state.date,
            hour: this.state.hour,
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