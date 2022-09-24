import React, { useState, useEffect, useRef } from 'react';// useEffect and useRef. to create the focus efect. Explanation tutorial min 42

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : ''); // this ternary operator is for keeping the value while editing

  const inputRef = useRef(null);

  useEffect(() => {// to create the focus efect. Explanation tutorial min 42
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault(); //It prevents refreshing when we are working with the form

    props.onSubmit({
      id: Math.floor(Math.random() * 10000), // create a ramdom id with 10000 combinations, the chance of to equal ids be create is very small
      text: input
    });
    setInput(''); // This delete the input text automatically once we press enter. I' have to add this to the SongSAver assigment.
  };

  // Bellow the is a ternary operator. Check line 43, in order to display two input areas (one for adding elements and another for editing them)
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef} // to create the focus efect. Explanation tutorial min 42
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
