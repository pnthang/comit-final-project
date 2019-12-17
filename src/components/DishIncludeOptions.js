import React from "react";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from '@material-ui/core/Chip';

function DishIncludeOptions(props) {
  const { name,adjustPrice, currentValue} = props.option;
  const { includeId, optionValue } = props;
  return (
      optionValue ===
      <FormControlLabel
          value={optionValue}
          control={<Radio color="primary" />}
          label={`${name} ${adjustPrice>0?adjustPrice:''}`}
          labelPlacement='end'
      />

  );
}
export default DishIncludeOptions;
