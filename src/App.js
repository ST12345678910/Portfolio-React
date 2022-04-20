import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import basicInfo from './basicInfo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header basicInfo={basicInfo}/>
        <About basicInfo={basicInfo}/>
        <Resume basicInfo={basicInfo}/>
        <Portfolio basicInfo={basicInfo}/>
        <ContactUs basicInfo={basicInfo}/>
        <Footer basicInfo={basicInfo}/>
      </div>
    );
  }
}

export default App;