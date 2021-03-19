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
      text: 'Ruby on Rails',
      time: '3 months',
      reminder: true,
    },
  
  
    {
      id: 2,
      text: 'Python Django',
      time: '3 months',
      reminder: true,
    },
    
    {
      id: 3,
      text: 'JavaScript, CSS, HTML',
      time: '3 months',
      reminder: false,
    },

    {
      id: 4,
      text: 'React & Node',
      time: '3 months',
      reminder: true,
    },

    {
      id: 5,
      text: 'Angular',
      time: '3 months',
      reminder: true,
    },

    {
      id: 6,
      text: 'Java and Spring Boot',
      time: '3 months',
      reminder: true,
    },

    {
      id: 7,
      text: 'Vue.js',
      time: '3 months',
      reminder: false,
    },

    {
      id: 8,
      text: 'Android Kotlin',
      time: '3 months',
      reminder: false,
    },

    {
      id: 9,
      text: 'React Native',
      time: '3 months',
      reminder: false,
    },

    {
      id: 10,
      text: 'PHP & Laravel',
      time: '3 months',
      reminder: false,
    },
    
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
