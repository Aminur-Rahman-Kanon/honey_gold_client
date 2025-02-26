import React, { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Topbar from './components/topbar/topbar';
import Sidedrawer from './components/sidedrawer/sidedrawer';
import Homepage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import { connect } from 'react-redux';
import { actions } from './redux/actions';

function App({ products, storeProducts }) {

    useEffect(() => {
      fetch('https://honey-gold-server.onrender.com/fetch-products').then(res => res.json()).then(result => storeProducts(result.data))
    }, []);

    console.log(products)

    return (
      <div className="App">
        <Sidedrawer />
        <Topbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    );
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeProducts: (data) => dispatch({ type: actions.STORE_PRODUCTS, payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
