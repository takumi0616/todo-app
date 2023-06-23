import React ,{useState} from 'react';
//import './App.css';
import {Task} from './Types';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList'

const initialState: Task[] = [
    {
      id: 2,
      title:'次にやること',
      done: false
    },{
      id: 1,
      title:'はじめにやること',
      done: true
    }
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput setTasks = {setTasks} tasks = {tasks} />
      <TaskList setTasks = {setTasks} tasks = {tasks} />
    </div>
  )
}

export default App;