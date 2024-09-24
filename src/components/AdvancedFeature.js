"use client";
import { ExpandLess } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";

const AdvancedFeature = ({
  typeOflocation,
  handleChange,
  isSpinning,
  listOfTypeslocations,
  setIsAdvanced,
  isAdvanced,
  getLocation,
}) => {
  const listMenuItems =
    listOfTypeslocations.length > 0 ? listOfTypeslocations : [];
  return (
    <div className="flex min-w-[300px] items-center">
      {/* <FormControl fullWidth sx={{ mb: 3 }}> */}
      <InputLabel id="demo-simple-select-label">Type</InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={typeOflocation}
        label="Type location"
        onChange={handleChange}
        disabled={isSpinning}
      >
        {listMenuItems.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
      {/* </FormControl> */}
      <FormControlLabel
        sx={{
          fontWeight: "bold",
        }}
        value="nearby"
        control={<Switch color="primary" />}
        label="Nearby"
        labelPlacement="top"
        onChange={getLocation}
      />
      <IconButton
        color="primary"
        onClick={() => setIsAdvanced(!isAdvanced)}
        aria-label="toggle advanced options"
      >
        <ExpandLess />
      </IconButton>
    </div>
  );
};
export default AdvancedFeature;
