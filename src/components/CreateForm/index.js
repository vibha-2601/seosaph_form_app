import React, { useState } from "react";
import {
  Paper,
  Box,
  Grid,
  TextField,
  IconButton,
  Button,
} from "@material-ui/core";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { makeStyles } from "@material-ui/core/styles";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "100%",
    marginTop: 40,
  },
  inputGroup: {
    marginBottom: theme.spacing(1),
  },
}));

const CreateForm = () => {
  const classes = useStyles();
  const userTemplate = { name: "", email: "", phone: "", address: "" };
  const [users, setUsers] = useState([userTemplate]);

  // adding Users
  const addUser = () => {
    setUsers([...users, userTemplate]);
  };

  // set input values
  const onChange = (e, index) => {
    let data = [...users];
    data[index][e.target.name] = e.target.value;
    setUsers(data);
  };

  //removed row
  const removeUser = (index) => {
    const filteredUsers = [...users];
    filteredUsers.splice(index, 1);
    setUsers(filteredUsers);
  };

  return (
    <div className={classes.root}>
      <Paper component={Box} style={{ padding: 20 }}>
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

        {/* Data */}
        {users.map((user, index) => (
          <Grid
            container
            spacing={3}
            key={index}
            className={classes.inputGroup}
          >
            <Grid item md={3}>
              <TextField
                label="Name"
                placeholder="Enter Your Full Name"
                variant="outlined"
                name="name"
                onChange={(e) => onChange(e, index)}
                value={user.name}
                fullWidth
              />
            </Grid>

            <Grid item md={3}>
              <TextField
                label="E-mail"
                placeholder="Enter Your Email"
                variant="outlined"
                name="email"
                onChange={(e) => onChange(e, index)}
                value={user.email}
                fullWidth
              />
            </Grid>

            <Grid item md={2}>
              <TextField
                label="Phone"
                placeholder="Enter Your FPhone no"
                variant="outlined"
                name="phone"
                onChange={(e) => onChange(e, index)}
                value={user.phone}
                fullWidth
              />
            </Grid>

            <Grid item md={3}>
              <TextField
                label="Address"
                placeholder="Enter Your Address"
                variant="outlined"
                name="address"
                onChange={(e) => onChange(e, index)}
                value={user.address}
                fullWidth
              />
            </Grid>

            <Grid item md={1}>
              <IconButton color="secondary" onClick={() => removeUser(index)}>
                <DeleteOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}

        <Button variant="contained" color="primary" onClick={addUser}>
          Add More
        </Button>
      </Paper>
    </div>
  );
};

export default CreateForm;
