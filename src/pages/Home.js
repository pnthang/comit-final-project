import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import SearchInput from "../components/SearchInput";
import Drawer from '@material-ui/core/Drawer'
import PropTypes from "prop-types";
// Order dishes component
import DishCardComplex from "../components/DishCardComplex";
import MCart from "../components/MCart";
// Redux stuff
import { connect } from "react-redux";
import { fetchData,openMCart,closeMCart } from "../redux/actions/dataActions";

class Home extends Component {
  state={
    open:true
  }
  componentDidMount() {
    this.props.dispatch(fetchData());
    // console.log(this.props)
  }
  closeMCartPanel=()=>{
    this.props.dispatch(closeMCart());
  }
  render() {
    const { error, loading, dishes, mcart } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    const recentDishesMarkup = dishes.map(dish => (
        <DishCardComplex key={dish.code} dish={dish} />
    ));

    return (
      <Grid container>
        <Grid container justify="center">
          <SearchInput />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="flex-start">
          {recentDishesMarkup}
        </Grid>
        <Drawer anchor="right" open={mcart} onClose={this.closeMCartPanel}>
          <MCart/>
        </Drawer>
      </Grid>
    );
  }
}

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,
  openMCart: PropTypes.func.isRequired,
  closeMCart: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  dishes: state.data.dishes,
  loading: state.data.loading,
  error: state.data.error,
  mcart:state.data.mcart,
  UI: state.UI
});
const mapActionsToProps = dispatch => ({
    dispatch,
    fetchData,
    openMCart,
    closeMCart
});
export default connect(mapStateToProps, mapActionsToProps)(Home);
