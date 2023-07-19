import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useThemeContext } from "../Contexts/ThemeContext";

export default function PaginationControlled({ page, handleChange }) {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '45px' }}>
      <Stack spacing={2}>
          <Typography style={{ color: isDark ? 'white' : '#000' }}>Page: {page}</Typography>
        <Pagination
          count={5}
          page={page}
          onChange={handleChange}
          style={{ color: isDark ? 'white' : '#000' }}
          sx={{
            '& .MuiPaginationItem-root': { color: isDark ? 'white' : '#000', fontSize: '1.2rem' },
            '& .MuiPaginationItem-page.Mui-selected': { backgroundColor: 'rgb(0, 66, 66)', color: 'white' },
          }}
        />
      </Stack>
    </div>
  );
}