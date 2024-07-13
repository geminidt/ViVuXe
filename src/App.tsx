import React from 'react';
import CarGallery from './components/CarGallery';
import Header from './components/Header';
import './global.scss';
import Content from './components/Content';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <CarGallery />
      <Content />
    </div>
  );
};

export default App;
