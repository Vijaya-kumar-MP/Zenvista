import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

const BookAdmission = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [academy, setAcademy] = useState(""); // Add state for academy
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/bookadmission', {
        bookadmissionId: 1,
        name: name,
        age: age,
        location: location,
        mobile: mobile,
        academy: academy // Fix typo here
      });
      console.log(response.data);
      // If the form submission is successful, navigate to the home page
      navigate("/");
    } catch (error) {
      console.error('Error booking admission:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 4,
      }}
    >
      <Typography component="h1" variant="h5">
        Book Admission
      </Typography>
     
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', marginTop: '1rem' }}>
        <TextField
          required
          fullWidth
          label="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          inputProps={{ maxLength: 50 }}
          margin="normal"
        />
        <TextField
          required
          fullWidth
          label="Age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          label="Location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          inputProps={{ maxLength: 100 }}
          margin="normal"
        />
        <TextField
          required
          fullWidth
          label="Mobile Number"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          inputProps={{ maxLength: 13 }}
          margin="normal"
        />
        <TextField
          required
          fullWidth
          label="Academy Name"
          name="academy" // Fix name attribute
          value={academy} // Use correct state variable
          onChange={(e) => setAcademy(e.target.value)} // Use correct setter function
          inputProps={{ maxLength: 50 }}
          margin="normal"
        />
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
          Book Admission
        </Button>
      </form>
    </Box>
  );
};

export default BookAdmission;
