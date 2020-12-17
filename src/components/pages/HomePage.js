import React from 'react';
import '../../styles/main.scss';
import GalleryCarousel from '../carousel/GalleryCarousel';

const HomePage = () => {

  const data =  <div className="box">
                  <h2>Home</h2>
                </div>
  ;

  return (
      <main className="content">
          <div>
          <GalleryCarousel />
          </div>
          {data}
          {data}
          {data}
          {data}
          {data}
      </main>
    )
}
export default HomePage;