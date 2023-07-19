import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function CustomizedRating() {
  const [ratingValue, setRatingValue] = useState(4.5);

  const handleChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        '& .MuiRating-iconEmpty': {
          color: 'silver',
        },
        '& .MuiRating-iconFilled': {
          color: 'yellow',
        },
      }}
    >
      <Rating
        style={{
          fontSize: "35px",
          marginLeft: "93px",
        }}
        name="customized-10"
        value={ratingValue}
        max={8}
        onChange={handleChange}
      />
      <span style={{ color: "white", fontSize: "24px", marginLeft: "5px", }}>
        <span>{ratingValue}(4)</span>
      </span>
    </Box>
  );
}