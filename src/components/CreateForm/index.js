import React, { useState } from "react";
import {
  Paper,
  Box,
  TextField,
  Grid,
  Button,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
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
  const [inputLabel, setInputLabel] = useState("");
  const [choices, setChoices] = useState("");

  // data
  const [data, setData] = useState(JSON.parse(localStorage.getItem("formData")) || []);

  // Input type onchange
  const handleChange = (event) => {
    setInputType(event.target.value);
  };

  // add field
  const handleAddField = () => {
    if (inputLabel === "" || inputType === "") {
      alert("Please fill the field");
    } else if (inputType !== "input" && choices.length === 0) {
      alert("Enter valid choices!");
    } else {
      const object = {
        label: inputLabel,
        type: inputType,
        choices: choices?.split(","),
      };
      setData([...data, object]);
      localStorage.setItem("formData", JSON.stringify([...data, object]));
      setInputLabel("");
      setInputType("");
      setChoices("");
    }
  };

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
          <Grid
            item
            xs={12}
            md={["select", "radio", "checkbox"]?.includes(inputType) ? 3 : 5}
          >
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
          <Grid
            item
            xs={12}
            md={["select", "radio", "checkbox"]?.includes(inputType) ? 3 : 5}
          >
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
          <Grid
            item
            xs={24}
            md={["select", "radio", "checkbox"]?.includes(inputType) ? 3 : 2}
          >
            <Button
              size="large"
              style={{ width: "100%" }}
              variant="outlined"
              onClick={handleAddField}
            >
              Add
            </Button>
          </Grid>
        </Grid>

        {data.length > 0 && (
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              margin: "40px 0",
            }}
          />
        )}

        {/* Data */}

        {data?.length > 0 && (
          <div
            style={{
              fontSize: 24,
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            My Form
          </div>
        )}
        <Grid container spacing={2}>
          {data?.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <div>
                {item?.type === "input" ? (
                  <TextField
                    id="outlined-basic"
                    label={item?.label}
                    variant="outlined"
                    size="medium"
                    style={{ width: "100%" }}
                  />
                ) : // select
                item?.type === "select" ? (
                  <FormControl style={{ width: "100%" }} size="medium">
                    <InputLabel id="demo-select-small">
                      {item?.label}
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      label={item?.label}
                      value={item?.choices?.[0] || ""}
                    >
                      {" "}
                      {item?.choices?.map((choice, i) => (
                        <MenuItem key={i} value={choice}>
                          {choice}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : // radio

                item?.type === "radio" ? (
                  <FormControl style={{ display: "flex" }}>
                    <FormLabel id="demo-radio-buttons-group-label">
                      {item.label}
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue={item?.choices?.[0] || ""}
                      name="radio-buttons-group"
                      row={true}
                    >
                      {item?.choices.map((choice, i) => (
                        <FormControlLabel
                          key={i}
                          value={choice}
                          control={<Radio />}
                          label={choice}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                ) : (
                  // checkbox
                  <FormGroup>
                    <FormLabel id="demo-radio-buttons-group-label">
                      {item.label}
                    </FormLabel>

                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {item?.choices.map((choice, index) => (
                        <FormControlLabel
                          key={index}
                          control={<Checkbox defaultChecked={false} />}
                          label={choice}
                        />
                      ))}
                    </div>
                  </FormGroup>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default CreateForm;
