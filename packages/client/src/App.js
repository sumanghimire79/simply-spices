import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUsPage } from './containers/AboutUsPage/AboutUsPage.Container';
import CategoryPage from './containers/CategoryPage/CategoryPage.container';
import { ContactUsPage } from './containers/ContactUsPage/ContactUsPage.Container';
import { FavouritePage } from './containers/FavouritePage/FavouritePage.Container';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFoundPage } from './containers/PageNotFound/PageNotFound.Container';
import { ProductPage } from './containers/ProductPage/ProductPage.Container';
import { ContactUsFeedbackPage } from './containers/ContactUsPage/ContactUsFeedbackPage.Container';
import Navigation from './components/Navigation/Navigation.component';
import { Footer } from './components/Footer/Footer.component';
import { LoginPage } from './containers/LoginPage/LoginPage.Container';
import { RegisterPage } from './containers/LoginPage/RegisterPage.Container';

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route
            path="/contact-us-feedback"
            element={<ContactUsFeedbackPage />}
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favorites/:user_id" element={<FavouritePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
