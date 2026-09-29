import './App.css';
import TaskList from './components/TaskList/TaskList';
import tasksData from './tasks.json'; // Импортируем массив задач

function App() {
  return (
    <div>
      <h1>Список задач</h1>
      {/* Передаем массив задач через пропс tasks */}
      <TaskList tasks={tasksData} />
    </div>
  );
}

export default App;