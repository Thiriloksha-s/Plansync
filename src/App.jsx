import React, {useState, useEffect} from 'react'
import './App.css'
import Taskfill from './components/Taskfill';
import TaskCol from './components/TaskCol';
import todoicon from './assets/todo.png';
import inprogressicon from './assets/progress.png';

import doneicon from './assets/done.png';

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks]=useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className='app'>
      
      <Taskfill setTasks={setTasks}/>
      <main className='main'>
        <TaskCol title="To do" icon={todoicon} tasks={tasks} status='todo' handleDelete={handleDelete}/>
        <TaskCol title="Doing" icon={inprogressicon} tasks={tasks} status='doing' handleDelete={handleDelete}/>
        
        <TaskCol title="Done" icon={doneicon} tasks={tasks} status='done' handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App
