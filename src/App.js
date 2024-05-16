import React from 'react';
import './index.css';
import './App.css';
// import { Header } from './Components/common/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { HomePage } from './Components/Home';
import { Layout } from './Components/common/Layout';
import { BlogPages } from './Components/BlogPages';

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' 
        element={
          <Layout>
            <HomePage/>
          </Layout>
        } 
      />

    <Route path='/blog' 
        element={
          <Layout>
            <BlogPages/>
          </Layout>
        } 
      />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
