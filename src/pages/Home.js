import React, { Component } from "react";
import PropTypes from "prop-types";
// Redux stuff
import { connect } from "react-redux";
import { fetchSlide } from "../redux/actions/dataActions";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../css/slider-animations.css";
import "../css/styles.css";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSlide());
  }
  handlClick = () => {
    this.props.history.push(`${process.env.PUBLIC_URL}/order`);
  };
  render() {
    const { loading, slides } = this.props;
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
                background: `url('${process.env.PUBLIC_URL}${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button className="slidebutton" onClick={this.handlClick}>
                  {item.button}
                </button>
              </div>
              <section>
                <img
                  src={`${process.env.PUBLIC_URL}${item.userProfile}`}
                  alt={item.user}
                />
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

Home.propTypes = {
  fetchSlide: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  slides: state.data.slides,
  loading: state.data.loading,
  error: state.data.error,
  UI: state.UI
});
const mapActionsToProps = dispatch => ({
  dispatch,
  fetchSlide
});
export default connect(mapStateToProps, mapActionsToProps)(Home);
