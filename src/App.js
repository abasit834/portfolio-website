import './App.css';
import AboutMe from './Components/AboutMe';
import Home from "./Components/Home";
import TechStack from './Components/TechStack';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/techstack" element={<TechStack/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
