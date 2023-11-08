import Home from "./Pages/Home";
import {Routes,Route} from 'react-router-dom'
import Movies from "./Pages/Movies";
import NotFound from "./Pages/NotFound";
import MovieIndivisual from "./Pages/MovieIndivisual";

const App = () => {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/home" element={<Home/>}/> 
          <Route path="/movies" element={<Movies/>}/> 
          <Route path="/*" element={<NotFound/>}/> 
          <Route path="/moviesinfo/:id" element={<MovieIndivisual/>}/> 
       </Routes>
    </div>
  );
};

export default App;
