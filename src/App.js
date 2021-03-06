import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'

import Home from './Client/Home';
import Program from './Client/Program';
import Login from './Admin/Login';
import Dashboard from './Admin/Dashboard';
import Blog from './Admin/Blog';
import Banner from './Admin/Banner';
import About from './Client/About';
import Contact from './Client/Contact';
import Artikel from './Client/Artikel';
import IsiArtikel from './Client/IsiArtikel';
import Video from './Client/Video';
import TambahArtikel from './Admin/TambahArtikel';
import TambahBanner from './Admin/TambahBanner';
import EditArtikel from './Admin/EditArtikel';
import Profil from './Admin/Profil';
import VideoAdmin from './Admin/Video';
import FotoAdmin from './Admin/Foto';
import FotoClient from './Client/Foto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/program-kami" element={<Program/>} />
          <Route path="/tentang-kami" element={<About/>} />
          <Route path="/kontak-kami" element={<Contact/>} />
          <Route path="/artikel" element={<Artikel/>} />
          {/* Artikel */}
          <Route path="/artikel/isi-artikel" element={<IsiArtikel/>} />
          {/* Galeri */}
          <Route path="/galeri-foto" element={<FotoClient/>} />
          <Route path="/galeri-video" element={<Video/>} />


          {/* Admin */}
          {
            ["/admin", "/admin/login"].map(path => (
              <Route path={path} element={<Login/>} />
            ))
          }
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/blog" element={<Blog/>} />
          <Route path="/admin/tambah-artikel" element={<TambahArtikel/>} />
          <Route path="/admin/edit-artikel" element={<EditArtikel/>} />
          <Route path="/admin/banner" element={<Banner/>} />
          <Route path="/admin/tambah-banner" element={<TambahBanner/>} />
          <Route path="/admin/profil" element={<Profil/>} />
          <Route path="/admin/galeri-video" element={<VideoAdmin/>} />
          <Route path="/admin/galeri-foto" element={<FotoAdmin/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
