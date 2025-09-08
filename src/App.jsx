import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './pages/index';
import About from './pages/about';
import Contact from './pages/contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            path='/'
            element={<Index />}
          />
          <Route
            path='/about/:id/'
            element={<About />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
