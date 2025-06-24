import Header from "./componentes/Header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.jsx";
import Artist from "./pages/Artist.jsx";
import Songs from "./pages/Songs.jsx";
import Song from "./pages/song.jsx";
import Artists from "./pages/Artists.jsx";

function App() {
 

  return (
      <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Artist/:id" element={<Artist/>}></Route>
      <Route path="/Artists" element={<Artists />}></Route>
      <Route path="/Song/:id" element={<Song />}></Route>
      <Route path="/Songs" element={<Songs />}></Route>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App
