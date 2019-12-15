import React from "react";
import RadioGroup from '@material-ui/core/RadioGroup';
import DishIncludeOptions from "./DishIncludeOptions";
function DishIncludes(props) {
  const { name, options } = props.include;
  const { includeId } = props;

  const [value, setValue] = React.useState(null);

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div>
      <h5>{name}</h5>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        {!!options &&
          options.map((option, index) => (

            <DishIncludeOptions
              key={`${includeId}-${index}`}
              includeId={includeId}
              optionValue={`${includeId}-${index}`}
              option={option}
            />
          ))}
      </RadioGroup>
    </div>
  );
}
export default DishIncludes;
