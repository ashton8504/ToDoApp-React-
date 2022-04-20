import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)  //Allows use to type stuff in 
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('')
  };

  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input
          type='test'
          placeholder='Add to List'
          value={input} name='test'
          className='todo-input'
          onChange={handleChange}
          ref={inputRef}
        />
        <button className='todo-button'> Add</button>
      </form>
    </div>
  )
}

export default TodoForm