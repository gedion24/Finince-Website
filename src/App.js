import './App.css';
import React  from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/NewsLetter';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <div> 
       <Navbar/>
       <Hero/>
       <Analytics/>
       <Newsletter/>
       <Cards/>
       <Footer/>
      
       </div>
  );
}

export default App;
