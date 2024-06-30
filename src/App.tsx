import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {

  return (
    <div>
      <h2>Welcome!</h2>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>This is "Home" page</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>This is "About" Page</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App
