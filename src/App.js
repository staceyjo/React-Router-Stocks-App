import './App.css';
// import route and our components
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div className="App">
      {/* use Route component to specify routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/stocks" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
