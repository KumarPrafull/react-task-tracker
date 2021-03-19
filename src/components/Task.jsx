const Task = ({task, onDelete, onToggle}) => {

  
  return (
    <div onDoubleClick={()=>onToggle(task.id)} className={`task ${task.reminder ? 'reminder' : '' }`}>
      <h3>{task.text}<div onClick={()=>onDelete(task.id)} style={{ color: 'red', cursor: 'pointer'}}>x</div></h3>
      <p>{task.time}</p>
    </div>
  )
}

export default Task