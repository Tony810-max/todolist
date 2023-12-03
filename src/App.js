import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import TodoListFirst from "./pages/TodoListFirst";
import TestPage from "./pages/TestPage";
function App() {
  return (
   <BrowserRouter >
   <Routes>
   <Route path="/template" element={<HomePage />} />
   <Route path="/" element={<TodoListFirst />} />
   <Route path="/test" element={<TestPage />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
