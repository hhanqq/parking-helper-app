import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
function App() {
    return (
        <Router>
            <Header />

            <Routes>
            <Route path="/" element={<HomePage />} />

            </Routes>

            <Footer />
        </Router>
    );
}

export default App;