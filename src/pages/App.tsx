import React from 'react';
import Footer from '../components/footer';
import Content from '../components/content';
import Background from '../components/background';
import Header from '../components/header';
import '../styles/global.css';

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
