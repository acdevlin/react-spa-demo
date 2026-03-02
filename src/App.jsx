import { Routes, Route } from 'react-router-dom';
import './stylesheets/Petite.css'
import About  from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
   return (
    <>
      <Navbar/>
      {/* Place non-global routes inside an HTML <main> tag */}
      <main>
        <Routes>
          {/* Use Home component for the root path */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
   );
}

export default App;