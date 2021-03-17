import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Read for BPSC',
      time: 'Mar 18, 2021, 11.00 am',
      reminder: true,
    },
  
  
    {
      id: 2,
      text: 'Learn Python Django',
      time: 'Mar 22, 2021, 11.00 am',
      reminder: true,
    },
  
    {
      id: 3,
      text: 'Learn React',
      time: 'Mar 23, 2021, 11.00 am',
      reminder: false,
    },
    
  ])

  //add task
  const addTask =(task) => {
    console.log('add task', task)
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id  !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((t)=>
        t.id === id? {...t, reminder: !t.reminder } : t )
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} id={tasks.id} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
