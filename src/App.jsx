import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greetings from './pages/Greetings';


function App() { 
  return (
    <Router>
      <Routes>
        <Route index element={<Greetings />} />
      </Routes>
    </Router>
  );
}

export default App
