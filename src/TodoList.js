
import React, { Component } from 'react';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
        }
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        })
    }
    render(){
        return(
        <div>
            <h1>Ma todo List</h1>
            <form>
                <input 
                value = {this.state.userInput} 
                type="text" 
                placeholder="test"
                onChange={this.onChange.bind(this)}
                />
                <button>Ajouter</button>
            </form>
        </div>
        )
    }
}

export default TodoList;
