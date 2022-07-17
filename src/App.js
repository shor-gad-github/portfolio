import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';
function App() {
  return (
    <>

      <h1>Demo App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" base="portfolio" element={<Layout></Layout>}>
            <Route index element={<Home ></Home>} />
            <Route path="blogs" element={<Blogs ></Blogs>} />
            <Route path="contact" element={<Contact ></Contact>} />
            <Route path="*" element={<NoPage ></NoPage>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
