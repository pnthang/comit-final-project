import React from "react";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function DishIncludeOptions(props) {
  const { name,adjustPrice} = props.option;
  const { includeId, optionValue } = props;
  return (
      <FormControlLabel
          value={optionValue}
          control={<Radio color="primary" />}
          label={`${name} ${adjustPrice>0?adjustPrice:''}`}
          labelPlacement='end'
      />

  );
}
export default DishIncludeOptions;
