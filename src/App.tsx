import './App.css';
import LoginForm from './Login';
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import TodoList from "./Todo";

function App() {
  return (
    <div className="App">
      <div className="formContainer">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/fetch" element={<TodoList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
