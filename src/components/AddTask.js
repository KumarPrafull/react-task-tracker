import { useState } from 'react';


const AddTask = ({ onAdd }) => {
  const[text, setText] = useState('')
  const[time, setTime] = useState('')
  const[reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    
    if (!text) {
      alert('Please add a task')
      return
    }
    onAdd({ text, time, reminder})

    setText('')
    setTime('')
    setReminder(false)

  }


  return (
    <form className='add-form' onSubmit={onSubmit} >
      <div className='form-control' >
        <label>Task</label>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} ></input>
      </div>
      <div className='form-control' >
        <label>Deadline</label>
        <input type='text'  value={time} onChange={(e) => setTime(e.target.value)}></input>
      </div>
      <div className='form-control form-control-check' >
        <label>Important</label>
        <input type='checkbox' checked={reminder}  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <div className='form-control' >
        <button className='btn btn-block' type='submit' >Add Skill</button>
      </div>
    </form>
    
  )
}

export default AddTask