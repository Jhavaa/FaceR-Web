import React from "react";
import Header from "../components/Header";
import AboutProduct from "../components/AboutProduct";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";
import FutureLocks from "../components/FutureLocks";
import LearnMore from "../components/LearnMore";
import CompleteTimeline from "../components/CompleteTimeline"
import data from "../data/timelineData";

import "../App.css";
import "../bootstrap.min.css";

class aboutPage extends React.Component {

  render(){
  return (
    <div className="App">
      <header className="App-header" id="nav">
        <Header 
        
        
        incart={this.props.incart} add={this.props.add.bind(this)} remove={this.props.remove.bind(this)}
        />
      </header>
      <div
        className="Body"
        style={{
          paddingTop: "80px",
          backgroundColor: "black",
          paddingBottom: "80px"
        }}
      >
        {/* <AboutProduct /> */}
        <div className="jumbotron">
          
          <CompleteTimeline />

          
        </div >
        <FutureLocks />
        
        <TestimonialsCarousel />

        <LearnMore />
        
      </div>
      <Footer />
    </div>
  );
}
}

export default aboutPage;