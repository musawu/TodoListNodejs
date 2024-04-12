import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsFillTrashFill, BsCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';

function Home() {
  const [todos, setTodos] = useState([]); // State for todo items

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleEdit  = (id)=>{
    axios.get('http://localhost:3001/update/' + id)
      .then(result => console.log(result))
      .catch(err => console.log(err))
    

  }
  const handleDelete = (id) =>{
    axios.delete('http://localhost:3001/Delete/' + id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))

  }

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create /> {/* Create component for adding new items */}
      {todos.length === 0 ? (  // Check if there are any todos
        <div>
          <h2>No Records</h2> {/* Message for empty list */}
        </div>
      ) : (
        <div>
          {/* Display existing todos */}
          {todos.map((todo, index) => (  // Define index variable here
            <div key={index} style={taskStyle} onClick={()=>handleEdit(todo._id)}> {/* Add key for each todo */}

              {todo.done ? <BsFillCheckCircleFill className='icon'/> : <BsCircleFill className='icon'/>}
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>

              {/* <p style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.task}</p> */}

             <span><BsFillTrashFill className='icon' onClick={() =>handleDelete(todo._id)} /> </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Define CSS styles as an object
const taskStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'black',
  color: 'white',
  height: '35px',
  padding: '2px 5px',
  marginTop: '2px',
  width: '345px'
};

export default Home;
