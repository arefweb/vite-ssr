import { Routes, Route } from "react-router-dom";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import Layout from './layout';
import Home from './pages/home';
import About from "./pages/about";
import Dashboard from './pages/dashboard';

function App() {

  return (
     <MantineProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
     </MantineProvider>
  );
}

export default App
