import React, {Component} from 'react';

class InputTodoComponent extends Component {
    render() {
        const {newTodo,handleChangeInput,addTodo}=this.props
        return (
            <>
                <h1  style={{textAlign:'left'}}>Todo App</h1>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop: 10}}>
                    <input
                    name="newTodo"
                    style={{height:50, width:420,padding:10}}
                    placeholder="Create youre plan"
                    onChange={handleChangeInput}
                    value={newTodo}
                    />
                    <button style={{height:50,width:160}} onClick={addTodo} disabled={!newTodo}>
                        Create
                    </button>
                </div>
            </>
        );
    }
}

export default InputTodoComponent;