import React, { Component } from "react";
import axios from "axios";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../css/slider-animations.css";
import "../css/styles.css";

class Intro extends Component {
  state = {
    slides: null,
    loading: false
  };
  componentDidMount() {
    this.setState({
      loading: true
    });
    axios
      .get("../data/slides.json")
      .then(res => {
        this.setState({
          slides: res.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let { slides, loading } = this.state;
    return loading ? (
      <div>Loading...</div>
    ) : (
      slides && (
        <Slider autoplay={3000} className="slider-wrapper">
          {slides.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button className="slidebutton" >{item.button}</button>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Order:<strong>{item.user}</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
      )
    );
  }
}

export default Intro;
