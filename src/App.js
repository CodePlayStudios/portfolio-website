import React from 'react';
import Header from './components/organisms/header container/Header'
import Contact from './components/organisms/footer container/Contact'
import Home from './components/organisms/home container/Home'
import AboutMe from './components/organisms/about container/AboutMe'
import Project from './components/organisms/project container/Project'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <AboutMe/>
      <Project/>
      <Contact/>
    </div>
  );
}


export default App;
