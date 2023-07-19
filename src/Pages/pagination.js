import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({ page, handleChange }) {
  // const [page, setPage] = useState(1);
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '45px' }}>
      <Stack spacing={2}>
          <Typography style={{ color: 'white' }}>Page: {page}</Typography>
        <Pagination
          count={5}
          page={page}
          onChange={handleChange}
          style={{ color: 'white' }}
          sx={{
            '& .MuiPaginationItem-root': { color: 'white', fontSize: '1.2rem' },
            '& .MuiPaginationItem-page.Mui-selected': { backgroundColor: 'rgb(0, 66, 66)', color: 'white' },
          }}
        />
      </Stack>
    </div>
  );
}