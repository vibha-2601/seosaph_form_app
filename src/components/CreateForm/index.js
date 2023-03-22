import React, { useState } from "react";
import { Paper, Box, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "100%",
  },
  inputGroup: {
    marginBottom: theme.spacing(1),
  },
}));

const CreateForm = () => {

  // [States]
  const classes = useStyles();
  const [inputType, setInputType] = useState("");
const [inputLabel, setInputLabel] = useState('');
const [choices, setChoices] = useState('');

  

  // data
  const [data, setData] = useState([]);



// Input type onchange
  const handleChange = (event) => {
    setInputType(event.target.value);
  };

  // add field
  const handleAddField = () => {
const object = {
  label: inputLabel,
  type: inputType,
  choices: choices?.split(',')
}
setData([...data,object])
setInputLabel("")
setInputType("")
setChoices("")

console.log(data)
  }

  return (
    <div className={classes.root}>
      <Paper component={Box} style={{ padding: 20, marginTop: 40 }}>
        {/* Heading */}
        <div
          style={{
            fontSize: 24,
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Create Dynamic Form
        </div>

        <Grid container spacing={2}>
          {/* [Label Input] */}
          <Grid item xs={12} md={["select", "radio", "checkbox"]?.includes(inputType) ? 3 : 5}>
            <TextField
              id="outlined-basic"
              label="Enter input label"
              variant="outlined"
              size="medium"
              style={{ width: "100%" }}
              value={inputLabel}
              onChange={(e) => setInputLabel(e.target.value)}
            />
          </Grid>

          {/* [Type input select] */}
          <Grid item xs={12} md={["select", "radio", "checkbox"]?.includes(inputType) ? 3 : 5}>
            <FormControl style={{ width: "100%" }} size="medium">
              <InputLabel id="demo-select-small">Input Type</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={inputType}
                label="Input Type"
                onChange={handleChange}
              >
                <MenuItem value="select">select</MenuItem>
                <MenuItem value="checkbox">checkbox</MenuItem>
                <MenuItem value="radio">radio</MenuItem>
                <MenuItem value="input">input</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* [If type select] */}
          {["select", "radio", "checkbox"]?.includes(inputType) && (
          <Grid item xs={12} md={3}>
            
              <TextField
                style={{ width: "100%" }}
                id="input"
                label="Enter choices separated by commas"
                placeholder="Enter choices separated by commas"
                variant="outlined"
                size="medium"
                value={choices}
                onChange={(e) => setChoices(e.target.value)}
              />
           
          </Grid>
           )}

          {/* Button */}
          <Grid item xs={24} md={["select", "radio", "checkbox"]?.includes(inputType) ? 3 : 2}>
<Button size='large' style={{width: '100%'}} variant="outlined" onClick={handleAddField}>Add</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CreateForm;
