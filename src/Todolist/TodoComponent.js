import React, {Component} from 'react';
import InputTodoComponent from "./InputTodoComponent";
import TodoCard from "./TodoCard";

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            listTodo:[],
            newTodo:"",
        }
    }
    addTodo = ()=>{
        this.state.listTodo.push({
            value: this.state.newTodo,
            disable: true
        })
        this.setState({listTodo: this.state.listTodo, newTodo: ""})
    }
    editTodo = (index, value)=>{
        this.state.listTodo[index].value = value
        this.state.listTodo[index].disable = !this.state.listTodo[index].disable
        this.setState({ ...this.state, listTodo: this.state.listTodo})
    }
    deleteTodo = (index) => {
        console.log(index);
        const newList = this.state.listTodo;
        newList.splice(index,1);
        this.setState({ ...this.state, listTodo: newList})
    }
    handleChangeInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    render() {
        return (
            <div style={{display: 'flex',flexDirection:'column',width:600}}>
                <InputTodoComponent handleChangeInput={this.handleChangeInput} newTodo={this.state.newTodo} addTodo={this.addTodo}/>
                <div style={{marginTop:40}}>
                    <h3 style={{textAlign:'start',marginBottom:10}}>List Todo :</h3>
                    {
                        this.state.listTodo.map((todo,index) => <TodoCard key={index} index={index} todo={todo} editTodo={this.editTodo} delete={this.deleteTodo} />)
                    }
                </div>
            </div>
        );
    }
}

export default TodoComponent;