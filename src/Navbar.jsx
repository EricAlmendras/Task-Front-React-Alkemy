import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tasks</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#3583f1',
          borderRadius: '8px' 
        }}>New Task</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;