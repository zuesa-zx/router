import {useState} from 'react';
import './App.css';
import Moviedetails from './components/Moviedetails/Moviedetails'
import MovieList from './components/MovieList/MovieList'
import {Route,Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
function App() {
  const [search,setSearch] = useState('')
  const [rating,setRating] = useState(5)
  return (
    <div className="App">
      <NavBar setRating={setRating} setSearch={setSearch}/>
      <Routes>
        <Route index element={<MovieList rating={rating} search={search}/>}/>
        <Route path='Movie/:id' element={<Moviedetails/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
