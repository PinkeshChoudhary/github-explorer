import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './MyComponents/Navbar';
import { HomePage } from './pages/HomePage';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element = {<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
