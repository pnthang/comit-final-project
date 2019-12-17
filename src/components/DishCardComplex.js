import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import DishIncludes from "./DishIncludes";
import PropTypes from "prop-types";
// Redux stuff
import { connect } from "react-redux";
import { fetchDataSuccess, updateCart } from "../redux/actions/dataActions";

const styles = theme => ({
  cardWrapper: {
    paddingBottom: 0,
    marginBottom: 0
  },
  card: {
    width: 345,
    margin: "10px",
    paddingBottom: "10px",
    position: "relative"
  },
  cardContent: {
    height: "200px",
    [theme.breakpoints.down("md")]: {
      width: "200px"
    },
    overflow: "hidden"
  },
  centeredCardConent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});
class DishCardComplex extends Component {
  handleDownClick = () => {
    let currentCode = this.props.dish.code;
    let newDishes = this.props.data.dishes.slice(0);
    let index = newDishes.findIndex((d)=>d.code === currentCode);
    newDishes[index].number--;
    if(newDishes[index].number<1)newDishes[index].number=1;
    this.props.dispatch(fetchDataSuccess(newDishes));
  };
  handFavClick = () => {
    let currentCode = this.props.dish.code;
    let newDishes = this.props.data.dishes.slice(0);
    let index = newDishes.findIndex((d)=>d.code === currentCode);
    newDishes[index].favorite = newDishes[index].favorite=="1"?"0":"1";
    this.props.dispatch(fetchDataSuccess(newDishes));
  };
  handleUpClick = () => {
    let currentCode = this.props.dish.code;
    let newDishes = this.props.data.dishes.slice(0);
    let index = newDishes.findIndex((d)=>d.code === currentCode);
    newDishes[index].number++;
    this.props.dispatch(fetchDataSuccess(newDishes));
  };
  handleAddToCart = () => {
    let cart=this.props.data.cart.slice(0);
    cart.push(Object.assign({}, this.props.dish));
    this.props.dispatch(updateCart(cart));

    console.log(cart);

  }
  //console.log(props.dishes);
  render() {
    const {
      classes,
      dish: {
        favorite,
        number,
        tag,
        code,
        name,
        description,
        basePrice,
        imageUrl,
        includes
      },
      loading
    } = this.props;
    const imageBaseUrl = (imageUrl ? imageUrl : "/dish.png");
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={

            <Avatar aria-label="recipe" className={classes.avatar}>
              {number}
            </Avatar>
          }
          action={
            <IconButton
              aria-label="add to favorites"
              onClick={() => this.handFavClick()}
            >
              <FavoriteIcon color={favorite === "1" ? `primary` : `inherit`} />
            </IconButton>
          }
          title={name}
          subheader={`Price:${basePrice/100}$`}
        />
        <CardMedia
          className={classes.media}
          image={`${process.env.PUBLIC_URL}${imageBaseUrl}`}
          title={name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <div>
            {!!includes &&
              includes.map((include, index) => (
                <DishIncludes
                  key={`${code}-${index}`}
                  includeId={`${code}-${index}`}
                  include={include}
                />
              ))}
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <ButtonGroup>
            <Button onClick={this.handleDownClick}>-</Button>
            <Button>{number}</Button>
            <Button onClick={this.handleUpClick}>+</Button>
          </ButtonGroup>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.handleAddToCart}
            fullWidth
          >
            Add to Order
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
        </CardActions>
        <div></div>
      </Card>
    );
  }
}
DishCardComplex.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  fetchDataSuccess: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI
});
const mapActionsToProps = dispatch => ({
  dispatch,
  fetchDataSuccess,
  updateCart
});
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(DishCardComplex));

//export default ;
