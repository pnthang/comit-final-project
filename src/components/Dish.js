import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const styles = {
  card: {
    display: "flex",
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

class Dish extends Component {
  //console.log(props.dishes);
  render() {
    const {
      classes,
      dish: { name, description, basePrice, imageUrl, dishId, elements }
    } = this.props;
    // console.log("test");
    // console.log(this.props);
    return (
      <Card className={classes.card} key={dishId}>
        <CardMedia image={imageUrl?imageUrl:"/dish.png"} title="Dish" className={classes.image} />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/dish/${dishId}`}
            color="primary"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {basePrice}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(Dish);
