import React from 'react';
// import CarGallery from './components/Car Detail/CarGallery';
// import Header from './components/Car Detail/Header';
import './global.scss';
import CarDetail from './components/Car Detail/CarDetail';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* <Header /> */}
      {/* <CarGallery /> */}
      <CarDetail />
    </div>
  );
};

export default App;
