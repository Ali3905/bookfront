import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Properties from './pages/Properties';
import DetailPage from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/properties' element={<Properties/>}/>
      <Route path='/details' element={<DetailPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
