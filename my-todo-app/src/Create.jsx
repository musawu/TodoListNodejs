import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [task, setTask] = useState('');

    const handleAdd = () => {
      axios.post('http://localhost:3001/add', { task: task })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    };

    const inputStyle = {
        width: '300px',
        padding: '10px',
        border: '2px solid #ccc',
        borderRadius: '5px',
        marginRight: '10px',
        outline: 'none',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div>
            <input
                type="text"
                name=""
                id=""
                className="create_form_input"
                placeholder="Enter Task"
                style={inputStyle}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                type="button"
                className="create_form_button"
                style={buttonStyle}
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    );
}

export default Create;
