import React, {Component} from 'react';

class TodoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:this.props.todo.value
        }
    }

    render() {
        const {todo: {disable}, editTodo, index, deleteTodo}=this.props
        return (
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <input style={{height:50,width:420,padding:10,borderWidth:disable ? 0 : 1}}
                name='editTodo'
                       value={this.state.todo}
                       disabled={disable}
                       onChange={(e)=> this.setState({todo: e.target.value})}
                />
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:160}}>
                    <button onClick={()=> editTodo(index, this.state.todo)}>
                        {
                            disable ? 'Edit' : 'Save'
                        }
                    </button>
                    <button onClick={()=> deleteTodo(index)}>
                        remove
                    </button>

                </div>

            </div>
        );
    }
}

export default TodoCard;