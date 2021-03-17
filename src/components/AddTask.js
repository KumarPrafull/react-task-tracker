import { useState } from 'react';


const AddTask = () => {
  const[text, setText] = useState('')
  const[time, setTime] = useState('')
  const[reminder, setReminder] = useState(false)


  return (
    <form className='add-form' >
      <div className='form-control' >
        <label>Task</label>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} ></input>
      </div>
      <div className='form-control' >
        <label>Time</label>
        <input type='text'  value={time} onChange={(e) => setTime(e.target.value)}></input>
      </div>
      <div className='form-control form-control-check' >
        <label>Set Reminder</label>
        <input type='checkbox'  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <div className='form-control' >
        <button className='btn btn-block' type='submit' >Add Task</button>
      </div>
    </form>
    
  )
}

export default AddTask