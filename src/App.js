import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListFirst from "./pages/TodoListFirst";
function App() {
  return (
   <BrowserRouter >
   <Routes>
   <Route path="/template" element={<HomePage />} />
   <Route path="/" element={<TodoListFirst />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
