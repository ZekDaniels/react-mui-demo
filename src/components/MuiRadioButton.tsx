import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

export const MuiRadioButton = () => {
  const [experience, setExperince] = useState("");
  console.log("experience:", experience);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setExperince(event.target.value);

  return (
    <Box>
      <FormControl error={!experience}>
        <FormLabel id="job-experince group-label">Years of experince</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-aria-labelledby="job-experince-group-label"
          value={experience}
          onChange={handleChange}
        >
          <FormControlLabel
            control={<Radio size="medium" color="error" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        {!experience && <FormHelperText>Invalid Selection</FormHelperText>}
      </FormControl>
    </Box>
  );
};
