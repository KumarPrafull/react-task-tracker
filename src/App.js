import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Deliver Ruby on Rails Project',
      time: '12 March 2021',
      reminder: true,
    },
  
  
    {
      id: 2,
      text: 'Start Python Django React App',
      time: '18 March 2021',
      reminder: true,
    },
    
    {
      id: 3,
      text: 'Update PHP-Wordpress Blog',
      time: '22 March 2021',
      reminder: false,
    }
    
  ])

  //add task
  const addTask =(task) => {
      const id = Math.floor(Math.random()*10000) + 1
      const newTask = {id, ...task} 
      setTasks([...tasks, newTask])
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
      <Header onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} id={tasks.id} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
      <Footer />
    </div>
  );
}

export default App;
