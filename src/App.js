import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'
import Home from './Client/Home';
import Program from './Client/Program';
import Login from './Admin/Login';
import Dashboard from './Admin/Dashboard';
import Blog from './Admin/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/program-kami" element={<Program/>} />

          {/* Admin */}
          {
            ["/admin", "/admin/login"].map(path => (
              <Route path={path} element={<Login/>} />
            ))
          }
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
