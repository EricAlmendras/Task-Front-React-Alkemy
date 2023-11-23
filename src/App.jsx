import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TaskDetails from './TaskDetails';
import NotFound from './NotFound';
import Create from './Create';
import EditTask from './EditarTask';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit/:id" element={<EditTask/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      </div>
    </div>
  </Router>
   
  );
}

export default App;
