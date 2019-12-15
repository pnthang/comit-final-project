import React, { Component } from "react";
import { withStyles } from '@material-ui/styles';

import PropTypes from "prop-types";
// Redux stuff
import { connect } from "react-redux";
import { openMCart, closeMCart } from "../redux/actions/dataActions";
const styles = theme => ({
  list: {
    width: 500
  },
  fullList: {
    width: "auto"
  }
});
class MCart extends Component {

  render() {
    const {classes} = this.props;
    let { cart } = this.props.data;
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={()=>this.props.dispatch(closeMCart())}
        onKeyDown={()=>this.props.dispatch(closeMCart())}
      >
        {cart &&
          cart.map((dish,index) => (
            <li key={index}>
              {dish.name} - {dish.number}
            </li>
          ))}
      </div>
    );
  }
}
MCart.propTypes = {
  data: PropTypes.object.isRequired,
  openMCart: PropTypes.func.isRequired,
  closeMCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI
});
const mapActionsToProps = dispatch => ({
  dispatch,
  openMCart,
  closeMCart
});
export default connect(
    mapStateToProps,
    mapActionsToProps
  )(withStyles(styles)(MCart));
