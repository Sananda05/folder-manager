import './App.css';
import Navbar from './components/navbar/Navbar';
import FileManager from './page/FileManager';

function App() {
  return (
    <div className="App">
        <div className='navbar_container'>
        <Navbar/>
        </div>
        <div className='body_container'>
        <FileManager/>
        </div>

    </div>
  );
}

export default App;
