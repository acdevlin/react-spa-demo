import { Routes, Route } from 'react-router-dom';
import './stylesheets/Petite.css'
import About  from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
   return (
      <Routes>
        {/* Use Home component for the root path */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
   );
}

export default App;