import './App.css';
import TaskList from './components/taskList/TaskList';
import { TaskProvider } from './context';

function App() {

  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
}

export default App;
