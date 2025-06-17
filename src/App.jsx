import Header from "./componentes/Header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.jsx";
import Artist from "./pages/Artist.jsx";
import { Artists } from "./database (banco de dados)/Artists.js";
import Songs from "./pages/Songs.jsx";
import Song from "./pages/song.jsx";

function App() {
 

  return (
      <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Atist" element={<Artist />}></Route>
      <Route path="/Artists" element={<Artists />}></Route>
      <Route path="/Song" element={<Song />}></Route>
      <Route path="/Songs" element={<Songs />}></Route>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App
