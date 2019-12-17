import React from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
//import DoneIcon from '@material-ui/icons/Done';

function DishIncludes(props) {
  const handleOptionClick = (event) => {
    // let currentCode = this.props.code;
    // let newDishes = this.props.data.dishes.slice(0);
    // let index = newDishes.findIndex(d => d.code === currentCode);
    // console.log(event);
    // newDishes[index].number--;
    // if (newDishes[index].number < 1) newDishes[index].number = 1;
    // this.props.dispatch(fetchDataSuccess(newDishes));
  };
  const { includes,code} = props;
  return (
    !!includes &&
    includes.map(include => (
      <div key={include.includeId}>
        <Typography variant="h5" component="h5">
          {include.name}
        </Typography>
        {!!include.options &&
          include.options.map((option, index) => (
            <Chip
              key={`${include.includeId}-${index}`}
              label={`${option.name} ${option.adjustPrice}$`}
              onClick={handleOptionClick}
              color={index == include.optionSelected ? "secondary" : "default"}
            />
          ))}
      </div>
    ))
  );
}
export default DishIncludes;
