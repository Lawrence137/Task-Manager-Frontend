import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import TaskItem from './components/TaskItem';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/list" element={<TaskList/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Signup/>} />
        <Route path="/newTask" element={<TaskForm/>} />
        <Route path="/tasks/:id" element={<TaskItem/>} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
