import React from 'react';
import IphoneReviews from './IphoneReviews';
import iphones from '../../assets/iphones.png';
import '../Styles/HomeComponent.css';

function HomeComponent() {
  return (
    <div className="home">
      <header className="home-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Welcome to iPhone 16 Reviews</h1>
            <p>Discover what users are saying about the latest iPhone</p>
          </div>
          <div className="header-image-container">
            <img src={iphones} alt="iPhone 16" className="header-image" />
          </div>
        </div>
      </header>
      <main>
        <IphoneReviews />
      </main>
    </div>
  );
}

export default HomeComponent;
